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
      background-color: #000000;
      color: #39ff14;
      font-family: 'Fira Code', monospace;
      border: 3px solid #39ff14;
      padding: 60px 50px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-shadow: inset 0 0 30px rgba(57, 255, 20, 0.2);
    `,
    texture_css: `
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 50;
      opacity: 0.15;
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
      
      .fact-main-block { flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: flex-start; gap: 40px; margin: 20px 0; }
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
      background: radial-gradient(circle at 10% 20%, rgba(99, 102, 241, 0.25) 0%, transparent 45%),
                  radial-gradient(circle at 90% 80%, rgba(236, 72, 153, 0.25) 0%, transparent 50%),
                  radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 40%);
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
        background: rgba(255, 255, 255, 0.04);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.12);
        border-radius: 28px;
        padding: 6%;
        box-shadow: 0 30px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
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
      background-color: #f4f4f5;
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
      
      .fact-main-block { flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: flex-start; gap: 40px; margin: 20px 0; }
      .fact-icon-container { width: 180px; height: 180px; color: #09090b; }
      
      .fact-category { font-size: 30px; font-weight: 700; text-transform: uppercase; margin: 35px 0 12px 0; color: #09090b; }
      .fact-title { font-size: 80px; font-weight: 700; color: #09090b; line-height: 1.15; margin-bottom: 22px; letter-spacing: -1.2px; }
      .fact-body { font-size: 38px; line-height: 1.55; color: #18181b; font-weight: 400; margin-bottom: 40px; }
      
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
      
      .fact-main-block { flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; gap: 40px; margin: 20px 0; }
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
      <div style="position:absolute; top:56px; left:56px; right:44px; bottom:44px; background:rgba(28,25,23,0.06); border:2px solid #1c1917; border-radius:20px; pointer-events:none; z-index:1;"></div>
      
      <!-- Cute Retro Sticker Badge -->
      <div style="position:absolute; top:8%; right:20px; background:#f43f5e; color:#ffffff; font-size:14px; font-weight:700; padding:6px 12px; border:2px solid #1c1917; border-radius:10px; box-shadow:3px 3px 0 #1c1917; transform:rotate(8deg); text-transform:uppercase; pointer-events:none; z-index:100;">★ INTEL SHOT</div>
      
      <!-- Bottom right arrow graphic -->
      <svg style="position:absolute; bottom:8%; right:40px; width:54px; height:54px; fill:#1c1917; pointer-events:none; z-index:10;" viewBox="0 0 24 24"><path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm1 10h3l-4-4-4 4h3v4h2v-4z"/></svg>
    `,
    content_css: `
      .card-content {
        background: #ffffff;
        border: 2.5px solid #1c1917;
        border-radius: 20px;
        padding: 40px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-shadow: 8px 8px 0px #1c1917;
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
        border: 4px solid #000000;
        padding: 40px;
        padding-top: 50px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-shadow: 12px 12px 0px #000000;
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
      <div style="position:absolute; top:4%; bottom:4%; left:30px; right:30px; border:1px solid rgba(255,255,255,0.1); border-radius:18px; pointer-events:none;"></div>
    `,
    content_css: `
      .logo-header { display: flex; align-items: center; gap: 10px; }
      .logo-header img { height: 48px; filter: brightness(2); }
      .logo-header span { font-weight: 600; font-size: 24px; text-transform: uppercase; letter-spacing: 1px; color: rgba(255, 255, 255, 0.85); }
      
      .fact-main-block { flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: flex-start; gap: 40px; margin: 20px 0; }
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
      background-color: #0f2a52;
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
        linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
      background-size: 20px 20px;
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
      
      .fact-main-block { flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: flex-start; gap: 40px; margin: 20px 0; }
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
      background-color: #ffffff;
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
      
      .fact-main-block { flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: flex-start; gap: 40px; margin: 20px 0; }
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
      
      .fact-main-block { flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: flex-start; gap: 40px; margin: 20px 0; }
      .fact-icon-container { width: 150px; height: 150px; color: #ff007f; }
      
      .fact-category { font-size: 24px; text-transform: uppercase; color: #ff007f; margin-bottom: 12px; }
      .fact-title { font-size: 60px; color: #ffffff; line-height: 1.45; margin-bottom: 22px; text-transform: uppercase; }
      .fact-body { font-family: sans-serif; font-size: 32px; line-height: 1.6; color: #ddddff; }
      
      .card-footer { display: flex; justify-content: space-between; align-items: center; border-top: 2px solid #00e5ff; padding-top: 15px; font-size: 20px; }
      .society-handle { color: #00e5ff; }
      .interactive-prompt { color: #ff007f; }
    `
  }
];
