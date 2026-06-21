const STYLE_REGISTRY = [
  {
    "id": "01",
    "name": "90s Retro Grid",
    "css_vars": {
      "--card-ratio": "9 / 16",
      "--brand-primary": "#FF6B9D",
      "--brand-secondary": "#F4D03F",
      "--brand-text": "#5D3A1A",
      "--brand-text-muted": "#8B6914",
      "--bg-color": "#D4C5E2",
      "--grid-color": "rgba(232, 164, 201, 0.30)",
      "--avatar-bg": "#E8A4C9"
    },
    "canvas_css": "background-color: var(--bg-color);\n      background-image:\n        linear-gradient(to right, var(--grid-color) 1.5px, transparent 1.5px),\n        linear-gradient(to bottom, var(--grid-color) 1.5px, transparent 1.5px);\n      background-size: 28px 28px;\n      border: 4px solid var(--brand-text);\n      color: var(--brand-text);\n      font-family: 'Inter', sans-serif;\n      padding: 0;",
    "texture_css": "position: absolute;\n      inset: 0;\n      pointer-events: none;\n      z-index: 50;\n      mix-blend-mode: overlay;\n      opacity: 0.4;\n      background-image:\n        radial-gradient(rgba(0,0,0,0.06) 1px, transparent 0);\n      background-size: 3px 3px;",
    "particles_css": ".particle:nth-child(1) { left: 10%; width: 6px; height: 6px; background: var(--brand-primary); --dur: 7s; --delay: 0s; --max-opacity: 0.5; }\n.particle:nth-child(2) { left: 25%; width: 4px; height: 4px; background: var(--brand-secondary); --dur: 9s; --delay: 1s; --max-opacity: 0.4; }\n.particle:nth-child(3) { left: 45%; width: 8px; height: 8px; background: var(--brand-primary); --dur: 11s; --delay: 2s; --max-opacity: 0.3; }\n.particle:nth-child(4) { left: 65%; width: 5px; height: 5px; background: var(--brand-secondary); --dur: 8s; --delay: 3s; --max-opacity: 0.5; }\n.particle:nth-child(5) { left: 80%; width: 7px; height: 7px; background: var(--brand-primary); --dur: 10s; --delay: 0.5s; --max-opacity: 0.35; }\n.particle:nth-child(6) { left: 55%; width: 3px; height: 3px; background: var(--brand-secondary); --dur: 6s; --delay: 4s; --max-opacity: 0.6; }",
    "decorations": "",
    "fonts_url": "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;600;700;800&family=Pacifico&display=swap"
  },
  {
    "id": "02",
    "name": "Minimalist Black & Gold",
    "css_vars": {
      "--card-ratio": "9 / 16"
    },
    "canvas_css": "",
    "texture_css": "position: absolute;\n      inset: 0;\n      pointer-events: none;\n      z-index: 50;\n      mix-blend-mode: overlay;\n      opacity: 0.25;\n      background-image:\n        radial-gradient(rgba(212,175,55,0.04) 1px, transparent 0);\n      background-size: 4px 4px;",
    "particles_css": ".particle:nth-child(1) { left: 8%; width: 3px; height: 3px; background: #D4AF37; --dur: 9s; --delay: 0s; --max-opacity: 0.7; }\n.particle:nth-child(2) { left: 22%; width: 2px; height: 2px; background: #C0A080; --dur: 11s; --delay: 1.5s; --max-opacity: 0.5; }\n.particle:nth-child(3) { left: 42%; width: 4px; height: 4px; background: #D4AF37; --dur: 13s; --delay: 3s; --max-opacity: 0.4; }\n.particle:nth-child(4) { left: 60%; width: 2px; height: 2px; background: #F5F5DC; --dur: 8s; --delay: 2s; --max-opacity: 0.6; }\n.particle:nth-child(5) { left: 78%; width: 3px; height: 3px; background: #D4AF37; --dur: 10s; --delay: 0.5s; --max-opacity: 0.5; }\n.particle:nth-child(6) { left: 90%; width: 2px; height: 2px; background: #C0A080; --dur: 7s; --delay: 4s; --max-opacity: 0.7; }\n.particle:nth-child(7) { left: 35%; width: 2px; height: 2px; background: #F5F5DC; --dur: 12s; --delay: 5s; --max-opacity: 0.35; }\n.particle:nth-child(8) { left: 52%; width: 3px; height: 3px; background: #D4AF37; --dur: 9s; --delay: 1s; --max-opacity: 0.45; }",
    "decorations": "",
    "fonts_url": "https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:wght@400;600;700;800&family=Space+Mono:wght@400;700&display=swap"
  },
  {
    "id": "03",
    "name": "Soft Pastel Watercolor",
    "css_vars": {
      "--card-ratio": "9 / 16"
    },
    "canvas_css": "",
    "texture_css": "position: absolute; inset: 0; pointer-events: none; z-index: 50;\n      mix-blend-mode: multiply; opacity: 0.08;\n      background-image:\n        radial-gradient(rgba(93,78,55,0.15) 1px, transparent 0);\n      background-size: 3px 3px;",
    "particles_css": ".particle:nth-child(1) { left: 12%; width: 8px; height: 6px; background: rgba(250,219,216,0.7); --dur: 12s; --delay: 0s; --max-opacity: 0.5; }\n.particle:nth-child(2) { left: 30%; width: 6px; height: 5px; background: rgba(232,218,239,0.6); --dur: 14s; --delay: 2s; --max-opacity: 0.4; }\n.particle:nth-child(3) { left: 50%; width: 10px; height: 7px; background: rgba(213,245,227,0.5); --dur: 16s; --delay: 4s; --max-opacity: 0.35; }\n.particle:nth-child(4) { left: 68%; width: 7px; height: 5px; background: rgba(250,219,216,0.6); --dur: 11s; --delay: 1s; --max-opacity: 0.45; }\n.particle:nth-child(5) { left: 82%; width: 5px; height: 4px; background: rgba(252,243,207,0.7); --dur: 13s; --delay: 3s; --max-opacity: 0.4; }\n.particle:nth-child(6) { left: 45%; width: 4px; height: 3px; background: rgba(232,218,239,0.5); --dur: 10s; --delay: 5s; --max-opacity: 0.5; }\n.particle:nth-child(7) { left: 20%; width: 6px; height: 5px; background: rgba(213,245,227,0.4); --dur: 15s; --delay: 6s; --max-opacity: 0.3; }",
    "decorations": "",
    "fonts_url": "https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Caveat:wght@400;600&display=swap"
  },
  {
    "id": "04",
    "name": "Bold Maximalist Pop",
    "css_vars": {
      "--card-ratio": "9 / 16"
    },
    "canvas_css": "",
    "texture_css": "position: absolute; inset: 0; pointer-events: none; z-index: 50;\n      mix-blend-mode: overlay; opacity: 0.4;\n      background-image: repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 20px);\n      background-size: 4px 4px;",
    "particles_css": ".particle:nth-child(1) { left: 10%; width: 6px; height: 6px; background: #00CCFF; --dur: 7s; --delay: 0s; --max-opacity: 0.5; }\n.particle:nth-child(2) { left: 25%; width: 4px; height: 4px; background: #FFDD00; --dur: 9s; --delay: 1s; --max-opacity: 0.4; }\n.particle:nth-child(3) { left: 45%; width: 8px; height: 8px; background: #00CCFF; --dur: 11s; --delay: 2s; --max-opacity: 0.3; }\n.particle:nth-child(4) { left: 65%; width: 5px; height: 5px; background: #FFFFFF; --dur: 8s; --delay: 3s; --max-opacity: 0.5; }\n.particle:nth-child(5) { left: 80%; width: 7px; height: 7px; background: #FFDD00; --dur: 10s; --delay: 0.5s; --max-opacity: 0.35; }\n.particle:nth-child(6) { left: 55%; width: 3px; height: 3px; background: #FFFFFF; --dur: 6s; --delay: 4s; --max-opacity: 0.6; }",
    "decorations": "<svg class=\"deco-squiggle\" viewBox=\"0 0 80 80\" width=\"70\" height=\"70\" xmlns=\"http://www.w3.org/2000/svg\" style=\"top:15%;right:5%;\"><polygon points=\"40,5 50,30 80,35 55,55 65,80 40,65 15,80 25,55 0,35 30,30\" fill=\"#FFDD00\" opacity=\"0.3\"/></svg>\n<svg class=\"deco-squiggle\" viewBox=\"0 0 60 60\" width=\"55\" height=\"55\" xmlns=\"http://www.w3.org/2000/svg\" style=\"bottom:18%;left:4%;\"><circle cx=\"30\" cy=\"30\" r=\"28\" fill=\"none\" stroke=\"#00CCFF\" stroke-width=\"4\" stroke-dasharray=\"8 6\" opacity=\"0.4\"/></svg>\n<svg class=\"deco-squiggle\" viewBox=\"0 0 40 40\" width=\"35\" height=\"35\" xmlns=\"http://www.w3.org/2000/svg\" style=\"top:50%;left:8%;\"><rect x=\"5\" y=\"5\" width=\"30\" height=\"30\" fill=\"#FFFFFF\" opacity=\"0.1\" transform=\"rotate(45 20 20)\"/></svg>",
    "fonts_url": "https://fonts.googleapis.com/css2?family=Bungee&family=Inter:wght@400;700;800&display=swap"
  },
  {
    "id": "05",
    "name": "Botanical Greenery",
    "css_vars": {
      "--card-ratio": "9 / 16"
    },
    "canvas_css": "",
    "texture_css": "position: absolute; inset: 0; pointer-events: none; z-index: 50;\n      mix-blend-mode: overlay; opacity: 0.4;\n      background-image: radial-gradient(rgba(45,90,61,0.03) 1px, transparent 0);\n      background-size: 4px 4px;",
    "particles_css": ".particle:nth-child(1) { left: 10%; width: 6px; height: 6px; background: #2D5A3D; --dur: 7s; --delay: 0s; --max-opacity: 0.5; }\n.particle:nth-child(2) { left: 25%; width: 4px; height: 4px; background: #8FBC8F; --dur: 9s; --delay: 1s; --max-opacity: 0.4; }\n.particle:nth-child(3) { left: 45%; width: 8px; height: 8px; background: #2D5A3D; --dur: 11s; --delay: 2s; --max-opacity: 0.3; }\n.particle:nth-child(4) { left: 65%; width: 5px; height: 5px; background: #C5D8B8; --dur: 8s; --delay: 3s; --max-opacity: 0.5; }\n.particle:nth-child(5) { left: 80%; width: 7px; height: 7px; background: #8FBC8F; --dur: 10s; --delay: 0.5s; --max-opacity: 0.35; }\n.particle:nth-child(6) { left: 55%; width: 3px; height: 3px; background: #C5D8B8; --dur: 6s; --delay: 4s; --max-opacity: 0.6; }",
    "decorations": "<svg class=\"deco-squiggle\" viewBox=\"0 0 100 150\" width=\"80\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\" style=\"top:10%;right:2%;\"><path d=\"M50 10 Q30 40 50 60 Q70 80 50 110 Q30 130 50 145\" fill=\"none\" stroke=\"#8FBC8F\" stroke-width=\"2\" opacity=\"0.4\"/><ellipse cx=\"35\" cy=\"35\" rx=\"12\" ry=\"8\" fill=\"#2D5A3D\" opacity=\"0.08\" transform=\"rotate(-30 35 35)\"/><ellipse cx=\"65\" cy=\"75\" rx=\"12\" ry=\"8\" fill=\"#2D5A3D\" opacity=\"0.08\" transform=\"rotate(30 65 75)\"/></svg>\n<svg class=\"deco-squiggle\" viewBox=\"0 0 100 150\" width=\"70\" height=\"100\" xmlns=\"http://www.w3.org/2000/svg\" style=\"bottom:12%;left:2%;\"><path d=\"M50 140 Q70 110 50 90 Q30 70 50 40 Q70 20 50 5\" fill=\"none\" stroke=\"#C5D8B8\" stroke-width=\"2\" opacity=\"0.5\"/><ellipse cx=\"65\" cy=\"110\" rx=\"10\" ry=\"7\" fill=\"#8FBC8F\" opacity=\"0.1\" transform=\"rotate(25 65 110)\"/></svg>",
    "fonts_url": "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Lato:wght@300;400;700&display=swap"
  },
  {
    "id": "06",
    "name": "Vintage Polaroid Collage",
    "css_vars": {
      "--card-ratio": "9 / 16"
    },
    "canvas_css": "",
    "texture_css": "position: absolute; inset: 0; pointer-events: none; z-index: 50;\n      mix-blend-mode: multiply; opacity: 0.35;\n      background-image:\n        radial-gradient(rgba(74,55,40,0.08) 1px, transparent 0),\n        url(\"data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.8' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)' opacity='0.15'/%3E%3C/svg%3E\");\n      background-size: 4px 4px, 100px 100px;",
    "particles_css": ".particle:nth-child(1) { left: 8%; width: 4px; height: 4px; background: #C4956A; --dur: 9s; --delay: 0s; --max-opacity: 0.4; }\n.particle:nth-child(2) { left: 22%; width: 3px; height: 3px; background: #D4C5B0; --dur: 11s; --delay: 1.5s; --max-opacity: 0.3; }\n.particle:nth-child(3) { left: 40%; width: 5px; height: 5px; background: #8B7355; --dur: 8s; --delay: 3s; --max-opacity: 0.25; }\n.particle:nth-child(4) { left: 58%; width: 3px; height: 3px; background: #C4956A; --dur: 10s; --delay: 0.5s; --max-opacity: 0.35; }\n.particle:nth-child(5) { left: 75%; width: 4px; height: 4px; background: #D4C5B0; --dur: 12s; --delay: 2s; --max-opacity: 0.3; }\n.particle:nth-child(6) { left: 90%; width: 3px; height: 3px; background: #8B7355; --dur: 7s; --delay: 4s; --max-opacity: 0.4; }",
    "decorations": "",
    "fonts_url": "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Special+Elite&family=Caveat:wght@400;700&family=Inter:wght@300;400;600;700;800&display=swap"
  },
  {
    "id": "07",
    "name": "Neon Glow Night",
    "css_vars": {
      "--card-ratio": "9 / 16"
    },
    "canvas_css": "",
    "texture_css": "position: absolute; inset: 0; pointer-events: none; z-index: 50;\n      opacity: 0.06;\n      background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px);",
    "particles_css": ".particle:nth-child(1) { left: 10%; width: 3px; height: 3px; background: #FF00FF; box-shadow: 0 0 6px #FF00FF; --dur: 7s; --delay: 0s; --max-opacity: 0.6; }\n.particle:nth-child(2) { left: 25%; width: 2px; height: 2px; background: #00FFFF; box-shadow: 0 0 6px #00FFFF; --dur: 9s; --delay: 1s; --max-opacity: 0.5; }\n.particle:nth-child(3) { left: 42%; width: 4px; height: 4px; background: #FF00FF; box-shadow: 0 0 8px #FF00FF; --dur: 11s; --delay: 2s; --max-opacity: 0.4; }\n.particle:nth-child(4) { left: 60%; width: 2px; height: 2px; background: #39FF14; box-shadow: 0 0 6px #39FF14; --dur: 8s; --delay: 3s; --max-opacity: 0.5; }\n.particle:nth-child(5) { left: 78%; width: 3px; height: 3px; background: #00FFFF; box-shadow: 0 0 6px #00FFFF; --dur: 10s; --delay: 0.5s; --max-opacity: 0.45; }\n.particle:nth-child(6) { left: 90%; width: 2px; height: 2px; background: #FF00FF; box-shadow: 0 0 6px #FF00FF; --dur: 6s; --delay: 4s; --max-opacity: 0.6; }",
    "decorations": "",
    "fonts_url": "https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=Inter:wght@300;400;600;700;800&family=Space+Mono:wght@400;700&display=swap"
  },
  {
    "id": "08",
    "name": "Scandinavian Hygge",
    "css_vars": {
      "--card-ratio": "9 / 16"
    },
    "canvas_css": "",
    "texture_css": "position: absolute; inset: 0; pointer-events: none; z-index: 50;\n      mix-blend-mode: overlay; opacity: 0.4;\n      background-image: radial-gradient(rgba(61,51,39,0.02) 1px, transparent 0);\n      background-size: 4px 4px;",
    "particles_css": ".particle:nth-child(1) { left: 10%; width: 6px; height: 6px; background: #C4A882; --dur: 7s; --delay: 0s; --max-opacity: 0.5; }\n.particle:nth-child(2) { left: 25%; width: 4px; height: 4px; background: #E0D5C5; --dur: 9s; --delay: 1s; --max-opacity: 0.4; }\n.particle:nth-child(3) { left: 45%; width: 8px; height: 8px; background: #C4A882; --dur: 11s; --delay: 2s; --max-opacity: 0.3; }\n.particle:nth-child(4) { left: 65%; width: 5px; height: 5px; background: #8B7355; --dur: 8s; --delay: 3s; --max-opacity: 0.5; }\n.particle:nth-child(5) { left: 80%; width: 7px; height: 7px; background: #E0D5C5; --dur: 10s; --delay: 0.5s; --max-opacity: 0.35; }\n.particle:nth-child(6) { left: 55%; width: 3px; height: 3px; background: #8B7355; --dur: 6s; --delay: 4s; --max-opacity: 0.6; }",
    "decorations": "<svg class=\"deco-squiggle\" viewBox=\"0 0 60 60\" width=\"40\" height=\"40\" xmlns=\"http://www.w3.org/2000/svg\" style=\"top:12%;left:6%;\"><circle cx=\"30\" cy=\"30\" r=\"8\" fill=\"none\" stroke=\"#C4A882\" stroke-width=\"1.5\" opacity=\"0.3\"/><circle cx=\"30\" cy=\"30\" r=\"16\" fill=\"none\" stroke=\"#C4A882\" stroke-width=\"1\" opacity=\"0.2\"/></svg>\n<svg class=\"deco-squiggle\" viewBox=\"0 0 80 20\" width=\"70\" height=\"18\" xmlns=\"http://www.w3.org/2000/svg\" style=\"bottom:22%;right:8%;\"><line x1=\"0\" y1=\"10\" x2=\"80\" y2=\"10\" stroke=\"#E0D5C5\" stroke-width=\"1\" opacity=\"0.5\"/></svg>",
    "fonts_url": "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Crimson+Pro:wght@400;600&display=swap"
  },
  {
    "id": "09",
    "name": "Tropical Summer",
    "css_vars": {
      "--card-ratio": "9 / 16"
    },
    "canvas_css": "",
    "texture_css": "position: absolute; inset: 0; pointer-events: none; z-index: 50;\n      mix-blend-mode: overlay; opacity: 0.4;\n      background-image: radial-gradient(rgba(255,107,53,0.04) 1px, transparent 0);\n      background-size: 4px 4px;",
    "particles_css": ".particle:nth-child(1) { left: 10%; width: 6px; height: 6px; background: #FF6B35; --dur: 7s; --delay: 0s; --max-opacity: 0.5; }\n.particle:nth-child(2) { left: 25%; width: 4px; height: 4px; background: #00BFA5; --dur: 9s; --delay: 1s; --max-opacity: 0.4; }\n.particle:nth-child(3) { left: 45%; width: 8px; height: 8px; background: #FF6B35; --dur: 11s; --delay: 2s; --max-opacity: 0.3; }\n.particle:nth-child(4) { left: 65%; width: 5px; height: 5px; background: #FFD93D; --dur: 8s; --delay: 3s; --max-opacity: 0.5; }\n.particle:nth-child(5) { left: 80%; width: 7px; height: 7px; background: #00BFA5; --dur: 10s; --delay: 0.5s; --max-opacity: 0.35; }\n.particle:nth-child(6) { left: 55%; width: 3px; height: 3px; background: #FFD93D; --dur: 6s; --delay: 4s; --max-opacity: 0.6; }",
    "decorations": "<svg class=\"deco-squiggle\" viewBox=\"0 0 100 100\" width=\"80\" height=\"80\" xmlns=\"http://www.w3.org/2000/svg\" style=\"top:8%;right:3%;\"><path d=\"M50 10 C30 10 15 25 20 45 C25 65 40 50 50 70 C60 50 75 65 80 45 C85 25 70 10 50 10Z\" fill=\"#00BFA5\" opacity=\"0.08\"/></svg>\n<svg class=\"deco-squiggle\" viewBox=\"0 0 60 60\" width=\"50\" height=\"50\" xmlns=\"http://www.w3.org/2000/svg\" style=\"bottom:15%;left:5%;\"><circle cx=\"30\" cy=\"30\" r=\"25\" fill=\"#FF6B35\" opacity=\"0.06\"/><circle cx=\"30\" cy=\"30\" r=\"15\" fill=\"#FFD93D\" opacity=\"0.08\"/></svg>",
    "fonts_url": "https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;600;800&display=swap"
  },
  {
    "id": "10",
    "name": "Celestial Starry Night",
    "css_vars": {
      "--card-ratio": "9 / 16"
    },
    "canvas_css": "",
    "texture_css": "position: absolute; inset: 0; pointer-events: none; z-index: 50;\n      mix-blend-mode: overlay; opacity: 0.4;\n      background-image: radial-gradient(rgba(255,215,0,0.02) 1px, transparent 0);\n      background-size: 4px 4px;",
    "particles_css": ".particle:nth-child(1) { left: 10%; width: 6px; height: 6px; background: #FFD700; --dur: 7s; --delay: 0s; --max-opacity: 0.5; }\n.particle:nth-child(2) { left: 25%; width: 4px; height: 4px; background: #7B68EE; --dur: 9s; --delay: 1s; --max-opacity: 0.4; }\n.particle:nth-child(3) { left: 45%; width: 8px; height: 8px; background: #FFD700; --dur: 11s; --delay: 2s; --max-opacity: 0.3; }\n.particle:nth-child(4) { left: 65%; width: 5px; height: 5px; background: #FFFFFF; --dur: 8s; --delay: 3s; --max-opacity: 0.5; }\n.particle:nth-child(5) { left: 80%; width: 7px; height: 7px; background: #7B68EE; --dur: 10s; --delay: 0.5s; --max-opacity: 0.35; }\n.particle:nth-child(6) { left: 55%; width: 3px; height: 3px; background: #FFFFFF; --dur: 6s; --delay: 4s; --max-opacity: 0.6; }",
    "decorations": "<svg class=\"deco-squiggle\" viewBox=\"0 0 100 100\" width=\"80\" height=\"80\" xmlns=\"http://www.w3.org/2000/svg\" style=\"top:10%;left:5%;\"><circle cx=\"15\" cy=\"20\" r=\"1.5\" fill=\"#FFD700\" opacity=\"0.8\"/><circle cx=\"45\" cy=\"10\" r=\"1\" fill=\"#FFFFFF\" opacity=\"0.6\"/><circle cx=\"75\" cy=\"25\" r=\"2\" fill=\"#7B68EE\" opacity=\"0.7\"/><circle cx=\"85\" cy=\"50\" r=\"1\" fill=\"#FFD700\" opacity=\"0.5\"/><circle cx=\"25\" cy=\"60\" r=\"1.5\" fill=\"#FFFFFF\" opacity=\"0.4\"/><circle cx=\"60\" cy=\"70\" r=\"1\" fill=\"#7B68EE\" opacity=\"0.6\"/><circle cx=\"90\" cy=\"80\" r=\"1.5\" fill=\"#FFD700\" opacity=\"0.7\"/></svg>\n<svg class=\"deco-squiggle\" viewBox=\"0 0 40 40\" width=\"30\" height=\"30\" xmlns=\"http://www.w3.org/2000/svg\" style=\"top:35%;right:8%;\"><path d=\"M20 2 L23 15 L36 18 L23 21 L20 34 L17 21 L4 18 L17 15 Z\" fill=\"#FFD700\" opacity=\"0.15\"/></svg>",
    "fonts_url": "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Raleway:wght@300;400;600&display=swap"
  },
  {
    "id": "11",
    "name": "Modern Geometric Abstract",
    "css_vars": {
      "--card-ratio": "9 / 16"
    },
    "canvas_css": "",
    "texture_css": "position: absolute; inset: 0; pointer-events: none; z-index: 50;\n      mix-blend-mode: overlay; opacity: 0.25;\n      background-image: radial-gradient(rgba(0,0,0,0.05) 1px, transparent 0);\n      background-size: 3px 3px;",
    "particles_css": ".particle:nth-child(1) { left: 12%; width: 8px; height: 8px; background: #FF6B6B; border-radius: 2px; --dur: 7s; --delay: 0s; --max-opacity: 0.4; }\n.particle:nth-child(2) { left: 28%; width: 5px; height: 5px; background: #4ECDC4; border-radius: 50%; --dur: 9s; --delay: 1.5s; --max-opacity: 0.5; }\n.particle:nth-child(3) { left: 50%; width: 10px; height: 10px; background: #FFE66D; border-radius: 3px; --dur: 11s; --delay: 2s; --max-opacity: 0.3; }\n.particle:nth-child(4) { left: 68%; width: 6px; height: 6px; background: #1A535C; border-radius: 50%; --dur: 8s; --delay: 3.5s; --max-opacity: 0.45; }\n.particle:nth-child(5) { left: 82%; width: 7px; height: 7px; background: #FF6B6B; border-radius: 2px; --dur: 10s; --delay: 0.5s; --max-opacity: 0.35; }\n.particle:nth-child(6) { left: 40%; width: 4px; height: 4px; background: #4ECDC4; border-radius: 50%; --dur: 6s; --delay: 4s; --max-opacity: 0.5; }\n.particle:nth-child(7) { left: 58%; width: 6px; height: 6px; background: #FFE66D; border-radius: 1px; --dur: 9s; --delay: 1s; --max-opacity: 0.4; }",
    "decorations": "",
    "fonts_url": "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700;800;900&family=Cormorant+Garamond:wght@300;400;500;600&family=Inter:wght@300;400;600;700&display=swap"
  },
  {
    "id": "12",
    "name": "Rustic Kraft & Twine",
    "css_vars": {
      "--card-ratio": "9 / 16"
    },
    "canvas_css": "",
    "texture_css": "position: absolute; inset: 0; pointer-events: none; z-index: 50;\n      opacity: 0.6;\n      background-image:\n        url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.15'/%3E%3C/svg%3E\");\n      background-size: 200px 200px;",
    "particles_css": ".particle:nth-child(1) { left: 8%; width: 6px; height: 6px; background: #D4C5A9; border-radius: 50% 0; --dur: 9s; --delay: 0s; --max-opacity: 0.4; }\n.particle:nth-child(2) { left: 22%; width: 4px; height: 4px; background: #8B4513; border-radius: 0 50%; --dur: 11s; --delay: 1.5s; --max-opacity: 0.3; }\n.particle:nth-child(3) { left: 45%; width: 5px; height: 5px; background: #D2B48C; border-radius: 50% 0; --dur: 8s; --delay: 3s; --max-opacity: 0.35; }\n.particle:nth-child(4) { left: 62%; width: 7px; height: 7px; background: #D4C5A9; border-radius: 0 50%; --dur: 12s; --delay: 2s; --max-opacity: 0.25; }\n.particle:nth-child(5) { left: 78%; width: 5px; height: 5px; background: #8B4513; border-radius: 50% 0; --dur: 10s; --delay: 0.5s; --max-opacity: 0.4; }\n.particle:nth-child(6) { left: 35%; width: 3px; height: 3px; background: #3D2914; border-radius: 0 50%; --dur: 7s; --delay: 4s; --max-opacity: 0.45; }",
    "decorations": "",
    "fonts_url": "https://fonts.googleapis.com/css2?family=Special+Elite&family=Caveat:wght@400;500;600;700&family=Libre+Baskerville:wght@400;700&family=Inter:wght@300;400;600;700&display=swap"
  },
  {
    "id": "13",
    "name": "Candy Color Gradient",
    "css_vars": {
      "--card-ratio": "9 / 16"
    },
    "canvas_css": "",
    "texture_css": "position: absolute; inset: 0; pointer-events: none; z-index: 50;\n      mix-blend-mode: overlay; opacity: 0.4;\n      background-image: radial-gradient(rgba(255,105,180,0.03) 1px, transparent 0);\n      background-size: 4px 4px;",
    "particles_css": ".particle:nth-child(1) { left: 10%; width: 6px; height: 6px; background: #FF69B4; --dur: 7s; --delay: 0s; --max-opacity: 0.5; }\n.particle:nth-child(2) { left: 25%; width: 4px; height: 4px; background: #87CEEB; --dur: 9s; --delay: 1s; --max-opacity: 0.4; }\n.particle:nth-child(3) { left: 45%; width: 8px; height: 8px; background: #FF69B4; --dur: 11s; --delay: 2s; --max-opacity: 0.3; }\n.particle:nth-child(4) { left: 65%; width: 5px; height: 5px; background: #FFB6C1; --dur: 8s; --delay: 3s; --max-opacity: 0.5; }\n.particle:nth-child(5) { left: 80%; width: 7px; height: 7px; background: #87CEEB; --dur: 10s; --delay: 0.5s; --max-opacity: 0.35; }\n.particle:nth-child(6) { left: 55%; width: 3px; height: 3px; background: #FFB6C1; --dur: 6s; --delay: 4s; --max-opacity: 0.6; }",
    "decorations": "<svg class=\"deco-squiggle\" viewBox=\"0 0 60 60\" width=\"50\" height=\"50\" xmlns=\"http://www.w3.org/2000/svg\" style=\"top:15%;right:6%;\"><circle cx=\"30\" cy=\"30\" r=\"25\" fill=\"none\" stroke=\"#FF69B4\" stroke-width=\"2\" stroke-dasharray=\"4 6\" opacity=\"0.3\"/></svg>\n<svg class=\"deco-squiggle\" viewBox=\"0 0 40 40\" width=\"35\" height=\"35\" xmlns=\"http://www.w3.org/2000/svg\" style=\"bottom:20%;left:5%;\"><circle cx=\"20\" cy=\"20\" r=\"15\" fill=\"#87CEEB\" opacity=\"0.08\"/></svg>",
    "fonts_url": "https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600;700&family=Poppins:wght@300;400;700&display=swap"
  },
  {
    "id": "14",
    "name": "Art Deco Glamour",
    "css_vars": {
      "--card-ratio": "9 / 16"
    },
    "canvas_css": "",
    "texture_css": "position: absolute; inset: 0; pointer-events: none; z-index: 50;\n      mix-blend-mode: overlay; opacity: 0.4;\n      background-image: repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(212,175,55,0.03) 20px, rgba(212,175,55,0.03) 21px);\n      background-size: 4px 4px;",
    "particles_css": ".particle:nth-child(1) { left: 10%; width: 6px; height: 6px; background: #D4AF37; --dur: 7s; --delay: 0s; --max-opacity: 0.5; }\n.particle:nth-child(2) { left: 25%; width: 4px; height: 4px; background: #F5E6C8; --dur: 9s; --delay: 1s; --max-opacity: 0.4; }\n.particle:nth-child(3) { left: 45%; width: 8px; height: 8px; background: #D4AF37; --dur: 11s; --delay: 2s; --max-opacity: 0.3; }\n.particle:nth-child(4) { left: 65%; width: 5px; height: 5px; background: #8B7D3C; --dur: 8s; --delay: 3s; --max-opacity: 0.5; }\n.particle:nth-child(5) { left: 80%; width: 7px; height: 7px; background: #F5E6C8; --dur: 10s; --delay: 0.5s; --max-opacity: 0.35; }\n.particle:nth-child(6) { left: 55%; width: 3px; height: 3px; background: #8B7D3C; --dur: 6s; --delay: 4s; --max-opacity: 0.6; }",
    "decorations": "<svg class=\"deco-squiggle\" viewBox=\"0 0 100 200\" width=\"40\" height=\"100\" xmlns=\"http://www.w3.org/2000/svg\" style=\"top:5%;left:3%;\"><path d=\"M20 0 L20 200 M30 0 L30 200\" stroke=\"#D4AF37\" stroke-width=\"0.5\" opacity=\"0.15\"/><path d=\"M15 50 L35 30 L15 10 M15 110 L35 90 L15 70 M15 170 L35 150 L15 130\" fill=\"none\" stroke=\"#D4AF37\" stroke-width=\"1\" opacity=\"0.12\"/></svg>\n<svg class=\"deco-squiggle\" viewBox=\"0 0 100 200\" width=\"40\" height=\"100\" xmlns=\"http://www.w3.org/2000/svg\" style=\"top:5%;right:3%;\"><path d=\"M80 0 L80 200 M70 0 L70 200\" stroke=\"#D4AF37\" stroke-width=\"0.5\" opacity=\"0.15\"/><path d=\"M85 50 L65 30 L85 10 M85 110 L65 90 L85 70 M85 170 L65 150 L85 130\" fill=\"none\" stroke=\"#D4AF37\" stroke-width=\"1\" opacity=\"0.12\"/></svg>",
    "fonts_url": "https://fonts.googleapis.com/css2?family=Poiret+One&family=Raleway:wght@300;400;600;700&display=swap"
  },
  {
    "id": "15",
    "name": "Doodle & Sketch",
    "css_vars": {
      "--card-ratio": "9 / 16"
    },
    "canvas_css": "",
    "texture_css": "position: absolute; inset: 0; pointer-events: none; z-index: 50;\n      mix-blend-mode: overlay; opacity: 0.4;\n      background-image: repeating-linear-gradient(0deg, transparent, transparent 24px, rgba(0,0,0,0.04) 24px, rgba(0,0,0,0.04) 25px);\n      background-size: 4px 4px;",
    "particles_css": ".particle:nth-child(1) { left: 10%; width: 6px; height: 6px; background: #333333; --dur: 7s; --delay: 0s; --max-opacity: 0.5; }\n.particle:nth-child(2) { left: 25%; width: 4px; height: 4px; background: #FF4757; --dur: 9s; --delay: 1s; --max-opacity: 0.4; }\n.particle:nth-child(3) { left: 45%; width: 8px; height: 8px; background: #333333; --dur: 11s; --delay: 2s; --max-opacity: 0.3; }\n.particle:nth-child(4) { left: 65%; width: 5px; height: 5px; background: #666666; --dur: 8s; --delay: 3s; --max-opacity: 0.5; }\n.particle:nth-child(5) { left: 80%; width: 7px; height: 7px; background: #FF4757; --dur: 10s; --delay: 0.5s; --max-opacity: 0.35; }\n.particle:nth-child(6) { left: 55%; width: 3px; height: 3px; background: #666666; --dur: 6s; --delay: 4s; --max-opacity: 0.6; }",
    "decorations": "<svg class=\"deco-squiggle\" viewBox=\"0 0 100 40\" width=\"90\" height=\"35\" xmlns=\"http://www.w3.org/2000/svg\" style=\"top:20%;left:3%;\"><path d=\"M5 20 Q15 5 25 20 T45 20 T65 20 T85 20 T100 20\" fill=\"none\" stroke=\"#333\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-dasharray=\"1 4\" opacity=\"0.3\"/></svg>\n<svg class=\"deco-squiggle\" viewBox=\"0 0 40 40\" width=\"30\" height=\"30\" xmlns=\"http://www.w3.org/2000/svg\" style=\"bottom:22%;right:8%;\"><path d=\"M10 10 L30 10 L30 30 L10 30 Z\" fill=\"none\" stroke=\"#FF4757\" stroke-width=\"2\" stroke-dasharray=\"4 3\" opacity=\"0.3\" transform=\"rotate(8 20 20)\"/></svg>",
    "fonts_url": "https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Inter:wght@400;600;700&display=swap"
  },
  {
    "id": "16",
    "name": "Boho Macrame & Earth",
    "css_vars": {
      "--card-ratio": "9 / 16"
    },
    "canvas_css": "",
    "texture_css": "position: absolute; inset: 0; pointer-events: none; z-index: 50;\n      mix-blend-mode: multiply; opacity: 0.08;\n      background-image:\n        repeating-linear-gradient(0deg, #8B7355 0px, transparent 1px, transparent 4px, #8B7355 5px),\n        repeating-linear-gradient(90deg, #8B7355 0px, transparent 1px, transparent 4px, #8B7355 5px);\n      background-size: 5px 5px;",
    "particles_css": ".particle:nth-child(1) { left: 8%; width: 8px; height: 8px; background: #D4A373; border-radius: 50%; --dur: 10s; --delay: 0s; --max-opacity: 0.3; }\n.particle:nth-child(2) { left: 22%; width: 5px; height: 5px; background: #C17F59; border-radius: 50%; --dur: 12s; --delay: 2s; --max-opacity: 0.25; }\n.particle:nth-child(3) { left: 42%; width: 6px; height: 12px; background: #8B7355; border-radius: 40%; --dur: 9s; --delay: 1s; --max-opacity: 0.2; }\n.particle:nth-child(4) { left: 60%; width: 4px; height: 4px; background: #D4A373; border-radius: 50%; --dur: 11s; --delay: 3s; --max-opacity: 0.35; }\n.particle:nth-child(5) { left: 75%; width: 7px; height: 7px; background: #C17F59; border-radius: 50%; --dur: 8s; --delay: 0.5s; --max-opacity: 0.2; }\n.particle:nth-child(6) { left: 88%; width: 3px; height: 8px; background: #8B7355; border-radius: 40%; --dur: 13s; --delay: 4s; --max-opacity: 0.3; }\n.particle:nth-child(7) { left: 35%; width: 5px; height: 5px; background: #D4A373; border-radius: 50%; --dur: 7s; --delay: 5s; --max-opacity: 0.2; }\n.particle:nth-child(8) { left: 52%; width: 6px; height: 6px; background: #C17F59; border-radius: 50%; --dur: 14s; --delay: 1.5s; --max-opacity: 0.25; }",
    "decorations": "",
    "fonts_url": "https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cormorant:wght@300;400;500;600&family=Inter:wght@300;400;600;700;800&display=swap"
  },
  {
    "id": "17",
    "name": "Kawaii Cute",
    "css_vars": {
      "--card-ratio": "9 / 16"
    },
    "canvas_css": "",
    "texture_css": "position: absolute; inset: 0; pointer-events: none; z-index: 50;\n      opacity: 0.12;\n      background-image: radial-gradient(rgba(255,105,180,0.08) 1px, transparent 0);\n      background-size: 4px 4px;",
    "particles_css": ".particle:nth-child(1) { left: 8%; width: 10px; height: 10px; background: #FFB6C1; border-radius: 50%; --dur: 9s; --delay: 0s; --max-opacity: 0.5; }\n.particle:nth-child(2) { left: 25%; width: 8px; height: 8px; background: #E6E6FA; border-radius: 50%; --dur: 11s; --delay: 1.5s; --max-opacity: 0.45; }\n.particle:nth-child(3) { left: 42%; width: 6px; height: 6px; background: #E0FFFF; border-radius: 50%; --dur: 8s; --delay: 3s; --max-opacity: 0.5; }\n.particle:nth-child(4) { left: 60%; width: 9px; height: 9px; background: #FFFACD; border-radius: 50%; --dur: 10s; --delay: 0.5s; --max-opacity: 0.4; }\n.particle:nth-child(5) { left: 78%; width: 7px; height: 7px; background: #FFB6C1; border-radius: 50%; --dur: 12s; --delay: 2s; --max-opacity: 0.5; }\n.particle:nth-child(6) { left: 90%; width: 5px; height: 5px; background: #E6E6FA; border-radius: 50%; --dur: 7s; --delay: 4s; --max-opacity: 0.55; }\n.particle:nth-child(7) { left: 15%; width: 12px; height: 12px; background: #FFFACD; border-radius: 50%; --dur: 13s; --delay: 5s; --max-opacity: 0.3; }",
    "decorations": "",
    "fonts_url": "https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;600;700;800&family=Comic+Neue:wght@400;700&display=swap"
  },
  {
    "id": "18",
    "name": "Industrial Modern",
    "css_vars": {
      "--card-ratio": "9 / 16"
    },
    "canvas_css": "",
    "texture_css": "position: absolute; inset: 0; pointer-events: none; z-index: 50;\n      mix-blend-mode: overlay; opacity: 0.3;\n      background-image:\n        radial-gradient(ellipse at 20% 30%, rgba(0,0,0,0.15) 0%, transparent 50%),\n        radial-gradient(ellipse at 80% 70%, rgba(0,0,0,0.1) 0%, transparent 40%),\n        radial-gradient(rgba(0,0,0,0.08) 1px, transparent 0);\n      background-size: 100% 100%, 100% 100%, 2px 2px;",
    "particles_css": ".particle:nth-child(1) { left: 5%; width: 2px; height: 12px; background: #FF6B35; --dur: 8s; --delay: 0s; --max-opacity: 0.25; }\n.particle:nth-child(2) { left: 20%; width: 3px; height: 3px; background: #C0C0C0; border-radius: 50%; --dur: 12s; --delay: 2s; --max-opacity: 0.2; }\n.particle:nth-child(3) { left: 40%; width: 2px; height: 8px; background: #FF6B35; --dur: 10s; --delay: 1s; --max-opacity: 0.3; }\n.particle:nth-child(4) { left: 60%; width: 4px; height: 4px; background: #C0C0C0; border-radius: 50%; --dur: 9s; --delay: 3s; --max-opacity: 0.2; }\n.particle:nth-child(5) { left: 75%; width: 2px; height: 10px; background: #FF6B35; --dur: 11s; --delay: 0.5s; --max-opacity: 0.25; }\n.particle:nth-child(6) { left: 90%; width: 3px; height: 3px; background: #C0C0C0; border-radius: 50%; --dur: 7s; --delay: 4s; --max-opacity: 0.3; }",
    "decorations": "",
    "fonts_url": "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;600;700;800&family=Space+Mono:wght@400;700&display=swap"
  },
  {
    "id": "19",
    "name": "Fairy Tale Storybook",
    "css_vars": {
      "--card-ratio": "9 / 16"
    },
    "canvas_css": "",
    "texture_css": "position: absolute; inset: 0; pointer-events: none; z-index: 50;\n      mix-blend-mode: overlay; opacity: 0.4;\n      background-image: radial-gradient(rgba(155,89,182,0.02) 1px, transparent 0);\n      background-size: 4px 4px;",
    "particles_css": ".particle:nth-child(1) { left: 10%; width: 6px; height: 6px; background: #9B59B6; --dur: 7s; --delay: 0s; --max-opacity: 0.5; }\n.particle:nth-child(2) { left: 25%; width: 4px; height: 4px; background: #F1948A; --dur: 9s; --delay: 1s; --max-opacity: 0.4; }\n.particle:nth-child(3) { left: 45%; width: 8px; height: 8px; background: #9B59B6; --dur: 11s; --delay: 2s; --max-opacity: 0.3; }\n.particle:nth-child(4) { left: 65%; width: 5px; height: 5px; background: #DDA0DD; --dur: 8s; --delay: 3s; --max-opacity: 0.5; }\n.particle:nth-child(5) { left: 80%; width: 7px; height: 7px; background: #F1948A; --dur: 10s; --delay: 0.5s; --max-opacity: 0.35; }\n.particle:nth-child(6) { left: 55%; width: 3px; height: 3px; background: #DDA0DD; --dur: 6s; --delay: 4s; --max-opacity: 0.6; }",
    "decorations": "<svg class=\"deco-squiggle\" viewBox=\"0 0 40 40\" width=\"30\" height=\"30\" xmlns=\"http://www.w3.org/2000/svg\" style=\"top:10%;right:8%;\"><path d=\"M20 5 L23 15 L33 18 L23 21 L20 31 L17 21 L7 18 L17 15 Z\" fill=\"#9B59B6\" opacity=\"0.12\"/></svg>\n<svg class=\"deco-squiggle\" viewBox=\"0 0 30 30\" width=\"25\" height=\"25\" xmlns=\"http://www.w3.org/2000/svg\" style=\"bottom:15%;left:6%;\"><path d=\"M15 3 L17 11 L25 13 L17 15 L15 23 L13 15 L5 13 L13 11 Z\" fill=\"#F1948A\" opacity=\"0.15\"/></svg>",
    "fonts_url": "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Nunito:wght@400;600&display=swap"
  },
  {
    "id": "20",
    "name": "Monochrome Elegance",
    "css_vars": {
      "--card-ratio": "9 / 16"
    },
    "canvas_css": "",
    "texture_css": "position: absolute; inset: 0; pointer-events: none; z-index: 50;\n      mix-blend-mode: overlay; opacity: 0.4;\n      background-image: none;\n      background-size: 4px 4px;",
    "particles_css": ".particle:nth-child(1) { left: 10%; width: 6px; height: 6px; background: #000000; --dur: 7s; --delay: 0s; --max-opacity: 0.5; }\n.particle:nth-child(2) { left: 25%; width: 4px; height: 4px; background: #888888; --dur: 9s; --delay: 1s; --max-opacity: 0.4; }\n.particle:nth-child(3) { left: 45%; width: 8px; height: 8px; background: #000000; --dur: 11s; --delay: 2s; --max-opacity: 0.3; }\n.particle:nth-child(4) { left: 65%; width: 5px; height: 5px; background: #CCCCCC; --dur: 8s; --delay: 3s; --max-opacity: 0.5; }\n.particle:nth-child(5) { left: 80%; width: 7px; height: 7px; background: #888888; --dur: 10s; --delay: 0.5s; --max-opacity: 0.35; }\n.particle:nth-child(6) { left: 55%; width: 3px; height: 3px; background: #CCCCCC; --dur: 6s; --delay: 4s; --max-opacity: 0.6; }",
    "decorations": "<svg class=\"deco-squiggle\" viewBox=\"0 0 100 2\" width=\"80\" height=\"2\" xmlns=\"http://www.w3.org/2000/svg\" style=\"top:30%;left:10%;\"><line x1=\"0\" y1=\"1\" x2=\"100\" y2=\"1\" stroke=\"#111\" stroke-width=\"1\" opacity=\"0.1\"/></svg>\n<svg class=\"deco-squiggle\" viewBox=\"0 0 100 2\" width=\"60\" height=\"2\" xmlns=\"http://www.w3.org/2000/svg\" style=\"bottom:30%;right:10%;\"><line x1=\"0\" y1=\"1\" x2=\"100\" y2=\"1\" stroke=\"#111\" stroke-width=\"1\" opacity=\"0.1\"/></svg>",
    "fonts_url": "https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;700;900&family=Inter:wght@300;400;600&display=swap"
  },
  {
    "id": "21",
    "name": "Frutiger Aero Revival",
    "css_vars": {
      "--card-ratio": "9 / 16"
    },
    "canvas_css": "",
    "texture_css": "position: absolute; inset: 0; pointer-events: none; z-index: 50;\n      mix-blend-mode: overlay; opacity: 0.15;\n      background-image: radial-gradient(rgba(255,255,255,0.12) 1px, transparent 0);\n      background-size: 4px 4px;",
    "particles_css": ".particle:nth-child(1) { left: 8%; width: 14px; height: 14px; --dur: 9s; --delay: 0s; --max-opacity: 0.5; }\n.particle:nth-child(2) { left: 22%; width: 8px; height: 8px; --dur: 11s; --delay: 1.5s; --max-opacity: 0.4; }\n.particle:nth-child(3) { left: 40%; width: 18px; height: 18px; --dur: 13s; --delay: 0.5s; --max-opacity: 0.35; }\n.particle:nth-child(4) { left: 60%; width: 10px; height: 10px; --dur: 8s; --delay: 3s; --max-opacity: 0.5; }\n.particle:nth-child(5) { left: 78%; width: 16px; height: 16px; --dur: 10s; --delay: 2s; --max-opacity: 0.4; }\n.particle:nth-child(6) { left: 50%; width: 6px; height: 6px; --dur: 7s; --delay: 4s; --max-opacity: 0.55; }\n.particle:nth-child(7) { left: 90%; width: 12px; height: 12px; --dur: 12s; --delay: 1s; --max-opacity: 0.3; }\n.particle:nth-child(8) { left: 35%; width: 5px; height: 5px; --dur: 6s; --delay: 5s; --max-opacity: 0.6; }",
    "decorations": "",
    "fonts_url": "https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&family=Nunito:wght@300;400;600;700;800&family=Varela+Round&display=swap"
  },
  {
    "id": "22",
    "name": "MTV Signal Graphics",
    "css_vars": {
      "--card-ratio": "9 / 16"
    },
    "canvas_css": "background-color: #572589;\n      background-image:\n        repeating-conic-gradient(#ECCC68 0% 25%, transparent 0% 50%) 0 0 / 30px 30px,\n        linear-gradient(135deg, rgba(255,127,80,0.3) 25%, transparent 25%);",
    "texture_css": "position: absolute; inset: 0; pointer-events: none; z-index: 50;\n      mix-blend-mode: multiply; opacity: 0.15;\n      background-image: repeating-linear-gradient(0deg, rgba(0,0,0,0.3) 0px, transparent 1px, transparent 3px);\n      background-size: 100% 3px;",
    "particles_css": ".particle:nth-child(1) { left: 8%; width: 14px; height: 14px; border-color: #FF6B81; --dur: 7s; --delay: 0s; --max-opacity: 0.6; }\n.particle:nth-child(2) { left: 25%; width: 10px; height: 10px; border-color: #7BED9F; --dur: 9s; --delay: 1.5s; --max-opacity: 0.5; transform: rotate(45deg); }\n.particle:nth-child(3) { left: 48%; width: 18px; height: 18px; border-color: #ECCC68; --dur: 11s; --delay: 0.5s; --max-opacity: 0.4; }\n.particle:nth-child(4) { left: 68%; width: 8px; height: 8px; border-color: #FF7F50; --dur: 6s; --delay: 3s; --max-opacity: 0.7; }\n.particle:nth-child(5) { left: 82%; width: 12px; height: 12px; border-color: #FF6B81; --dur: 10s; --delay: 2s; --max-opacity: 0.5; }\n.particle:nth-child(6) { left: 55%; width: 6px; height: 6px; border-color: #7BED9F; --dur: 8s; --delay: 4s; --max-opacity: 0.6; }",
    "decorations": "",
    "fonts_url": "https://fonts.googleapis.com/css2?family=Bangers&family=Bungee&family=Comic+Neue:wght@400;700&family=Oswald:wght@400;600;700&display=swap"
  },
  {
    "id": "23",
    "name": "HUD Cyberpunk",
    "css_vars": {
      "--card-ratio": "9 / 16"
    },
    "canvas_css": "",
    "texture_css": "position: absolute; inset: 0; pointer-events: none; z-index: 50;\n      mix-blend-mode: overlay; opacity: 0.08;\n      background-image: repeating-linear-gradient(0deg, rgba(11,232,129,0.1) 0px, transparent 1px, transparent 2px);\n      background-size: 100% 2px;",
    "particles_css": ".particle:nth-child(1) { left: 5%; width: 3px; height: 3px; --dur: 8s; --delay: 0s; --max-opacity: 0.6; }\n.particle:nth-child(2) { left: 18%; width: 2px; height: 2px; background: #00D2D3; --dur: 10s; --delay: 1.5s; --max-opacity: 0.5; }\n.particle:nth-child(3) { left: 35%; width: 4px; height: 4px; --dur: 12s; --delay: 0.5s; --max-opacity: 0.4; }\n.particle:nth-child(4) { left: 55%; width: 2px; height: 2px; background: #FFC048; --dur: 7s; --delay: 3s; --max-opacity: 0.7; }\n.particle:nth-child(5) { left: 72%; width: 3px; height: 3px; background: #00D2D3; --dur: 9s; --delay: 2s; --max-opacity: 0.5; }\n.particle:nth-child(6) { left: 88%; width: 2px; height: 2px; --dur: 11s; --delay: 4s; --max-opacity: 0.6; }\n.particle:nth-child(7) { left: 45%; width: 3px; height: 3px; background: #FFC048; --dur: 6s; --delay: 5s; --max-opacity: 0.4; }\n.particle:nth-child(8) { left: 92%; width: 2px; height: 2px; background: #3C40C6; --dur: 13s; --delay: 1s; --max-opacity: 0.5; }",
    "decorations": "",
    "fonts_url": "https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=VT323&family=Fira+Code:wght@400;600&family=Inter:wght@400;600;700&display=swap"
  },
  {
    "id": "24",
    "name": "Distorted Cut Collage (Zine Punk)",
    "css_vars": {
      "--card-ratio": "9 / 16"
    },
    "canvas_css": "",
    "texture_css": "position: absolute; inset: 0; pointer-events: none; z-index: 50;\n      mix-blend-mode: overlay; opacity: 0.4;\n      background-image: radial-gradient(rgba(0,0,0,0.04) 1px, transparent 0);\n      background-size: 4px 4px;",
    "particles_css": ".particle:nth-child(1) { left: 10%; width: 6px; height: 6px; background: #E74C3C; --dur: 7s; --delay: 0s; --max-opacity: 0.5; }\n.particle:nth-child(2) { left: 25%; width: 4px; height: 4px; background: #2C3E50; --dur: 9s; --delay: 1s; --max-opacity: 0.4; }\n.particle:nth-child(3) { left: 45%; width: 8px; height: 8px; background: #E74C3C; --dur: 11s; --delay: 2s; --max-opacity: 0.3; }\n.particle:nth-child(4) { left: 65%; width: 5px; height: 5px; background: #1A1A1A; --dur: 8s; --delay: 3s; --max-opacity: 0.5; }\n.particle:nth-child(5) { left: 80%; width: 7px; height: 7px; background: #2C3E50; --dur: 10s; --delay: 0.5s; --max-opacity: 0.35; }\n.particle:nth-child(6) { left: 55%; width: 3px; height: 3px; background: #1A1A1A; --dur: 6s; --delay: 4s; --max-opacity: 0.6; }",
    "decorations": "<svg class=\"deco-squiggle\" viewBox=\"0 0 80 80\" width=\"60\" height=\"60\" xmlns=\"http://www.w3.org/2000/svg\" style=\"top:12%;right:4%;\"><rect x=\"10\" y=\"10\" width=\"40\" height=\"40\" fill=\"#E74C3C\" opacity=\"0.06\" transform=\"rotate(12 30 30)\"/><rect x=\"25\" y=\"25\" width=\"40\" height=\"40\" fill=\"#2C3E50\" opacity=\"0.06\" transform=\"rotate(-8 45 45)\"/></svg>",
    "fonts_url": "https://fonts.googleapis.com/css2?family=Special+Elite&family=Inter:wght@400;700;900&display=swap"
  },
  {
    "id": "25",
    "name": "Memphis Milano Pop",
    "css_vars": {
      "--card-ratio": "9 / 16"
    },
    "canvas_css": "",
    "texture_css": "position: absolute; inset: 0; pointer-events: none; z-index: 50;\n      mix-blend-mode: overlay; opacity: 0.4;\n      background-image: radial-gradient(rgba(0,0,0,0.04) 1px, transparent 0);\n      background-size: 4px 4px;",
    "particles_css": ".particle:nth-child(1) { left: 10%; width: 6px; height: 6px; background: #FF6384; --dur: 7s; --delay: 0s; --max-opacity: 0.5; }\n.particle:nth-child(2) { left: 25%; width: 4px; height: 4px; background: #36A2EB; --dur: 9s; --delay: 1s; --max-opacity: 0.4; }\n.particle:nth-child(3) { left: 45%; width: 8px; height: 8px; background: #FF6384; --dur: 11s; --delay: 2s; --max-opacity: 0.3; }\n.particle:nth-child(4) { left: 65%; width: 5px; height: 5px; background: #FFCE56; --dur: 8s; --delay: 3s; --max-opacity: 0.5; }\n.particle:nth-child(5) { left: 80%; width: 7px; height: 7px; background: #36A2EB; --dur: 10s; --delay: 0.5s; --max-opacity: 0.35; }\n.particle:nth-child(6) { left: 55%; width: 3px; height: 3px; background: #FFCE56; --dur: 6s; --delay: 4s; --max-opacity: 0.6; }",
    "decorations": "<svg class=\"deco-squiggle\" viewBox=\"0 0 80 80\" width=\"65\" height=\"65\" xmlns=\"http://www.w3.org/2000/svg\" style=\"top:12%;right:4%;\"><circle cx=\"20\" cy=\"20\" r=\"15\" fill=\"#36A2EB\" opacity=\"0.12\"/><rect x=\"45\" y=\"10\" width=\"25\" height=\"25\" fill=\"#FF6384\" opacity=\"0.1\" transform=\"rotate(15 57 22)\"/></svg>\n<svg class=\"deco-squiggle\" viewBox=\"0 0 60 60\" width=\"50\" height=\"50\" xmlns=\"http://www.w3.org/2000/svg\" style=\"bottom:15%;left:5%;\"><polygon points=\"30,5 55,50 5,50\" fill=\"none\" stroke=\"#FFCE56\" stroke-width=\"3\" opacity=\"0.2\"/></svg>",
    "fonts_url": "https://fonts.googleapis.com/css2?family=Rubik:wght@400;700;900&family=Space+Mono:wght@400;700&display=swap"
  },
  {
    "id": "26",
    "name": "Brutalist Web",
    "css_vars": {
      "--card-ratio": "9 / 16"
    },
    "canvas_css": "",
    "texture_css": "position: absolute; inset: 0; pointer-events: none; z-index: 50;\n      mix-blend-mode: multiply; opacity: 0.15;\n      background-image: radial-gradient(rgba(0,0,0,0.2) 1px, transparent 0);\n      background-size: 2px 2px;",
    "particles_css": ".particle:nth-child(1) { left: 8%; width: 4px; height: 4px; background: #0000FF; --dur: 7s; --delay: 0s; --max-opacity: 0.4; }\n.particle:nth-child(2) { left: 22%; width: 3px; height: 3px; background: #808080; --dur: 9s; --delay: 1s; --max-opacity: 0.3; }\n.particle:nth-child(3) { left: 42%; width: 5px; height: 5px; background: #0000FF; --dur: 11s; --delay: 2s; --max-opacity: 0.25; }\n.particle:nth-child(4) { left: 62%; width: 4px; height: 4px; background: #000; --dur: 8s; --delay: 3s; --max-opacity: 0.35; }\n.particle:nth-child(5) { left: 78%; width: 3px; height: 3px; background: #551A8B; --dur: 10s; --delay: 0.5s; --max-opacity: 0.3; }\n.particle:nth-child(6) { left: 52%; width: 2px; height: 2px; background: #0000FF; --dur: 6s; --delay: 4s; --max-opacity: 0.5; }",
    "decorations": "",
    "fonts_url": "https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Inter:wght@300;400;600;700;800&display=swap"
  },
  {
    "id": "27",
    "name": "Glitch Core / Vaporwave",
    "css_vars": {
      "--card-ratio": "9 / 16"
    },
    "canvas_css": "",
    "texture_css": "position: absolute; inset: 0; pointer-events: none; z-index: 50;\n      mix-blend-mode: overlay; opacity: 0.3;\n      background-image: radial-gradient(rgba(255,255,255,0.05) 1px, transparent 0);\n      background-size: 3px 3px;",
    "particles_css": ".particle:nth-child(1) { left: 10%; width: 6px; height: 6px; background: #FF9FF3; --dur: 7s; --delay: 0s; --max-opacity: 0.5; }\n.particle:nth-child(2) { left: 25%; width: 4px; height: 4px; background: #48DBFB; --dur: 9s; --delay: 1s; --max-opacity: 0.4; }\n.particle:nth-child(3) { left: 45%; width: 8px; height: 8px; background: #9B5DE5; --dur: 11s; --delay: 2s; --max-opacity: 0.3; }\n.particle:nth-child(4) { left: 65%; width: 5px; height: 5px; background: #00F5D4; --dur: 8s; --delay: 3s; --max-opacity: 0.5; }\n.particle:nth-child(5) { left: 80%; width: 7px; height: 7px; background: #FF9FF3; --dur: 10s; --delay: 0.5s; --max-opacity: 0.35; }\n.particle:nth-child(6) { left: 55%; width: 3px; height: 3px; background: #48DBFB; --dur: 6s; --delay: 4s; --max-opacity: 0.6; }",
    "decorations": "<div class=\"deco-sun\"></div>",
    "fonts_url": "https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Special+Elite&family=Inter:wght@300;400;600;700;800&display=swap"
  },
  {
    "id": "28",
    "name": "Acid Graphic (Liquid Metal)",
    "css_vars": {
      "--card-ratio": "9 / 16"
    },
    "canvas_css": "",
    "texture_css": "position: absolute; inset: 0; pointer-events: none; z-index: 50;\n      mix-blend-mode: overlay; opacity: 0.4;\n      background-image: repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,255,136,0.01) 3px, rgba(0,255,136,0.01) 4px);\n      background-size: 4px 4px;",
    "particles_css": ".particle:nth-child(1) { left: 10%; width: 6px; height: 6px; background: #00FF88; --dur: 7s; --delay: 0s; --max-opacity: 0.5; }\n.particle:nth-child(2) { left: 25%; width: 4px; height: 4px; background: #FF00AA; --dur: 9s; --delay: 1s; --max-opacity: 0.4; }\n.particle:nth-child(3) { left: 45%; width: 8px; height: 8px; background: #00FF88; --dur: 11s; --delay: 2s; --max-opacity: 0.3; }\n.particle:nth-child(4) { left: 65%; width: 5px; height: 5px; background: #00CCFF; --dur: 8s; --delay: 3s; --max-opacity: 0.5; }\n.particle:nth-child(5) { left: 80%; width: 7px; height: 7px; background: #FF00AA; --dur: 10s; --delay: 0.5s; --max-opacity: 0.35; }\n.particle:nth-child(6) { left: 55%; width: 3px; height: 3px; background: #00CCFF; --dur: 6s; --delay: 4s; --max-opacity: 0.6; }",
    "decorations": "<svg class=\"deco-squiggle\" viewBox=\"0 0 100 100\" width=\"70\" height=\"70\" xmlns=\"http://www.w3.org/2000/svg\" style=\"top:10%;right:3%;\"><circle cx=\"50\" cy=\"50\" r=\"40\" fill=\"none\" stroke=\"#00FF88\" stroke-width=\"0.5\" opacity=\"0.15\"/><circle cx=\"50\" cy=\"50\" r=\"25\" fill=\"none\" stroke=\"#FF00AA\" stroke-width=\"0.5\" opacity=\"0.1\"/></svg>",
    "fonts_url": "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=JetBrains+Mono:wght@400;600&display=swap"
  },
  {
    "id": "29",
    "name": "Cyberpunk Tech",
    "css_vars": {
      "--card-ratio": "9 / 16"
    },
    "canvas_css": "",
    "texture_css": "position: absolute; inset: 0; pointer-events: none; z-index: 50;\n      mix-blend-mode: overlay; opacity: 0.4;\n      background-image: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,240,255,0.008) 2px, rgba(0,240,255,0.008) 3px);\n      background-size: 4px 4px;",
    "particles_css": ".particle:nth-child(1) { left: 10%; width: 6px; height: 6px; background: #00F0FF; --dur: 7s; --delay: 0s; --max-opacity: 0.5; }\n.particle:nth-child(2) { left: 25%; width: 4px; height: 4px; background: #FF2D6A; --dur: 9s; --delay: 1s; --max-opacity: 0.4; }\n.particle:nth-child(3) { left: 45%; width: 8px; height: 8px; background: #00F0FF; --dur: 11s; --delay: 2s; --max-opacity: 0.3; }\n.particle:nth-child(4) { left: 65%; width: 5px; height: 5px; background: #7B61FF; --dur: 8s; --delay: 3s; --max-opacity: 0.5; }\n.particle:nth-child(5) { left: 80%; width: 7px; height: 7px; background: #FF2D6A; --dur: 10s; --delay: 0.5s; --max-opacity: 0.35; }\n.particle:nth-child(6) { left: 55%; width: 3px; height: 3px; background: #7B61FF; --dur: 6s; --delay: 4s; --max-opacity: 0.6; }",
    "decorations": "<svg class=\"deco-squiggle\" viewBox=\"0 0 120 120\" width=\"80\" height=\"80\" xmlns=\"http://www.w3.org/2000/svg\" style=\"top:8%;right:2%;\"><polygon points=\"60,10 110,35 110,85 60,110 10,85 10,35\" fill=\"none\" stroke=\"#00F0FF\" stroke-width=\"0.5\" opacity=\"0.1\"/><polygon points=\"60,25 95,42 95,78 60,95 25,78 25,42\" fill=\"none\" stroke=\"#FF2D6A\" stroke-width=\"0.5\" opacity=\"0.08\"/></svg>",
    "fonts_url": "https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Share+Tech+Mono&display=swap"
  },
  {
    "id": "30",
    "name": "Bauhaus Modern",
    "css_vars": {
      "--card-ratio": "9 / 16"
    },
    "canvas_css": "",
    "texture_css": "position: absolute; inset: 0; pointer-events: none; z-index: 50;\n      mix-blend-mode: overlay; opacity: 0.4;\n      background-image: none;\n      background-size: 4px 4px;",
    "particles_css": ".particle:nth-child(1) { left: 10%; width: 6px; height: 6px; background: #E63946; --dur: 7s; --delay: 0s; --max-opacity: 0.5; }\n.particle:nth-child(2) { left: 25%; width: 4px; height: 4px; background: #457B9D; --dur: 9s; --delay: 1s; --max-opacity: 0.4; }\n.particle:nth-child(3) { left: 45%; width: 8px; height: 8px; background: #E63946; --dur: 11s; --delay: 2s; --max-opacity: 0.3; }\n.particle:nth-child(4) { left: 65%; width: 5px; height: 5px; background: #F1FAEE; --dur: 8s; --delay: 3s; --max-opacity: 0.5; }\n.particle:nth-child(5) { left: 80%; width: 7px; height: 7px; background: #457B9D; --dur: 10s; --delay: 0.5s; --max-opacity: 0.35; }\n.particle:nth-child(6) { left: 55%; width: 3px; height: 3px; background: #F1FAEE; --dur: 6s; --delay: 4s; --max-opacity: 0.6; }",
    "decorations": "<svg class=\"deco-squiggle\" viewBox=\"0 0 80 80\" width=\"60\" height=\"60\" xmlns=\"http://www.w3.org/2000/svg\" style=\"top:8%;right:5%;\"><circle cx=\"40\" cy=\"40\" r=\"30\" fill=\"#E63946\" opacity=\"0.06\"/><rect x=\"25\" y=\"25\" width=\"30\" height=\"30\" fill=\"#457B9D\" opacity=\"0.06\"/></svg>\n<svg class=\"deco-squiggle\" viewBox=\"0 0 60 60\" width=\"45\" height=\"45\" xmlns=\"http://www.w3.org/2000/svg\" style=\"bottom:12%;left:5%;\"><polygon points=\"30,5 55,50 5,50\" fill=\"#1D3557\" opacity=\"0.04\"/></svg>",
    "fonts_url": "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Space+Grotesk:wght@400;600;700&display=swap"
  },
  {
    "id": "31",
    "name": "Victorian Gothic",
    "css_vars": {
      "--card-ratio": "9 / 16"
    },
    "canvas_css": "",
    "texture_css": "position: absolute; inset: 0; pointer-events: none; z-index: 50;\n      mix-blend-mode: overlay; opacity: 0.35;\n      background-image:\n        radial-gradient(rgba(244,234,222,0.08) 1px, transparent 0),\n        radial-gradient(rgba(0,0,0,0.1) 1.5px, transparent 0);\n      background-size: 3px 3px, 7px 7px;\n      background-position: 0 0, 3px 3px;",
    "particles_css": ".particle:nth-child(1) { left: 12%; width: 4px; height: 4px; background: #C9A0DC; --dur: 9s; --delay: 0s; --max-opacity: 0.4; }\n.particle:nth-child(2) { left: 28%; width: 3px; height: 3px; background: #C5C6C7; --dur: 11s; --delay: 1.5s; --max-opacity: 0.3; }\n.particle:nth-child(3) { left: 50%; width: 5px; height: 5px; background: #C9A0DC; --dur: 13s; --delay: 3s; --max-opacity: 0.25; }\n.particle:nth-child(4) { left: 70%; width: 3px; height: 3px; background: #C5C6C7; --dur: 10s; --delay: 2s; --max-opacity: 0.35; }\n.particle:nth-child(5) { left: 85%; width: 4px; height: 4px; background: #C9A0DC; --dur: 12s; --delay: 0.5s; --max-opacity: 0.3; }\n.particle:nth-child(6) { left: 40%; width: 2px; height: 2px; background: #C5C6C7; --dur: 8s; --delay: 4s; --max-opacity: 0.5; }\n.particle:nth-child(7) { left: 60%; width: 3px; height: 3px; background: #3A1C5C; --dur: 14s; --delay: 1s; --max-opacity: 0.2; }\n.particle:nth-child(8) { left: 20%; width: 2px; height: 2px; background: #C9A0DC; --dur: 7s; --delay: 5s; --max-opacity: 0.45; }",
    "decorations": "",
    "fonts_url": "https://fonts.googleapis.com/css2?family=Great+Vibes&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Special+Elite&family=Inter:wght@300;400;600;700;800&display=swap"
  },
  {
    "id": "32",
    "name": "Risograph Print",
    "css_vars": {
      "--card-ratio": "9 / 16"
    },
    "canvas_css": "",
    "texture_css": "position: absolute; inset: 0; pointer-events: none; z-index: 50;\n      mix-blend-mode: multiply; opacity: 0.2;\n      background-image:\n        radial-gradient(rgba(30,35,42,0.15) 1px, transparent 0);\n      background-size: 2px 2px;",
    "particles_css": ".particle:nth-child(1) { left: 8%; width: 8px; height: 8px; background: #FF4F81; border-radius: 50%; --dur: 9s; --delay: 0s; --max-opacity: 0.4; mix-blend-mode: multiply; }\n.particle:nth-child(2) { left: 22%; width: 12px; height: 4px; background: #2E5BFF; --dur: 12s; --delay: 1s; --max-opacity: 0.35; mix-blend-mode: multiply; }\n.particle:nth-child(3) { left: 40%; width: 6px; height: 6px; background: #FFDF00; border-radius: 50%; --dur: 11s; --delay: 2.5s; --max-opacity: 0.45; mix-blend-mode: multiply; }\n.particle:nth-child(4) { left: 62%; width: 10px; height: 3px; background: #FF4F81; --dur: 8s; --delay: 3s; --max-opacity: 0.3; mix-blend-mode: multiply; }\n.particle:nth-child(5) { left: 78%; width: 7px; height: 7px; background: #2E5BFF; border-radius: 50%; --dur: 13s; --delay: 0.5s; --max-opacity: 0.3; mix-blend-mode: multiply; }\n.particle:nth-child(6) { left: 55%; width: 5px; height: 5px; background: #1B4D3E; border-radius: 50%; --dur: 10s; --delay: 4s; --max-opacity: 0.35; mix-blend-mode: multiply; }\n.particle:nth-child(7) { left: 88%; width: 9px; height: 3px; background: #FFDF00; --dur: 14s; --delay: 1.5s; --max-opacity: 0.4; mix-blend-mode: multiply; }",
    "decorations": "",
    "fonts_url": "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;600;700;800&family=Caveat:wght@400;500;600;700&display=swap"
  },
  {
    "id": "33",
    "name": "Mid Century Modern (Atomic)",
    "css_vars": {
      "--card-ratio": "9 / 16"
    },
    "canvas_css": "",
    "texture_css": "position: absolute; inset: 0; pointer-events: none; z-index: 50;\n      mix-blend-mode: overlay; opacity: 0.4;\n      background-image: linear-gradient(90deg, rgba(139,90,43,0.02) 1px, transparent 1px), linear-gradient(rgba(139,90,43,0.02) 1px, transparent 1px);\n      background-size: 4px 4px;",
    "particles_css": ".particle:nth-child(1) { left: 10%; width: 6px; height: 6px; background: #CC5500; --dur: 7s; --delay: 0s; --max-opacity: 0.5; }\n.particle:nth-child(2) { left: 25%; width: 4px; height: 4px; background: #008080; --dur: 9s; --delay: 1s; --max-opacity: 0.4; }\n.particle:nth-child(3) { left: 45%; width: 8px; height: 8px; background: #CC5500; --dur: 11s; --delay: 2s; --max-opacity: 0.3; }\n.particle:nth-child(4) { left: 65%; width: 5px; height: 5px; background: #E1AD01; --dur: 8s; --delay: 3s; --max-opacity: 0.5; }\n.particle:nth-child(5) { left: 80%; width: 7px; height: 7px; background: #008080; --dur: 10s; --delay: 0.5s; --max-opacity: 0.35; }\n.particle:nth-child(6) { left: 55%; width: 3px; height: 3px; background: #E1AD01; --dur: 6s; --delay: 4s; --max-opacity: 0.6; }",
    "decorations": "<svg class=\"deco-squiggle\" viewBox=\"0 0 80 80\" width=\"60\" height=\"60\" xmlns=\"http://www.w3.org/2000/svg\" style=\"top:10%;right:5%;\"><path d=\"M40 5 L43 35 L73 38 L43 41 L40 71 L37 41 L7 38 L37 35 Z\" fill=\"#008080\" opacity=\"0.12\"/></svg>\n<svg class=\"deco-squiggle\" viewBox=\"0 0 60 60\" width=\"45\" height=\"45\" xmlns=\"http://www.w3.org/2000/svg\" style=\"bottom:18%;left:6%;\"><ellipse cx=\"30\" cy=\"30\" rx=\"25\" ry=\"10\" fill=\"none\" stroke=\"#CC5500\" stroke-width=\"2\" opacity=\"0.15\" transform=\"rotate(-20 30 30)\"/></svg>",
    "fonts_url": "https://fonts.googleapis.com/css2?family=Shrikhand&family=Montserrat:wght@400;700&family=Pacifico&display=swap"
  },
  {
    "id": "34",
    "name": "8-Bit Pixel Art (Arcade)",
    "css_vars": {
      "--card-ratio": "9 / 16"
    },
    "canvas_css": "",
    "texture_css": "position: absolute; inset: 0; pointer-events: none; z-index: 50;\n      mix-blend-mode: overlay; opacity: 0.4;\n      background-image: none;\n      background-size: 4px 4px;",
    "particles_css": ".particle:nth-child(1) { left: 10%; width: 6px; height: 6px; background: #E94560; --dur: 7s; --delay: 0s; --max-opacity: 0.5; }\n.particle:nth-child(2) { left: 25%; width: 4px; height: 4px; background: #0F3460; --dur: 9s; --delay: 1s; --max-opacity: 0.4; }\n.particle:nth-child(3) { left: 45%; width: 8px; height: 8px; background: #E94560; --dur: 11s; --delay: 2s; --max-opacity: 0.3; }\n.particle:nth-child(4) { left: 65%; width: 5px; height: 5px; background: #16C79A; --dur: 8s; --delay: 3s; --max-opacity: 0.5; }\n.particle:nth-child(5) { left: 80%; width: 7px; height: 7px; background: #0F3460; --dur: 10s; --delay: 0.5s; --max-opacity: 0.35; }\n.particle:nth-child(6) { left: 55%; width: 3px; height: 3px; background: #16C79A; --dur: 6s; --delay: 4s; --max-opacity: 0.6; }",
    "decorations": "<svg class=\"deco-squiggle\" viewBox=\"0 0 80 20\" width=\"70\" height=\"18\" xmlns=\"http://www.w3.org/2000/svg\" style=\"top:25%;left:5%;\"><rect x=\"0\" y=\"0\" width=\"8\" height=\"8\" fill=\"#E94560\" opacity=\"0.3\"/><rect x=\"12\" y=\"0\" width=\"8\" height=\"8\" fill=\"#0F3460\" opacity=\"0.3\"/><rect x=\"24\" y=\"0\" width=\"8\" height=\"8\" fill=\"#16C79A\" opacity=\"0.3\"/><rect x=\"36\" y=\"0\" width=\"8\" height=\"8\" fill=\"#E94560\" opacity=\"0.2\"/></svg>",
    "fonts_url": "https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&family=Inter:wght@400;700&display=swap"
  },
  {
    "id": "35",
    "name": "Folk Art Whimsy",
    "css_vars": {
      "--card-ratio": "9 / 16"
    },
    "canvas_css": "",
    "texture_css": "position: absolute; inset: 0; pointer-events: none; z-index: 50;\n      mix-blend-mode: overlay; opacity: 0.4;\n      background-image: radial-gradient(rgba(44,24,16,0.03) 1px, transparent 0);\n      background-size: 4px 4px;",
    "particles_css": ".particle:nth-child(1) { left: 10%; width: 6px; height: 6px; background: #D35400; --dur: 7s; --delay: 0s; --max-opacity: 0.5; }\n.particle:nth-child(2) { left: 25%; width: 4px; height: 4px; background: #2980B9; --dur: 9s; --delay: 1s; --max-opacity: 0.4; }\n.particle:nth-child(3) { left: 45%; width: 8px; height: 8px; background: #D35400; --dur: 11s; --delay: 2s; --max-opacity: 0.3; }\n.particle:nth-child(4) { left: 65%; width: 5px; height: 5px; background: #F39C12; --dur: 8s; --delay: 3s; --max-opacity: 0.5; }\n.particle:nth-child(5) { left: 80%; width: 7px; height: 7px; background: #2980B9; --dur: 10s; --delay: 0.5s; --max-opacity: 0.35; }\n.particle:nth-child(6) { left: 55%; width: 3px; height: 3px; background: #F39C12; --dur: 6s; --delay: 4s; --max-opacity: 0.6; }",
    "decorations": "<svg class=\"deco-squiggle\" viewBox=\"0 0 80 80\" width=\"60\" height=\"60\" xmlns=\"http://www.w3.org/2000/svg\" style=\"top:12%;right:5%;\"><circle cx=\"40\" cy=\"40\" r=\"8\" fill=\"#D35400\" opacity=\"0.08\"/><circle cx=\"40\" cy=\"40\" r=\"16\" fill=\"none\" stroke=\"#2980B9\" stroke-width=\"1.5\" opacity=\"0.12\"/><circle cx=\"40\" cy=\"40\" r=\"24\" fill=\"none\" stroke=\"#D35400\" stroke-width=\"1\" opacity=\"0.08\" stroke-dasharray=\"3 3\"/></svg>",
    "fonts_url": "https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Nunito:wght@400;600;700&display=swap"
  },
  {
    "id": "36",
    "name": "Neo-Noir Atmospheric",
    "css_vars": {
      "--card-ratio": "9 / 16"
    },
    "canvas_css": "",
    "texture_css": "position: absolute; inset: 0; pointer-events: none; z-index: 55;\n      mix-blend-mode: overlay; opacity: 0.07;\n      background-image: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\");\n      background-size: 128px 128px;",
    "particles_css": ".particle:nth-child(1) { left: 10%; width: 3px; height: 3px; background: #00F3FF; --dur: 7s; --delay: 0s; --max-opacity: 0.5; }\n.particle:nth-child(2) { left: 25%; width: 2px; height: 2px; background: #FF1E27; --dur: 9s; --delay: 1s; --max-opacity: 0.4; }\n.particle:nth-child(3) { left: 45%; width: 4px; height: 4px; background: #00F3FF; --dur: 11s; --delay: 2s; --max-opacity: 0.3; }\n.particle:nth-child(4) { left: 65%; width: 2px; height: 2px; background: #FF8E00; --dur: 8s; --delay: 3s; --max-opacity: 0.5; }\n.particle:nth-child(5) { left: 80%; width: 3px; height: 3px; background: #00F3FF; --dur: 10s; --delay: 0.5s; --max-opacity: 0.35; }\n.particle:nth-child(6) { left: 55%; width: 2px; height: 2px; background: #FF1E27; --dur: 6s; --delay: 4s; --max-opacity: 0.6; }",
    "decorations": "",
    "fonts_url": "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@300;400;600;700;800&family=Space+Mono:wght@400;700&display=swap"
  },
  {
    "id": "37",
    "name": "Bubblegum Pop Glossy",
    "css_vars": {
      "--card-ratio": "9 / 16"
    },
    "canvas_css": "",
    "texture_css": "position: absolute; inset: 0; pointer-events: none; z-index: 50;\n      mix-blend-mode: overlay; opacity: 0.3;\n      background: linear-gradient(135deg, rgba(255,255,255,0.5) 0%, transparent 40%, rgba(255,255,255,0.3) 60%, transparent 100%);",
    "particles_css": ".particle:nth-child(1) { left: 8%; font-size: 16px; --dur: 7s; --delay: 0s; --max-opacity: 0.6; }\n.particle:nth-child(2) { left: 25%; font-size: 12px; --dur: 9s; --delay: 1s; --max-opacity: 0.5; }\n.particle:nth-child(3) { left: 45%; font-size: 18px; --dur: 11s; --delay: 2s; --max-opacity: 0.4; }\n.particle:nth-child(4) { left: 65%; font-size: 10px; --dur: 8s; --delay: 3s; --max-opacity: 0.6; }\n.particle:nth-child(5) { left: 80%; font-size: 14px; --dur: 10s; --delay: 0.5s; --max-opacity: 0.5; }\n.particle:nth-child(6) { left: 55%; font-size: 12px; --dur: 6s; --delay: 4s; --max-opacity: 0.7; }",
    "decorations": "",
    "fonts_url": "https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;600;700;800;900&family=Pacifico&display=swap"
  },
  {
    "id": "38",
    "name": "Desert Boho",
    "css_vars": {
      "--card-ratio": "9 / 16"
    },
    "canvas_css": "",
    "texture_css": "position: absolute; inset: 0; pointer-events: none; z-index: 50;\n      mix-blend-mode: overlay; opacity: 0.4;\n      background-image: radial-gradient(rgba(61,43,31,0.03) 1px, transparent 0);\n      background-size: 4px 4px;",
    "particles_css": ".particle:nth-child(1) { left: 10%; width: 6px; height: 6px; background: #C1440E; --dur: 7s; --delay: 0s; --max-opacity: 0.5; }\n.particle:nth-child(2) { left: 25%; width: 4px; height: 4px; background: #8B6914; --dur: 9s; --delay: 1s; --max-opacity: 0.4; }\n.particle:nth-child(3) { left: 45%; width: 8px; height: 8px; background: #C1440E; --dur: 11s; --delay: 2s; --max-opacity: 0.3; }\n.particle:nth-child(4) { left: 65%; width: 5px; height: 5px; background: #D4A76A; --dur: 8s; --delay: 3s; --max-opacity: 0.5; }\n.particle:nth-child(5) { left: 80%; width: 7px; height: 7px; background: #8B6914; --dur: 10s; --delay: 0.5s; --max-opacity: 0.35; }\n.particle:nth-child(6) { left: 55%; width: 3px; height: 3px; background: #D4A76A; --dur: 6s; --delay: 4s; --max-opacity: 0.6; }",
    "decorations": "<svg class=\"deco-squiggle\" viewBox=\"0 0 80 80\" width=\"60\" height=\"60\" xmlns=\"http://www.w3.org/2000/svg\" style=\"top:10%;right:5%;\"><circle cx=\"40\" cy=\"40\" r=\"20\" fill=\"none\" stroke=\"#C1440E\" stroke-width=\"1\" opacity=\"0.12\"/><line x1=\"40\" y1=\"15\" x2=\"40\" y2=\"65\" stroke=\"#C1440E\" stroke-width=\"0.5\" opacity=\"0.1\"/><line x1=\"15\" y1=\"40\" x2=\"65\" y2=\"40\" stroke=\"#C1440E\" stroke-width=\"0.5\" opacity=\"0.1\"/></svg>",
    "fonts_url": "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Lato:wght@300;400;700&display=swap"
  },
  {
    "id": "39",
    "name": "Steampunk Chrono",
    "css_vars": {
      "--card-ratio": "9 / 16"
    },
    "canvas_css": "",
    "texture_css": "position: absolute; inset: 0; pointer-events: none; z-index: 50;\n      mix-blend-mode: overlay; opacity: 0.4;\n      background-image: radial-gradient(rgba(205,133,63,0.02) 1px, transparent 0);\n      background-size: 4px 4px;",
    "particles_css": ".particle:nth-child(1) { left: 10%; width: 6px; height: 6px; background: #CD853F; --dur: 7s; --delay: 0s; --max-opacity: 0.5; }\n.particle:nth-child(2) { left: 25%; width: 4px; height: 4px; background: #DEB887; --dur: 9s; --delay: 1s; --max-opacity: 0.4; }\n.particle:nth-child(3) { left: 45%; width: 8px; height: 8px; background: #CD853F; --dur: 11s; --delay: 2s; --max-opacity: 0.3; }\n.particle:nth-child(4) { left: 65%; width: 5px; height: 5px; background: #8B4513; --dur: 8s; --delay: 3s; --max-opacity: 0.5; }\n.particle:nth-child(5) { left: 80%; width: 7px; height: 7px; background: #DEB887; --dur: 10s; --delay: 0.5s; --max-opacity: 0.35; }\n.particle:nth-child(6) { left: 55%; width: 3px; height: 3px; background: #8B4513; --dur: 6s; --delay: 4s; --max-opacity: 0.6; }",
    "decorations": "<svg class=\"deco-squiggle\" viewBox=\"0 0 100 100\" width=\"70\" height=\"70\" xmlns=\"http://www.w3.org/2000/svg\" style=\"top:10%;right:4%;\"><circle cx=\"50\" cy=\"50\" r=\"40\" fill=\"none\" stroke=\"#CD853F\" stroke-width=\"1\" opacity=\"0.1\"/><circle cx=\"50\" cy=\"50\" r=\"30\" fill=\"none\" stroke=\"#CD853F\" stroke-width=\"0.5\" opacity=\"0.08\"/><line x1=\"50\" y1=\"15\" x2=\"50\" y2=\"35\" stroke=\"#CD853F\" stroke-width=\"1\" opacity=\"0.15\"/><line x1=\"50\" y1=\"50\" x2=\"65\" y2=\"35\" stroke=\"#CD853F\" stroke-width=\"1\" opacity=\"0.12\"/></svg>",
    "fonts_url": "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Playfair+Display:wght@400;700&display=swap"
  },
  {
    "id": "40",
    "name": "Holographic Foil (Iridescent)",
    "css_vars": {
      "--card-ratio": "9 / 16"
    },
    "canvas_css": "",
    "texture_css": "position: absolute; inset: 0; pointer-events: none; z-index: 50;\n      mix-blend-mode: overlay; opacity: 0.4;\n      background-image: radial-gradient(rgba(255,255,255,0.3) 1px, transparent 0);\n      background-size: 4px 4px;",
    "particles_css": ".particle:nth-child(1) { left: 10%; width: 6px; height: 6px; background: #FFB7D5; --dur: 7s; --delay: 0s; --max-opacity: 0.5; }\n.particle:nth-child(2) { left: 25%; width: 4px; height: 4px; background: #B5FFFC; --dur: 9s; --delay: 1s; --max-opacity: 0.4; }\n.particle:nth-child(3) { left: 45%; width: 8px; height: 8px; background: #FFB7D5; --dur: 11s; --delay: 2s; --max-opacity: 0.3; }\n.particle:nth-child(4) { left: 65%; width: 5px; height: 5px; background: #D8B5FF; --dur: 8s; --delay: 3s; --max-opacity: 0.5; }\n.particle:nth-child(5) { left: 80%; width: 7px; height: 7px; background: #B5FFFC; --dur: 10s; --delay: 0.5s; --max-opacity: 0.35; }\n.particle:nth-child(6) { left: 55%; width: 3px; height: 3px; background: #D8B5FF; --dur: 6s; --delay: 4s; --max-opacity: 0.6; }",
    "decorations": "<svg class=\"deco-squiggle\" viewBox=\"0 0 40 40\" width=\"25\" height=\"25\" xmlns=\"http://www.w3.org/2000/svg\" style=\"top:15%;right:10%;\"><path d=\"M20 2 L23 15 L36 18 L23 21 L20 34 L17 21 L4 18 L17 15 Z\" fill=\"#FFFFFF\" opacity=\"0.5\"/></svg>\n<svg class=\"deco-squiggle\" viewBox=\"0 0 30 30\" width=\"20\" height=\"20\" xmlns=\"http://www.w3.org/2000/svg\" style=\"bottom:20%;left:8%;\"><path d=\"M15 2 L17 12 L27 14 L17 16 L15 26 L13 16 L3 14 L13 12 Z\" fill=\"#FFFFFF\" opacity=\"0.4\"/></svg>\n<svg class=\"deco-squiggle\" viewBox=\"0 0 25 25\" width=\"15\" height=\"15\" xmlns=\"http://www.w3.org/2000/svg\" style=\"top:45%;left:6%;\"><path d=\"M12 1 L14 10 L23 12 L14 14 L12 23 L10 14 L1 12 L10 10 Z\" fill=\"#FFFFFF\" opacity=\"0.35\"/></svg>",
    "fonts_url": "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=Montserrat:wght@300;400;600&display=swap"
  }
];
