// STYLE REGISTRY FOR TECH FACTS OF THE DAY
const DEFAULT_ICONS = {
  ai: `<svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41l21.22 21.22M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41M17.66 17.66l1.41 1.41"/><circle cx="12" cy="12" r="4"/><path d="M12 8a4 4 0 0 1 4 4"/></svg>`,
  cybersecurity: `<svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4M12 16h.01"/></svg>`,
  code: `<svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="14" y1="4" x2="10" y2="20"/></svg>`,
  hardware: `<svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2" ry="2"/><rect x="6" y="6" width="12" height="12" rx="1" ry="1"/><line x1="9" y1="2" x2="9" y2="6"/><line x1="15" y1="2" x2="15" y2="6"/><line x1="9" y1="18" x2="9" y2="22"/><line x1="15" y1="18" x2="15" y2="22"/><line x1="2" y1="9" x2="6" y2="9"/><line x1="2" y1="15" x2="6" y2="15"/><line x1="18" y1="9" x2="22" y2="9"/><line x1="18" y1="15" x2="22" y2="15"/></svg>`,
  cloud: `<svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>`,
  database: `<svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>`,
  mobile: `<svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
  network: `<svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M12 8v8M5 16v-3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3"/></svg>`,
  history: `<svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  gaming: `<svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 12h4M8 10v4M15 11h.01M18 13h.01"/></svg>`
};

