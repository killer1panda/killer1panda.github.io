import os
import re
import json

OUTPUT_JS = "custom_build/registry.js"

styles = []

for i in range(1, 41):
    num_str = f"{i:02d}"
    filename = f"style_{num_str}_head_core.html"
    if not os.path.exists(filename):
        print(f"Missing {filename}")
        continue
    
    with open(filename, 'r', encoding='utf-8') as f:
        html = f.read()
        
    # Extract Title
    title_match = re.search(r'<title>(.*?) —', html)
    name = title_match.group(1).strip() if title_match else f"Style {num_str}"
    
    # Extract :root variables
    root_match = re.search(r':root\s*\{([^}]*)\}', html)
    css_vars = {}
    if root_match:
        lines = root_match.group(1).split(';')
        for line in lines:
            if ':' in line:
                k, v = line.split(':', 1)
                css_vars[k.strip()] = v.strip()
                
    # Extract .card-canvas styles
    canvas_match = re.search(r'\.card-canvas\s*\{([^}]*)\}', html)
    canvas_css = ""
    if canvas_match:
        # Some files have two .card-canvas blocks (one generic, one specific)
        # We want the specific one. Let's find all and take the one that doesn't have max-width
        blocks = re.findall(r'\.card-canvas\s*\{([^}]*)\}', html)
        for b in blocks:
            if "max-width:" not in b: # The specific one usually sets background-color etc
                canvas_css = b.strip()
                
    # Extract texture
    texture_match = re.search(r'\.texture-overlay\s*\{([^}]*)\}', html)
    texture_css = texture_match.group(1).strip() if texture_match else ""
    
    # Extract particles CSS
    particles_blocks = re.findall(r'(\.particle:nth-child\(\d+\)\s*\{[^}]*\})', html)
    particles_css = "\n".join(particles_blocks)
    
    # Extract SVG decorations
    # They are usually inside <div class="card-canvas"> ... <div class="texture-overlay">
    # We can use regex to find <svg class="deco-squiggle"...
    svgs = re.findall(r'<svg class="deco-.*?svg>', html)
    # also <div class="deco-...
    divs = re.findall(r'<div class="deco-[^>]*></div>', html)
    decorations = "\n".join(svgs + divs)
    
    # Also extract fonts
    fonts_match = re.search(r'href="(https://fonts.googleapis.com/css2[^"]*)"', html)
    fonts_url = fonts_match.group(1) if fonts_match else ""
    
    styles.append({
        "id": num_str,
        "name": name,
        "css_vars": css_vars,
        "canvas_css": canvas_css,
        "texture_css": texture_css,
        "particles_css": particles_css,
        "decorations": decorations,
        "fonts_url": fonts_url
    })

# Write to JS
with open(OUTPUT_JS, 'w', encoding='utf-8') as f:
    f.write("const STYLE_REGISTRY = " + json.dumps(styles, indent=2) + ";\n")
    
print(f"Successfully extracted {len(styles)} styles to {OUTPUT_JS}")
