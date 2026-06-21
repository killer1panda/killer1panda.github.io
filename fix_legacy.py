import os
import glob
import re

files = glob.glob('style_*.html')

new_toolbar = '''
  <div class="topbar" style="position:fixed; top:0; left:0; width:100%; height:60px; background:#18181b; border-bottom:1px solid #27272a; z-index:9999; display:flex; justify-content:space-between; align-items:center; padding:0 20px; color:white;">
    <div style="font-weight: 600; font-family:'Inter',sans-serif;">Legacy Master Creator Engine</div>
    <div style="display:flex; gap:10px; align-items:center; font-family:'Inter',sans-serif; font-size:12px;">
      <select id="input-format" style="background:#09090b; border:1px solid #27272a; color:white; padding:6px; border-radius:4px;">
        <option value="9:16">1080x1920</option>
        <option value="1:1">1080x1080</option>
        <option value="4:5">1080x1350</option>
        <option value="16:9">1920x1080</option>
      </select>
      <select id="input-chapter" style="background:#09090b; border:1px solid #27272a; color:white; padding:6px; border-radius:4px;">
        <option value="cis">CIS</option>
        <option value="sps">SPS</option>
      </select>
      <button class="btn-top" id="btn-upload">📷 Photo</button>
      <input type="file" id="file-upload" accept="image/*" style="display:none;">
      <button class="btn-top" id="btn-reset">↺ Reset</button>
      <button class="btn-top" id="btn-dl-png">Export PNG</button>
      <button class="btn-top" id="btn-dl-jpg">Export JPG</button>
      <input type="number" id="input-duration" value="4" min="1" max="10" style="width:40px; background:#09090b; border:1px solid #27272a; color:white; padding:4px;">
      <button class="btn-top" id="btn-dl-mp4" style="background:#8b5cf6; font-weight:bold;">🎥 MP4 Video</button>
    </div>
  </div>
  <div id="overlay" style="display:none; position:fixed; inset:0; background:rgba(0,0,0,0.8); z-index:10000; justify-content:center; align-items:center; flex-direction:column; color:white; font-family:sans-serif;">
    <h2 id="overlay-text">Generating Video...</h2>
  </div>
  <div id="scale-wrapper" style="transform-origin:center center; transition:transform 0.2s;">
'''

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    # If the file already has 'Legacy Master Creator Engine', it was partially processed.
    # But new_toolbar wasn't injected if the replace failed.
    # We will strip out the old <div class="controls-bar"> block completely.
    content = re.sub(r'<div class="controls-bar".*?<!-- ═══ CARD CANVAS', '<!-- ═══ CARD CANVAS', content, flags=re.DOTALL)
    content = re.sub(r'<div class="controls-bar".*?<div class="card-canvas', '<div class="card-canvas', content, flags=re.DOTALL)

    # Let's ensure the new toolbar and scale wrapper is placed right before <div class="card-canvas...
    if 'Legacy Master Creator Engine' not in content:
        # It's missing the toolbar! Let's inject it.
        # Find the first `<div class="card-canvas`
        content = re.sub(r'(<div class="card-canvas[^>]*>)', new_toolbar + r'\n\1', content, count=1)
        
        # Add the closing div for scale-wrapper before </body> if we just added it
        if '</div>\n</body>' not in content:
            content = content.replace('</body>', '</div>\n</body>')
    else:
        # Check if the new toolbar is actually there, if not, it was skipped earlier.
        if 'id="input-format"' not in content:
            content = re.sub(r'(<div class="card-canvas[^>]*>)', new_toolbar + r'\n\1', content, count=1)
            if '</div>\n</body>' not in content:
                content = content.replace('</body>', '</div>\n</body>')

    # Ensure CSS overrides are correct
    # The previous script might have already injected .btn-top, etc.
    if '.btn-top {' not in content:
        content = re.sub(r'\.card-canvas\s*\{([^}]*)\}', 
        r'''
    .card-canvas {
      position: relative;
      width: 1080px;
      height: 1920px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: width 0.3s, height 0.3s;
    }
    .btn-top {
      background:#27272a; border:none; color:white; padding:6px 12px; border-radius:4px; cursor:pointer;
    }
    .btn-top:hover { background:#3f3f46; }
    [contenteditable="true"] { outline: 2px dashed rgba(255,255,255,0.4); cursor: text; transition: outline 0.2s; position: relative; z-index: 100;}
    [contenteditable="true"]:focus { outline: 2px solid #3b82f6; background: rgba(0,0,0,0.2); }
    .draggable { cursor: grab; position: relative; z-index: 50; }
    .draggable:active { cursor: grabbing; }
    .profile-frame { cursor: pointer; transition: transform 0.2s; }
    .profile-frame:hover { transform: scale(1.02); box-shadow: 0 0 0 4px rgba(59,130,246,0.5); }
        ''', content, count=1)

    # Clean up aspect-ratio again just in case
    content = re.sub(r'aspect-ratio:[^;]+;', '', content)
    content = re.sub(r'max-width:\s*450px;', '', content)
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print("Fixed legacy templates.")