const TECH_FACTS_REGISTRY = [
  {
    id: "01",
    name: "Neon Terminal",
    fonts_url: "https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600;700&display=swap",
    canvas_css: `
      background-color: #050505;
      color: #39ff14;
      font-family: 'Fira Code', monospace;
      border: 4px solid #39ff14;
      padding: 60px 50px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-shadow: inset 0 0 40px rgba(57, 255, 20, 0.15);
    `,
    texture_css: `
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 50;
      opacity: 0.18;
      background: repeating-linear-gradient(0deg, #000, #000 2px, transparent 2px, transparent 4px);
    `,
    particles_css: `
      .particle { background: #39ff14 !important; box-shadow: 0 0 8px #39ff14; }
      .particle:nth-child(1) { left: 10%; width: 4px; height: 4px; --dur: 8s; --delay: 0s; --max-opacity: 0.6; }
      .particle:nth-child(2) { left: 30%; width: 2px; height: 2px; --dur: 11s; --delay: 1s; --max-opacity: 0.4; }
      .particle:nth-child(3) { left: 60%; width: 3px; height: 3px; --dur: 9s; --delay: 3s; --max-opacity: 0.5; }
      .particle:nth-child(4) { left: 80%; width: 5px; height: 5px; --dur: 12s; --delay: 2s; --max-opacity: 0.3; }
    `,
    decorations: `
      <div style="position:absolute; top:2%; right:8%; font-size:16px; opacity:0.6; color:#39ff14;">[SYS STATUS: OPERATIONAL]</div>
      <div style="position:absolute; top:2%; left:8%; font-size:16px; opacity:0.6; color:#39ff14;">[CORE_IP: 192.168.1.109]</div>
      <div style="position:absolute; bottom:2%; left:8%; font-size:16px; opacity:0.6; color:#39ff14;">[LOG_ID: 0x8F22A]</div>
      <div style="position:absolute; bottom:2%; right:8%; font-size:16px; opacity:0.7; color:#39ff14;">[████████░░░] 75%</div>
      <div style="position:absolute; top:8%; left:0; right:0; border-top: 1.5px dashed rgba(57, 255, 20, 0.3); pointer-events: none;"></div>
      <div style="position:absolute; bottom:7%; left:0; right:0; border-top: 1.5px dashed rgba(57, 255, 20, 0.3); pointer-events: none;"></div>
    `,
    content_css: `
      .logo-header { display: flex; align-items: center; gap: 12px; opacity: 0.9; }
      .logo-header img { height: 44px; filter: grayscale(1) invert(1) brightness(2); }
      .logo-header span { font-weight: 700; font-size: 24px; text-transform: uppercase; color: #39ff14; }
      
      .fact-main-block {
        flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: flex-start; gap: 40px; margin: 30px 0;
        background: rgba(0, 16, 0, 0.75); border: 2px solid #39ff14; border-radius: 12px; padding: 45px;
        box-shadow: 0 20px 50px rgba(0,0,0,0.85), inset 0 0 20px rgba(57,255,20,0.15); width: 100%;
      }
      .fact-icon-container { width: 180px; height: 180px; color: #39ff14; filter: drop-shadow(0 0 12px #39ff14); }
      
      .fact-category { font-size: 28px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: #39ff14; opacity: 0.85; margin-bottom: 12px; }
      .fact-category::before { content: '> '; }
      .fact-title { font-size: 72px; font-weight: 700; color: #ffffff; line-height: 1.25; margin-bottom: 22px; text-shadow: 0 0 10px rgba(57, 255, 20, 0.2); }
      .fact-body { font-size: 36px; line-height: 1.6; color: #39ff14; opacity: 0.95; }
      
      .card-footer { display: flex; justify-content: space-between; align-items: center; border-top: 1.5px solid rgba(57, 255, 20, 0.3); padding-top: 20px; font-size: 24px; }
      .society-handle { font-weight: 600; color: #39ff14; }
      .interactive-prompt { opacity: 0.8; }
    `
  },
  {
    id: "02",
    name: "Glassmorphic Glow",
    fonts_url: "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800&display=swap",
    canvas_css: `
      background: #09090b;
      color: #fafafa;
      font-family: 'Outfit', sans-serif;
      padding: 5%;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      overflow: hidden;
    `,
    texture_css: `
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 2;
      background: radial-gradient(circle at 10% 20%, rgba(99, 102, 241, 0.28) 0%, transparent 45%),
                  radial-gradient(circle at 90% 80%, rgba(236, 72, 153, 0.28) 0%, transparent 50%),
                  radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.2) 0%, transparent 40%);
    `,
    particles_css: `
      .particle { background: #ffffff !important; }
      .particle:nth-child(1) { left: 15%; width: 3px; height: 3px; --dur: 10s; --delay: 0s; --max-opacity: 0.4; }
      .particle:nth-child(2) { left: 40%; width: 4px; height: 4px; --dur: 13s; --delay: 1.5s; --max-opacity: 0.3; }
      .particle:nth-child(3) { left: 70%; width: 2px; height: 2px; --dur: 8s; --delay: 2.5s; --max-opacity: 0.5; }
    `,
    decorations: `
      <!-- Glowing Mesh Blob Orbs -->
      <div style="position:absolute; top:15%; left:10%; width:200px; height:200px; border-radius:50%; background:rgba(99,102,241,0.25); filter:blur(60px); pointer-events:none; z-index:1;"></div>
      <div style="position:absolute; bottom:15%; right:10%; width:220px; height:220px; border-radius:50%; background:rgba(236,72,153,0.25); filter:blur(60px); pointer-events:none; z-index:1;"></div>
      
      <!-- Tech crosshair anchors -->
      <div style="position:absolute; top:2%; left:3%; color:rgba(255,255,255,0.2); font-size:24px; pointer-events:none;">+</div>
      <div style="position:absolute; top:2%; right:3%; color:rgba(255,255,255,0.2); font-size:24px; pointer-events:none;">+</div>
      <div style="position:absolute; bottom:2%; left:3%; color:rgba(255,255,255,0.2); font-size:24px; pointer-events:none;">+</div>
      <div style="position:absolute; bottom:2%; right:3%; color:rgba(255,255,255,0.2); font-size:24px; pointer-events:none;">+</div>
    `,
    content_css: `
      .card-content {
        position: relative;
        z-index: 10;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: rgba(255, 255, 255, 0.035);
        backdrop-filter: blur(25px);
        -webkit-backdrop-filter: blur(25px);
        border: 1.5px solid rgba(255, 255, 255, 0.12);
        border-radius: 32px;
        padding: 55px;
        box-shadow: 0 40px 80px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.2);
      }
      .logo-header { display: flex; align-items: center; gap: 12px; }
      .logo-header img { height: 44px; }
      .logo-header span { font-weight: 700; font-size: 22px; text-transform: uppercase; letter-spacing: 1.5px; color: #d4d4d8; }
      
      .fact-main-block { flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; gap: 40px; margin: 20px 0; }
      .fact-icon-container { width: 160px; height: 160px; color: #a5b4fc; justify-content: center; filter: drop-shadow(0 0 15px rgba(99,102,241,0.5)); }
      .fact-text-container { display: flex; flex-direction: column; align-items: center; }
      
      .fact-category { font-size: 28px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: #818cf8; margin-bottom: 10px; }
      .fact-title { font-size: 68px; font-weight: 800; color: #ffffff; line-height: 1.3; margin-bottom: 20px; }
      .fact-body { font-size: 34px; line-height: 1.65; color: #f4f4f5; }
      
      .card-footer { display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255, 255, 255, 0.1); padding-top: 24px; font-size: 22px; }
      .society-handle { font-weight: 600; color: #ffffff; }
      .interactive-prompt { color: #a1a1aa; }
    `
  },
  {
    id: "03",
    name: "Swiss Editorial",
    fonts_url: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&display=swap",
    canvas_css: `
      background-color: #e5e5e0;
      color: #09090b;
      font-family: 'Space Grotesk', sans-serif;
      padding: 60px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border: 14px solid #09090b;
      position: relative;
    `,
    texture_css: `
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 50;
      mix-blend-mode: multiply;
      opacity: 0.04;
      background-image: radial-gradient(#000 1.5px, transparent 0);
      background-size: 5px 5px;
    `,
    particles_css: `
      .particle { display: none !important; }
    `,
    decorations: `
      <!-- Bold structural background graphics -->
      <div style="position:absolute; bottom:12%; right:8%; font-size:160px; font-weight:900; color:rgba(9,9,11,0.03); font-family:'Space Grotesk',sans-serif; pointer-events:none; z-index:1; letter-spacing:-5px;">INFO</div>
      <div style="position:absolute; top:8%; left:40px; right:40px; height:2px; background:#09090b; pointer-events:none;"></div>
      <div style="position:absolute; bottom:7%; left:40px; right:40px; height:2px; background:#09090b; pointer-events:none;"></div>
      
      <!-- Metadata layout block -->
      <div style="position:absolute; bottom:8.5%; left:60px; display:flex; gap:30px; font-size:14px; font-weight:700; text-transform:uppercase; opacity:0.6; color:#09090b;">
        <span>TYPE: DAILY_CORE</span>
        <span>LANG: EN-US</span>
        <span>VER: 4.1</span>
      </div>
    `,
    content_css: `
      .logo-header { display: flex; align-items: center; justify-content: space-between; border-bottom: 4px solid #09090b; padding-bottom: 18px; }
      .logo-header img { height: 52px; filter: grayscale(1) contrast(1.5); }
      .logo-header span { font-weight: 700; font-size: 26px; text-transform: uppercase; letter-spacing: -0.5px; }
      
      .fact-main-block {
        flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: flex-start; gap: 40px; margin: 30px 0;
        background: #ffffff; border: 6px solid #09090b; padding: 50px; box-shadow: 14px 14px 0px #09090b; width: 100%;
      }
      .fact-icon-container { width: 180px; height: 180px; color: #09090b; }
      
      .fact-category { font-size: 30px; font-weight: 700; text-transform: uppercase; margin: 0 0 12px 0; color: #09090b; }
      .fact-title { font-size: 80px; font-weight: 700; color: #09090b; line-height: 1.15; margin-bottom: 22px; letter-spacing: -1.2px; }
      .fact-body { font-size: 38px; line-height: 1.55; color: #18181b; font-weight: 400; }
      
      .card-footer { display: flex; justify-content: space-between; align-items: center; border-top: 4px solid #09090b; padding-top: 15px; font-size: 24px; font-weight: 700; text-transform: uppercase; }
      .society-handle { color: #09090b; }
      .interactive-prompt { color: #71717a; }
    `
  },
  {
    id: "04",
    name: "Cyber Grid",
    fonts_url: "https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&display=swap",
    canvas_css: `
      background-color: #080a13;
      color: #00f0ff;
      font-family: 'Orbitron', sans-serif;
      padding: 50px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border: 4px solid #00f0ff;
      box-shadow: 0 0 25px rgba(0, 240, 255, 0.25);
    `,
    texture_css: `
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 2;
      background-image: 
        linear-gradient(to right, rgba(0, 240, 255, 0.08) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(0, 240, 255, 0.08) 1px, transparent 1px);
      background-size: 30px 30px;
    `,
    particles_css: `
      .particle { background: #00f0ff !important; box-shadow: 0 0 6px #00f0ff; }
      .particle:nth-child(1) { left: 15%; width: 3px; height: 3px; --dur: 8s; --max-opacity: 0.6; }
      .particle:nth-child(2) { left: 50%; width: 4px; height: 4px; --dur: 12s; --max-opacity: 0.4; }
      .particle:nth-child(3) { left: 85%; width: 3px; height: 3px; --dur: 10s; --max-opacity: 0.5; }
    `,
    decorations: `
      <!-- Cyber technical labels and HUD frames -->
      <div style="position:absolute; top:5.5%; left:8%; font-size:14px; color:rgba(0,240,255,0.4); letter-spacing:1px;">SEC_DATABASE: LOCAL_SYNC</div>
      <div style="position:absolute; top:5.5%; right:8%; font-size:14px; color:rgba(0,240,255,0.4); letter-spacing:1px;">SYSTEM_GRID_ACTIVE</div>
      <div style="position:absolute; bottom:5.5%; left:8%; font-size:14px; color:#ff8c00; letter-spacing:1px;">// INTEL LEVEL: HIGH_PRIORITY //</div>
      
      <!-- Decorative corner bracket overlays -->
      <div style="position:absolute; top:2%; left:2%; width:24px; height:24px; border-top:3px solid #00f0ff; border-left:3px solid #00f0ff; pointer-events:none;"></div>
      <div style="position:absolute; top:2%; right:2%; width:24px; height:24px; border-top:3px solid #00f0ff; border-right:3px solid #00f0ff; pointer-events:none;"></div>
      <div style="position:absolute; bottom:2%; left:2%; width:24px; height:24px; border-bottom:3px solid #00f0ff; border-left:3px solid #00f0ff; pointer-events:none;"></div>
      <div style="position:absolute; bottom:2%; right:2%; width:24px; height:24px; border-bottom:3px solid #00f0ff; border-right:3px solid #00f0ff; pointer-events:none;"></div>
      
      <!-- Tech Grid Border Lines -->
      <div style="position:absolute; top:7%; bottom:6.5%; left:30px; border-left:1px dashed rgba(0, 240, 255, 0.2); pointer-events:none;"></div>
      <div style="position:absolute; top:7%; bottom:6.5%; right:30px; border-right:1px dashed rgba(0, 240, 255, 0.2); pointer-events:none;"></div>
    `,
    content_css: `
      .logo-header { display: flex; align-items: center; gap: 10px; border-bottom: 2px solid rgba(0, 240, 255, 0.3); padding-bottom: 14px; }
      .logo-header img { height: 42px; filter: hue-rotate(180deg) brightness(1.5); }
      .logo-header span { font-weight: 700; font-size: 22px; text-transform: uppercase; letter-spacing: 2px; }
      
      .fact-main-block {
        flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; gap: 40px; margin: 30px 0;
        background: rgba(8, 10, 19, 0.9); border: 2px solid #00f0ff; border-radius: 8px; padding: 45px;
        box-shadow: 0 0 35px rgba(0,240,255,0.2), inset 0 0 15px rgba(0,240,255,0.1); width: 100%;
      }
      .fact-icon-container { width: 160px; height: 160px; color: #ff8c00; justify-content: center; filter: drop-shadow(0 0 10px rgba(255,140,0,0.5)); }
      .fact-text-container { display: flex; flex-direction: column; align-items: center; }
      
      .fact-category { font-size: 26px; font-weight: 700; text-transform: uppercase; letter-spacing: 3px; color: #ff8c00; margin-bottom: 10px; }
      .fact-title { font-size: 64px; font-weight: 900; color: #ffffff; line-height: 1.25; text-shadow: 0 0 12px rgba(0, 240, 255, 0.4); margin-bottom: 18px; text-transform: uppercase; }
      .fact-body { font-family: sans-serif; font-size: 32px; line-height: 1.6; color: #a5f3fc; }
      
      .card-footer { display: flex; justify-content: space-between; align-items: center; border-top: 2px solid rgba(0, 240, 255, 0.3); padding-top: 15px; font-size: 22px; }
      .society-handle { font-weight: 700; color: #00f0ff; letter-spacing: 1px; }
      .interactive-prompt { color: rgba(0, 240, 255, 0.7); }
    `
  },
  {
    id: "05",
    name: "Flat Pastel",
    fonts_url: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap",
    canvas_css: `
      background-color: #fffbeb;
      color: #1c1917;
      font-family: 'Outfit', sans-serif;
      padding: 50px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
    `,
    texture_css: `
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 50;
      mix-blend-mode: multiply;
      opacity: 0.04;
      background-image: radial-gradient(#1c1917 1.5px, transparent 0);
      background-size: 6px 6px;
    `,
    particles_css: `
      .particle { display: none !important; }
    `,
    decorations: `
      <!-- Layered block outline shadow cards behind content -->
      <div style="position:absolute; top:56px; left:56px; right:44px; bottom:44px; background:rgba(28,25,23,0.06); border:2px solid #1c1917; border-radius:24px; pointer-events:none; z-index:1;"></div>
      
      <!-- Cute Retro Sticker Badge -->
      <div style="position:absolute; top:8%; right:20px; background:#f43f5e; color:#ffffff; font-size:14px; font-weight:700; padding:6px 12px; border:3px solid #1c1917; border-radius:10px; box-shadow:3px 3px 0 #1c1917; transform:rotate(8deg); text-transform:uppercase; pointer-events:none; z-index:100;">★ INTEL SHOT</div>
      
      <!-- Bottom right arrow graphic -->
      <svg style="position:absolute; bottom:8%; right:40px; width:54px; height:54px; fill:#1c1917; pointer-events:none; z-index:10;" viewBox="0 0 24 24"><path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm1 10h3l-4-4-4 4h3v4h2v-4z"/></svg>
    `,
    content_css: `
      .card-content {
        background: #ffffff;
        border: 3px solid #1c1917;
        border-radius: 24px;
        padding: 50px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-shadow: 12px 12px 0px #1c1917;
        position: relative;
        z-index: 10;
      }
      .logo-header { display: flex; align-items: center; gap: 10px; }
      .logo-header img { height: 46px; filter: grayscale(1) contrast(1.2); }
      .logo-header span { font-weight: 700; font-size: 24px; color: #44403c; text-transform: uppercase; }
      
      .fact-main-block { flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: flex-start; gap: 40px; margin: 20px 0; }
      .fact-icon-container { width: 160px; height: 160px; color: #d97706; }
      
      .fact-category { font-size: 28px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #d97706; margin-bottom: 8px; }
      .fact-title { font-size: 68px; font-weight: 700; color: #1c1917; line-height: 1.3; margin-bottom: 16px; }
      .fact-body { font-size: 34px; line-height: 1.6; color: #44403c; }
      
      .card-footer { display: flex; justify-content: space-between; align-items: center; border-top: 2px dashed #d6d3d1; padding-top: 20px; font-size: 22px; }
      .society-handle { font-weight: 700; color: #1c1917; }
      .interactive-prompt { color: #78716c; }
    `
  },
  {
    id: "06",
    name: "Neo-Brutalism",
    fonts_url: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700;800&display=swap",
    canvas_css: `
      background-color: #facc15;
      color: #000000;
      font-family: 'Space Grotesk', sans-serif;
      padding: 50px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
    `,
    texture_css: ``,
    particles_css: `
      .particle { display: none !important; }
    `,
    decorations: `
      <!-- Retro Window Header UI inside the block -->
      <div style="position:absolute; top:4.5%; left:6%; display:flex; gap:6px; pointer-events:none; z-index:100;">
        <div style="width:12px; height:12px; border-radius:50%; background:#ef4444; border:1.5px solid #000;"></div>
        <div style="width:12px; height:12px; border-radius:50%; background:#eab308; border:1.5px solid #000;"></div>
        <div style="width:12px; height:12px; border-radius:50%; background:#22c55e; border:1.5px solid #000;"></div>
      </div>
      <div style="position:absolute; top:4%; left:50px; right:30px; height:32px; border-bottom:4px solid #000; pointer-events:none; z-index:11;"></div>
      
      <!-- Brutalist Background Dotted Grid -->
      <div style="position:absolute; top:12%; right:8%; width:70px; height:70px; background-image:radial-gradient(#000 20%, transparent 20%); background-size:8px 8px; opacity:0.3; pointer-events:none;"></div>
      <div style="position:absolute; bottom:12%; left:8%; width:75px; height:75px; background-image:radial-gradient(#000 20%, transparent 20%); background-size:8px 8px; opacity:0.3; pointer-events:none;"></div>
    `,
    content_css: `
      .card-content {
        background: #ffffff;
        border: 5px solid #000000;
        padding: 55px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-shadow: 18px 18px 0px #000000;
        position: relative;
        z-index: 10;
      }
      .logo-header { display: flex; align-items: center; justify-content: space-between; border-bottom: 4px solid #000000; padding-bottom: 16px; }
      .logo-header img { height: 48px; filter: grayscale(1) contrast(2); }
      .logo-header span { font-weight: 800; font-size: 24px; text-transform: uppercase; }
      
      .fact-main-block { flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: flex-start; gap: 40px; margin: 20px 0; }
      .fact-icon-container { display: inline-flex; background: #a855f7; border: 3px solid #000000; padding: 12px; box-shadow: 4px 4px 0px #000000; color: #ffffff; width: 160px; height: 160px; }
      
      .fact-category { font-size: 28px; font-weight: 800; text-transform: uppercase; margin: 25px 0 12px 0; letter-spacing: 1px; }
      .fact-title { font-size: 70px; font-weight: 800; color: #000000; line-height: 1.2; margin-bottom: 18px; text-transform: uppercase; }
      .fact-body { font-size: 34px; line-height: 1.55; color: #000000; font-weight: 500; }
      
      .card-footer { display: flex; justify-content: space-between; align-items: center; border-top: 4px solid #000000; padding-top: 18px; font-size: 24px; font-weight: 800; }
      .society-handle { text-decoration: underline; }
      .interactive-prompt { background: #3b82f6; color: #ffffff; padding: 4px 10px; border: 2.5px solid #000000; box-shadow: 3px 3px 0px #000000; font-size: 18px; text-transform: uppercase; }
    `
  },
  {
    id: "07",
    name: "Mesh Gradient",
    fonts_url: "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&display=swap",
    canvas_css: `
      background: linear-gradient(135deg, #312e81 0%, #1e1b4b 50%, #4338ca 100%);
      color: #ffffff;
      font-family: 'Outfit', sans-serif;
      padding: 50px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow: hidden;
    `,
    texture_css: `
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 2;
      background: radial-gradient(circle at 10% 20%, rgba(255,255,255,0.12) 0%, transparent 35%),
                  radial-gradient(circle at 90% 80%, rgba(0,0,0,0.2) 0%, transparent 40%);
    `,
    particles_css: `
      .particle { background: #ffffff !important; --max-opacity: 0.45; }
      .particle:nth-child(1) { left: 10%; width: 4px; height: 4px; --dur: 9s; }
      .particle:nth-child(2) { left: 55%; width: 3px; height: 3px; --dur: 11s; }
      .particle:nth-child(3) { left: 80%; width: 5px; height: 5px; --dur: 7s; }
    `,
    decorations: `
      <!-- Tech mesh design rings -->
      <div style="position:absolute; top:-20px; right:-20px; width:160px; height:160px; border:1px solid rgba(255,255,255,0.08); border-radius:50%; pointer-events:none;"></div>
      <div style="position:absolute; top:-40px; right:-40px; width:220px; height:220px; border:1px solid rgba(255,255,255,0.04); border-radius:50%; pointer-events:none;"></div>
      
      <!-- Elegant card border details -->
      <div style="position:absolute; top:4%; bottom:4%; left:30px; right:30px; border:1px solid rgba(255,255,255,0.1); border-radius:24px; pointer-events:none;"></div>
    `,
    content_css: `
      .logo-header { display: flex; align-items: center; gap: 10px; }
      .logo-header img { height: 48px; filter: brightness(2); }
      .logo-header span { font-weight: 600; font-size: 24px; text-transform: uppercase; letter-spacing: 1px; color: rgba(255, 255, 255, 0.85); }
      
      .fact-main-block {
        flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: flex-start; gap: 40px; margin: 30px 0;
        background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(25px); -webkit-backdrop-filter: blur(25px);
        border: 1.5px solid rgba(255,255,255,0.18); border-radius: 28px; padding: 50px;
        box-shadow: 0 25px 55px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.1); width: 100%;
      }
      .fact-icon-container { width: 170px; height: 170px; color: #ffffff; filter: drop-shadow(0 6px 12px rgba(0,0,0,0.3)); }
      
      .fact-category { font-size: 28px; font-weight: 700; text-transform: uppercase; letter-spacing: 2.5px; color: #a5b4fc; margin-bottom: 8px; }
      .fact-title { font-size: 72px; font-weight: 700; color: #ffffff; line-height: 1.25; margin-bottom: 22px; }
      .fact-body { font-size: 36px; line-height: 1.65; color: rgba(255, 255, 255, 0.95); }
      
      .card-footer { display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255, 255, 255, 0.2); padding-top: 22px; font-size: 24px; }
      .society-handle { font-weight: 600; color: #ffffff; }
      .interactive-prompt { color: rgba(255, 255, 255, 0.7); }
    `
  },
  {
    id: "08",
    name: "Blue Blueprint",
    fonts_url: "https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;700&display=swap",
    canvas_css: `
      background-color: #0a1c36;
      color: #ffffff;
      font-family: 'Fira Code', monospace;
      padding: 50px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border: 3px double rgba(255, 255, 255, 0.4);
    `,
    texture_css: `
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 2;
      background-image: 
        linear-gradient(to right, rgba(255, 255, 255, 0.06) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.06) 1px, transparent 1px);
      background-size: 25px 25px;
    `,
    particles_css: `
      .particle { display: none !important; }
    `,
    decorations: `
      <!-- Draft Spec blueprints annotations -->
      <div style="position:absolute; top:2%; left:50%; transform:translateX(-50%); font-size:14px; color:rgba(255,255,255,0.4);">[ DRAFT SPEC SCALE: 1.5X ]</div>
      <div style="position:absolute; bottom:1.5%; left:50%; transform:translateX(-50%); font-size:14px; color:rgba(255,255,255,0.4);">(W: 1080px, H: 1920px)</div>
      
      <!-- Ruler markings on left edge -->
      <div style="position:absolute; left:10px; top:100px; bottom:100px; display:flex; flex-direction:column; justify-content:space-between; font-size:10px; color:rgba(255,255,255,0.25); pointer-events:none;">
        <span>500</span><span>400</span><span>300</span><span>200</span><span>100</span>
      </div>
      
      <!-- Graph axis marker lines -->
      <div style="position:absolute; left:35px; top:50px; bottom:50px; border-left:1px solid rgba(255,255,255,0.15); pointer-events:none;"></div>
    `,
    content_css: `
      .logo-header { display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(255, 255, 255, 0.3); padding-bottom: 14px; }
      .logo-header img { height: 44px; filter: brightness(2) contrast(0.5); }
      .logo-header span { font-weight: 500; font-size: 22px; text-transform: uppercase; color: rgba(255, 255, 255, 0.9); }
      
      .fact-main-block {
        flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: flex-start; gap: 40px; margin: 30px 0;
        background: rgba(10, 28, 54, 0.5); border: 2px dashed rgba(255, 255, 255, 0.45); padding: 45px; width: 100%;
      }
      .fact-icon-container { width: 160px; height: 160px; color: rgba(255, 255, 255, 0.85); }
      
      .fact-category { font-size: 26px; font-weight: 500; text-transform: uppercase; color: rgba(255, 255, 255, 0.75); margin-bottom: 12px; }
      .fact-category::after { content: ' //'; }
      .fact-title { font-size: 64px; font-weight: 700; color: #ffffff; line-height: 1.3; margin-bottom: 20px; }
      .fact-body { font-size: 32px; line-height: 1.65; color: rgba(255, 255, 255, 0.9); }
      
      .card-footer { display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255, 255, 255, 0.3); padding-top: 18px; font-size: 22px; }
      .society-handle { font-weight: 500; color: #ffffff; }
      .interactive-prompt { color: rgba(255, 255, 255, 0.65); }
    `
  },
  {
    id: "09",
    name: "Pure Monochrome",
    fonts_url: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;600;700&display=swap",
    canvas_css: `
      background-color: #f5f5f5;
      color: #000000;
      font-family: 'Space Grotesk', sans-serif;
      padding: 60px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
    `,
    texture_css: ``,
    particles_css: `
      .particle { display: none !important; }
    `,
    decorations: `
      <!-- Bold clean divider layout lines -->
      <div style="position:absolute; top:35px; bottom:35px; left:35px; right:35px; border:1px solid #000000; pointer-events:none;"></div>
      
      <!-- Minimalist geometric circle element -->
      <svg style="position:absolute; top:120px; right:60px; width:60px; height:60px; fill:none; stroke:#000000; stroke-width:1; pointer-events:none; opacity:0.15;" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45"/>
        <line x1="0" y1="50" x2="100" y2="50"/>
        <line x1="50" y1="0" x2="50" y2="100"/>
      </svg>
    `,
    content_css: `
      .logo-header { display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #000000; padding-bottom: 14px; }
      .logo-header img { height: 48px; filter: grayscale(1) contrast(3); }
      .logo-header span { font-weight: 700; font-size: 24px; text-transform: uppercase; }
      
      .fact-main-block {
        flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: flex-start; gap: 40px; margin: 30px 0;
        background: #ffffff; border: 2px solid #000000; padding: 50px; box-shadow: 0 12px 35px rgba(0,0,0,0.06); width: 100%;
      }
      .fact-icon-container { width: 180px; height: 180px; color: #000000; }
      
      .fact-category { font-size: 28px; font-weight: 600; text-transform: uppercase; color: #52525b; margin-bottom: 10px; letter-spacing: 1px; }
      .fact-title { font-size: 76px; font-weight: 700; color: #000000; line-height: 1.2; margin-bottom: 20px; letter-spacing: -0.8px; }
      .fact-body { font-size: 36px; line-height: 1.6; color: #27272a; }
      
      .card-footer { display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #000000; padding-top: 20px; font-size: 24px; font-weight: 600; text-transform: uppercase; }
      .society-handle { color: #000000; }
      .interactive-prompt { color: #52525b; }
    `
  },
  {
    id: "10",
    name: "Retro 8-Bit",
    fonts_url: "https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap",
    canvas_css: `
      background-color: #11111b;
      color: #00e5ff;
      font-family: 'Press Start 2P', monospace;
      padding: 40px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border: 6px double #00e5ff;
    `,
    texture_css: `
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 50;
      opacity: 0.12;
      background: repeating-linear-gradient(90deg, #000, #000 3px, transparent 3px, transparent 6px);
    `,
    particles_css: `
      .particle { background: #00e5ff !important; border-radius: 0% !important; }
      .particle:nth-child(1) { left: 12%; width: 6px; height: 6px; --dur: 9s; }
      .particle:nth-child(2) { left: 45%; width: 4px; height: 4px; --dur: 11s; }
      .particle:nth-child(3) { left: 75%; width: 8px; height: 8px; --dur: 8s; }
    `,
    decorations: `
      <!-- Pixel art health HUD -->
      <div style="position:absolute; top:1.5%; left:8%; font-size:12px; color:#ff007f;">HP [█████] 100%</div>
      <div style="position:absolute; top:1.5%; right:8%; font-size:12px; color:#00e5ff;">SCORE 08922</div>
      
      <!-- Insert Coin Footer Label -->
      <div style="position:absolute; bottom:1.5%; left:50%; transform:translateX(-50%); font-size:12px; color:rgba(255,255,255,0.4); text-transform:uppercase; animation:blink 1.2s step-end infinite;">- INSERT COIN [1P] -</div>
      
      <style>
        @keyframes blink { 50% { opacity: 0; } }
      </style>
    `,
    content_css: `
      .logo-header { display: flex; align-items: center; gap: 8px; font-size: 14px; border-bottom: 2px solid #00e5ff; padding-bottom: 14px; }
      .logo-header img { height: 40px; filter: hue-rotate(90deg) brightness(1.5); image-rendering: pixelated; }
      .logo-header span { text-transform: uppercase; }
      
      .fact-main-block {
        flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: flex-start; gap: 40px; margin: 20px 0;
        background: #04040e; border: 5px solid #ff007f; padding: 40px; box-shadow: 10px 10px 0px #00e5ff; width: 100%;
      }
      .fact-icon-container { width: 150px; height: 150px; color: #ff007f; }
      
      .fact-category { font-size: 24px; text-transform: uppercase; color: #ff007f; margin-bottom: 12px; }
      .fact-title { font-size: 60px; color: #ffffff; line-height: 1.45; margin-bottom: 22px; text-transform: uppercase; }
      .fact-body { font-family: sans-serif; font-size: 32px; line-height: 1.6; color: #ddddff; }
      
      .card-footer { display: flex; justify-content: space-between; align-items: center; border-top: 2px solid #00e5ff; padding-top: 15px; font-size: 20px; }
      .society-handle { color: #00e5ff; }
      .interactive-prompt { color: #ff007f; }
    `
  }
,

  {
    id: "11",
    name: "Cyber-Ether Modernist",
    fonts_url: "https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=JetBrains+Mono:wght@100..900&family=Sora:wght@100..900&display=swap",
    tailwind_config: `{
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "surface-dim": "#12121d",
                    "surface-container": "#1f1f29",
                    "outline": "#839493",
                    "surface-container-lowest": "#0d0d17",
                    "primary-fixed": "#00fbfb",
                    "on-primary": "#003737",
                    "on-primary-container": "#007070",
                    "on-secondary-fixed-variant": "#802a00",
                    "on-surface": "#e4e1f0",
                    "tertiary-fixed": "#efdbff",
                    "on-surface-variant": "#b9cac9",
                    "tertiary-container": "#efdbff",
                    "inverse-primary": "#006a6a",
                    "tertiary": "#ffffff",
                    "tertiary-fixed-dim": "#dcb8ff",
                    "secondary": "#ffb59a",
                    "inverse-on-surface": "#302f3b",
                    "on-background": "#e4e1f0",
                    "surface": "#12121d",
                    "secondary-container": "#ff5e07",
                    "on-secondary-container": "#531900",
                    "secondary-fixed-dim": "#ffb59a",
                    "on-error": "#690005",
                    "outline-variant": "#3a4a49",
                    "surface-variant": "#34343f",
                    "error": "#ffb4ab",
                    "surface-bright": "#393844",
                    "on-primary-fixed": "#002020",
                    "on-primary-fixed-variant": "#004f4f",
                    "on-secondary": "#5a1b00",
                    "primary-container": "#00fbfb",
                    "primary": "#ffffff",
                    "surface-container-low": "#1b1b25",
                    "surface-container-high": "#292934",
                    "on-tertiary-fixed-variant": "#6700b5",
                    "error-container": "#93000a",
                    "on-tertiary-container": "#8b2ce3",
                    "inverse-surface": "#e4e1f0",
                    "on-error-container": "#ffdad6",
                    "background": "#12121d",
                    "on-secondary-fixed": "#370e00",
                    "surface-container-highest": "#34343f",
                    "surface-tint": "#00dddd",
                    "primary-fixed-dim": "#00dddd",
                    "secondary-fixed": "#ffdbce",
                    "on-tertiary-fixed": "#2c0051",
                    "on-tertiary": "#480081"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "sm": "16px",
                    "xl": "64px",
                    "gutter": "24px",
                    "xs": "8px",
                    "md": "24px",
                    "base": "4px",
                    "lg": "40px",
                    "container-max": "1280px"
            },
            "fontFamily": {
                    "display-lg-mobile": ["Sora"],
                    "display-lg": ["Sora"],
                    "body-md": ["Geist"],
                    "body-lg": ["Geist"],
                    "headline-md": ["Sora"],
                    "button": ["Sora"],
                    "label-sm": ["JetBrains Mono"]
            },
            "fontSize": {
                    "display-lg-mobile": ["32px", {"lineHeight": "1.2", "fontWeight": "800"}],
                    "display-lg": ["48px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "800"}],
                    "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                    "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                    "headline-md": ["24px", {"lineHeight": "1.3", "fontWeight": "600"}],
                    "button": ["14px", {"lineHeight": "1.0", "fontWeight": "700"}],
                    "label-sm": ["12px", {"lineHeight": "1.0", "letterSpacing": "0.1em", "fontWeight": "500"}]
            }
          },
        },
      }`,
    styles: `body {
            background: radial-gradient(circle at 50% 50%, #1e1b4b 0%, #12121d 100%);
            overflow-x: hidden;
            min-height: 100vh;
        }

        .mesh-gradient {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            background: 
                radial-gradient(at 0% 0%, rgba(0, 251, 251, 0.15) 0px, transparent 50%),
                radial-gradient(at 100% 0%, rgba(139, 44, 227, 0.2) 0px, transparent 50%),
                radial-gradient(at 100% 100%, rgba(255, 94, 7, 0.1) 0px, transparent 50%),
                radial-gradient(at 0% 100%, rgba(0, 112, 112, 0.2) 0px, transparent 50%);
        }

        .glass-card {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(0, 251, 251, 0.3);
            box-shadow: 0 0 30px rgba(0, 251, 251, 0.1);
        }

        .neon-border-glow {
            box-shadow: 0 0 15px rgba(0, 251, 251, 0.4), inset 0 0 10px rgba(0, 251, 251, 0.2);
        }

        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }

        @keyframes scanline {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
        }

        .scanline {
            width: 100%;
            height: 2px;
            background: linear-gradient(to right, transparent, rgba(0, 251, 251, 0.5), transparent);
            position: absolute;
            animation: scanline 8s linear infinite;
            pointer-events: none;
        }
        body {
          min-height: max(884px, 100dvh);
        }`,
    html_template: `<div class="mesh-gradient"></div>
 TopAppBar 
<header class="fixed top-0 left-0 w-full z-50 flex items-center px-sm h-16 bg-surface/5 dark:bg-surface/5 backdrop-blur-xl border-b border-white/10 docked">
<div class="flex items-center gap-xs">
<h1 class="font-display-lg-mobile text-display-lg-mobile text-primary tracking-tighter draggable" data-tid="club-title">{{CLUB_TITLE}}</h1>
</div>
</header>
<main class="relative pt-24 pb-32 px-sm min-h-screen flex flex-col items-center justify-center overflow-hidden">
<!-- Background Atmospheric Element -->
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30 pointer-events-none">
<div class="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-fixed blur-[120px] rounded-full"></div>
<div class="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary-container blur-[120px] rounded-full"></div>
</div>
<!-- Centerpiece: Tech Fact Card -->
<section class="w-full max-w-md relative z-10 group">
<div class="glass-card neon-border-glow p-md flex flex-col gap-md relative overflow-hidden rounded-none border-primary-fixed transition-all duration-500 group-hover:scale-[1.02] draggable card-canvas" data-tid="body">{{BODY}}</div>
</section>
<!-- High-tech grid overlay decoration -->
<div class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-surface-dim to-transparent pointer-events-none z-0"></div>
</main>
 BottomNavBar 
<nav class="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-sm py-xs bg-surface-container/10 dark:bg-surface-container/10 backdrop-blur-xl border-t border-white/10 shadow-[0_-4px_20px_rgba(0,251,251,0.1)]">
<a class="flex flex-col items-center justify-center bg-primary-container/20 text-primary-fixed rounded-xl p-2 shadow-[0_0_15px_rgba(0,251,251,0.3)] scale-90 duration-200" href="#">
<span class="material-symbols-outlined" data-icon="lightbulb" style="font-variation-settings: 'FILL' 1;">lightbulb</span>
</a>
<a class="flex flex-col items-center justify-center text-outline p-2 hover:text-primary-fixed transition-colors" href="#">
<span class="material-symbols-outlined" data-icon="history">history</span>
</a>
<a class="flex flex-col items-center justify-center text-outline p-2 hover:text-primary-fixed transition-colors" href="#">
<span class="material-symbols-outlined" data-icon="bookmark">bookmark</span>
</a>
<a class="flex flex-col items-center justify-center text-outline p-2 hover:text-primary-fixed transition-colors" href="#">
<span class="material-symbols-outlined" data-icon="settings">settings</span>
</a>
</nav>
 Footer 
<footer class="flex flex-col items-center justify-center w-full gap-base pb-xl mt-12 mb-20 relative z-10">
<p class="font-label-sm text-label-sm text-outline">© IEEE CIS UPES Student Branch</p>
<div class="flex gap-md">
<a class="font-label-sm text-label-sm text-secondary hover:text-secondary-fixed transition-colors active:opacity-70 draggable" data-tid="handle" href="#">{{HANDLE}}</a>
</div>
</footer>
<script>
        // Micro-interaction for the card following mouse/tilt
        const card = document.querySelector('.glass-card');
        document.addEventListener('mousemove', (e) => {
            if (window.innerWidth > 768) {
                const xAxis = (window.innerWidth / 2 - e.pageX) / 40;
                const yAxis = (window.innerHeight / 2 - e.pageY) / 40;
                card.style.transform = \`rotateY(\${xAxis}deg) rotateX(\${yAxis}deg)\`;
            }
        });

        // Reset on mouse leave
        document.addEventListener('mouseleave', () => {
            card.style.transform = \`rotateY(0deg) rotateX(0deg)\`;
        });
    </script>`
  },
  {
    id: "12",
    name: "Electric Neo-Brutalist",
    fonts_url: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap",
    tailwind_config: `{
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-error-container": "#93000a",
                        "on-secondary-container": "#fffbff",
                        "error": "#ba1a1a",
                        "secondary-fixed-dim": "#ddb7ff",
                        "secondary": "#8127cf",
                        "on-secondary-fixed": "#2c0051",
                        "surface-container-highest": "#e2e2e2",
                        "primary": "#735c00",
                        "tertiary-fixed-dim": "#c6c6c6",
                        "tertiary-fixed": "#e2e2e2",
                        "outline": "#7f7660",
                        "on-primary-fixed-variant": "#574500",
                        "on-tertiary-fixed": "#1b1b1b",
                        "secondary-container": "#9c48ea",
                        "primary-fixed-dim": "#eec200",
                        "on-primary": "#ffffff",
                        "on-tertiary": "#ffffff",
                        "on-background": "#1a1c1c",
                        "surface-container-lowest": "#ffffff",
                        "primary-container": "#facc15",
                        "surface-container": "#eeeeee",
                        "surface-variant": "#e2e2e2",
                        "surface": "#f9f9f9",
                        "on-secondary": "#ffffff",
                        "on-secondary-fixed-variant": "#6900b3",
                        "on-tertiary-fixed-variant": "#474747",
                        "inverse-surface": "#2f3131",
                        "surface-container-low": "#f3f3f4",
                        "on-surface-variant": "#4d4632",
                        "on-primary-container": "#6c5700",
                        "inverse-primary": "#eec200",
                        "on-surface": "#1a1c1c",
                        "surface-bright": "#f9f9f9",
                        "tertiary-container": "#d1d1d1",
                        "on-error": "#ffffff",
                        "inverse-on-surface": "#f0f1f1",
                        "secondary-fixed": "#f0dbff",
                        "outline-variant": "#d1c6ab",
                        "on-primary-fixed": "#231b00",
                        "surface-tint": "#735c00",
                        "surface-container-high": "#e8e8e8",
                        "error-container": "#ffdad6",
                        "background": "#f9f9f9",
                        "surface-dim": "#dadada",
                        "tertiary": "#5e5e5e",
                        "on-tertiary-container": "#595959",
                        "primary-fixed": "#ffe083"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "shadow-offset": "4px",
                        "gutter": "24px",
                        "margin-mobile": "16px",
                        "margin-desktop": "48px",
                        "base": "8px"
                    },
                    "fontFamily": {
                        "body-lg": ["Sora"],
                        "label-sm": ["Sora"],
                        "headline-md": ["Sora"],
                        "headline-lg-mobile": ["Sora"],
                        "display-xl": ["Sora"],
                        "headline-lg": ["Sora"],
                        "body-md": ["Sora"],
                        "label-bold": ["Sora"]
                    },
                    "fontSize": {
                        "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "500"}],
                        "label-sm": ["12px", {"lineHeight": "1.2", "fontWeight": "600"}],
                        "headline-md": ["24px", {"lineHeight": "1.3", "fontWeight": "700"}],
                        "headline-lg-mobile": ["32px", {"lineHeight": "1.2", "fontWeight": "800"}],
                        "display-xl": ["64px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "800"}],
                        "headline-lg": ["40px", {"lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "800"}],
                        "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                        "label-bold": ["14px", {"lineHeight": "1.2", "fontWeight": "700"}]
                    }
                }
            }
        }`,
    styles: `body {
            background-color: #facc15;
            overflow-x: hidden;
            -webkit-tap-highlight-color: transparent;
        }
        .neo-shadow {
            box-shadow: 8px 8px 0px 0px #000000;
        }
        .neo-shadow-sm {
            box-shadow: 4px 4px 0px 0px #000000;
        }
        .neo-shadow-active {
            box-shadow: 0px 0px 0px 0px #000000;
            transform: translate(4px, 4px);
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 700, 'GRAD' 0, 'opsz' 24;
            display: inline-block;
            vertical-align: middle;
        }
        .fill-icon {
            font-variation-settings: 'FILL' 1;
        }
        body {
          min-height: max(884px, 100dvh);
        }`,
    html_template: `Top Navigation Shell 
<header class="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 py-4 bg-primary border-b-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-on-primary text-headline-md">terminal</span>
<span class="font-headline-md text-headline-md uppercase tracking-tighter font-extrabold text-on-primary">TECH_DRIP</span>
</div>
<button class="w-10 h-10 flex items-center justify-center bg-white border-2 border-black neo-shadow-sm active:translate-x-1 active:translate-y-1 active:shadow-none transition-all">
<span class="material-symbols-outlined text-black">settings</span>
</button>
</header>
<main class="min-h-screen pt-24 pb-32 px-4 flex flex-col items-center justify-center">
<!-- Animated Background Element (Subtle grid) -->
<div class="fixed inset-0 pointer-events-none opacity-10" style="background-image: linear-gradient(#000 2px, transparent 2px), linear-gradient(90deg, #000 2px, transparent 2px); background-size: 40px 40px;"></div>
<!-- Main Fact Card Container -->
<div class="relative w-full max-w-sm draggable" data-tid="body">{{BODY}}</div>
<!-- Secondary Info Section (Bento style) -->
<section class="mt-12 w-full max-w-sm grid grid-cols-2 gap-4">
<div class="bg-white border-4 border-black p-4 neo-shadow-sm col-span-2 card-canvas">
<h3 class="font-label-bold uppercase text-label-sm mb-2 text-secondary">Did you know?</h3>
<p class="text-body-md font-body-md italic leading-tight">Google claimed supremacy in 2019 using their 53-qubit Sycamore processor.</p>
</div>
<div class="bg-secondary text-white border-4 border-black p-4 neo-shadow-sm flex flex-col items-center justify-center text-center">
<span class="font-display-xl text-[48px] leading-none mb-1">53</span>
<span class="font-label-bold text-[10px] uppercase">Qubits Tracked</span>
</div>
<div class="bg-primary-container border-4 border-black p-4 neo-shadow-sm flex flex-col items-center justify-center text-center">
<span class="material-symbols-outlined text-4xl mb-1">speed</span>
<span class="font-label-bold text-[10px] uppercase">Processing Limit</span>
</div>
</section>
</main>
 Bottom Navigation Shell 
<nav class="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-20 bg-surface border-t-4 border-black px-4 pb-safe shadow-[0px_-4px_0px_0px_rgba(0,0,0,1)]">
<button class="flex flex-col items-center justify-center text-on-surface p-2 hover:bg-primary-container hover:text-on-primary-container transition-colors">
<span class="material-symbols-outlined draggable" data-tid="icon">{{ICON_SVG}}</span>
</button>
<button class="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container border-2 border-black scale-110 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] p-2">
<span class="material-symbols-outlined fill-icon">menu_book</span>
</button>
<button class="flex flex-col items-center justify-center text-on-surface p-2 hover:bg-primary-container hover:text-on-primary-container transition-colors">
<span class="material-symbols-outlined">emoji_events</span>
</button>
<button class="flex flex-col items-center justify-center text-on-surface p-2 hover:bg-primary-container hover:text-on-primary-container transition-colors">
<span class="material-symbols-outlined">person</span>
</button>
</nav>
<script>
        // Micro-interactions for neo-brutalist buttons
        document.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('mousedown', () => {
                if(btn.classList.contains('neo-shadow-sm')) {
                    btn.style.transform = 'translate(4px, 4px)';
                    btn.style.boxShadow = '0px 0px 0px 0px #000000';
                }
            });
            btn.addEventListener('mouseup', () => {
                if(btn.classList.contains('neo-shadow-sm')) {
                    btn.style.transform = '';
                    btn.style.boxShadow = '4px 4px 0px 0px #000000';
                }
            });
            btn.addEventListener('mouseleave', () => {
                if(btn.classList.contains('neo-shadow-sm')) {
                    btn.style.transform = '';
                    btn.style.boxShadow = '4px 4px 0px 0px #000000';
                }
            });
        });
    </script>`
  },
  {
    id: "13",
    name: "Swiss Typographic",
    fonts_url: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Sora:wght@100..900&display=swap",
    tailwind_config: `{
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "surface-container-high": "#ebe7e6",
                    "on-primary": "#ffffff",
                    "inverse-on-surface": "#f4f0ef",
                    "on-primary-fixed-variant": "#474746",
                    "surface-container": "#f1edec",
                    "tertiary-fixed": "#e2e2e2",
                    "on-secondary-container": "#5f6161",
                    "on-background": "#1c1b1b",
                    "outline": "#747878",
                    "on-primary-container": "#858383",
                    "on-error-container": "#93000a",
                    "on-tertiary-fixed": "#1a1c1c",
                    "on-surface-variant": "#444748",
                    "on-secondary": "#ffffff",
                    "on-tertiary": "#ffffff",
                    "secondary": "#5d5f5f",
                    "primary-fixed-dim": "#c8c6c5",
                    "secondary-fixed-dim": "#c6c6c7",
                    "primary-container": "#1c1b1b",
                    "on-secondary-fixed-variant": "#454747",
                    "on-error": "#ffffff",
                    "error": "#ba1a1a",
                    "tertiary-fixed-dim": "#c6c6c7",
                    "on-tertiary-container": "#838484",
                    "background": "#fdf8f8",
                    "error-container": "#ffdad6",
                    "on-primary-fixed": "#1c1b1b",
                    "surface-tint": "#5f5e5e",
                    "inverse-primary": "#c8c6c5",
                    "outline-variant": "#c4c7c7",
                    "secondary-fixed": "#e2e2e2",
                    "on-surface": "#1c1b1b",
                    "tertiary": "#000000",
                    "tertiary-container": "#1a1c1c",
                    "surface-bright": "#fdf8f8",
                    "on-tertiary-fixed-variant": "#454747",
                    "primary": "#000000",
                    "on-secondary-fixed": "#1a1c1c",
                    "surface-container-highest": "#e5e2e1",
                    "surface-container-low": "#f7f3f2",
                    "surface-variant": "#e5e2e1",
                    "secondary-container": "#dcdddd",
                    "surface-dim": "#ddd9d8",
                    "inverse-surface": "#313030",
                    "surface-container-lowest": "#ffffff",
                    "primary-fixed": "#e5e2e1",
                    "surface": "#fdf8f8"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "margin-desktop": "64px",
                    "border-thick": "3px",
                    "margin-mobile": "24px",
                    "gutter": "24px",
                    "unit": "8px",
                    "border-thin": "1px"
            },
            "fontFamily": {
                    "headline-lg-mobile": ["Sora"],
                    "body-md": ["Inter"],
                    "watermark": ["Sora"],
                    "metadata-sm": ["Inter"],
                    "category-label": ["EB Garamond"],
                    "display-xl": ["Sora"],
                    "headline-lg": ["Sora"]
            },
            "fontSize": {
                    "headline-lg-mobile": ["36px", {"lineHeight": "40px", "fontWeight": "700"}],
                    "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                    "watermark": ["120px", {"lineHeight": "120px", "fontWeight": "800"}],
                    "metadata-sm": ["12px", {"lineHeight": "16px", "letterSpacing": "0.1em", "fontWeight": "600"}],
                    "category-label": ["24px", {"lineHeight": "32px", "fontWeight": "600"}],
                    "display-xl": ["80px", {"lineHeight": "84px", "letterSpacing": "-0.04em", "fontWeight": "800"}],
                    "headline-lg": ["48px", {"lineHeight": "52px", "letterSpacing": "-0.02em", "fontWeight": "700"}]
            }
          },
        },
      }`,
    styles: `.material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        /* Custom Paper Texture Effect */
        .paper-texture {
            background-color: #fdf8f8;
            background-image: url("https://www.transparenttextures.com/patterns/natural-paper.png");
        }
        /* Mechanical Press Interaction */
        .active-press:active {
            transform: translate(4px, 4px);
        }
        .border-thick { border-width: 3px; }
        .border-thin { border-width: 1px; }
        body {
          min-height: max(884px, 100dvh);
        }`,
    html_template: `TopAppBar 
<header class="w-full top-0 sticky z-50 border-b border-thin border-primary bg-background flex justify-between items-center px-margin-mobile py-4">
<div class="flex items-center">
<h1 class="font-headline-lg-mobile text-headline-lg-mobile font-bold tracking-tighter text-primary">TECH FACT</h1>
</div>
</header>
<main class="min-h-[calc(100vh-128px)] flex items-center justify-center px-margin-mobile py-12 relative overflow-hidden">
<!-- Background Decoration (Swiss Style Pipes) -->
<div class="absolute left-margin-mobile top-0 bottom-0 w-[1px] bg-outline-variant opacity-30"></div>
<div class="absolute right-margin-mobile top-0 bottom-0 w-[1px] bg-outline-variant opacity-30"></div>
<!-- Central Fact Card -->
<article class="relative w-full max-w-md bg-white border-thick border-primary z-10 flex flex-col transition-all duration-300">
<!-- Watermark '01' -->
<div class="absolute -top-4 -right-4 font-watermark text-watermark text-surface-container-highest pointer-events-none z-0 opacity-40 select-none">
                01
            </div>
<!-- Card Content Cluster -->
<div class="relative z-10 p-8 flex flex-col items-start h-full">
<!-- Database Icon -->
<div class="mb-8">
<span class="material-symbols-outlined text-[48px] text-primary" style="font-variation-settings: 'wght' 200;">database</span>
</div>
<!-- Category Label -->
<span class="font-category-label text-category-label text-primary mb-2 italic">CYBERSECURITY</span>
<!-- Main Title -->
<h2 class="font-headline-lg-mobile text-headline-lg-mobile font-extrabold uppercase tracking-tighter mb-6">
                    Decentralized<br/>Ledgers
                </h2>
<!-- Description Body -->
<p class="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-12">
                    A decentralized ledger is a consensus of replicated, shared, and synchronized digital data geographically spread across multiple sites, countries, or institutions. Unlike a central database, there is no central administrator or centralized data storage.
                </p>
<!-- Footer Metadata Block -->
<div class="mt-auto w-full pt-6 border-t border-thin border-outline-variant flex justify-between items-center">
<div class="flex items-center gap-4">
<span class="font-metadata-sm text-metadata-sm uppercase text-primary">FACT #001</span>
<div class="w-[1px] h-4 bg-outline-variant"></div>
<span class="font-metadata-sm text-metadata-sm uppercase text-secondary">OCT 2023</span>
</div>
</div>
</div>
</article>
<!-- Aesthetic Floating Element (Square Bullet) -->
<div class="absolute bottom-24 left-margin-mobile w-4 h-4 bg-primary"></div>
<div class="absolute top-24 right-margin-mobile w-12 h-1 bg-primary"></div>
</main>
 BottomNavBar 
<nav class="fixed bottom-0 left-0 w-full z-50 flex justify-around items-stretch h-16 bg-background border-t border-thick border-primary">
<!-- FACTS (Active) -->
<a class="flex flex-col items-center justify-center bg-primary text-on-primary px-4 py-2 flex-1 active-press" href="#">
<span class="material-symbols-outlined">analytics</span>
<span class="font-metadata-sm text-metadata-sm uppercase mt-1">FACTS</span>
</a>
<!-- ARCHIVE -->
<a class="flex flex-col items-center justify-center text-primary px-4 py-2 flex-1 hover:bg-surface-container-highest transition-colors active-press" href="#">
<span class="material-symbols-outlined">calendar_today</span>
<span class="font-metadata-sm text-metadata-sm uppercase mt-1">ARCHIVE</span>
</a>
<!-- TOPICS -->
<a class="flex flex-col items-center justify-center text-primary px-4 py-2 flex-1 hover:bg-surface-container-highest transition-colors active-press" href="#">
<span class="material-symbols-outlined">grid_view</span>
<span class="font-metadata-sm text-metadata-sm uppercase mt-1">TOPICS</span>
</a>
<!-- SAVED -->
<a class="flex flex-col items-center justify-center text-primary px-4 py-2 flex-1 hover:bg-surface-container-highest transition-colors active-press" href="#">
<span class="material-symbols-outlined">bookmark</span>
<span class="font-metadata-sm text-metadata-sm uppercase mt-1">SAVED</span>
</a>
</nav>
<script>
        // Simple micro-interaction for the card entry
        document.addEventListener('DOMContentLoaded', () => {
            const card = document.querySelector('article');
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        });
    </script>`
  },
  {
    id: "14",
    name: "Neon Synthwave",
    fonts_url: "https://fonts.googleapis.com/css2?family=Sora:wght@100..900&display=swap",
    tailwind_config: `{
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "on-error": "#690005",
                    "on-tertiary": "#3c0090",
                    "on-secondary-fixed": "#002020",
                    "background": "#12121d",
                    "surface-dim": "#12121d",
                    "surface-variant": "#34343f",
                    "tertiary-fixed-dim": "#d1bcff",
                    "surface-container-low": "#1b1b25",
                    "outline": "#a4899d",
                    "error": "#ffb4ab",
                    "on-secondary": "#003737",
                    "on-secondary-fixed-variant": "#004f4f",
                    "tertiary-fixed": "#e9ddff",
                    "on-surface": "#e4e1f0",
                    "secondary-fixed-dim": "#00dddd",
                    "on-primary-fixed": "#380038",
                    "outline-variant": "#564052",
                    "on-tertiary-container": "#350081",
                    "on-tertiary-fixed": "#23005b",
                    "secondary-fixed": "#00fbfb",
                    "surface-bright": "#393844",
                    "on-background": "#e4e1f0",
                    "inverse-surface": "#e4e1f0",
                    "secondary": "#ffffff",
                    "tertiary-container": "#a179ff",
                    "on-surface-variant": "#dcbed4",
                    "tertiary": "#d1bcff",
                    "surface-container-high": "#292934",
                    "secondary-container": "#00fbfb",
                    "on-primary-container": "#510051",
                    "inverse-primary": "#a900a9",
                    "on-primary": "#5b005b",
                    "inverse-on-surface": "#302f3b",
                    "surface-tint": "#ffabf3",
                    "surface-container-lowest": "#0d0d17",
                    "error-container": "#93000a",
                    "on-primary-fixed-variant": "#810081",
                    "surface": "#12121d",
                    "primary": "#ffabf3",
                    "primary-fixed": "#ffd7f5",
                    "on-secondary-container": "#007070",
                    "on-error-container": "#ffdad6",
                    "surface-container-highest": "#34343f",
                    "primary-fixed-dim": "#ffabf3",
                    "surface-container": "#1f1f29",
                    "on-tertiary-fixed-variant": "#5700c9",
                    "primary-container": "#ff00ff"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "md": "16px",
                    "grid-gutter": "20px",
                    "lg": "24px",
                    "unit": "4px",
                    "sm": "8px",
                    "xs": "4px",
                    "container-max": "1200px",
                    "xl": "48px"
            },
            "fontFamily": {
                    "display-lg-mobile": ["Sora"],
                    "code-label": ["Space Mono"],
                    "button-text": ["Sora"],
                    "body-md": ["Sora"],
                    "headline-md": ["Sora"],
                    "display-lg": ["Sora"],
                    "body-lg": ["Sora"]
            },
            "fontSize": {
                    "display-lg-mobile": ["36px", {"lineHeight": "1.1", "fontWeight": "800"}],
                    "code-label": ["12px", {"lineHeight": "1.0", "letterSpacing": "0.1em", "fontWeight": "400"}],
                    "button-text": ["14px", {"lineHeight": "1.0", "fontWeight": "700"}],
                    "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                    "headline-md": ["24px", {"lineHeight": "1.2", "fontWeight": "700"}],
                    "display-lg": ["48px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "800"}],
                    "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}]
            }
          },
        },
      }`,
    styles: `body {
            background-color: #0d0d17;
            background-image: 
                linear-gradient(rgba(0, 251, 251, 0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 251, 251, 0.05) 1px, transparent 1px);
            background-size: 32px 32px;
            overflow-x: hidden;
        }

        .scanline {
            width: 100%;
            height: 2px;
            background: rgba(0, 251, 251, 0.1);
            position: absolute;
            animation: scanline 8s linear infinite;
            z-index: 10;
            pointer-events: none;
        }

        @keyframes scanline {
            0% { top: -2px; }
            100% { top: 100%; }
        }

        .glow-pink {
            box-shadow: 0 0 25px rgba(255, 0, 255, 0.4), inset 0 0 15px rgba(255, 0, 255, 0.2);
        }

        .glow-cyan {
            text-shadow: 0 0 10px rgba(0, 251, 251, 0.8);
        }

        .glitch-effect {
            animation: glitch 3s infinite;
        }

        @keyframes glitch {
            0% { transform: translate(0); }
            1% { transform: translate(-2px, 1px); }
            2% { transform: translate(2px, -1px); }
            3% { transform: translate(0); }
            100% { transform: translate(0); }
        }

        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        body {
          min-height: max(884px, 100dvh);
        }`,
    html_template: `<div class="scanline"></div>
 TopAppBar 
<header class="w-full top-0 sticky bg-surface-container-lowest/70 backdrop-blur-xl border-b border-primary/30 drop-shadow-[0_0_8px_#ffabf344] z-50 flex justify-between items-center px-md py-sm">
<div class="flex items-center gap-sm">
<span class="material-symbols-outlined text-primary" data-icon="terminal">terminal</span>
<h1 class="font-display-lg-mobile text-display-lg-mobile text-primary drop-shadow-[0_0_10px_#ffabf377] uppercase tracking-tighter">NEON PROTOCOL</h1>
</div>
</header>
 Main Content 
<main class="flex-1 flex flex-col items-center justify-center px-md py-xl relative">
<!-- Central Fact Card -->
<div class="w-full max-w-sm relative z-20">
<!-- Decorative corner brackets -->
<div class="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-secondary-fixed shadow-[0_0_10px_#00fbfb]"></div>
<div class="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-secondary-fixed shadow-[0_0_10px_#00fbfb]"></div>
<div class="bg-surface-container-lowest/80 border border-primary/50 rounded-lg p-lg backdrop-blur-xl glow-pink overflow-hidden group hover:scale-[1.02] transition-transform duration-500 card-canvas">
<!-- ID Stamp -->
<div class="flex justify-between items-center mb-md">
<span class="font-code-label text-code-label text-secondary-fixed-dim bg-secondary-fixed/10 px-2 py-0.5 rounded border border-secondary-fixed/20">[FACT_4029]</span>
</div>
<!-- Category -->
<div class="flex items-center gap-xs mb-sm">
<span class="w-2 h-2 bg-secondary-fixed rounded-full animate-pulse shadow-[0_0_8px_#00fbfb]"></span>
<span class="font-code-label text-code-label text-secondary-fixed-dim uppercase tracking-widest glow-cyan">Cybernetics &amp; AI</span>
</div>
<!-- Headline -->
<h2 class="font-headline-md text-headline-md-mobile text-secondary mb-md glitch-effect tracking-tight">Neural Interfacing</h2>
<!-- Main Fact Image (Contextual Graphic) -->
<div class="relative w-full h-48 mb-lg rounded overflow-hidden border border-primary/20">
<img class="w-full h-full object-cover draggable" data-alt="A cinematic, high-contrast digital art piece of a futuristic human eye with intricate glowing neon neural circuits radiating from the iris." data-orig-src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB_uygrrbV1RGwI1bBxR-XPf9YBoiS-s1qljOv3N3VeRbktzZWEKoG9wYtIsJLL9UcJyM2PWgSfQ_71NCAehzBA6DlBwgVEaLZCh4xu9hblwPXPB591vOgT6PwfJUiclw8Lm9gEb_lNzZaDqVcyZ86SXgqTYl2ujaBWOtdFcYbsZvuGXUV5Gij50jQEXFz2ENcOAXXicwSXcaBzp8LT6vOEwYAUHj-R_7fV9ZozfVqw7RwVQ0DqXvjuxywa2GbFTyf9dYQlGxoyls" data-tid="illustration" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB_uygrrbV1RGwI1bBxR-XPf9YBoiS-s1qljOv3N3VeRbktzZWEKoG9wYtIsJLL9UcJyM2PWgSfQ_71NCAehzBA6DlBwgVEaLZCh4xu9hblwPXPB591vOgT6PwfJUiclw8Lm9gEb_lNzZaDqVcyZ86SXgqTYl2ujaBWOtdFcYbsZvuGXUV5Gij50jQEXFz2ENcOAXXicwSXcaBzp8LT6vOEwYAUHj-R_7fV9ZozfVqw7RwVQ0DqXvjuxywa2GbFTyf9dYQlGxoyls"/>
</div>
<!-- Body Text -->
<p class="font-body-md text-on-surface-variant leading-relaxed mb-lg">
                    Recent breakthroughs in <span class="text-primary font-bold">biocompatible neural lace</span> allow for direct, high-bandwidth data transmission between the cerebral cortex and external AI nodes. This integration potentially increases human cognitive processing speeds by up to <span class="text-secondary-fixed font-code-label">400%</span>, effectively blurring the line between biological thought and algorithmic execution.
                </p>
<!-- Interactive CTA -->
<button class="w-full py-md bg-primary-container text-on-primary-container font-button-text text-button-text rounded-sm uppercase tracking-tighter active:scale-95 transition-all hover:brightness-110 flex items-center justify-center gap-sm shadow-[0_4px_15px_rgba(255,0,255,0.4)]">
                    Sync Intelligence
                    <span class="material-symbols-outlined text-md" data-icon="bolt" style="font-variation-settings: 'FILL' 1;">bolt</span>
</button>
</div>
</div>
<!-- Secondary Info Cluster -->
<div class="w-full max-w-sm mt-xl grid grid-cols-2 gap-md">
<div class="bg-surface-container/50 border border-secondary-fixed/20 p-md rounded-lg flex flex-col gap-xs backdrop-blur-md">
<span class="font-code-label text-[10px] text-on-surface-variant/60 uppercase">Data Integrity</span>
<div class="flex items-center gap-sm">
<span class="text-secondary-fixed font-code-label text-lg">99.8%</span>
</div>
</div>
<div class="bg-surface-container/50 border border-primary/20 p-md rounded-lg flex flex-col gap-xs backdrop-blur-md">
<span class="font-code-label text-[10px] text-on-surface-variant/60 uppercase">Latency Rate</span>
<div class="flex items-center gap-sm">
<span class="text-primary font-code-label text-lg">2ms</span>
</div>
</div>
</div>
</main>
 Spacer for Navigation 
<div class="h-24"></div>
 BottomNavBar 
<nav class="fixed bottom-0 w-full z-50 bg-surface-container-lowest/80 backdrop-blur-xl border-t border-secondary-fixed/30 drop-shadow-[0_0_15px_#00dddd44]">
<div class="flex justify-around items-center h-20 px-4 pb-safe w-full">
<!-- Facts (Active) -->
<a class="flex flex-col items-center justify-center text-secondary-fixed bg-secondary-fixed/10 rounded-xl px-4 py-1 border border-secondary-fixed/50 shadow-[0_0_10px_#00fbfb66] transition-transform active:scale-90" href="#">
<span class="material-symbols-outlined" data-icon="bolt" style="font-variation-settings: 'FILL' 1;">bolt</span>
<span class="font-code-label text-code-label">Facts</span>
</a>
<!-- Archive -->
<a class="flex flex-col items-center justify-center text-on-surface-variant/60 grayscale hover:text-secondary-fixed transition-all active:scale-90" href="#">
<span class="material-symbols-outlined" data-icon="database">database</span>
<span class="font-code-label text-code-label">Archive</span>
</a>
<!-- Topics -->
<a class="flex flex-col items-center justify-center text-on-surface-variant/60 grayscale hover:text-secondary-fixed transition-all active:scale-90" href="#">
<span class="material-symbols-outlined" data-icon="category">category</span>
<span class="font-code-label text-code-label">Topics</span>
</a>
<!-- Settings -->
<a class="flex flex-col items-center justify-center text-on-surface-variant/60 grayscale hover:text-secondary-fixed transition-all active:scale-90" href="#">
<span class="material-symbols-outlined" data-icon="settings">settings</span>
<span class="font-code-label text-code-label">Settings</span>
</a>
</div>
</nav>
<script>
        // Micro-interaction: Subtle parallax on mouse/touch move
        document.addEventListener('mousemove', (e) => {
            const card = document.querySelector('.glow-pink');
            const x = (window.innerWidth / 2 - e.pageX) / 40;
            const y = (window.innerHeight / 2 - e.pageY) / 40;
            card.style.transform = \`rotateY(\${x}deg) rotateX(\${y}deg)\`;
        });

        // Glitch trigger on click
        document.addEventListener('click', (e) => {
            const headline = document.querySelector('h2');
            headline.classList.add('glitch-effect');
        });
    </script>`
  },
  {
    id: "15",
    name: "Cyber-Ether Emerald",
    fonts_url: "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Geist:wght@400;500&family=JetBrains+Mono:wght@500&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap",
    tailwind_config: `{
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "surface-dim": "#0a110f",
                    "surface-container": "#111a17",
                    "outline": "#70817c",
                    "surface-container-lowest": "#060a09",
                    "primary-fixed": "#10b981", /* Emerald 500 */
                    "on-primary": "#003926",
                    "on-primary-container": "#00704a",
                    "on-secondary-fixed-variant": "#00513b",
                    "on-surface": "#e1e3e0",
                    "tertiary-fixed": "#efdbff",
                    "on-surface-variant": "#bfc9c4",
                    "tertiary-container": "#efdbff",
                    "inverse-primary": "#059669",
                    "tertiary": "#ffffff",
                    "tertiary-fixed-dim": "#dcb8ff",
                    "secondary": "#34d399", /* Emerald 400 */
                    "inverse-on-surface": "#2e312f",
                    "on-background": "#e1e3e0",
                    "surface": "#0a110f",
                    "secondary-container": "#065f46",
                    "on-secondary-container": "#d1fae5",
                    "secondary-fixed-dim": "#34d399",
                    "on-error": "#690005",
                    "outline-variant": "#3f4945",
                    "surface-variant": "#3f4945",
                    "error": "#ffb4ab",
                    "surface-bright": "#343b38",
                    "on-primary-fixed": "#002114",
                    "on-primary-fixed-variant": "#00513b",
                    "on-secondary": "#003926",
                    "primary-container": "#10b981",
                    "primary": "#ffffff",
                    "surface-container-low": "#19211e",
                    "surface-container-high": "#232b28",
                    "on-tertiary-fixed-variant": "#6700b5",
                    "error-container": "#93000a",
                    "on-tertiary-container": "#8b2ce3",
                    "inverse-surface": "#e1e3e0",
                    "on-error-container": "#ffdad6",
                    "background": "#0a110f",
                    "on-secondary-fixed": "#002114",
                    "surface-container-highest": "#2d3532",
                    "surface-tint": "#10b981",
                    "primary-fixed-dim": "#34d399",
                    "secondary-fixed": "#6ee7b7",
                    "on-tertiary-fixed": "#2c0051",
                    "on-tertiary": "#480081"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "sm": "16px",
                    "xl": "64px",
                    "gutter": "24px",
                    "xs": "8px",
                    "md": "24px",
                    "base": "4px",
                    "lg": "40px",
                    "container-max": "1280px"
            },
            "fontFamily": {
                    "display-lg-mobile": ["Sora"],
                    "display-lg": ["Sora"],
                    "body-md": ["Geist"],
                    "body-lg": ["Geist"],
                    "headline-md": ["Sora"],
                    "button": ["Sora"],
                    "label-sm": ["JetBrains Mono"]
            },
            "fontSize": {
                    "display-lg-mobile": ["32px", {"lineHeight": "1.2", "fontWeight": "800"}],
                    "display-lg": ["48px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "800"}],
                    "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                    "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                    "headline-md": ["24px", {"lineHeight": "1.3", "fontWeight": "600"}],
                    "button": ["14px", {"lineHeight": "1.0", "fontWeight": "700"}],
                    "label-sm": ["12px", {"lineHeight": "1.0", "letterSpacing": "0.1em", "fontWeight": "500"}]
            }
          },
        },
      }`,
    styles: `body {
            background: radial-gradient(circle at 50% 50%, #064e3b 0%, #0a110f 100%);
            overflow-x: hidden;
            min-height: 100vh;
        }

        .mesh-gradient {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            background: 
                radial-gradient(at 0% 0%, rgba(16, 185, 129, 0.15) 0px, transparent 50%),
                radial-gradient(at 100% 0%, rgba(5, 150, 105, 0.2) 0px, transparent 50%),
                radial-gradient(at 100% 100%, rgba(4, 120, 87, 0.1) 0px, transparent 50%),
                radial-gradient(at 0% 100%, rgba(6, 78, 59, 0.2) 0px, transparent 50%);
        }

        .glass-card {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(16, 185, 129, 0.3);
            box-shadow: 0 0 30px rgba(16, 185, 129, 0.1);
        }

        .neon-border-glow {
            box-shadow: 0 0 15px rgba(16, 185, 129, 0.4), inset 0 0 10px rgba(16, 185, 129, 0.2);
        }

        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }

        @keyframes scanline {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
        }

        .scanline {
            width: 100%;
            height: 2px;
            background: linear-gradient(to right, transparent, rgba(16, 185, 129, 0.5), transparent);
            position: absolute;
            animation: scanline 8s linear infinite;
            pointer-events: none;
        }
    

    body {
      min-height: max(884px, 100dvh);
    }`,
    html_template: `<div class="mesh-gradient"></div>
 TopAppBar 
<header class="fixed top-0 left-0 w-full z-50 flex items-center px-sm h-16 bg-surface/5 backdrop-blur-xl border-b border-white/10">
<div class="flex items-center gap-xs">
<div class="w-8 h-8 rounded-full bg-primary-container/20 flex items-center justify-center border border-primary-fixed/30 overflow-hidden card-canvas">
<img class="w-full h-full object-cover draggable" data-tid="logo" src="{{LOGO_SRC}}" style=""/>
</div>
<h1 class="font-display-lg-mobile text-display-lg-mobile text-primary tracking-tighter draggable" data-tid="club-title">{{CLUB_TITLE}}</h1>
</div>
</header>
<main class="relative pt-24 pb-32 px-sm min-h-screen flex flex-col items-center justify-center overflow-hidden">
<!-- Background Atmospheric Element -->
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30 pointer-events-none">
<div class="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-fixed blur-[120px] rounded-full"></div>
<div class="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary-container blur-[120px] rounded-full"></div>
</div>
<!-- Centerpiece: Tech Fact Card with Split Layout -->
<section class="w-full max-w-md relative z-10 group">
<div class="glass-card neon-border-glow flex flex-col relative overflow-hidden rounded-none border-primary-fixed transition-all duration-500 group-hover:scale-[1.01]">
<div class="scanline"></div>
<!-- Category Tag Header -->
<div class="px-md pt-md pb-xs flex items-center justify-between">
<div class="flex items-center gap-xs">
<span class="material-symbols-outlined text-secondary text-2xl" data-icon="database">database</span>
<span class="font-label-sm text-label-sm text-primary-fixed tracking-[0.2em] font-bold">DISTRIBUTED SYSTEMS</span>
</div>
<div class="w-2 h-2 bg-primary-fixed animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
</div>
<!-- Content Split Layout -->
<div class="flex flex-col">
<!-- Top Section: Fact Text -->
<div class="p-md pt-xs">
<h2 class="font-display-lg-mobile text-display-lg-mobile text-primary leading-tight mb-sm">CAP Theorem</h2>
<div class="w-12 h-1 bg-primary-fixed mb-sm"></div>
<p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                            Formulated by Eric Brewer, the CAP theorem states that a distributed data store can only provide two of three guarantees: Consistency, Availability, and Partition Tolerance. In the event of a network failure, a system must choose between being consistent or available.
                        </p>
</div>
<!-- Middle Section: Supporting Metric/Icon (Vertical Split) -->
<div class="flex border-y border-white/10 bg-white/5">
<div class="flex-1 p-md flex flex-col items-center justify-center border-r border-white/10">
<span class="font-display-lg-mobile text-primary leading-none">2/3</span>
<span class="font-label-sm text-outline text-[10px] mt-xs uppercase">Guarantees Max</span>
</div>
<div class="flex-1 p-md flex flex-col items-center justify-center gap-xs">
<div class="flex gap-1">
<div class="w-2 h-2 rounded-full bg-primary-fixed"></div>
<div class="w-2 h-2 rounded-full bg-primary-fixed"></div>
<div class="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<span class="font-label-sm text-primary-fixed text-[10px] uppercase font-bold tracking-widest">Trade-off Ratio</span>
</div>
</div>
</div>
<!-- Footer Meta Area -->
<div class="p-md py-sm flex justify-between items-center bg-black/20">
<span class="font-label-sm text-label-sm text-outline">FACT #1024</span>
<button class="bg-primary-fixed text-on-primary font-button text-button px-md py-2 hover:bg-secondary transition-all active:scale-95 flex items-center gap-xs uppercase">
                        Deep Dive
                        <span class="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
</section>
<!-- High-tech decorative overlay -->
<div class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-surface-dim to-transparent pointer-events-none z-0"></div>
</main>
 BottomNavBar 
<nav class="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-sm py-xs bg-surface-container/20 backdrop-blur-xl border-t border-white/10 shadow-[0_-4px_20px_rgba(16,185,129,0.1)]">
<a class="flex flex-col items-center justify-center bg-primary-fixed/20 text-primary-fixed rounded-xl p-2 shadow-[0_0_15px_rgba(16,185,129,0.2)] scale-90 duration-200" href="#">
<span class="material-symbols-outlined" data-icon="lightbulb" style="font-variation-settings: 'FILL' 1;">lightbulb</span>
</a>
<a class="flex flex-col items-center justify-center text-outline p-2 hover:text-primary-fixed transition-colors" href="#">
<span class="material-symbols-outlined" data-icon="history">history</span>
</a>
<a class="flex flex-col items-center justify-center text-outline p-2 hover:text-primary-fixed transition-colors" href="#">
<span class="material-symbols-outlined" data-icon="bookmark">bookmark</span>
</a>
<a class="flex flex-col items-center justify-center text-outline p-2 hover:text-primary-fixed transition-colors" href="#">
<span class="material-symbols-outlined" data-icon="settings">settings</span>
</a>
</nav>
 Footer 
<footer class="flex flex-col items-center justify-center w-full gap-base pb-xl mt-12 mb-20 relative z-10">
<p class="font-label-sm text-label-sm text-outline">© IEEE CIS UPES Student Branch</p>
<div class="flex gap-md">
<a class="font-label-sm text-label-sm text-secondary hover:text-primary-fixed transition-colors active:opacity-70 draggable" data-tid="handle" href="#">{{HANDLE}}</a>
</div>
</footer>
<script>
        const card = document.querySelector('.glass-card');
        document.addEventListener('mousemove', (e) => {
            if (window.innerWidth > 768) {
                const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
                const yAxis = (window.innerHeight / 2 - e.pageY) / 50;
                card.style.transform = \`rotateY(\${xAxis}deg) rotateX(\${yAxis}deg)\`;
            }
        });

        document.addEventListener('mouseleave', () => {
            card.style.transform = \`rotateY(0deg) rotateX(0deg)\`;
        });
    </script>`
  },
  {
    id: "16",
    name: "Cyber-Ether Orange",
    fonts_url: "https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=JetBrains+Mono:wght@100..900&family=Sora:wght@100..900&display=swap",
    tailwind_config: `{
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "surface-dim": "#12121d",
                    "surface-container": "#1f1f29",
                    "outline": "#839493",
                    "surface-container-lowest": "#0d0d17",
                    "primary-fixed": "#ff5e07", // Electric Orange
                    "on-primary": "#ffffff",
                    "on-primary-container": "#531900",
                    "on-secondary-fixed-variant": "#802a00",
                    "on-surface": "#e4e1f0",
                    "tertiary-fixed": "#efdbff",
                    "on-surface-variant": "#b9cac9",
                    "tertiary-container": "#efdbff",
                    "inverse-primary": "#006a6a",
                    "tertiary": "#ffffff",
                    "tertiary-fixed-dim": "#dcb8ff",
                    "secondary": "#ffb59a",
                    "inverse-on-surface": "#302f3b",
                    "on-background": "#e4e1f0",
                    "surface": "#12121d",
                    "secondary-container": "#ff5e07",
                    "on-secondary-container": "#531900",
                    "secondary-fixed-dim": "#ffb59a",
                    "on-error": "#690005",
                    "outline-variant": "#3a4a49",
                    "surface-variant": "#34343f",
                    "error": "#ffb4ab",
                    "surface-bright": "#393844",
                    "on-primary-fixed": "#370e00",
                    "on-primary-fixed-variant": "#802a00",
                    "on-secondary": "#5a1b00",
                    "primary-container": "#ffdbce",
                    "primary": "#ff5e07", // Primary as Orange
                    "surface-container-low": "#1b1b25",
                    "surface-container-high": "#292934",
                    "on-tertiary-fixed-variant": "#6700b5",
                    "error-container": "#93000a",
                    "on-tertiary-container": "#8b2ce3",
                    "inverse-surface": "#e4e1f0",
                    "on-error-container": "#ffdad6",
                    "background": "#12121d",
                    "on-secondary-fixed": "#370e00",
                    "surface-container-highest": "#34343f",
                    "surface-tint": "#ff5e07",
                    "primary-fixed-dim": "#ffb59a",
                    "secondary-fixed": "#ffdbce",
                    "on-tertiary-fixed": "#2c0051",
                    "on-tertiary": "#480081"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "sm": "16px",
                    "xl": "64px",
                    "gutter": "24px",
                    "xs": "8px",
                    "md": "24px",
                    "base": "4px",
                    "lg": "40px",
                    "container-max": "1280px"
            },
            "fontFamily": {
                    "display-lg-mobile": ["Sora"],
                    "display-lg": ["Sora"],
                    "body-md": ["Geist"],
                    "body-lg": ["Geist"],
                    "headline-md": ["Sora"],
                    "button": ["Sora"],
                    "label-sm": ["JetBrains Mono"]
            },
            "fontSize": {
                    "display-lg-mobile": ["32px", {"lineHeight": "1.2", "fontWeight": "800"}],
                    "display-lg": ["48px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "800"}],
                    "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                    "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                    "headline-md": ["24px", {"lineHeight": "1.3", "fontWeight": "600"}],
                    "button": ["14px", {"lineHeight": "1.0", "fontWeight": "700"}],
                    "label-sm": ["12px", {"lineHeight": "1.0", "letterSpacing": "0.1em", "fontWeight": "500"}]
            }
          },
        },
      }`,
    styles: `body {
            background: radial-gradient(circle at 50% 50%, #2d1b14 0%, #12121d 100%);
            overflow-x: hidden;
            min-height: 100vh;
        }

        .mesh-gradient {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            background: 
                radial-gradient(at 0% 0%, rgba(255, 94, 7, 0.15) 0px, transparent 50%),
                radial-gradient(at 100% 0%, rgba(139, 44, 227, 0.1) 0px, transparent 50%),
                radial-gradient(at 100% 100%, rgba(255, 181, 154, 0.1) 0px, transparent 50%),
                radial-gradient(at 0% 100%, rgba(255, 94, 7, 0.2) 0px, transparent 50%);
        }

        .glass-card {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 94, 7, 0.3);
            box-shadow: 0 0 30px rgba(255, 94, 7, 0.1);
        }

        .neon-border-glow {
            box-shadow: 0 0 15px rgba(255, 94, 7, 0.4), inset 0 0 10px rgba(255, 94, 7, 0.2);
        }

        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }

        @keyframes scanline {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
        }

        .scanline {
            width: 100%;
            height: 2px;
            background: linear-gradient(to right, transparent, rgba(255, 94, 7, 0.5), transparent);
            position: absolute;
            animation: scanline 8s linear infinite;
            pointer-events: none;
        }

        .layered-bg-element {
            position: absolute;
            top: -10px;
            right: -10px;
            width: 100%;
            height: 100%;
            border: 1px solid rgba(255, 94, 7, 0.2);
            z-index: -1;
            background: rgba(255, 94, 7, 0.03);
            pointer-events: none;
        }
    

        body {
            min-height: max(884px, 100dvh);
        }`,
    html_template: `<div class="mesh-gradient"></div>
 TopAppBar 
<header class="fixed top-0 left-0 w-full z-50 flex items-center px-sm h-16 bg-surface/5 dark:bg-surface/5 backdrop-blur-xl border-b border-white/10">
<div class="flex items-center gap-xs">
<div class="w-8 h-8 rounded-full bg-primary-container/20 flex items-center justify-center border border-primary-fixed/30 overflow-hidden card-canvas">
<img alt="IEEE CIS UPES Logo" class="w-full h-full object-cover draggable" data-tid="logo" src="{{LOGO_SRC}}" style=""/>
</div>
<h1 class="font-display-lg-mobile text-display-lg-mobile text-primary tracking-tighter draggable" data-tid="club-title">{{CLUB_TITLE}}</h1>
</div>
</header>
<main class="relative pt-24 pb-32 px-sm min-h-screen flex flex-col items-center justify-center overflow-hidden">
<!-- Background Atmospheric Element -->
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30 pointer-events-none">
<div class="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-fixed blur-[120px] rounded-full"></div>
<div class="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary-container blur-[120px] rounded-full"></div>
</div>
<!-- Centerpiece: Layered Tech Fact Card -->
<div class="w-full max-w-md relative z-10">
<section class="relative group">
<!-- Secondary Layer -->
<div class="layered-bg-element"></div>
<!-- Main Fact Card -->
<div class="glass-card neon-border-glow p-md flex flex-col gap-md relative overflow-hidden rounded-none border-primary transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
<div class="scanline"></div>
<!-- Category Icon and Tag -->
<div class="flex items-center justify-between">
<div class="flex items-center gap-xs">
<span class="material-symbols-outlined text-primary text-3xl" data-icon="dns">dns</span>
<span class="font-label-sm text-label-sm text-primary-fixed tracking-[0.2em] font-bold">EDGE COMPUTING</span>
</div>
<div class="w-2 h-2 bg-primary-fixed animate-pulse shadow-[0_0_8px_rgba(255,94,7,0.8)]"></div>
</div>
<!-- Content Body -->
<div class="flex flex-col gap-sm">
<h2 class="font-display-lg-mobile text-display-lg-mobile text-on-surface leading-tight">Proximity Processing</h2>
<div class="w-12 h-1 bg-primary"></div>
<p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                            Edge Computing shifts web architecture by processing data near the source rather than in a centralized cloud. This drastic reduction in latency enables real-time decisions for IoT and AR, while decentralized nodes ensure higher resilience and bandwidth efficiency across the network.
                        </p>
</div>
<!-- Meta/Action Area -->
<div class="pt-sm border-t border-white/10 flex justify-between items-center">
<span class="font-label-sm text-label-sm text-outline">FACT #1024</span>
<button class="bg-primary text-on-primary font-button text-button px-md py-xs rounded-none hover:bg-on-secondary-container transition-all active:scale-95 flex items-center gap-xs">
                            EXPLORE
                            <span class="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</div>
</section>
</div>
<!-- High-tech grid overlay decoration -->
<div class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-surface-dim to-transparent pointer-events-none z-0"></div>
</main>
 BottomNavBar 
<nav class="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-sm py-xs bg-surface-container/10 dark:bg-surface-container/10 backdrop-blur-xl border-t border-white/10 shadow-[0_-4px_20px_rgba(255,94,7,0.1)]">
<a class="flex flex-col items-center justify-center bg-primary/20 text-primary rounded-xl p-2 shadow-[0_0_15px_rgba(255,94,7,0.3)] scale-90 duration-200" href="#">
<span class="material-symbols-outlined" data-icon="lightbulb" style="font-variation-settings: 'FILL' 1;">lightbulb</span>
</a>
<a class="flex flex-col items-center justify-center text-outline p-2 hover:text-primary transition-colors" href="#">
<span class="material-symbols-outlined" data-icon="history">history</span>
</a>
<a class="flex flex-col items-center justify-center text-outline p-2 hover:text-primary transition-colors" href="#">
<span class="material-symbols-outlined" data-icon="bookmark">bookmark</span>
</a>
<a class="flex flex-col items-center justify-center text-outline p-2 hover:text-primary transition-colors" href="#">
<span class="material-symbols-outlined" data-icon="settings">settings</span>
</a>
</nav>
 Footer 
<footer class="flex flex-col items-center justify-center w-full gap-base pb-xl mt-12 mb-20 relative z-10">
<p class="font-label-sm text-label-sm text-outline">© IEEE CIS UPES Student Branch</p>
<div class="flex gap-md">
<a class="font-label-sm text-label-sm text-primary hover:text-secondary-fixed transition-colors active:opacity-70 draggable" data-tid="handle" href="#">{{HANDLE}}</a>
</div>
</footer>
<script>
        // Micro-interaction for the card following mouse/tilt
        const container = document.querySelector('.group');
        const card = document.querySelector('.glass-card');
        const layeredBg = document.querySelector('.layered-bg-element');

        document.addEventListener('mousemove', (e) => {
            if (window.innerWidth > 768) {
                const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
                const yAxis = (window.innerHeight / 2 - e.pageY) / 50;
                card.style.transform = \`rotateY(\${xAxis}deg) rotateX(\${yAxis}deg)\`;
                layeredBg.style.transform = \`translateX(\${-xAxis * 2}px) translateY(\${-yAxis * 2}px)\`;
            }
        });

        // Reset on mouse leave
        document.addEventListener('mouseleave', () => {
            card.style.transform = \`rotateY(0deg) rotateX(0deg)\`;
            layeredBg.style.transform = \`translateX(0px) translateY(0px)\`;
        });
    </script>`
  },
  {
    id: "17",
    name: "Cyber-Ether Violet",
    fonts_url: "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Geist:wght@400;500&family=JetBrains+Mono:wght@500&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap",
    tailwind_config: `{
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "surface-dim": "#12121d",
                    "surface-container": "#1f1f29",
                    "outline": "#839493",
                    "surface-container-lowest": "#0d0d17",
                    "primary-fixed": "#dcb8ff", // Updated to Hot Violet (tertiary-fixed-dim)
                    "on-primary": "#2c0051",
                    "on-primary-container": "#6700b5",
                    "on-secondary-fixed-variant": "#802a00",
                    "on-surface": "#e4e1f0",
                    "tertiary-fixed": "#efdbff",
                    "on-surface-variant": "#b9cac9",
                    "tertiary-container": "#efdbff",
                    "inverse-primary": "#dcb8ff",
                    "tertiary": "#ffffff",
                    "tertiary-fixed-dim": "#dcb8ff",
                    "secondary": "#ffb59a",
                    "inverse-on-surface": "#302f3b",
                    "on-background": "#e4e1f0",
                    "surface": "#12121d",
                    "secondary-container": "#ff5e07",
                    "on-secondary-container": "#531900",
                    "secondary-fixed-dim": "#ffb59a",
                    "on-error": "#690005",
                    "outline-variant": "#3a4a49",
                    "surface-variant": "#34343f",
                    "error": "#ffb4ab",
                    "surface-bright": "#393844",
                    "on-primary-fixed": "#2c0051",
                    "on-primary-fixed-variant": "#6700b5",
                    "on-secondary": "#5a1b00",
                    "primary-container": "#dcb8ff",
                    "primary": "#ffffff",
                    "surface-container-low": "#1b1b25",
                    "surface-container-high": "#292934",
                    "on-tertiary-fixed-variant": "#6700b5",
                    "error-container": "#93000a",
                    "on-tertiary-container": "#8b2ce3",
                    "inverse-surface": "#e4e1f0",
                    "on-error-container": "#ffdad6",
                    "background": "#12121d",
                    "on-secondary-fixed": "#370e00",
                    "surface-container-highest": "#34343f",
                    "surface-tint": "#dcb8ff",
                    "primary-fixed-dim": "#dcb8ff",
                    "secondary-fixed": "#ffdbce",
                    "on-tertiary-fixed": "#2c0051",
                    "on-tertiary": "#480081"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "sm": "16px",
                    "xl": "64px",
                    "gutter": "24px",
                    "xs": "8px",
                    "md": "24px",
                    "base": "4px",
                    "lg": "40px",
                    "container-max": "1280px"
            },
            "fontFamily": {
                    "display-lg-mobile": ["Sora"],
                    "display-lg": ["Sora"],
                    "body-md": ["Geist"],
                    "body-lg": ["Geist"],
                    "headline-md": ["Sora"],
                    "button": ["Sora"],
                    "label-sm": ["JetBrains Mono"]
            },
            "fontSize": {
                    "display-lg-mobile": ["32px", {"lineHeight": "1.2", "fontWeight": "800"}],
                    "display-lg": ["48px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "800"}],
                    "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                    "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                    "headline-md": ["24px", {"lineHeight": "1.3", "fontWeight": "600"}],
                    "button": ["14px", {"lineHeight": "1.0", "fontWeight": "700"}],
                    "label-sm": ["12px", {"lineHeight": "1.0", "letterSpacing": "0.1em", "fontWeight": "500"}]
            }
          },
        },
      }`,
    styles: `body {
            background: #12121d;
            overflow-x: hidden;
            min-height: 100vh;
        }

        .mesh-gradient {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            background: 
                radial-gradient(at 50% 0%, rgba(139, 44, 227, 0.15) 0px, transparent 60%),
                radial-gradient(at 100% 100%, rgba(139, 44, 227, 0.1) 0px, transparent 50%);
        }

        .violet-glow {
            text-shadow: 0 0 20px rgba(139, 44, 227, 0.6);
        }

        .minimalist-card {
            background: transparent;
            border: none;
        }

        .material-symbols-outlined {
            font-variation-settings: 'FILL' 1, 'wght' 300, 'GRAD' 0, 'opsz' 48;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }

        .animate-float {
            animation: float 6s ease-in-out infinite;
        }`,
    html_template: `<div class="mesh-gradient"></div>
 TopAppBar 
<header class="fixed top-0 left-0 w-full z-50 flex items-center px-sm h-16 backdrop-blur-md">
<div class="flex items-center gap-xs mx-auto">
<div class="w-6 h-6 rounded-full overflow-hidden border border-primary-fixed/30 card-canvas">
<img alt="IEEE CIS Logo" class="w-full h-full object-cover draggable" data-tid="logo" src="{{LOGO_SRC}}" style=""/>
</div>
<h1 class="font-label-sm text-label-sm text-primary-fixed tracking-widest opacity-80 uppercase draggable" data-tid="club-title">{{CLUB_TITLE}}</h1>
</div>
</header>
<main class="relative pt-32 pb-40 px-sm min-h-screen flex flex-col items-center justify-center text-center">
<!-- Atmospheric Glow -->
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10">
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-on-tertiary-container/20 blur-[140px] rounded-full"></div>
</div>
<!-- Minimalist Centered Layout -->
<section class="max-w-md flex flex-col items-center gap-lg">
<!-- Symbolic Icon -->
<div class="relative">
<div class="absolute inset-0 bg-primary-fixed/20 blur-2xl rounded-full scale-150"></div>
<span class="material-symbols-outlined text-[80px] text-primary-fixed violet-glow animate-float relative z-10" data-icon="enhanced_encryption">enhanced_encryption</span>
</div>
<!-- Content -->
<div class="flex flex-col gap-md">
<div class="flex flex-col gap-xs">
<span class="font-label-sm text-label-sm text-primary-fixed/60 tracking-[0.3em] uppercase">Cryptography</span>
<h2 class="font-display-lg-mobile text-display-lg text-primary violet-glow">Zero-Knowledge Proofs</h2>
</div>
<div class="w-16 h-0.5 bg-primary-fixed/30 mx-auto"></div>
<p class="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-sm">
                    A Zero-Knowledge Proof (ZKP) allows one party to prove to another that they know a specific piece of information without revealing the information itself. It is a cornerstone of modern privacy-preserving technologies.
                </p>
</div>
<!-- Meta -->
<div class="flex flex-col items-center gap-md pt-sm">
<span class="font-label-sm text-label-sm text-outline/50">FACT #1,024</span>
<button class="group flex flex-col items-center gap-xs">
<div class="w-12 h-12 rounded-full border border-primary-fixed/20 flex items-center justify-center group-hover:bg-primary-fixed/10 transition-all duration-300">
<span class="material-symbols-outlined text-primary-fixed" data-icon="expand_more">expand_more</span>
</div>
<span class="font-label-sm text-[10px] text-primary-fixed tracking-widest opacity-60">DETAILS</span>
</button>
</div>
</section>
</main>
 Bottom Navigation 
<nav class="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-md px-md py-sm bg-surface-container-low/40 backdrop-blur-2xl rounded-full border border-white/5 shadow-2xl">
<a class="text-primary-fixed p-2" href="#">
<span class="material-symbols-outlined" data-icon="auto_awesome">auto_awesome</span>
</a>
<a class="text-outline/40 hover:text-primary-fixed transition-colors p-2" href="#">
<span class="material-symbols-outlined" data-icon="history">history</span>
</a>
<a class="text-outline/40 hover:text-primary-fixed transition-colors p-2" href="#">
<span class="material-symbols-outlined" data-icon="bookmark_heart">bookmark_heart</span>
</a>
<a class="text-outline/40 hover:text-primary-fixed transition-colors p-2" href="#">
<span class="material-symbols-outlined" data-icon="grid_view">grid_view</span>
</a>
</nav>
 Footer 
<footer class="fixed bottom-0 left-0 w-full pb-4 flex flex-col items-center justify-center opacity-30 pointer-events-none">
<p class="font-label-sm text-[10px]">© IEEE CIS UPES</p>
</footer>
<script>
        // Subtle tilt interaction for the main content
        const content = document.querySelector('section');
        document.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 100;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 100;
            content.style.transform = \`rotateY(\${xAxis}deg) rotateX(\${yAxis}deg)\`;
        });
    </script>`
  },
  {
    id: "18",
    name: "Cyber-Ether Lime",
    fonts_url: "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Geist:wght@400;500&family=JetBrains+Mono:wght@500&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap",
    tailwind_config: `{
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "surface-dim": "#12121d",
                    "surface-container": "#1f1f29",
                    "outline": "#839493",
                    "surface-container-lowest": "#0d0d17",
                    "primary-fixed": "#00d4ff", // Cyber Blue Accent
                    "on-primary": "#003737",
                    "on-primary-container": "#007070",
                    "on-secondary-fixed-variant": "#802a00",
                    "on-surface": "#e4e1f0",
                    "tertiary-fixed": "#efdbff",
                    "on-surface-variant": "#b9cac9",
                    "tertiary-container": "#efdbff",
                    "inverse-primary": "#006a6a",
                    "tertiary": "#ffffff",
                    "tertiary-fixed-dim": "#dcb8ff",
                    "secondary": "#00d4ff", // Cyber Blue Accent
                    "inverse-on-surface": "#302f3b",
                    "on-background": "#e4e1f0",
                    "surface": "#12121d",
                    "secondary-container": "#006080",
                    "on-secondary-container": "#e0f7ff",
                    "secondary-fixed-dim": "#00d4ff",
                    "on-error": "#690005",
                    "outline-variant": "#3a4a49",
                    "surface-variant": "#34343f",
                    "error": "#ffb4ab",
                    "surface-bright": "#393844",
                    "on-primary-fixed": "#002020",
                    "on-primary-fixed-variant": "#004f4f",
                    "on-secondary": "#003344",
                    "primary-container": "#00d4ff",
                    "primary": "#ffffff",
                    "surface-container-low": "#1b1b25",
                    "surface-container-high": "#292934",
                    "on-tertiary-fixed-variant": "#6700b5",
                    "error-container": "#93000a",
                    "on-tertiary-container": "#8b2ce3",
                    "inverse-surface": "#e4e1f0",
                    "on-error-container": "#ffdad6",
                    "background": "#12121d",
                    "on-secondary-fixed": "#001a22",
                    "surface-container-highest": "#34343f",
                    "surface-tint": "#00d4ff",
                    "primary-fixed-dim": "#00d4ff",
                    "secondary-fixed": "#b3f0ff",
                    "on-tertiary-fixed": "#2c0051",
                    "on-tertiary": "#480081"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "sm": "16px",
                    "xl": "64px",
                    "gutter": "24px",
                    "xs": "8px",
                    "md": "24px",
                    "base": "4px",
                    "lg": "40px",
                    "container-max": "1280px"
            },
            "fontFamily": {
                    "display-lg-mobile": ["Sora"],
                    "display-lg": ["Sora"],
                    "body-md": ["Geist"],
                    "body-lg": ["Geist"],
                    "headline-md": ["Sora"],
                    "button": ["Sora"],
                    "label-sm": ["JetBrains Mono"]
            },
            "fontSize": {
                    "display-lg-mobile": ["32px", {"lineHeight": "1.2", "fontWeight": "800"}],
                    "display-lg": ["48px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "800"}],
                    "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                    "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                    "headline-md": ["24px", {"lineHeight": "1.3", "fontWeight": "600"}],
                    "button": ["14px", {"lineHeight": "1.0", "fontWeight": "700"}],
                    "label-sm": ["12px", {"lineHeight": "1.0", "letterSpacing": "0.1em", "fontWeight": "500"}]
            }
          },
        },
      }`,
    styles: `body {
            background: radial-gradient(circle at 50% 50%, #0a192f 0%, #12121d 100%);
            overflow-x: hidden;
            min-height: 100vh;
        }

        .mesh-gradient {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            background: 
                radial-gradient(at 0% 0%, rgba(0, 212, 255, 0.15) 0px, transparent 50%),
                radial-gradient(at 100% 0%, rgba(0, 112, 112, 0.2) 0px, transparent 50%),
                radial-gradient(at 100% 100%, rgba(0, 212, 255, 0.1) 0px, transparent 50%),
                radial-gradient(at 0% 100%, rgba(0, 112, 112, 0.2) 0px, transparent 50%);
        }

        .glass-card {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(0, 212, 255, 0.3);
            box-shadow: 0 0 30px rgba(0, 212, 255, 0.1);
        }

        .neon-border-glow {
            box-shadow: 0 0 15px rgba(0, 212, 255, 0.4), inset 0 0 10px rgba(0, 212, 255, 0.2);
        }

        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }

        @keyframes scanline {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
        }

        .scanline {
            width: 100%;
            height: 2px;
            background: linear-gradient(to right, transparent, rgba(0, 212, 255, 0.5), transparent);
            position: absolute;
            animation: scanline 8s linear infinite;
            pointer-events: none;
        }
    

    body {
      min-height: max(884px, 100dvh);
    }`,
    html_template: `<div class="mesh-gradient"></div>
 TopAppBar 
<header class="fixed top-0 left-0 w-full z-50 flex items-center px-sm h-16 bg-surface/5 backdrop-blur-xl border-b border-white/10">
<div class="flex items-center gap-xs">
<div class="w-8 h-8 rounded-full bg-primary-container/20 flex items-center justify-center border border-primary-fixed/30 overflow-hidden card-canvas">
<img class="w-full h-full object-cover draggable" data-alt="IEEE CIS UPES logo" data-tid="logo" src="{{LOGO_SRC}}" style=""/>
</div>
<h1 class="font-display-lg-mobile text-[20px] text-primary tracking-tighter uppercase font-bold draggable" data-tid="club-title">{{CLUB_TITLE}}</h1>
</div>
</header>
<main class="relative pt-24 pb-32 px-sm min-h-screen flex flex-col items-center justify-center overflow-hidden">
<!-- Background Atmospheric Element -->
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20 pointer-events-none">
<div class="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-fixed blur-[120px] rounded-full"></div>
<div class="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary-container blur-[120px] rounded-full"></div>
</div>
<!-- Centerpiece: Grid Info Layout -->
<section class="w-full max-w-md relative z-10 flex flex-col gap-sm">
<!-- Main Header Card -->
<div class="glass-card neon-border-glow p-md flex flex-col gap-sm relative overflow-hidden rounded-none border-primary-fixed transition-all duration-500">
<div class="scanline"></div>
<div class="flex items-center justify-between">
<div class="flex items-center gap-xs">
<span class="material-symbols-outlined text-primary-fixed text-3xl" data-icon="hub">hub</span>
<span class="font-label-sm text-label-sm text-primary-fixed tracking-[0.2em] font-bold">ARCHITECTURE</span>
</div>
<div class="w-2 h-2 bg-primary-fixed animate-pulse shadow-[0_0_8px_rgba(0,212,255,0.8)]"></div>
</div>
<div class="flex flex-col gap-xs">
<h2 class="font-display-lg-mobile text-display-lg-mobile text-primary leading-tight">Microservices Architecture</h2>
<div class="w-12 h-1 bg-primary-fixed"></div>
</div>
<p class="font-body-md text-body-md text-on-surface-variant">
                    An architectural style that structures an application as a collection of services that are highly maintainable, loosely coupled, and independently deployable.
                </p>
</div>
<!-- Grid of Info Modules -->
<div class="grid grid-cols-2 gap-sm">
<!-- Module: Pros -->
<div class="glass-card p-sm flex flex-col gap-xs border-white/10 hover:border-primary-fixed/50 transition-colors">
<div class="flex items-center gap-xs text-primary-fixed">
<span class="material-symbols-outlined text-sm" data-icon="add_circle">add_circle</span>
<span class="font-label-sm text-[10px] uppercase font-bold tracking-widest">Benefits</span>
</div>
<p class="text-[13px] leading-snug text-on-surface-variant">Scalability, agility, and easier tech stack diversity across teams.</p>
</div>
<!-- Module: Cons -->
<div class="glass-card p-sm flex flex-col gap-xs border-white/10 hover:border-primary-fixed/50 transition-colors">
<div class="flex items-center gap-xs text-primary-fixed">
<span class="material-symbols-outlined text-sm" data-icon="warning">warning</span>
<span class="font-label-sm text-[10px] uppercase font-bold tracking-widest">Challenges</span>
</div>
<p class="text-[13px] leading-snug text-on-surface-variant">Operational complexity, distributed logging, and network latency.</p>
</div>
<!-- Module: Core Rule -->
<div class="glass-card p-sm flex flex-col gap-xs border-white/10 hover:border-primary-fixed/50 transition-colors">
<div class="flex items-center gap-xs text-primary-fixed">
<span class="material-symbols-outlined text-sm" data-icon="rule">rule</span>
<span class="font-label-sm text-[10px] uppercase font-bold tracking-widest">Isolation</span>
</div>
<p class="text-[13px] leading-snug text-on-surface-variant">Each service owns its own database for true decoupling.</p>
</div>
<!-- Module: Stat -->
<div class="glass-card p-sm flex flex-col gap-xs border-white/10 hover:border-primary-fixed/50 transition-colors">
<div class="flex items-center gap-xs text-primary-fixed">
<span class="material-symbols-outlined text-sm" data-icon="trending_up">trending_up</span>
<span class="font-label-sm text-[10px] uppercase font-bold tracking-widest">Impact</span>
</div>
<p class="text-[13px] leading-snug text-on-surface-variant">Reduces average deployment time by up to 60% in large teams.</p>
</div>
</div>
<!-- Meta/Action Area -->
<div class="glass-card p-sm flex justify-between items-center border-white/10">
<span class="font-label-sm text-label-sm text-outline">FACT #1024</span>
<button class="bg-primary-fixed text-surface-dim font-button text-[12px] px-sm py-xs rounded-none hover:brightness-110 transition-all active:scale-95 flex items-center gap-xs">
                    DOCUMENTATION
                    <span class="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</section>
<!-- High-tech grid overlay decoration -->
<div class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-surface-dim to-transparent pointer-events-none z-0"></div>
</main>
 BottomNavBar 
<nav class="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-sm py-xs bg-surface-container/20 backdrop-blur-xl border-t border-white/10 shadow-[0_-4px_20px_rgba(0,212,255,0.1)]">
<a class="flex flex-col items-center justify-center bg-primary-fixed/10 text-primary-fixed rounded-xl p-2 shadow-[0_0_15px_rgba(0,212,255,0.2)] scale-90 duration-200" href="#">
<span class="material-symbols-outlined" data-icon="lightbulb" style="font-variation-settings: 'FILL' 1;">lightbulb</span>
</a>
<a class="flex flex-col items-center justify-center text-outline p-2 hover:text-primary-fixed transition-colors" href="#">
<span class="material-symbols-outlined" data-icon="history">history</span>
</a>
<a class="flex flex-col items-center justify-center text-outline p-2 hover:text-primary-fixed transition-colors" href="#">
<span class="material-symbols-outlined" data-icon="bookmark">bookmark</span>
</a>
<a class="flex flex-col items-center justify-center text-outline p-2 hover:text-primary-fixed transition-colors" href="#">
<span class="material-symbols-outlined" data-icon="settings">settings</span>
</a>
</nav>
 Footer 
<footer class="flex flex-col items-center justify-center w-full gap-base pb-xl mt-12 mb-20 relative z-10">
<p class="font-label-sm text-label-sm text-outline">© IEEE CIS UPES Student Branch</p>
<div class="flex gap-md">
<a class="font-label-sm text-label-sm text-primary-fixed hover:text-primary transition-colors active:opacity-70 draggable" data-tid="handle" href="#">{{HANDLE}}</a>
</div>
</footer>
<script>
        // Micro-interaction for the card following mouse/tilt
        const cards = document.querySelectorAll('.glass-card');
        document.addEventListener('mousemove', (e) => {
            if (window.innerWidth > 768) {
                const xAxis = (window.innerWidth / 2 - e.pageX) / 100;
                const yAxis = (window.innerHeight / 2 - e.pageY) / 100;
                cards.forEach(card => {
                    card.style.transform = \`rotateY(\${xAxis}deg) rotateX(\${yAxis}deg)\`;
                });
            }
        });

        // Reset on mouse leave
        document.addEventListener('mouseleave', () => {
            cards.forEach(card => {
                card.style.transform = \`rotateY(0deg) rotateX(0deg)\`;
            });
        });
    </script>`
  },
  {
    id: "19",
    name: "Cyber-Ether Cyan",
    fonts_url: "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Geist:wght@400;500&family=JetBrains+Mono:wght@500&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap",
    tailwind_config: `{
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "surface-dim": "#12121d",
                    "surface-container": "#1f1f29",
                    "outline": "#839493",
                    "surface-container-lowest": "#0d0d17",
                    "primary-fixed": "#ff1a40", /* Crimson Red Accent */
                    "on-primary": "#ffffff",
                    "on-primary-container": "#4a000d",
                    "on-secondary-fixed-variant": "#802a00",
                    "on-surface": "#e4e1f0",
                    "tertiary-fixed": "#efdbff",
                    "on-surface-variant": "#b9cac9",
                    "tertiary-container": "#efdbff",
                    "inverse-primary": "#cc002d",
                    "tertiary": "#ffffff",
                    "tertiary-fixed-dim": "#dcb8ff",
                    "secondary": "#ffb59a",
                    "inverse-on-surface": "#302f3b",
                    "on-background": "#e4e1f0",
                    "surface": "#12121d",
                    "secondary-container": "#ff1a40",
                    "on-secondary-container": "#ffffff",
                    "secondary-fixed-dim": "#ffb59a",
                    "on-error": "#690005",
                    "outline-variant": "#3a4a49",
                    "surface-variant": "#34343f",
                    "error": "#ffb4ab",
                    "surface-bright": "#393844",
                    "on-primary-fixed": "#330009",
                    "on-primary-fixed-variant": "#80001a",
                    "on-secondary": "#5a1b00",
                    "primary-container": "#ff1a40",
                    "primary": "#ffffff",
                    "surface-container-low": "#1b1b25",
                    "surface-container-high": "#292934",
                    "on-tertiary-fixed-variant": "#6700b5",
                    "error-container": "#93000a",
                    "on-tertiary-container": "#8b2ce3",
                    "inverse-surface": "#e4e1f0",
                    "on-error-container": "#ffdad6",
                    "background": "#0a0a0f",
                    "on-secondary-fixed": "#370e00",
                    "surface-container-highest": "#34343f",
                    "surface-tint": "#ff1a40",
                    "primary-fixed-dim": "#ff4d6a",
                    "secondary-fixed": "#ffdbce",
                    "on-tertiary-fixed": "#2c0051",
                    "on-tertiary": "#480081"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "sm": "16px",
                    "xl": "64px",
                    "gutter": "24px",
                    "xs": "8px",
                    "md": "24px",
                    "base": "4px",
                    "lg": "40px",
                    "container-max": "1280px"
            },
            "fontFamily": {
                    "display-lg-mobile": ["Sora"],
                    "display-lg": ["Sora"],
                    "body-md": ["Geist"],
                    "body-lg": ["Geist"],
                    "headline-md": ["Sora"],
                    "button": ["Sora"],
                    "label-sm": ["JetBrains Mono"]
            },
            "fontSize": {
                    "display-lg-mobile": ["32px", {"lineHeight": "1.2", "fontWeight": "800"}],
                    "display-lg": ["48px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "800"}],
                    "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                    "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
                    "headline-md": ["24px", {"lineHeight": "1.3", "fontWeight": "600"}],
                    "button": ["14px", {"lineHeight": "1.0", "fontWeight": "700"}],
                    "label-sm": ["12px", {"lineHeight": "1.0", "letterSpacing": "0.1em", "fontWeight": "500"}]
            }
          },
        },
      }`,
    styles: `body {
            background: #0a0a0f;
            overflow-x: hidden;
            min-height: 100vh;
        }

        .full-bleed-graphic {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            background-image: 
                linear-gradient(to bottom, rgba(10, 10, 15, 0.2), rgba(10, 10, 15, 0.95)),
                repeating-linear-gradient(45deg, rgba(255, 26, 64, 0.03) 0, rgba(255, 26, 64, 0.03) 1px, transparent 1px, transparent 20px),
                repeating-linear-gradient(-45deg, rgba(255, 26, 64, 0.03) 0, rgba(255, 26, 64, 0.03) 1px, transparent 1px, transparent 20px);
        }

        .crimson-glow {
            filter: drop-shadow(0 0 15px rgba(255, 26, 64, 0.4));
        }

        .glass-panel {
            background: rgba(255, 255, 255, 0.02);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border-left: 4px solid #ff1a40;
        }

        @keyframes float {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(2deg); }
            100% { transform: translateY(0px) rotate(0deg); }
        }

        .floating-accent {
            animation: float 6s ease-in-out infinite;
        }

        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }`,
    html_template: `Background Pattern 
<div class="full-bleed-graphic"></div>
 TopAppBar 
<header class="fixed top-0 left-0 w-full z-50 flex items-center px-sm h-16 bg-background/20 backdrop-blur-md border-b border-white/5">
<div class="flex items-center gap-xs">
<div class="w-8 h-8 rounded-full bg-primary-fixed/20 flex items-center justify-center border border-primary-fixed/30 overflow-hidden card-canvas">
<img class="w-full h-full object-cover draggable" data-alt="IEEE CIS UPES Logo" data-tid="logo" src="{{LOGO_SRC}}" style=""/>
</div>
<h1 class="font-display-lg-mobile text-display-lg-mobile text-primary tracking-tighter draggable" data-tid="club-title">{{CLUB_TITLE}}</h1>
</div>
</header>
<main class="relative pt-24 pb-32 px-sm min-h-screen flex flex-col items-center justify-center">
<!-- Large Background Text Graphic for Full-Bleed look -->
<div class="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none z-0">
<span class="text-[20vw] font-black tracking-tighter leading-none">SCALING</span>
</div>
<!-- Floating Graphic Elements -->
<div class="absolute top-1/3 right-0 w-64 h-64 bg-primary-fixed/10 blur-[100px] rounded-full floating-accent"></div>
<div class="absolute bottom-1/4 left-0 w-48 h-48 bg-secondary/5 blur-[80px] rounded-full" style="animation-delay: -2s;"></div>
<!-- Content Card -->
<section class="w-full max-w-md relative z-10">
<div class="glass-panel p-md flex flex-col gap-md">
<!-- Category & ID -->
<div class="flex items-center justify-between">
<div class="flex items-center gap-xs">
<span class="material-symbols-outlined text-primary-fixed draggable" data-icon="database" data-tid="icon">{{ICON_SVG}}</span>
<span class="font-label-sm text-label-sm text-primary-fixed tracking-[0.2em] font-bold">DATABASE SYSTEMS</span>
</div>
<span class="font-label-sm text-label-sm text-outline">#052</span>
</div>
<!-- Title & Body -->
<div class="flex flex-col gap-sm">
<h2 class="font-display-lg-mobile text-display-lg-mobile text-primary leading-tight">Horizontal vs. Vertical Scaling</h2>
<div class="w-16 h-1 bg-primary-fixed"></div>
<div class="space-y-md mt-sm">
<p class="font-body-md text-on-surface-variant leading-relaxed">
<strong class="text-primary">SQL</strong> databases are typically <strong class="text-primary-fixed">vertically scalable</strong>, meaning you can increase the load on a single server by increasing components like RAM or CPU. 
                    </p>
<div class="p-sm bg-white/5 border border-white/10 rounded-sm">
<p class="font-body-md text-on-surface leading-relaxed">
<strong class="text-primary">NoSQL</strong> databases are <strong class="text-primary-fixed">horizontally scalable</strong>. They handle more traffic by sharding or adding more servers in your database cluster.
                        </p>
</div>
</div>
</div>
<!-- Action -->
<div class="pt-sm mt-sm border-t border-white/5 flex flex-col gap-md">
<p class="font-label-sm text-label-sm text-outline/80 italic">NoSQL is often preferred for large or ever-evolving data sets.</p>
<button class="w-full bg-primary-fixed text-white font-button text-button px-md py-md rounded-sm hover:brightness-110 transition-all active:scale-[0.98] flex items-center justify-center gap-xs crimson-glow">
                    EXPLORE SHARDING
                    <span class="material-symbols-outlined text-sm" data-icon="trending_up">trending_up</span>
</button>
</div>
</div>
</section>
</main>
 BottomNavBar 
<nav class="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-sm py-xs bg-background/50 backdrop-blur-xl border-t border-white/5">
<a class="flex flex-col items-center justify-center text-primary-fixed p-2" href="#">
<span class="material-symbols-outlined" data-icon="lightbulb" style="font-variation-settings: 'FILL' 1;">lightbulb</span>
</a>
<a class="flex flex-col items-center justify-center text-outline p-2 hover:text-primary-fixed transition-colors" href="#">
<span class="material-symbols-outlined" data-icon="history">history</span>
</a>
<a class="flex flex-col items-center justify-center text-outline p-2 hover:text-primary-fixed transition-colors" href="#">
<span class="material-symbols-outlined" data-icon="bookmark">bookmark</span>
</a>
<a class="flex flex-col items-center justify-center text-outline p-2 hover:text-primary-fixed transition-colors" href="#">
<span class="material-symbols-outlined" data-icon="settings">settings</span>
</a>
</nav>
 Footer 
<footer class="flex flex-col items-center justify-center w-full gap-base pb-xl mt-4 mb-20 relative z-10">
<p class="font-label-sm text-label-sm text-outline/50">© IEEE CIS UPES Student Branch</p>
<a class="font-label-sm text-label-sm text-primary-fixed hover:underline transition-colors draggable" data-tid="handle" href="#">{{HANDLE}}</a>
</footer>
<script>
    // Subtle parallax effect on the graphic background
    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth / 2 - e.pageX) / 100;
        const y = (window.innerHeight / 2 - e.pageY) / 100;
        document.querySelector('.full-bleed-graphic').style.transform = \`translate(\${x}px, \${y}px)\`;
    });
</script>`
  },
  {
    id: "20",
    name: "Electric Brutalist Magenta",
    fonts_url: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap",
    tailwind_config: `{
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "primary": "#ff00ff",
                        "on-primary": "#000000",
                        "secondary": "#000000",
                        "on-secondary": "#ffffff",
                        "background": "#ff00ff",
                        "surface": "#ffffff",
                        "on-surface": "#000000",
                        "outline": "#000000"
                    },
                    "borderRadius": {
                        "DEFAULT": "0px",
                        "lg": "0px",
                        "xl": "0px",
                        "full": "9999px"
                    },
                    "spacing": {
                        "shadow-offset": "8px",
                        "gutter": "24px",
                        "margin-mobile": "16px",
                        "margin-desktop": "48px",
                        "base": "8px"
                    },
                    "fontFamily": {
                        "body-lg": ["Sora"],
                        "label-sm": ["Sora"],
                        "headline-md": ["Sora"],
                        "headline-lg-mobile": ["Sora"],
                        "display-xl": ["Sora"],
                        "headline-lg": ["Sora"],
                        "body-md": ["Sora"],
                        "label-bold": ["Sora"]
                    },
                    "fontSize": {
                        "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "500"}],
                        "label-sm": ["12px", {"lineHeight": "1.2", "fontWeight": "600"}],
                        "headline-md": ["24px", {"lineHeight": "1.3", "fontWeight": "700"}],
                        "headline-lg-mobile": ["32px", {"lineHeight": "1.2", "fontWeight": "800"}],
                        "display-xl": ["64px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "800"}],
                        "headline-lg": ["40px", {"lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "800"}],
                        "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                        "label-bold": ["14px", {"lineHeight": "1.2", "fontWeight": "700"}]
                    }
                }
            }
        }`,
    styles: `body {
            background-color: #ff00ff;
            overflow-x: hidden;
            -webkit-tap-highlight-color: transparent;
        }
        .neo-shadow {
            box-shadow: 8px 8px 0px 0px #000000;
        }
        .neo-shadow-sm {
            box-shadow: 4px 4px 0px 0px #000000;
        }
        .neo-shadow-active {
            box-shadow: 0px 0px 0px 0px #000000;
            transform: translate(4px, 4px);
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 700, 'GRAD' 0, 'opsz' 24;
            display: inline-block;
            vertical-align: middle;
        }
        .fill-icon {
            font-variation-settings: 'FILL' 1;
        }
        .pixel-grid {
            display: grid;
            grid-template-columns: repeat(8, 1fr);
            gap: 2px;
            width: 160px;
            height: 160px;
            background: #000;
            padding: 2px;
            border: 4px solid #000;
        }
        .pixel-cell {
            background: #fff;
        }
        .pixel-fill {
            background: #ff00ff;
        }`,
    html_template: `Top Navigation 
<header class="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 py-4 bg-white border-b-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-black text-headline-md">terminal</span>
<span class="font-headline-md text-headline-md uppercase tracking-tighter font-extrabold text-black">TECH_DRIP</span>
</div>
<button class="w-10 h-10 flex items-center justify-center bg-primary border-2 border-black neo-shadow-sm active:translate-x-1 active:translate-y-1 active:shadow-none transition-all">
<span class="material-symbols-outlined text-black">settings</span>
</button>
</header>
<main class="min-h-screen pt-24 pb-32 px-4 flex flex-col items-center">
<!-- Pixel Art Icon Grid at top -->
<div class="mb-8 relative">
<div class="pixel-grid neo-shadow card-canvas">
<!-- 8x8 simplistic key icon in pixel art -->
<div class="pixel-cell"></div><div class="pixel-cell"></div><div class="pixel-cell"></div><div class="pixel-fill"></div><div class="pixel-fill"></div><div class="pixel-cell"></div><div class="pixel-cell"></div><div class="pixel-cell"></div>
<div class="pixel-cell"></div><div class="pixel-cell"></div><div class="pixel-fill"></div><div class="pixel-cell"></div><div class="pixel-cell"></div><div class="pixel-fill"></div><div class="pixel-cell"></div><div class="pixel-cell"></div>
<div class="pixel-cell"></div><div class="pixel-cell"></div><div class="pixel-fill"></div><div class="pixel-cell"></div><div class="pixel-cell"></div><div class="pixel-fill"></div><div class="pixel-cell"></div><div class="pixel-cell"></div>
<div class="pixel-cell"></div><div class="pixel-cell"></div><div class="pixel-cell"></div><div class="pixel-fill"></div><div class="pixel-fill"></div><div class="pixel-cell"></div><div class="pixel-cell"></div><div class="pixel-cell"></div>
<div class="pixel-cell"></div><div class="pixel-cell"></div><div class="pixel-cell"></div><div class="pixel-fill"></div><div class="pixel-cell"></div><div class="pixel-cell"></div><div class="pixel-cell"></div><div class="pixel-cell"></div>
<div class="pixel-cell"></div><div class="pixel-cell"></div><div class="pixel-cell"></div><div class="pixel-fill"></div><div class="pixel-fill"></div><div class="pixel-cell"></div><div class="pixel-cell"></div><div class="pixel-cell"></div>
<div class="pixel-cell"></div><div class="pixel-cell"></div><div class="pixel-cell"></div><div class="pixel-fill"></div><div class="pixel-cell"></div><div class="pixel-cell"></div><div class="pixel-cell"></div><div class="pixel-cell"></div>
<div class="pixel-cell"></div><div class="pixel-cell"></div><div class="pixel-cell"></div><div class="pixel-fill"></div><div class="pixel-cell"></div><div class="pixel-cell"></div><div class="pixel-cell"></div><div class="pixel-cell"></div>
</div>
<div class="absolute -top-4 -left-4 bg-black text-white px-2 py-1 font-label-bold text-[10px] uppercase border-2 border-white">CRYPT_KEY.BMP</div>
</div>
<!-- Main Fact Card -->
<div class="relative w-full max-w-sm">
<div class="bg-white border-4 border-black neo-shadow relative z-10 flex flex-col">
<!-- Retro Titlebar -->
<div class="h-10 border-b-4 border-black bg-black flex items-center px-4 gap-2">
<div class="flex gap-1.5">
<div class="w-3 h-3 rounded-full bg-white border-2 border-black"></div>
<div class="w-3 h-3 rounded-full bg-white border-2 border-black"></div>
<div class="w-3 h-3 rounded-full bg-white border-2 border-black"></div>
</div>
<div class="flex-1 text-center">
<span class="font-label-bold text-label-sm uppercase tracking-widest text-white">ZKP_FACT.EXE</span>
</div>
</div>
<!-- Content -->
<div class="p-6 flex flex-col gap-6">
<div class="flex items-center gap-2">
<div class="w-10 h-10 bg-primary flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
<span class="material-symbols-outlined text-black fill-icon">vpn_key</span>
</div>
<span class="bg-black text-white font-label-bold text-label-sm px-3 py-1 border-2 border-black uppercase">Cryptography</span>
</div>
<h1 class="font-headline-lg-mobile text-headline-lg-mobile leading-none uppercase tracking-tighter">
                        Zero-Knowledge <br/>
<span class="bg-primary px-1 inline-block border-2 border-black">Proofs</span>
</h1>
<p class="font-body-md text-body-md text-on-surface border-l-4 border-primary pl-4 py-1">
                        A cryptographic method by which one party can prove to another party that a given statement is true while avoiding conveying any additional information.
                    </p>
<div class="flex gap-4">
<button class="flex-1 bg-primary py-4 border-4 border-black font-label-bold uppercase text-black neo-shadow-sm active:translate-x-1 active:translate-y-1 active:shadow-none transition-all">
                            Decrypt Info
                        </button>
<button class="w-16 bg-white border-4 border-black flex items-center justify-center neo-shadow-sm active:translate-x-1 active:translate-y-1 active:shadow-none transition-all">
<span class="material-symbols-outlined text-black">favorite</span>
</button>
</div>
</div>
<div class="bg-black text-white border-t-4 border-black p-3 flex justify-between items-center font-label-sm uppercase">
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-xs">history</span> JAN 12, 1985</span>
<span class="font-bold">ID: ZK-99x</span>
</div>
</div>
<!-- Decorative background elements -->
<div class="absolute -top-6 -right-6 w-12 h-12 bg-black border-4 border-white -z-10 rotate-12"></div>
<div class="absolute -bottom-4 -left-4 w-16 h-16 bg-white border-4 border-black -z-10 -rotate-6"></div>
</div>
<!-- Secondary Info -->
<section class="mt-8 w-full max-w-sm grid grid-cols-2 gap-4">
<div class="bg-black text-white border-4 border-black p-4 neo-shadow-sm col-span-2">
<h3 class="font-label-bold uppercase text-label-sm mb-1 text-primary">History</h3>
<p class="text-body-md font-body-md italic leading-tight">ZKP was first conceived in 1985 by Shafi Goldwasser, Silvio Micali, and Charles Rackoff.</p>
</div>
<div class="bg-primary border-4 border-black p-4 neo-shadow-sm flex flex-col items-center justify-center text-center">
<span class="font-display-xl text-[48px] leading-none mb-1 text-black">100</span>
<span class="font-label-bold text-[10px] uppercase text-black">Privacy Score</span>
</div>
<div class="bg-white border-4 border-black p-4 neo-shadow-sm flex flex-col items-center justify-center text-center">
<span class="material-symbols-outlined text-4xl mb-1 text-black">lock</span>
<span class="font-label-bold text-[10px] uppercase text-black">Secure Link</span>
</div>
</section>
</main>
 Bottom Navigation 
<nav class="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-20 bg-white border-t-4 border-black px-4 pb-safe shadow-[0px_-4px_0px_0px_rgba(0,0,0,1)]">
<button class="flex flex-col items-center justify-center p-2">
<span class="material-symbols-outlined text-black">home</span>
</button>
<button class="flex flex-col items-center justify-center bg-primary text-black border-4 border-black scale-110 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] p-2">
<span class="material-symbols-outlined fill-icon">terminal</span>
</button>
<button class="flex flex-col items-center justify-center p-2">
<span class="material-symbols-outlined text-black">shield</span>
</button>
<button class="flex flex-col items-center justify-center p-2">
<span class="material-symbols-outlined text-black">account_circle</span>
</button>
</nav>
<script>
        document.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('mousedown', () => {
                if(btn.classList.contains('neo-shadow-sm')) {
                    btn.style.transform = 'translate(4px, 4px)';
                    btn.style.boxShadow = '0px 0px 0px 0px #000000';
                }
            });
            btn.addEventListener('mouseup', () => {
                if(btn.classList.contains('neo-shadow-sm')) {
                    btn.style.transform = '';
                    btn.style.boxShadow = '4px 4px 0px 0px #000000';
                }
            });
            btn.addEventListener('mouseleave', () => {
                if(btn.classList.contains('neo-shadow-sm')) {
                    btn.style.transform = '';
                    btn.style.boxShadow = '4px 4px 0px 0px #000000';
                }
            });
        });
    </script>`
  },
  {
    id: "21",
    name: "Electric Brutalist Cyan",
    fonts_url: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap",
    tailwind_config: `{
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "on-error-container": "#93000a",
                        "on-secondary-container": "#fffbff",
                        "error": "#ba1a1a",
                        "secondary-fixed-dim": "#ddb7ff",
                        "secondary": "#8127cf",
                        "on-secondary-fixed": "#2c0051",
                        "surface-container-highest": "#e2e2e2",
                        "primary": "#00ffff", // Bright Cyan
                        "tertiary-fixed-dim": "#c6c6c6",
                        "tertiary-fixed": "#e2e2e2",
                        "outline": "#000000",
                        "on-primary-fixed-variant": "#004d4d",
                        "on-tertiary-fixed": "#1b1b1b",
                        "secondary-container": "#310062", // Deep Purple
                        "primary-fixed-dim": "#00e6e6",
                        "on-primary": "#000000",
                        "on-tertiary": "#ffffff",
                        "on-background": "#1a1c1c",
                        "surface-container-lowest": "#ffffff",
                        "primary-container": "#00ffff",
                        "surface-container": "#eeeeee",
                        "surface-variant": "#e2e2e2",
                        "surface": "#f9f9f9",
                        "on-secondary": "#ffffff",
                        "on-secondary-fixed-variant": "#6900b3",
                        "on-tertiary-fixed-variant": "#474747",
                        "inverse-surface": "#2f3131",
                        "surface-container-low": "#f3f3f4",
                        "on-surface-variant": "#4d4632",
                        "on-primary-container": "#000000",
                        "inverse-primary": "#00ffff",
                        "on-surface": "#1a1c1c",
                        "surface-bright": "#f9f9f9",
                        "tertiary-container": "#d1d1d1",
                        "on-error": "#ffffff",
                        "inverse-on-surface": "#f0f1f1",
                        "secondary-fixed": "#f0dbff",
                        "outline-variant": "#000000",
                        "on-primary-fixed": "#002020",
                        "surface-tint": "#00ffff",
                        "surface-container-high": "#e8e8e8",
                        "error-container": "#ffdad6",
                        "background": "#00ffff",
                        "surface-dim": "#dadada",
                        "tertiary": "#5e5e5e",
                        "on-tertiary-container": "#595959",
                        "primary-fixed": "#b3ffff"
                    },
                    "borderRadius": {
                        "DEFAULT": "0px",
                        "lg": "0px",
                        "xl": "0px",
                        "full": "9999px"
                    },
                    "spacing": {
                        "shadow-offset": "8px",
                        "gutter": "24px",
                        "margin-mobile": "16px",
                        "margin-desktop": "48px",
                        "base": "8px"
                    },
                    "fontFamily": {
                        "body-lg": ["Sora"],
                        "label-sm": ["Sora"],
                        "headline-md": ["Sora"],
                        "headline-lg-mobile": ["Sora"],
                        "display-xl": ["Sora"],
                        "headline-lg": ["Sora"],
                        "body-md": ["Sora"],
                        "label-bold": ["Sora"]
                    },
                    "fontSize": {
                        "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "500"}],
                        "label-sm": ["12px", {"lineHeight": "1.2", "fontWeight": "600"}],
                        "headline-md": ["24px", {"lineHeight": "1.3", "fontWeight": "700"}],
                        "headline-lg-mobile": ["32px", {"lineHeight": "1.2", "fontWeight": "800"}],
                        "display-xl": ["64px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "800"}],
                        "headline-lg": ["40px", {"lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "800"}],
                        "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                        "label-bold": ["14px", {"lineHeight": "1.2", "fontWeight": "700"}]
                    }
                }
            }
        }`,
    styles: `body {
            background-color: #00ffff;
            overflow-x: hidden;
            -webkit-tap-highlight-color: transparent;
        }
        .neo-shadow {
            box-shadow: 8px 8px 0px 0px #000000;
        }
        .neo-shadow-sm {
            box-shadow: 4px 4px 0px 0px #000000;
        }
        .neo-shadow-active {
            box-shadow: 0px 0px 0px 0px #000000;
            transform: translate(4px, 4px);
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 700, 'GRAD' 0, 'opsz' 24;
            display: inline-block;
            vertical-align: middle;
        }
        .fill-icon {
            font-variation-settings: 'FILL' 1;
        }
        .grid-pattern {
            background-image: linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px);
            background-size: 20px 20px;
        }`,
    html_template: `Top Navigation Shell 
<header class="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 py-4 bg-black border-b-4 border-black text-white">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-headline-md">terminal</span>
<span class="font-headline-md text-headline-md uppercase tracking-tighter font-extrabold">TECH_DRIP</span>
</div>
<button class="w-10 h-10 flex items-center justify-center bg-primary border-2 border-black neo-shadow-sm active:translate-x-1 active:translate-y-1 active:shadow-none transition-all">
<span class="material-symbols-outlined text-black">settings</span>
</button>
</header>
<main class="min-h-screen pt-24 pb-32 px-4 flex flex-col items-center">
<!-- Animated Background Element -->
<div class="fixed inset-0 pointer-events-none opacity-10 grid-pattern"></div>
<!-- Main Content Card (Split Layout) -->
<div class="relative w-full max-w-sm">
<div class="bg-white border-4 border-black neo-shadow flex flex-col overflow-hidden card-canvas">
<!-- Retro Window Header -->
<div class="h-10 border-b-4 border-black bg-secondary-container flex items-center px-4 gap-2">
<div class="flex gap-1.5">
<div class="w-3 h-3 rounded-full bg-primary border-2 border-black"></div>
<div class="w-3 h-3 rounded-full bg-white border-2 border-black"></div>
<div class="w-3 h-3 rounded-full bg-black border-2 border-black"></div>
</div>
<div class="flex-1 text-center">
<span class="font-label-bold text-[10px] uppercase tracking-widest text-white">PROXIMITY_PROC.SYS</span>
</div>
</div>
<!-- Top/Left Split Section (Technical Visual) -->
<div class="h-56 bg-primary border-b-4 border-black relative overflow-hidden flex items-center justify-center">
<div class="absolute inset-0 grid-pattern opacity-20"></div>
<!-- Technical Icon/Diagram Representation -->
<div class="relative z-10 p-8 border-4 border-black bg-white neo-shadow-sm rotate-3">
<span class="material-symbols-outlined text-[80px] text-secondary-container">sensors</span>
<div class="absolute -top-4 -right-4 bg-black text-primary px-2 py-1 text-[10px] font-bold">EDGE_NODE_01</div>
</div>
<div class="absolute bottom-4 left-4 bg-black text-white px-2 py-1 font-label-bold text-[10px] uppercase tracking-tighter">
                        Signal: Latency_Low
                    </div>
</div>
<!-- Bottom/Right Split Section (Content) -->
<div class="p-6 flex flex-col gap-4 bg-white">
<div class="flex items-center gap-2">
<div class="w-8 h-8 bg-black flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,255,255,1)]">
<span class="material-symbols-outlined text-primary text-sm fill-icon">router</span>
</div>
<span class="bg-black text-primary font-label-bold text-label-sm px-3 py-1 border-2 border-black uppercase">Infrastructure</span>
</div>
<h1 class="font-headline-lg-mobile text-headline-lg-mobile leading-none uppercase tracking-tighter">
                        Edge <br/>
<span class="bg-primary px-1 inline-block border-2 border-black">Computing</span>
</h1>
<p class="font-body-md text-body-md text-on-surface border-l-4 border-secondary-container pl-4 py-1">
                        Edge computing brings data storage and Proximity Processing closer to the devices where it's being gathered, rather than relying on a central location that can be thousands of miles away.
                    </p>
<div class="mt-2 grid grid-cols-2 gap-3">
<button class="bg-primary py-3 border-4 border-black font-label-bold uppercase text-black neo-shadow-sm active:translate-x-1 active:translate-y-1 active:shadow-none transition-all">
                            Details
                        </button>
<button class="bg-white py-3 border-4 border-black font-label-bold uppercase text-black neo-shadow-sm active:translate-x-1 active:translate-y-1 active:shadow-none transition-all">
                            Share
                        </button>
</div>
</div>
<!-- Card Footer -->
<div class="bg-secondary-container border-t-4 border-black p-3 flex justify-between items-center text-white font-label-sm uppercase">
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-xs">update</span> SYNCED 04:20</span>
<span class="flex items-center gap-1 font-bold">PROTO: EDGE-99</span>
</div>
</div>
</div>
<!-- Bento Grid Info Section -->
<section class="mt-8 w-full max-w-sm grid grid-cols-2 gap-4">
<div class="bg-white border-4 border-black p-4 neo-shadow-sm col-span-2">
<h3 class="font-label-bold uppercase text-label-sm mb-1 text-secondary-container">Proximity Processing</h3>
<p class="text-body-md font-body-md italic leading-tight">By processing data at the edge, organizations can reduce latency and bandwidth use, improving real-time response times.</p>
</div>
<div class="bg-black border-4 border-black p-4 neo-shadow-sm flex flex-col items-center justify-center text-center">
<span class="font-display-xl text-[40px] text-primary leading-none mb-1">0.1</span>
<span class="font-label-bold text-[8px] text-white uppercase">ms Latency Goal</span>
</div>
<div class="bg-primary border-4 border-black p-4 neo-shadow-sm flex flex-col items-center justify-center text-center">
<span class="material-symbols-outlined text-4xl mb-1 text-black">hub</span>
<span class="font-label-bold text-[8px] uppercase text-black">Distributed Nodes</span>
</div>
</section>
</main>
 Bottom Navigation Shell 
<nav class="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-20 bg-black border-t-4 border-black px-4 pb-safe">
<button class="flex flex-col items-center justify-center text-white p-2 hover:bg-primary hover:text-black transition-colors">
<span class="material-symbols-outlined">bolt</span>
</button>
<button class="flex flex-col items-center justify-center bg-primary text-black border-2 border-black scale-110 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-2">
<span class="material-symbols-outlined fill-icon">memory</span>
</button>
<button class="flex flex-col items-center justify-center text-white p-2 hover:bg-primary hover:text-black transition-colors">
<span class="material-symbols-outlined">insights</span>
</button>
<button class="flex flex-col items-center justify-center text-white p-2 hover:bg-primary hover:text-black transition-colors">
<span class="material-symbols-outlined">person</span>
</button>
</nav>
<script>
        document.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('mousedown', () => {
                if(btn.classList.contains('neo-shadow-sm')) {
                    btn.style.transform = 'translate(4px, 4px)';
                    btn.style.boxShadow = '0px 0px 0px 0px #000000';
                }
            });
            btn.addEventListener('mouseup', () => {
                if(btn.classList.contains('neo-shadow-sm')) {
                    btn.style.transform = '';
                    btn.style.boxShadow = '4px 4px 0px 0px #000000';
                }
            });
            btn.addEventListener('mouseleave', () => {
                if(btn.classList.contains('neo-shadow-sm')) {
                    btn.style.transform = '';
                    btn.style.boxShadow = '4px 4px 0px 0px #000000';
                }
            });
        });
    </script>`
  },
  {
    id: "22",
    name: "Electric Brutalist White",
    fonts_url: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap",
    tailwind_config: `{
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "primary": "#000000",
                        "on-primary": "#ffffff",
                        "accent": "#2563eb",
                        "background": "#ffffff",
                        "surface": "#ffffff",
                        "on-surface": "#000000"
                    },
                    "borderRadius": {
                        "DEFAULT": "0px",
                        "lg": "0px",
                        "xl": "0px",
                        "full": "9999px"
                    },
                    "spacing": {
                        "shadow-offset": "8px",
                        "gutter": "24px",
                        "margin-mobile": "16px",
                        "margin-desktop": "48px",
                        "base": "8px"
                    },
                    "fontFamily": {
                        "body-lg": ["Sora"],
                        "label-sm": ["Sora"],
                        "headline-md": ["Sora"],
                        "headline-lg-mobile": ["Sora"],
                        "display-xl": ["Sora"],
                        "headline-lg": ["Sora"],
                        "body-md": ["Sora"],
                        "label-bold": ["Sora"]
                    }
                }
            }
        }`,
    styles: `body {
            background-color: #ffffff;
            overflow-x: hidden;
            -webkit-tap-highlight-color: transparent;
        }
        .mega-shadow {
            box-shadow: 12px 12px 0px 0px #000000;
        }
        .neo-border-thick {
            border: 8px solid #000000;
        }
        .neo-border-medium {
            border: 4px solid #000000;
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 700, 'GRAD' 0, 'opsz' 24;
            display: inline-block;
            vertical-align: middle;
        }
        .fill-icon {
            font-variation-settings: 'FILL' 1;
        }`,
    html_template: `Top Navigation 
<header class="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 py-4 bg-white border-b-8 border-black">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-black text-headline-md">terminal</span>
<span class="font-headline-md text-2xl uppercase tracking-tighter font-extrabold text-black">TECH_DRIP</span>
</div>
<button class="w-12 h-12 flex items-center justify-center bg-white border-4 border-black hover:translate-x-1 hover:translate-y-1 transition-all">
<span class="material-symbols-outlined text-black">settings</span>
</button>
</header>
<main class="min-h-screen pt-32 pb-32 px-4 flex flex-col items-center">
<!-- Massive Headline Section -->
<div class="w-full max-w-sm mb-16 text-center">
<span class="inline-block bg-accent text-white font-label-bold text-xs px-3 py-1 neo-border-medium mb-6 uppercase tracking-widest">Tech Insight #402</span>
<h1 class="font-display-xl text-[64px] leading-[0.9] uppercase tracking-tighter text-black break-words mb-8">
            NEURAL <br/> RADIANCE <br/> FIELDS
        </h1>
<div class="neo-border-thick bg-white p-6 text-left">
<p class="font-body-lg text-xl font-bold leading-tight uppercase mb-4">
                NeRFs use deep learning to generate complex 3D scenes from a sparse set of 2D images.
            </p>
<p class="font-body-md text-on-surface opacity-80">
                By optimizing a continuous volumetric scene function, AI can synthesize photorealistic novel views with incredible detail and lighting.
            </p>
</div>
</div>
<!-- Floating Did You Know Card -->
<div class="relative w-full max-w-sm">
<div class="bg-white neo-border-thick mega-shadow p-6 relative z-10">
<div class="flex items-center gap-2 mb-4">
<span class="material-symbols-outlined text-accent fill-icon">lightbulb</span>
<h3 class="font-label-bold uppercase text-lg text-black">Did you know?</h3>
</div>
<p class="text-body-lg font-medium italic leading-snug">
                NVIDIA's "Instant NeRF" can train a 3D scene in seconds, a task that previously took hours or even days.
            </p>
<div class="mt-8 flex gap-4">
<button class="flex-1 bg-black text-white py-4 neo-border-medium font-label-bold uppercase hover:translate-x-1 hover:translate-y-1 transition-all active:translate-x-2 active:translate-y-2">
                    Share Insight
                </button>
<button class="w-16 bg-white neo-border-medium flex items-center justify-center hover:translate-x-1 hover:translate-y-1 transition-all">
<span class="material-symbols-outlined text-black">bookmark</span>
</button>
</div>
</div>
<!-- Decorative accents -->
<div class="absolute -top-4 -right-4 w-20 h-20 bg-accent -z-10 neo-border-medium"></div>
</div>
<!-- Secondary Info Grid -->
<section class="mt-16 w-full max-w-sm grid grid-cols-2 gap-6">
<div class="bg-white neo-border-medium p-4 flex flex-col items-center justify-center text-center">
<span class="font-display-xl text-4xl font-extrabold mb-1">5s</span>
<span class="font-label-bold text-[10px] uppercase opacity-60">Training Speed</span>
</div>
<div class="bg-black text-white neo-border-medium p-4 flex flex-col items-center justify-center text-center">
<span class="material-symbols-outlined text-4xl mb-1 text-accent">view_in_ar</span>
<span class="font-label-bold text-[10px] uppercase">3D Rendered</span>
</div>
</section>
</main>
 Bottom Navigation 
<nav class="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-24 bg-white border-t-8 border-black px-4 pb-safe">
<button class="flex flex-col items-center justify-center text-black p-2">
<span class="material-symbols-outlined text-3xl">bolt</span>
</button>
<button class="flex flex-col items-center justify-center bg-black text-white neo-border-medium w-16 h-16 shadow-[4px_4px_0px_0px_#2563eb]">
<span class="material-symbols-outlined text-3xl fill-icon">menu_book</span>
</button>
<button class="flex flex-col items-center justify-center text-black p-2">
<span class="material-symbols-outlined text-3xl">emoji_events</span>
</button>
<button class="flex flex-col items-center justify-center text-black p-2">
<span class="material-symbols-outlined text-3xl">person</span>
</button>
</nav>`
  },
  {
    id: "23",
    name: "Electric Brutalist Lime",
    fonts_url: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap",
    tailwind_config: `{
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "primary": "#39ff14", // Neon Lime
                        "on-primary": "#000000",
                        "secondary": "#1a1a1a", // Dark Grey/Black
                        "on-secondary": "#39ff14",
                        "background": "#39ff14",
                        "surface": "#ffffff",
                        "on-surface": "#000000",
                        "outline": "#000000"
                    },
                    "borderRadius": {
                        "DEFAULT": "0px",
                        "lg": "0px",
                        "xl": "0px",
                        "full": "9999px"
                    },
                    "spacing": {
                        "shadow-offset": "4px",
                        "gutter": "24px",
                        "margin-mobile": "16px",
                        "margin-desktop": "48px",
                        "base": "8px"
                    },
                    "fontFamily": {
                        "mono": ["JetBrains Mono", "monospace"],
                        "body-lg": ["JetBrains Mono"],
                        "label-sm": ["JetBrains Mono"],
                        "headline-md": ["JetBrains Mono"],
                        "headline-lg-mobile": ["JetBrains Mono"],
                        "display-xl": ["JetBrains Mono"],
                        "headline-lg": ["JetBrains Mono"],
                        "body-md": ["JetBrains Mono"],
                        "label-bold": ["JetBrains Mono"]
                    }
                }
            }
        }`,
    styles: `body {
            background-color: #39ff14;
            overflow-x: hidden;
            -webkit-tap-highlight-color: transparent;
            font-family: 'JetBrains Mono', monospace;
        }
        .neo-shadow {
            box-shadow: 8px 8px 0px 0px #000000;
        }
        .neo-shadow-sm {
            box-shadow: 4px 4px 0px 0px #000000;
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 700, 'GRAD' 0, 'opsz' 24;
            display: inline-block;
            vertical-align: middle;
        }
        .scanline {
            width: 100%;
            height: 100px;
            z-index: 99;
            background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0) 100%);
            opacity: 0.1;
            position: absolute;
            bottom: 100%;
            animation: scanline 6s linear infinite;
        }
        @keyframes scanline {
            0% { bottom: 100%; }
            100% { bottom: -100px; }
        }
    

        body {
            min-height: max(884px, 100dvh);
        }`,
    html_template: `Top Navigation Shell 
<header class="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 py-4 bg-black border-b-4 border-black shadow-[4px_4px_0px_0px_rgba(57,255,20,1)]">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-2xl">terminal</span>
<span class="font-bold text-xl uppercase tracking-tighter text-primary">TECH_DRIP</span>
</div>
<button class="w-10 h-10 flex items-center justify-center bg-primary border-2 border-black neo-shadow-sm active:translate-x-1 active:translate-y-1 active:shadow-none transition-all">
<span class="material-symbols-outlined text-black">settings</span>
</button>
</header>
<main class="min-h-screen pt-24 pb-32 px-4 flex flex-col items-center">
<!-- Grid Background Overlay -->
<div class="fixed inset-0 pointer-events-none opacity-20" style="background-image: linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px); background-size: 20px 20px;"></div>
<div class="scanline"></div>
<!-- System Status Bar -->
<div class="w-full max-w-sm mb-4 flex justify-between items-center bg-black text-primary px-3 py-1 border-2 border-black text-[10px] font-bold">
<span>SYS_READY: 100%</span>
<span class="animate-pulse">● LIVE_FEED</span>
<span>Uptime: 432:12:09</span>
</div>
<!-- Main Fact Card Container -->
<div class="relative w-full max-w-sm">
<div class="bg-white border-4 border-black neo-shadow relative z-10 overflow-hidden flex flex-col card-canvas">
<!-- Terminal Header -->
<div class="h-8 border-b-4 border-black bg-black flex items-center px-4 gap-2">
<div class="flex gap-1">
<div class="w-2 h-2 bg-primary"></div>
<div class="w-2 h-2 bg-primary opacity-50"></div>
</div>
<div class="flex-1">
<span class="text-[10px] uppercase font-bold text-primary">DAPP_CORE_MODULE.SH</span>
</div>
<span class="text-primary text-[10px]">v2.4.0</span>
</div>
<!-- Content Area -->
<div class="p-5 flex flex-col gap-4">
<div class="flex items-center gap-2">
<div class="w-8 h-8 bg-black flex items-center justify-center border-2 border-black">
<span class="material-symbols-outlined text-primary text-sm">hub</span>
</div>
<span class="bg-primary text-black font-bold text-[10px] px-2 py-0.5 border-2 border-black uppercase italic">Web3 Protocols</span>
</div>
<h1 class="text-3xl font-black leading-none uppercase tracking-tighter">
<span class="bg-black text-primary px-1">Decentralized</span><br/>
                        Applications
                    </h1>
<p class="text-sm font-bold leading-snug border-l-4 border-black pl-3 py-1 bg-gray-50">
                        dApps are digital applications that run on a blockchain or peer-to-peer (P2P) network of computers instead of a single computer, remaining outside the control of a single authority.
                    </p>
<!-- Dense Grid Data Modules -->
<div class="grid grid-cols-2 gap-2 mt-2">
<div class="border-2 border-black p-2 bg-primary/10">
<span class="text-[9px] font-bold uppercase block text-black/60">Execution</span>
<span class="text-xs font-black">SMART_CONTRACTS</span>
</div>
<div class="border-2 border-black p-2 bg-black text-primary">
<span class="text-[9px] font-bold uppercase block text-primary/60">Consensus</span>
<span class="text-xs font-black">P2P_NETWORK</span>
</div>
</div>
<!-- Interaction -->
<div class="mt-2 flex gap-3">
<button class="flex-1 bg-primary py-3 border-4 border-black font-bold uppercase text-xs text-black neo-shadow-sm active:translate-x-1 active:translate-y-1 active:shadow-none transition-all">
                            Propagate Data
                        </button>
<button class="w-12 bg-white border-4 border-black flex items-center justify-center neo-shadow-sm active:translate-x-1 active:translate-y-1 active:shadow-none transition-all">
<span class="material-symbols-outlined text-black">save</span>
</button>
</div>
</div>
<!-- Bottom Stats -->
<div class="bg-black text-primary border-t-4 border-black p-2 flex justify-between items-center text-[10px] font-bold">
<span>NODE_REF: eth-0x4e2</span>
<span class="bg-primary text-black px-1">ACTIVE</span>
</div>
</div>
<!-- Decorative Offset -->
<div class="absolute -bottom-2 -right-2 w-full h-full border-4 border-black -z-10"></div>
</div>
<!-- Bento Grid Info -->
<section class="mt-8 w-full max-w-sm grid grid-cols-6 gap-3">
<div class="bg-black text-primary border-4 border-black p-3 col-span-4 flex flex-col justify-between">
<h3 class="text-[10px] font-bold uppercase border-b border-primary/30 pb-1 mb-2">Network Stat</h3>
<p class="text-xs font-bold leading-tight">Ethereum hosts over 3,000 dApps, processing millions of transactions daily.</p>
</div>
<div class="bg-white border-4 border-black p-2 col-span-2 flex flex-col items-center justify-center text-center">
<span class="text-2xl font-black leading-none">3k+</span>
<span class="text-[8px] font-bold uppercase">Nodes</span>
</div>
<div class="bg-primary border-4 border-black p-2 col-span-3 flex items-center gap-2">
<span class="material-symbols-outlined text-xl">security</span>
<span class="text-[9px] font-bold leading-none uppercase">Trustless<br/>Architecture</span>
</div>
<div class="bg-white border-4 border-black p-2 col-span-3 flex items-center gap-2">
<span class="material-symbols-outlined text-xl">public</span>
<span class="text-[9px] font-bold leading-none uppercase">Censorship<br/>Resistant</span>
</div>
</section>
<!-- Status Indicator Footer (Terminal Style) -->
<div class="mt-8 w-full max-w-sm flex items-center gap-2 opacity-60">
<div class="flex-1 h-[2px] bg-black"></div>
<span class="text-[10px] font-bold uppercase tracking-widest">End_Transmission</span>
<div class="flex-1 h-[2px] bg-black"></div>
</div>
</main>
 Bottom Navigation Shell 
<nav class="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-20 bg-black border-t-4 border-black px-4 pb-safe">
<button class="flex flex-col items-center justify-center text-primary/50 p-2 hover:text-primary transition-colors">
<span class="material-symbols-outlined">bolt</span>
</button>
<button class="flex flex-col items-center justify-center bg-primary text-black border-2 border-black scale-110 shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] p-2">
<span class="material-symbols-outlined font-black">data_object</span>
</button>
<button class="flex flex-col items-center justify-center text-primary/50 p-2 hover:text-primary transition-colors">
<span class="material-symbols-outlined">terminal</span>
</button>
<button class="flex flex-col items-center justify-center text-primary/50 p-2 hover:text-primary transition-colors">
<span class="material-symbols-outlined">account_tree</span>
</button>
</nav>
<script>
        document.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('mousedown', () => {
                if(btn.classList.contains('neo-shadow-sm')) {
                    btn.style.transform = 'translate(4px, 4px)';
                    btn.style.boxShadow = '0px 0px 0px 0px #000000';
                }
            });
            btn.addEventListener('mouseup', () => {
                if(btn.classList.contains('neo-shadow-sm')) {
                    btn.style.transform = '';
                    btn.style.boxShadow = '4px 4px 0px 0px #000000';
                }
            });
            btn.addEventListener('mouseleave', () => {
                if(btn.classList.contains('neo-shadow-sm')) {
                    btn.style.transform = '';
                    btn.style.boxShadow = '4px 4px 0px 0px #000000';
                }
            });
        });
    </script>`
  },
  {
    id: "24",
    name: "Electric Brutalist Orange",
    fonts_url: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap",
    tailwind_config: `{
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "primary": "#ff6600",
                        "on-primary": "#ffffff",
                        "secondary": "#000000",
                        "on-secondary": "#fff6d1",
                        "background": "#fff6d1",
                        "on-background": "#000000",
                        "surface": "#ffffff",
                        "on-surface": "#000000",
                        "accent-yellow": "#fff6d1",
                        "error": "#ba1a1a",
                        "outline": "#000000"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "shadow-offset": "6px",
                        "gutter": "24px",
                        "margin-mobile": "16px",
                        "margin-desktop": "48px",
                        "base": "8px"
                    },
                    "fontFamily": {
                        "body-lg": ["Sora"],
                        "label-sm": ["Sora"],
                        "headline-md": ["Sora"],
                        "headline-lg-mobile": ["Sora"],
                        "display-xl": ["Sora"],
                        "headline-lg": ["Sora"],
                        "body-md": ["Sora"],
                        "label-bold": ["Sora"]
                    },
                    "fontSize": {
                        "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "500"}],
                        "label-sm": ["12px", {"lineHeight": "1.2", "fontWeight": "600"}],
                        "headline-md": ["24px", {"lineHeight": "1.3", "fontWeight": "700"}],
                        "headline-lg-mobile": ["32px", {"lineHeight": "1.2", "fontWeight": "800"}],
                        "display-xl": ["64px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "800"}],
                        "headline-lg": ["40px", {"lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "800"}],
                        "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                        "label-bold": ["14px", {"lineHeight": "1.2", "fontWeight": "700"}]
                    }
                }
            }
        }`,
    styles: `body {
            background-color: #ff6600;
            overflow-x: hidden;
            -webkit-tap-highlight-color: transparent;
        }
        .neo-shadow {
            box-shadow: 8px 8px 0px 0px #000000;
        }
        .neo-shadow-sm {
            box-shadow: 4px 4px 0px 0px #000000;
        }
        .sticker-shadow {
            filter: drop-shadow(4px 4px 0px rgba(0,0,0,1));
        }
        .grid-bg {
            background-image: linear-gradient(#00000020 1px, transparent 1px), linear-gradient(90deg, #00000020 1px, transparent 1px);
            background-size: 20px 20px;
            background-color: #fff6d1;
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 700, 'GRAD' 0, 'opsz' 24;
            display: inline-block;
            vertical-align: middle;
        }
        .fill-icon {
            font-variation-settings: 'FILL' 1;
        }
        .rotate-neg-2 { transform: rotate(-2deg); }
        .rotate-pos-1 { transform: rotate(1.5deg); }
        .rotate-pos-3 { transform: rotate(3deg); }
    

        body {
            min-height: max(884px, 100dvh);
        }`,
    html_template: `Top Navigation Shell 
<header class="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 py-4 bg-black border-b-4 border-black">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-headline-md">terminal</span>
<span class="font-headline-md text-headline-md uppercase tracking-tighter font-extrabold text-white">TECH_DRIP</span>
</div>
<button class="w-10 h-10 flex items-center justify-center bg-primary border-2 border-black neo-shadow-sm active:translate-x-1 active:translate-y-1 active:shadow-none transition-all">
<span class="material-symbols-outlined text-white">settings</span>
</button>
</header>
<main class="min-h-screen pt-24 pb-32 px-4 flex flex-col items-center relative overflow-hidden">
<!-- Pale Yellow Grid Background -->
<div class="fixed inset-0 grid-bg -z-20"></div>
<!-- Main Fact Card Container -->
<div class="relative w-full max-w-sm mt-4 rotate-neg-2">
<!-- The Neo-Brutalist Card -->
<div class="bg-white border-4 border-black neo-shadow relative z-10 overflow-hidden flex flex-col card-canvas">
<!-- Retro Titlebar -->
<div class="h-10 border-b-4 border-black bg-primary flex items-center px-4 gap-2">
<div class="flex gap-1.5">
<div class="w-3 h-3 rounded-full bg-black border-2 border-white"></div>
<div class="w-3 h-3 rounded-full bg-black border-2 border-white"></div>
<div class="w-3 h-3 rounded-full bg-black border-2 border-white"></div>
</div>
<div class="flex-1 text-center">
<span class="font-label-bold text-label-sm uppercase tracking-widest text-white">DECOHERENCE_LOG.SYS</span>
</div>
</div>
<!-- Card Image -->
<div class="h-48 w-full border-b-4 border-black relative overflow-hidden bg-black">
<img class="w-full h-full object-cover mix-blend-screen opacity-90 draggable" data-alt="High-contrast digital art of fading particles and dissolving geometric shapes in neon orange and white against a black background, symbolizing quantum decoherence. Sharp lines, pop-art halftones, and sticker-style thick outlines." data-orig-src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhsuLNflizHr9tOGlTPPCDDYJ5caFNtF2xL5IONxfvKRcG0qX-96eWw64PRgAw6O0koBzFHDN7lpgQKM1pFnFGFZi9YnRy5dnUYCcxOy68A483g0s4IYcysl5696nGnw4XzUzTZ5RVyIBV1WT3hJlwINz7efVC56jlmGK06tfSlfmvPVCKbAMEUNq7-6MccbKElNsedlyx8K3GPPUZ5XqakYzCkNu0q6FRPdQHngc7srYdu-hwyLpHPy_yyK6jLblbF3YyfZICoAo" data-tid="illustration" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhsuLNflizHr9tOGlTPPCDDYJ5caFNtF2xL5IONxfvKRcG0qX-96eWw64PRgAw6O0koBzFHDN7lpgQKM1pFnFGFZi9YnRy5dnUYCcxOy68A483g0s4IYcysl5696nGnw4XzUzTZ5RVyIBV1WT3hJlwINz7efVC56jlmGK06tfSlfmvPVCKbAMEUNq7-6MccbKElNsedlyx8K3GPPUZ5XqakYzCkNu0q6FRPdQHngc7srYdu-hwyLpHPy_yyK6jLblbF3YyfZICoAo"/>
<div class="absolute top-2 left-2 bg-primary text-white border-2 border-black px-2 py-0.5 font-label-bold text-[10px] rotate-[-5deg] sticker-shadow">
                        STABILITY_ZERO
                    </div>
</div>
<!-- Card Content -->
<div class="p-6 flex flex-col gap-4">
<!-- Badge Row -->
<div class="flex items-center gap-2">
<div class="w-10 h-10 bg-black flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_0px_rgba(255,102,0,1)]">
<span class="material-symbols-outlined text-primary fill-icon">waves</span>
</div>
<span class="bg-black text-white font-label-bold text-label-sm px-3 py-1 border-2 border-black uppercase tracking-tight">System Fragility</span>
</div>
<!-- Title -->
<h1 class="font-headline-lg-mobile text-headline-lg-mobile leading-[0.9] uppercase tracking-tighter draggable" data-tid="title">{{TITLE}}</h1>
<!-- Description -->
<p class="font-body-md text-body-md text-on-surface border-l-4 border-black pl-4 py-1 mt-2">
                        The process where a quantum system loses its quantum properties, like superposition, as it interacts with the environment. It's the "noise" that breaks quantum computers.
                    </p>
<!-- Interaction Buttons -->
<div class="mt-4 flex gap-4">
<button class="flex-1 bg-primary py-4 border-4 border-black font-label-bold uppercase text-white neo-shadow-sm active:translate-x-1 active:translate-y-1 active:shadow-none transition-all">
                            Save State
                        </button>
<button class="w-16 bg-accent-yellow border-4 border-black flex items-center justify-center neo-shadow-sm active:translate-x-1 active:translate-y-1 active:shadow-none transition-all">
<span class="material-symbols-outlined text-black">share</span>
</button>
</div>
</div>
<!-- Footer stats -->
<div class="bg-black text-white border-t-4 border-black p-3 flex justify-between items-center font-label-sm uppercase">
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-xs">timer</span> ERR_404_TIME</span>
<span class="flex items-center gap-1 font-bold text-primary">ID: NOISE-01</span>
</div>
</div>
</div>
<!-- Secondary Info Section (Pasted blocks at angles) -->
<section class="mt-10 w-full max-w-sm flex flex-col gap-6 relative">
<div class="bg-accent-yellow border-4 border-black p-4 neo-shadow-sm rotate-pos-3 relative z-20">
<h3 class="font-label-bold uppercase text-label-sm mb-1 text-black underline">The Problem</h3>
<p class="text-body-md font-body-md leading-tight">Decoherence happens in microseconds. Keeping qubits "quiet" requires temperatures colder than outer space.</p>
</div>
<div class="grid grid-cols-2 gap-4">
<div class="bg-black text-white border-4 border-black p-4 neo-shadow-sm flex flex-col items-center justify-center text-center rotate-neg-2 sticker-shadow">
<span class="font-display-xl text-[44px] leading-none mb-1 text-primary">0.01K</span>
<span class="font-label-bold text-[10px] uppercase">Target Temp</span>
</div>
<div class="bg-primary border-4 border-black p-4 neo-shadow-sm flex flex-col items-center justify-center text-center rotate-pos-1">
<span class="material-symbols-outlined text-4xl mb-1 text-white">ac_unit</span>
<span class="font-label-bold text-[10px] uppercase text-white">Cryo-Status</span>
</div>
</div>
<!-- Floating sticker element -->
<div class="absolute -bottom-10 right-0 w-24 h-24 bg-white border-4 border-black rounded-full flex items-center justify-center rotate-12 z-30 sticker-shadow p-2 text-center leading-none">
<span class="font-label-bold text-[12px] uppercase">NOISE REDUCTION</span>
</div>
</section>
</main>
 Bottom Navigation Shell 
<nav class="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-20 bg-white border-t-4 border-black px-4 pb-safe shadow-[0px_-4px_0px_0px_rgba(0,0,0,1)]">
<button class="flex flex-col items-center justify-center text-black p-2 hover:bg-primary transition-colors">
<span class="material-symbols-outlined">bolt</span>
</button>
<button class="flex flex-col items-center justify-center bg-primary text-white border-4 border-black scale-110 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] p-2 -translate-y-2">
<span class="material-symbols-outlined fill-icon">menu_book</span>
</button>
<button class="flex flex-col items-center justify-center text-black p-2 hover:bg-primary transition-colors">
<span class="material-symbols-outlined">emoji_events</span>
</button>
<button class="flex flex-col items-center justify-center text-black p-2 hover:bg-primary transition-colors">
<span class="material-symbols-outlined">person</span>
</button>
</nav>
<script>
        // Micro-interactions for neo-brutalist buttons
        document.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('mousedown', () => {
                if(btn.classList.contains('neo-shadow-sm')) {
                    btn.style.transform = 'translate(4px, 4px)';
                    btn.style.boxShadow = '0px 0px 0px 0px #000000';
                }
            });
            btn.addEventListener('mouseup', () => {
                if(btn.classList.contains('neo-shadow-sm')) {
                    btn.style.transform = '';
                    btn.style.boxShadow = '4px 4px 0px 0px #000000';
                }
            });
            btn.addEventListener('mouseleave', () => {
                if(btn.classList.contains('neo-shadow-sm')) {
                    btn.style.transform = '';
                    btn.style.boxShadow = '4px 4px 0px 0px #000000';
                }
            });
        });
    </script>`
  },
  {
    id: "25",
    name: "Swiss Variant Light Gray",
    fonts_url: "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Inter:wght@400;600&family=EB+Garamond:ital,wght@0,600;1,400&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap",
    tailwind_config: `{
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "primary": "#1c1b1b", /* Deep charcoal */
                    "background": "#F4F1EA", /* Eggshell */
                    "on-surface-variant": "#444748",
                    "surface-container-highest": "#E6E2D8",
                    "outline-variant": "#1c1b1b"
            },
            "spacing": {
                    "margin-mobile": "24px",
                    "unit": "8px",
                    "border-thick": "2px"
            }
          },
        },
      }`,
    styles: `.material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        /* Eggshell Paper Texture Effect */
        .paper-texture {
            background-color: #F4F1EA;
            background-image: url("https://www.transparenttextures.com/patterns/natural-paper.png");
        }
        /* Strict Grid Rules */
        .grid-rule-v { border-left: 1px solid #1c1b1b; }
        .grid-rule-h { border-top: 1px solid #1c1b1b; }
        
        /* Typography overrides for the Swiss Style */
        .font-swiss-display { font-family: 'Sora', sans-serif; font-weight: 800; text-transform: uppercase; line-height: 0.9; }
        .font-swiss-body { font-family: 'EB Garamond', serif; }
        .font-swiss-meta { font-family: 'Inter', sans-serif; font-weight: 600; letter-spacing: 0.05em; }

        .active-press:active {
            transform: translate(2px, 2px);
        }`,
    html_template: `TopAppBar 
<header class="w-full top-0 sticky z-50 border-b border-primary bg-background flex justify-between items-center px-6 py-4">
<div class="flex items-center gap-4">
<span class="material-symbols-outlined text-primary cursor-pointer">menu</span>
<h1 class="font-swiss-meta text-xs uppercase tracking-[0.2em] draggable" data-tid="club-title">{{CLUB_TITLE}}</h1>
</div>
<span class="material-symbols-outlined text-primary cursor-pointer">search</span>
</header>
<main class="min-h-[calc(100vh-128px)] relative grid grid-cols-3">
<!-- Vertical Rules (The 3-Column Grid) -->
<div class="absolute inset-0 grid grid-cols-3 pointer-events-none">
<div class="border-r border-primary opacity-20 card-canvas"></div>
<div class="border-r border-primary opacity-20"></div>
<div></div>
</div>
<!-- Layout: Staggered Content Across Grid -->
<!-- Section 1: Top Header Stagger -->
<section class="col-span-3 pt-12 px-6 border-b border-primary">
<div class="grid grid-cols-3 gap-0 draggable" data-tid="category">
<div class="col-span-2 pb-8">
<span class="font-swiss-meta text-[10px] uppercase block mb-4">{{CATEGORY}}</span>
<h2 class="font-swiss-display text-[56px] tracking-tighter draggable" data-tid="title">{{TITLE}}</h2>
</div>
<div class="col-span-1 border-l border-primary p-4 flex flex-col justify-end">
<span class="font-swiss-meta text-[10px] uppercase leading-none opacity-60 draggable" data-tid="prompt">{{PROMPT}}</span>
</div>
</div>
</section>
<!-- Section 2: Headline Continuation & Body -->
<section class="col-span-3 grid grid-cols-3 border-b border-primary">
<!-- Col 1: Icon/Visual -->
<div class="col-span-1 border-r border-primary p-6 flex items-start justify-center">
<span class="material-symbols-outlined text-[40px] draggable" data-tid="icon" style="font-variation-settings: 'wght' 200;">{{ICON_SVG}}</span>
</div>
<!-- Col 2-3: Secondary Headline and Content -->
<div class="col-span-2 p-8 draggable" data-tid="body">{{BODY}}</div>
</section>
<!-- Section 3: The '01' Watermark and Quote -->
<section class="col-span-3 grid grid-cols-3 min-h-[160px]">
<div class="col-span-1 border-r border-primary flex items-center justify-center relative overflow-hidden">
<span class="font-swiss-display text-[120px] opacity-10 absolute -bottom-8">01</span>
</div>
<div class="col-span-2 p-8 flex flex-col justify-between">
<div class="flex justify-between items-start">
<span class="font-swiss-meta text-[10px] uppercase">Distributed Execution</span>
<button class="active-press p-1 border border-primary hover:bg-primary hover:text-background transition-colors">
<span class="material-symbols-outlined text-sm">north_east</span>
</button>
</div>
<div class="mt-8 pt-4 border-t border-primary/20">
<span class="font-swiss-meta text-[9px] uppercase tracking-widest opacity-50">Reference: Microservices Design Patterns</span>
</div>
</div>
</section>
</main>
 BottomNavBar (Swiss Grid Alignment) 
<nav class="fixed bottom-0 left-0 w-full z-50 flex h-16 bg-background border-t border-primary">
<!-- Each nav item takes exactly 25% but adheres to grid feel -->
<a class="flex flex-col items-center justify-center bg-primary text-background flex-1 active-press" href="#">
<span class="material-symbols-outlined text-xl">analytics</span>
<span class="font-swiss-meta text-[9px] uppercase mt-1">Facts</span>
</a>
<a class="flex flex-col items-center justify-center text-primary flex-1 border-l border-primary hover:bg-surface-container-highest transition-colors active-press" href="#">
<span class="material-symbols-outlined text-xl">calendar_today</span>
<span class="font-swiss-meta text-[9px] uppercase mt-1">Archive</span>
</a>
<a class="flex flex-col items-center justify-center text-primary flex-1 border-l border-primary hover:bg-surface-container-highest transition-colors active-press" href="#">
<span class="material-symbols-outlined text-xl">grid_view</span>
<span class="font-swiss-meta text-[9px] uppercase mt-1">Topics</span>
</a>
<a class="flex flex-col items-center justify-center text-primary flex-1 border-l border-primary hover:bg-surface-container-highest transition-colors active-press" href="#">
<span class="material-symbols-outlined text-xl">bookmark</span>
<span class="font-swiss-meta text-[9px] uppercase mt-1">Saved</span>
</a>
</nav>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        const sections = document.querySelectorAll('section');
        sections.forEach((section, index) => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(10px)';
            setTimeout(() => {
                section.style.transition = 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }, 100 * (index + 1));
        });
    });
</script>`
  },
  {
    id: "26",
    name: "Swiss Monochrome Solid",
    fonts_url: "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Inter:wght@400;600;800&family=EB+Garamond:wght@600&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap",
    tailwind_config: `{
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "primary": "#000000",
                    "secondary": "#5d5f5f",
                    "background": "#FCF9F2",
                    "accent": "#FF4D00",
                    "surface": "#FCF9F2",
                    "on-surface": "#000000",
                    "outline": "#000000"
            },
            "spacing": {
                    "margin-desktop": "64px",
                    "border-thick": "4px",
                    "margin-mobile": "20px",
                    "unit": "8px"
            },
            "fontFamily": {
                    "headline": ["Sora", "sans-serif"],
                    "body": ["Inter", "sans-serif"]
            }
          },
        },
      }`,
    styles: `.material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        /* Custom Paper Texture Effect */
        .paper-texture {
            background-color: #FCF9F2;
            background-image: url("https://www.transparenttextures.com/patterns/natural-paper.png");
        }
        /* Mechanical Press Interaction */
        .active-press:active {
            transform: translate(2px, 2px);
        }
        .border-thick { border-width: 4px; }
        .border-thin { border-width: 1px; }
        
        /* Swiss Modernist Custom Styles */
        .font-condensed {
            font-family: 'Sora', sans-serif;
            font-stretch: extra-condensed;
        }
        .tracking-widest-xl {
            letter-spacing: 0.25em;
        }
        .orange-accent {
            background-color: #FF4D00; /* Safety Orange */
        }
        .ivory-bg {
            background-color: #FCF9F2;
        }`,
    html_template: `TopAppBar 
<header class="w-full top-0 sticky z-50 border-b-thick border-primary bg-background flex justify-between items-center px-margin-mobile h-16">
<div class="flex items-center gap-4">
<span class="material-symbols-outlined text-primary cursor-pointer">menu</span>
<h1 class="font-headline font-bold text-xl tracking-tighter uppercase">Fact System</h1>
</div>
<span class="material-symbols-outlined text-primary cursor-pointer">search</span>
</header>
<main class="min-h-[calc(100vh-128px)] flex items-center justify-center p-margin-mobile">
<!-- Central Fact Card: The Reductive Block -->
<article class="relative w-full max-w-sm bg-background border-thick border-primary shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col transition-all duration-300">
<!-- Header Block: Safety Orange Accent -->
<div class="orange-accent p-6 border-b-thick border-primary card-canvas">
<div class="flex justify-between items-start">
<span class="font-body font-extrabold text-xs tracking-widest-xl uppercase text-white">Warning: Vulnerability</span>
<span class="material-symbols-outlined text-white text-3xl">priority_high</span>
</div>
</div>
<!-- Content Block -->
<div class="p-8 flex flex-col">
<!-- Category with Wide Tracking -->
<span class="font-body font-bold text-[10px] tracking-[0.3em] uppercase mb-4 text-primary opacity-60">Security Analysis // 012</span>
<!-- Condensed Title -->
<h2 class="font-headline font-extrabold text-5xl leading-[0.9] uppercase mb-8 break-words scale-y-110 origin-left">
                Zero-Day<br/>Exploits
            </h2>
<!-- Separator Line -->
<div class="w-full h-1 bg-primary mb-8"></div>
<!-- Description Body -->
<p class="font-body text-base font-medium leading-tight mb-8">
                A "Zero-Day" vulnerability is a software security flaw known only to the attacker. It is called "Zero-Day" because the developer has had zero days to fix the vulnerability before it is exploited in the wild.
            </p>
<!-- Bottom Data Grid -->
<div class="grid grid-cols-2 border-t-thick border-primary pt-6 gap-4">
<div class="flex flex-col">
<span class="font-body text-[10px] font-bold uppercase tracking-widest text-primary opacity-50">Log ID</span>
<span class="font-headline font-bold text-lg">X-7742</span>
</div>
<div class="flex flex-col items-end">
<span class="font-body text-[10px] font-bold uppercase tracking-widest text-primary opacity-50">Status</span>
<span class="font-headline font-bold text-lg text-accent">CRITICAL</span>
</div>
</div>
</div>
<!-- Footer Action Block: High Contrast Solid Fill -->
<div class="bg-primary text-white p-4 flex justify-between items-center">
<span class="font-body font-bold text-xs tracking-widest uppercase">Archive Record 2024</span>
<button class="active-press bg-white text-primary px-4 py-2 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                Share <span class="material-symbols-outlined text-sm">open_in_new</span>
</button>
</div>
</article>
</main>
 BottomNavBar 
<nav class="fixed bottom-0 left-0 w-full z-50 flex h-16 bg-background border-t-thick border-primary">
<!-- FACTS (Active) -->
<a class="flex flex-col items-center justify-center orange-accent text-white flex-1 border-r-thick border-primary active-press" href="#">
<span class="material-symbols-outlined">dataset</span>
<span class="font-body font-extrabold text-[10px] tracking-widest uppercase mt-1">Facts</span>
</a>
<!-- ARCHIVE -->
<a class="flex flex-col items-center justify-center text-primary flex-1 border-r-thick border-primary hover:bg-black hover:text-white transition-colors active-press" href="#">
<span class="material-symbols-outlined">inventory_2</span>
<span class="font-body font-extrabold text-[10px] tracking-widest uppercase mt-1">Archive</span>
</a>
<!-- TOPICS -->
<a class="flex flex-col items-center justify-center text-primary flex-1 border-r-thick border-primary hover:bg-black hover:text-white transition-colors active-press" href="#">
<span class="material-symbols-outlined">hub</span>
<span class="font-body font-extrabold text-[10px] tracking-widest uppercase mt-1">Index</span>
</a>
<!-- SAVED -->
<a class="flex flex-col items-center justify-center text-primary flex-1 hover:bg-black hover:text-white transition-colors active-press" href="#">
<span class="material-symbols-outlined">stars</span>
<span class="font-body font-extrabold text-[10px] tracking-widest uppercase mt-1">Saved</span>
</a>
</nav>
<script>
    // Entry animation: Snappy and mechanical
    document.addEventListener('DOMContentLoaded', () => {
        const card = document.querySelector('article');
        card.style.opacity = '0';
        card.style.transform = 'scale(0.95) translateY(10px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.4s cubic-bezier(0.19, 1, 0.22, 1)';
            card.style.opacity = '1';
            card.style.transform = 'scale(1) translateY(0)';
        }, 50);
    });
</script>`
  },
  {
    id: "27",
    name: "Swiss Warm Cream",
    fonts_url: "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Inter:wght@400;600&family=EB+Garamond:ital,wght@0,600;1,600&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&family=JetBrains+Mono:wght@400;600&display=swap",
    tailwind_config: `{
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "primary": "#000000",
                    "accent-blue": "#2563EB", /* Vibrant Blue Accent */
                    "surface-paper": "#E5E5E5",
                    "on-surface": "#1A1A1A",
                    "on-surface-variant": "#4A4A4A",
                    "outline": "#000000"
            },
            "spacing": {
                    "margin-mobile": "32px",
                    "unit": "8px"
            },
            "fontFamily": {
                    "serif-headline": ["EB Garamond", "serif"],
                    "body-md": ["Inter", "sans-serif"],
                    "mono-meta": ["JetBrains Mono", "monospace"]
            }
          },
        },
      }`,
    styles: `.material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        /* Recycled Paper Texture */
        .paper-texture {
            background-color: #E5E5E5;
            background-image: url("https://www.transparenttextures.com/patterns/natural-paper.png");
        }
        .active-press:active {
            transform: translate(2px, 2px);
        }
        .border-thick { border-width: 2px; }
        .font-mono-meta { font-family: 'JetBrains Mono', monospace; }
        
        /* Swiss Grid Influence */
        .swiss-grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 8px;
        }`,
    html_template: `Minimal TopBar 
<header class="w-full top-0 sticky z-50 border-b border-black bg-surface-paper/80 backdrop-blur-sm flex justify-between items-center px-margin-mobile py-6">
<div class="flex items-center gap-6">
<span class="material-symbols-outlined text-primary cursor-pointer hover:text-accent-blue transition-colors">menu</span>
<h1 class="font-mono-meta text-[14px] font-bold tracking-widest text-primary uppercase">Information / Journal</h1>
</div>
<span class="material-symbols-outlined text-primary cursor-pointer hover:text-accent-blue transition-colors">search</span>
</header>
<main class="min-h-[calc(100vh-140px)] flex flex-col px-margin-mobile pt-12 pb-24 relative">
<!-- Asymmetric Layout Container -->
<div class="w-full flex flex-col md:max-w-xl">
<!-- Large Asymmetric Margin Area for Metadata -->
<div class="mb-12 flex items-baseline gap-4">
<span class="font-mono-meta text-[12px] text-accent-blue font-bold">VOL. 024</span>
<div class="h-[1px] w-12 bg-accent-blue"></div>
<span class="font-mono-meta text-[12px] text-on-surface-variant uppercase">Scientific Review</span>
</div>
<!-- Serif Headline: High Contrast & Elegant -->
<h2 class="font-serif-headline text-[56px] leading-[1.05] italic font-semibold text-primary mb-12 tracking-tight">
            Neural <br/>Networks
        </h2>
<!-- Circular Graphic Element (Neural Node) -->
<div class="relative mb-12 self-end mr-8">
<div class="w-24 h-24 rounded-full border-[1.5px] border-primary flex items-center justify-center card-canvas">
<div class="w-3 h-3 bg-accent-blue rounded-full"></div>
</div>
<!-- Asymmetric labeling -->
<span class="absolute -right-4 top-0 font-mono-meta text-[10px] uppercase rotate-90 origin-left tracking-tighter">Node_Alpha_01</span>
</div>
<!-- Description: Clean Scientific Aesthetic -->
<div class="border-l border-primary pl-8 mb-16 max-w-[90%]">
<p class="font-body-md text-[18px] leading-[1.6] text-on-surface">
                Modern artificial intelligence relies on <span class="font-bold">backpropagation</span>—a method used to calculate the gradient of the loss function with respect to the weights in a neural network. Through iterative optimization, the system "learns" by minimizing error across millions of parameters.
            </p>
</div>
<!-- Footer Metadata Asymmetry -->
<div class="flex flex-col gap-2 border-t border-black pt-6">
<div class="flex justify-between items-end">
<div class="font-mono-meta text-[12px]">
<p class="text-primary font-bold">REF: BP_ALGO_1986</p>
<p class="text-on-surface-variant">SUBJECT: WEIGHT OPTIMIZATION</p>
</div>
<button class="active-press w-10 h-10 flex items-center justify-center border border-primary hover:bg-accent-blue hover:border-accent-blue hover:text-white transition-all">
<span class="material-symbols-outlined text-[18px]">north_east</span>
</button>
</div>
</div>
</div>
<!-- Background Accents (Swiss Lines) -->
<div class="fixed top-0 right-12 bottom-0 w-[0.5px] bg-black/10 -z-10"></div>
<div class="fixed top-1/2 left-0 right-0 h-[0.5px] bg-black/5 -z-10"></div>
</main>
 Bottom Nav: Swiss Tab Style 
<nav class="fixed bottom-0 left-0 w-full z-50 flex h-20 bg-surface-paper border-t-2 border-black">
<a class="flex-1 flex flex-col items-center justify-center bg-black text-white active-press" href="#">
<span class="material-symbols-outlined text-[20px]">layers</span>
<span class="font-mono-meta text-[10px] mt-1 font-bold">FACTS</span>
</a>
<a class="flex-1 flex flex-col items-center justify-center text-primary hover:text-accent-blue transition-colors active-press" href="#">
<span class="material-symbols-outlined text-[20px]">inventory_2</span>
<span class="font-mono-meta text-[10px] mt-1 font-bold">ARCHIVE</span>
</a>
<a class="flex-1 flex flex-col items-center justify-center text-primary hover:text-accent-blue transition-colors active-press" href="#">
<span class="material-symbols-outlined text-[20px]">account_tree</span>
<span class="font-mono-meta text-[10px] mt-1 font-bold">TOPICS</span>
</a>
<a class="flex-1 flex flex-col items-center justify-center text-primary hover:text-accent-blue transition-colors active-press" href="#">
<span class="material-symbols-outlined text-[20px]">star</span>
<span class="font-mono-meta text-[10px] mt-1 font-bold">SAVED</span>
</a>
</nav>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        const elements = document.querySelectorAll('h2, .border-l, .relative.mb-12');
        elements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateX(-10px)';
            setTimeout(() => {
                el.style.transition = 'all 0.8s cubic-bezier(0.19, 1, 0.22, 1)';
                el.style.opacity = '1';
                el.style.transform = 'translateX(0)';
            }, 100 + (index * 150));
        });
    });
</script>`
  },
  {
    id: "28",
    name: "Swiss Minimalist Gray",
    fonts_url: "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Inter:wght@400;500;600&family=EB+Garamond:ital,wght@0,600;1,600&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap",
    tailwind_config: `{
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "primary": "#1B4332", /* Forest Green */
                    "background": "#F2EFE9", /* Sand */
                    "surface": "#F2EFE9",
                    "on-surface": "#1B4332",
                    "outline": "#1B4332"
            },
            "fontFamily": {
                    "headline-caps": ["Sora", "sans-serif"],
                    "body-serif": ["EB Garamond", "serif"],
                    "metadata": ["Inter", "sans-serif"]
            },
            "spacing": {
                    "margin-mobile": "24px",
                    "border-thin": "1px"
            }
          },
        },
      }`,
    styles: `.material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }
        /* Swiss Modernist Color Palette & Texture */
        :root {
            --sand-bg: #F2EFE9;
            --forest-green: #1B4332;
            --accent-green: #2D6A4F;
        }
        body {
            background-color: var(--sand-bg);
            color: var(--forest-green);
        }
        .border-forest { border-color: var(--forest-green); }
        .text-forest { color: var(--forest-green); }
        .bg-forest { background-color: var(--forest-green); }
        
        .active-press:active {
            transform: scale(0.98);
        }
        .grid-modular {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto auto;
        }`,
    html_template: `TopAppBar 
<header class="w-full top-0 sticky z-50 border-b border-thin border-forest bg-background flex justify-between items-center px-margin-mobile py-4">
<div class="flex items-center">
<span class="material-symbols-outlined text-forest mr-4 cursor-pointer">menu</span>
<h1 class="font-headline-caps text-xl font-extrabold tracking-tight uppercase">Tech<span class="font-light">Archive</span></h1>
</div>
<span class="material-symbols-outlined text-forest cursor-pointer">filter_list</span>
</header>
<main class="min-h-[calc(100vh-128px)] flex flex-col items-center justify-start px-margin-mobile py-8">
<!-- Modular Data Container -->
<div class="w-full max-w-md flex flex-col">
<!-- Section Header -->
<div class="mb-6 flex justify-between items-end border-b border-forest pb-2">
<span class="font-metadata text-[10px] font-bold tracking-[0.2em] uppercase">Bulletin No. 042</span>
<span class="font-metadata text-[10px] font-bold tracking-[0.2em] uppercase">Series: Infrastructure</span>
</div>
<!-- 2x2 Modular Grid -->
<div class="grid grid-cols-2 border-t border-l border-forest">
<!-- Block 1: Topic Title -->
<div class="border-r border-b border-forest p-4 flex flex-col justify-between aspect-square">
<span class="font-metadata text-[10px] font-extrabold uppercase tracking-widest opacity-60">Topic</span>
<h2 class="font-headline-caps text-2xl font-bold leading-none uppercase break-words">Network<br/>Latency</h2>
</div>
<!-- Block 2: Quantitative Data / Icon -->
<div class="border-r border-b border-forest p-4 flex flex-col justify-between aspect-square bg-forest text-[#F2EFE9]">
<span class="font-metadata text-[10px] font-extrabold uppercase tracking-widest opacity-60">Metric</span>
<div class="flex flex-col">
<span class="text-4xl font-headline-caps font-extrabold leading-none">200k</span>
<span class="font-metadata text-[10px] uppercase mt-1">KM/S (Fiber)</span>
</div>
</div>
<!-- Block 3: The Main Fact (High-readability Serif) -->
<div class="col-span-2 border-r border-b border-forest p-6 bg-white bg-opacity-50">
<span class="font-metadata text-[10px] font-extrabold uppercase tracking-widest opacity-60 mb-4 block">Definition &amp; Insight</span>
<p class="font-body-serif text-[22px] leading-[1.3] text-forest">
                    Edge computing reduces <span class="italic">latency</span> by moving processing closer to the source. Even in fiber optics, data is limited by the speed of light—roughly 200,000 km/s—meaning physical distance remains the ultimate bottleneck.
                </p>
</div>
<!-- Block 4: Context / Detail -->
<div class="border-r border-b border-forest p-4 flex flex-col justify-between">
<span class="font-metadata text-[10px] font-extrabold uppercase tracking-widest opacity-60">Source</span>
<p class="font-metadata text-[11px] leading-tight font-medium uppercase">Bell Labs / <br/>Photonics Research</p>
</div>
<!-- Block 5: Interaction / Share -->
<div class="border-r border-b border-forest p-4 flex items-center justify-center group cursor-pointer hover:bg-forest transition-colors duration-200">
<span class="material-symbols-outlined text-forest group-hover:text-white text-3xl">share_reviews</span>
</div>
</div>
<!-- Footer Exhibition Style -->
<div class="mt-8 flex flex-col gap-2">
<div class="flex justify-between items-baseline">
<span class="font-headline-caps text-[40px] font-extrabold leading-none opacity-10">042</span>
<div class="text-right">
<span class="font-metadata text-[10px] font-bold block uppercase tracking-tighter">Exhibition: The Digital Physics</span>
<span class="font-metadata text-[10px] block opacity-60 uppercase">Room 404 — Edge Systems</span>
</div>
</div>
</div>
</div>
</main>
 BottomNavBar 
<nav class="fixed bottom-0 left-0 w-full z-50 flex justify-around items-stretch h-16 bg-background border-t border-forest">
<!-- FACTS (Active) -->
<a class="flex flex-col items-center justify-center bg-forest text-white px-4 py-2 flex-1 active-press" href="#">
<span class="material-symbols-outlined">dataset</span>
<span class="font-metadata text-[9px] font-bold tracking-widest uppercase mt-1">Data</span>
</a>
<!-- ARCHIVE -->
<a class="flex flex-col items-center justify-center text-forest px-4 py-2 flex-1 hover:bg-white/50 transition-colors active-press border-l border-forest" href="#">
<span class="material-symbols-outlined">inventory_2</span>
<span class="font-metadata text-[9px] font-bold tracking-widest uppercase mt-1">Index</span>
</a>
<!-- TOPICS -->
<a class="flex flex-col items-center justify-center text-forest px-4 py-2 flex-1 hover:bg-white/50 transition-colors active-press border-l border-forest" href="#">
<span class="material-symbols-outlined">account_tree</span>
<span class="font-metadata text-[9px] font-bold tracking-widest uppercase mt-1">Nodes</span>
</a>
<!-- SAVED -->
<a class="flex flex-col items-center justify-center text-forest px-4 py-2 flex-1 hover:bg-white/50 transition-colors active-press border-l border-forest" href="#">
<span class="material-symbols-outlined">star</span>
<span class="font-metadata text-[9px] font-bold tracking-widest uppercase mt-1">Logs</span>
</a>
</nav>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        const gridBlocks = document.querySelectorAll('.grid > div');
        gridBlocks.forEach((block, index) => {
            block.style.opacity = '0';
            block.style.transform = 'translateY(10px)';
            setTimeout(() => {
                block.style.transition = 'all 0.5s cubic-bezier(0.2, 0, 0, 1)';
                block.style.opacity = '1';
                block.style.transform = 'translateY(0)';
            }, 50 * index);
        });
    });
</script>`
  },
  {
    id: "29",
    name: "Swiss Typographic Blue",
    fonts_url: "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Inter:wght@400;600&family=EB+Garamond:ital,wght@0,600;1,600&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap",
    tailwind_config: `{
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "primary": "#000000",
                    "secondary": "#5d5f5f",
                    "background": "#E8E8E8",
                    "surface": "#E8E8E8",
                    "on-surface": "#1c1b1b",
                    "on-surface-variant": "#444748",
                    "outline-variant": "#c4c7c7",
                    "surface-container-highest": "#dcdcdc"
            },
            "fontFamily": {
                    "headline-lg-mobile": ["Sora"],
                    "body-md": ["Inter"],
                    "watermark": ["Sora"],
                    "metadata-sm": ["Inter"],
                    "category-label": ["EB Garamond"],
                    "display-xl": ["Sora"],
                    "headline-lg": ["Sora"]
            },
            "fontSize": {
                    "headline-lg-mobile": ["36px", {"lineHeight": "40px", "fontWeight": "700"}],
                    "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                    "watermark": ["220px", {"lineHeight": "200px", "fontWeight": "800"}],
                    "metadata-sm": ["12px", {"lineHeight": "16px", "letterSpacing": "0.1em", "fontWeight": "600"}],
                    "category-label": ["24px", {"lineHeight": "32px", "fontWeight": "600"}],
                    "display-xl": ["80px", {"lineHeight": "84px", "letterSpacing": "-0.04em", "fontWeight": "800"}]
            }
          },
        },
      }`,
    styles: `.material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        /* Overlapping Planes Styles */
        .limestone-bg {
            background-color: #E8E8E8;
        }
        .burgundy-accent {
            color: #800020;
        }
        .burgundy-bg {
            background-color: #800020;
        }
        .border-burgundy {
            border-color: #800020;
        }
        .active-press:active {
            transform: translate(2px, 2px);
        }
        .border-thick { border-width: 3px; }
        .border-thin { border-width: 1px; }
        
        /* Layering Utility */
        .layer-shadow {
            box-shadow: 10px 10px 0px rgba(128, 0, 32, 0.1);
        }

        .text-overlap {
            mix-blend-mode: multiply;
        }
    

        body {
            min-height: max(884px, 100dvh);
        }`,
    html_template: `TopAppBar 
<header class="w-full top-0 sticky z-50 border-b border-thin border-primary bg-background flex justify-between items-center px-6 py-4">
<div class="flex items-center">
<span class="material-symbols-outlined text-primary mr-4 cursor-pointer">menu</span>
<h1 class="font-headline-lg-mobile text-[24px] font-bold tracking-tight text-primary">TECH FACT</h1>
</div>
<span class="material-symbols-outlined text-primary cursor-pointer">search</span>
</header>
<main class="min-h-[calc(100vh-128px)] flex items-center justify-center px-6 py-12 relative overflow-hidden">
<!-- Background Large Numeral '05' -->
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-watermark text-watermark text-white/40 pointer-events-none z-0 select-none tracking-tighter opacity-80">
        05
    </div>
<!-- Geometric Plane 1: Burgundy Bar -->
<div class="absolute top-[20%] left-0 w-3/4 h-16 burgundy-bg opacity-10 -rotate-2"></div>
<!-- Central Fact Card - Multi-layered -->
<article class="relative w-full max-w-sm bg-white border-thick border-primary z-10 flex flex-col layer-shadow transition-all duration-300">
<!-- Decorative Red Square Plane -->
<div class="absolute -top-3 -left-3 w-12 h-12 burgundy-bg z-20"></div>
<!-- Card Content Cluster -->
<div class="relative z-30 p-8 flex flex-col items-start h-full bg-white">
<!-- Category Label & Icon Overlap -->
<div class="relative w-full mb-8 flex items-baseline gap-2">
<span class="material-symbols-outlined text-[32px] burgundy-accent" style="font-variation-settings: 'wght' 600;">layers</span>
<span class="font-category-label text-category-label burgundy-accent italic tracking-tight">ARCHITECTURE</span>
</div>
<!-- Main Title - Overlapping and Mixed Typography -->
<div class="relative mb-8">
<h2 class="font-headline-lg-mobile text-[40px] font-extrabold uppercase leading-[0.9] tracking-tighter text-primary">
                    Horizontal<br/>
<span class="burgundy-accent">vs</span><br/>
                    Vertical
                </h2>
<span class="absolute -bottom-4 right-0 font-category-label text-[32px] text-primary/20 italic select-none">Scaling</span>
</div>
<!-- Description Body -->
<p class="font-body-md text-body-md text-on-surface-variant leading-snug mb-12 border-l-2 border-burgundy pl-4">
                Vertical scaling means adding more power (CPU, RAM) to an existing machine, whereas horizontal scaling means adding more machines to your network, distributing the load across multiple nodes.
            </p>
<!-- Footer Metadata Block -->
<div class="mt-auto w-full pt-6 border-t border-thin border-outline-variant flex justify-between items-center">
<div class="flex flex-col">
<span class="font-metadata-sm text-[10px] uppercase text-primary font-bold">FACT #005</span>
<span class="font-metadata-sm text-[10px] uppercase text-secondary">SYSTEM DESIGN</span>
</div>
<button class="active-press p-3 burgundy-bg text-white hover:opacity-90 transition-all duration-150">
<span class="material-symbols-outlined text-[20px]">north_east</span>
</button>
</div>
</div>
<!-- Secondary Plane: Overlapping Bottom Shape -->
<div class="absolute -bottom-4 -right-4 w-24 h-8 border-thick border-burgundy z-0"></div>
</article>
<!-- Aesthetic Floating Elements -->
<div class="absolute top-[10%] right-10 w-2 h-32 bg-primary"></div>
<div class="absolute bottom-[15%] left-10 w-16 h-[2px] bg-burgundy-bg"></div>
</main>
 BottomNavBar 
<nav class="fixed bottom-0 left-0 w-full z-50 flex justify-around items-stretch h-16 bg-background border-t border-thick border-primary">
<!-- FACTS (Active) -->
<a class="flex flex-col items-center justify-center bg-primary text-white px-4 py-2 flex-1 active-press" href="#">
<span class="material-symbols-outlined">analytics</span>
<span class="font-metadata-sm text-[10px] uppercase mt-1">FACTS</span>
</a>
<!-- ARCHIVE -->
<a class="flex flex-col items-center justify-center text-primary px-4 py-2 flex-1 hover:bg-surface-container-highest transition-colors active-press" href="#">
<span class="material-symbols-outlined">calendar_today</span>
<span class="font-metadata-sm text-[10px] uppercase mt-1">ARCHIVE</span>
</a>
<!-- TOPICS -->
<a class="flex flex-col items-center justify-center text-primary px-4 py-2 flex-1 hover:bg-surface-container-highest transition-colors active-press" href="#">
<span class="material-symbols-outlined">grid_view</span>
<span class="font-metadata-sm text-[10px] uppercase mt-1">TOPICS</span>
</a>
<!-- SAVED -->
<a class="flex flex-col items-center justify-center text-primary px-4 py-2 flex-1 hover:bg-surface-container-highest transition-colors active-press" href="#">
<span class="material-symbols-outlined">bookmark</span>
<span class="font-metadata-sm text-[10px] uppercase mt-1">SAVED</span>
</a>
</nav>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        const card = document.querySelector('article');
        card.style.opacity = '0';
        card.style.transform = 'scale(0.95) translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.8s cubic-bezier(0.19, 1, 0.22, 1)';
            card.style.opacity = '1';
            card.style.transform = 'scale(1) translateY(0)';
        }, 200);
    });
</script>`
  },
  {
    id: "30",
    name: "Phosphor Green Terminal",
    fonts_url: "https://fonts.googleapis.com/css2?family=Space+Mono:wght@100..900&display=swap",
    tailwind_config: `{
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "secondary-fixed": "#ccecb7",
                    "on-primary": "#053900",
                    "tertiary": "#fff8f7",
                    "on-tertiary": "#442927",
                    "surface": "#131313",
                    "on-surface": "#e2e2e2",
                    "on-tertiary-fixed": "#2c1513",
                    "on-secondary-container": "#9fbe8d",
                    "background": "#131313",
                    "surface-container-lowest": "#0e0e0e",
                    "on-primary-fixed-variant": "#095300",
                    "on-secondary-fixed": "#082102",
                    "primary": "#efffe3",
                    "surface-tint": "#2ae500",
                    "tertiary-container": "#ffd3ce",
                    "surface-container-highest": "#353535",
                    "on-error-container": "#ffdad6",
                    "secondary-fixed-dim": "#b0d09d",
                    "secondary": "#b0d09d",
                    "on-error": "#690005",
                    "tertiary-fixed-dim": "#e7bdb8",
                    "on-surface-variant": "#baccb0",
                    "surface-container": "#1f1f1f",
                    "primary-fixed": "#79ff5b",
                    "on-secondary-fixed-variant": "#334e27",
                    "on-secondary": "#1d3612",
                    "surface-bright": "#393939",
                    "surface-container-low": "#1b1b1b",
                    "surface-dim": "#131313",
                    "error": "#ffb4ab",
                    "on-tertiary-fixed-variant": "#5d3f3c",
                    "on-primary-container": "#107100",
                    "outline": "#85967c",
                    "primary-container": "#39ff14",
                    "surface-variant": "#353535",
                    "on-primary-fixed": "#022100",
                    "inverse-primary": "#106e00",
                    "inverse-surface": "#e2e2e2",
                    "tertiary-fixed": "#ffdad6",
                    "on-background": "#e2e2e2",
                    "primary-fixed-dim": "#2ae500",
                    "surface-container-high": "#2a2a2a",
                    "outline-variant": "#3c4b35",
                    "secondary-container": "#334e27",
                    "inverse-on-surface": "#303030",
                    "on-tertiary-container": "#7a5955",
                    "error-container": "#93000a"
            },
            "fontFamily": {
                    "code": ["Space Mono"],
                    "body-md": ["Space Mono"],
                    "body-lg": ["Space Mono"],
                    "headline-md": ["Space Mono"],
                    "label-sm": ["Space Mono"],
                    "headline-lg": ["Space Mono"]
            },
          }
        }
      }`,
    styles: `.material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            display: inline-block;
            line-height: 1;
        }
        
        /* Terminal Cursor Animation */
        .cursor-block {
            display: inline-block;
            width: 1ch;
            height: 1.2em;
            background-color: #efffe3;
            animation: blink 1s step-end infinite;
            vertical-align: middle;
        }
        
        @keyframes blink {
            50% { opacity: 0; }
        }

        /* Matrix/Grid Background */
        .matrix-bg {
            background-image: 
                linear-gradient(to right, rgba(42, 229, 0, 0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(42, 229, 0, 0.05) 1px, transparent 1px);
            background-size: 32px 32px;
        }

        /* CRT Scanline Effect */
        .crt-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.1) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.02), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.02));
            background-size: 100% 4px, 3px 100%;
            pointer-events: none;
            z-index: 100;
        }
    

    body {
      min-height: max(884px, 100dvh);
    }`,
    html_template: `<div class="crt-overlay"></div>
<div class="matrix-bg fixed inset-0 z-0"></div>
 Top AppBar (from Shared Components) 
<header class="fixed top-0 w-full z-50 bg-background border-b border-primary flex justify-between items-center px-gutter h-14 transition-colors duration-75">
<div class="flex items-center gap-4">
<span class="material-symbols-outlined text-primary draggable" data-tid="icon">{{ICON_SVG}}</span>
<h1 class="font-headline-md text-headline-md text-primary uppercase tracking-tighter draggable" data-tid="club-title">{{CLUB_TITLE}}</h1>
</div>
<div class="flex items-center gap-4">
<button class="text-primary hover:bg-primary hover:text-on-primary p-2 transition-colors active:border-2 border-primary">
<span class="material-symbols-outlined">settings_input_component</span>
</button>
</div>
</header>
 Main Content Canvas 
<main class="relative z-10 pt-20 pb-20 px-4 md:px-gutter max-w-container-max mx-auto min-h-screen flex items-center justify-center">
<!-- Central Card Container -->
<div class="w-full max-w-4xl border border-primary bg-background/90 p-6 md:p-12 relative draggable card-canvas" data-tid="body">{{BODY}}</div>
</main>
 Bottom Navigation Bar (from Shared Components) 
<nav class="fixed bottom-0 left-0 w-full flex justify-around items-center h-16 bg-background border-t border-primary z-50">
<a class="flex flex-col items-center justify-center text-primary p-2 hover:bg-secondary-container transition-transform active:scale-95" href="#">
<span class="material-symbols-outlined" data-icon="database">database</span>
<span class="font-label-sm text-label-sm uppercase mt-1">Data</span>
</a>
<a class="flex flex-col items-center justify-center bg-primary text-on-primary p-2 transition-transform active:scale-95" href="#">
<span class="material-symbols-outlined" data-icon="code" style="font-variation-settings: 'FILL' 1;">code</span>
<span class="font-label-sm text-label-sm uppercase mt-1">Logic</span>
</a>
<a class="flex flex-col items-center justify-center text-primary p-2 hover:bg-secondary-container transition-transform active:scale-95" href="#">
<span class="material-symbols-outlined" data-icon="memory">memory</span>
<span class="font-label-sm text-label-sm uppercase mt-1">Nodes</span>
</a>
<a class="flex flex-col items-center justify-center text-primary p-2 hover:bg-secondary-container transition-transform active:scale-95" href="#">
<span class="material-symbols-outlined" data-icon="terminal">terminal</span>
<span class="font-label-sm text-label-sm uppercase mt-1">Shell</span>
</a>
</nav>
 Background Atmospheric Script 
<script>
        // Simple glitch effect on mouse move
        document.addEventListener('mousemove', (e) => {
            const amount = 2;
            const x = (e.clientX / window.innerWidth - 0.5) * amount;
            const y = (e.clientY / window.innerHeight - 0.5) * amount;
            document.querySelector('.matrix-bg').style.transform = \`translate(\${x}px, \${y}px)\`;
        });

        // Log printing simulation
        const codes = [
            "[OK] HEARTBEAT DETECTED NODE_A",
            "[WARN] LATENCY SPIKE ON ETH0",
            "[INFO] LOG REPLICATION IN PROGRESS...",
            "[CRIT] BYZANTINE FAULT DETECTED... JOKING",
            "[SYSTEM] QUORUM STABLE"
        ];
        
        let i = 0;
        setInterval(() => {
            console.log(\`%c \${codes[i % codes.length]}\`, "color: #efffe3; background: #131313; font-family: monospace;");
            i++;
        }, 5000);
    </script>`
  }
];
