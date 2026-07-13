// STYLE REGISTRY FOR TECH FACTS OF THE DAY
const DEFAULT_ICONS = {
  ai: `<svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41l21.22 21.22M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41M17.66 17.66l1.41 1.41"/><circle cx="12" cy="12" r="4"/><path d="M12 8a4 4 0 0 1 4 4"/></svg>`,
  cybersecurity: `<svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4M12 16h.01"/></svg>`,
  code: `<svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><line x1="14" y1="4" x2="10" y2="20"/></svg>`,
  hardware: `<svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2" ry="2"/><rect x="6" y="6" width="12" height="12" rx="1" ry="1"/><line x1="9" y1="2" x2="9" y2="6"/><line x1="15" y1="2" x2="15" y2="6"/><line x1="9" y1="18" x2="9" y2="22"/><line x1="15" y1="18" x2="15" y2="22"/><line x1="2" y1="9" x2="6" y2="9"/><line x1="2" y1="15" x2="6" y2="15"/><line x1="18" y1="9" x2="22" y2="9"/><line x1="18" y1="15" x2="22" y2="15"/></svg>`,
  cloud: `<svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>`,
  database: `<svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>`,
  mobile: `<svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
  network: `<svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M12 8v8M5 16v-3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3"/></svg>`,
  history: `<svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  gaming: `<svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 12h4M8 10v4M15 11h.01M18 13h.01"/></svg>`
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
      padding: 60px 40px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-shadow: inset 0 0 20px rgba(57, 255, 20, 0.2);
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
    content_css: `
      .logo-header { display: flex; align-items: center; gap: 10px; opacity: 0.8; }
      .logo-header img { height: 24px; filter: grayscale(1) invert(1) brightness(2); }
      .logo-header span { font-weight: 600; font-size: 14px; text-transform: uppercase; color: #39ff14; }
      .fact-icon-container { margin: 40px 0; display: flex; justify-content: flex-start; color: #39ff14; filter: drop-shadow(0 0 8px #39ff14); }
      .fact-category { font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 2px; color: #39ff14; opacity: 0.7; margin-bottom: 10px; }
      .fact-category::before { content: '> '; }
      .fact-title { font-size: 38px; font-weight: 700; color: #ffffff; line-height: 1.2; margin-bottom: 20px; }
      .fact-body { font-size: 18px; line-height: 1.6; color: #39ff14; opacity: 0.9; }
      .card-footer { display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(57, 255, 20, 0.3); padding-top: 20px; font-size: 12px; }
      .society-handle { font-weight: 600; color: #39ff14; }
      .interactive-prompt { opacity: 0.7; }
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
      padding: 50px;
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
      background: radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.15) 0%, transparent 40%),
                  radial-gradient(circle at 80% 70%, rgba(236, 72, 153, 0.15) 0%, transparent 45%);
    `,
    particles_css: `
      .particle { background: #ffffff !important; }
      .particle:nth-child(1) { left: 15%; width: 3px; height: 3px; --dur: 10s; --delay: 0s; --max-opacity: 0.4; }
      .particle:nth-child(2) { left: 40%; width: 4px; height: 4px; --dur: 13s; --delay: 1.5s; --max-opacity: 0.3; }
      .particle:nth-child(3) { left: 70%; width: 2px; height: 2px; --dur: 8s; --delay: 2.5s; --max-opacity: 0.5; }
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
        background: rgba(255, 255, 255, 0.03);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 24px;
        padding: 40px;
        box-shadow: 0 20px 50px rgba(0,0,0,0.3);
      }
      .logo-header { display: flex; align-items: center; gap: 10px; }
      .logo-header img { height: 26px; }
      .logo-header span { font-weight: 700; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; color: #a1a1aa; }
      .fact-icon-container { display: flex; justify-content: flex-start; color: #a5b4fc; margin: 30px 0 10px 0; }
      .fact-category { font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: #6366f1; margin-bottom: 8px; }
      .fact-title { font-size: 34px; font-weight: 800; color: #ffffff; line-height: 1.25; margin-bottom: 16px; }
      .fact-body { font-size: 16px; line-height: 1.6; color: #e4e4e7; }
      .card-footer { display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255, 255, 255, 0.06); padding-top: 20px; font-size: 12px; }
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
      border: 12px solid #09090b;
      position: relative;
    `,
    texture_css: `
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 50;
      mix-blend-mode: multiply;
      opacity: 0.03;
      background-image: radial-gradient(#000 1px, transparent 0);
      background-size: 4px 4px;
    `,
    particles_css: `
      .particle { display: none !important; }
    `,
    content_css: `
      .logo-header { display: flex; align-items: center; justify-content: space-between; border-bottom: 4px solid #09090b; padding-bottom: 15px; }
      .logo-header img { height: 28px; filter: grayscale(1) contrast(1.5); }
      .logo-header span { font-weight: 700; font-size: 16px; text-transform: uppercase; letter-spacing: -0.5px; }
      .fact-icon-container { margin-top: 40px; display: flex; justify-content: flex-start; color: #09090b; }
      .fact-icon-container svg { width: 56px; height: 56px; stroke-width: 2.5; }
      .fact-category { font-size: 14px; font-weight: 700; text-transform: uppercase; margin: 30px 0 10px 0; color: #09090b; }
      .fact-title { font-size: 40px; font-weight: 700; color: #09090b; line-height: 1.1; margin-bottom: 20px; letter-spacing: -1px; }
      .fact-body { font-size: 18px; line-height: 1.5; color: #27272a; font-weight: 400; margin-bottom: 40px; }
      .card-footer { display: flex; justify-content: space-between; align-items: center; border-top: 4px solid #09090b; padding-top: 15px; font-size: 13px; font-weight: 700; text-transform: uppercase; }
      .society-handle { color: #09090b; }
      .interactive-prompt { color: #71717a; }
    `
  },
  {
    id: "04",
    name: "Cyber Grid",
    fonts_url: "https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&display=swap",
    canvas_css: `
      background-color: #0c0f1d;
      color: #00f0ff;
      font-family: 'Orbitron', sans-serif;
      padding: 50px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border: 4px solid #00f0ff;
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
    content_css: `
      .logo-header { display: flex; align-items: center; gap: 10px; border-bottom: 2px solid rgba(0, 240, 255, 0.2); padding-bottom: 12px; }
      .logo-header img { height: 22px; filter: hue-rotate(180deg) brightness(1.5); }
      .logo-header span { font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; }
      .fact-icon-container { display: flex; justify-content: center; color: #ff8c00; filter: drop-shadow(0 0 8px #ff8c00); margin: 30px 0; }
      .fact-category { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 3px; color: #ff8c00; margin-bottom: 8px; }
      .fact-title { font-size: 32px; font-weight: 900; color: #ffffff; line-height: 1.2; text-shadow: 0 0 10px rgba(0, 240, 255, 0.3); margin-bottom: 16px; text-transform: uppercase; }
      .fact-body { font-family: sans-serif; font-size: 15px; line-height: 1.6; color: #a5f3fc; }
      .card-footer { display: flex; justify-content: space-between; align-items: center; border-top: 2px solid rgba(0, 240, 255, 0.2); padding-top: 15px; font-size: 11px; }
      .society-handle { font-weight: 700; color: #00f0ff; letter-spacing: 1px; }
      .interactive-prompt { color: rgba(0, 240, 255, 0.6); }
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
    content_css: `
      .card-content {
        background: #ffffff;
        border: 2px solid #1c1917;
        border-radius: 20px;
        padding: 35px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-shadow: 6px 6px 0px #1c1917;
      }
      .logo-header { display: flex; align-items: center; gap: 8px; }
      .logo-header img { height: 24px; filter: grayscale(1) contrast(1.2); }
      .logo-header span { font-weight: 700; font-size: 13px; color: #44403c; text-transform: uppercase; }
      .fact-icon-container { display: flex; justify-content: flex-start; color: #d97706; margin: 25px 0 10px 0; }
      .fact-category { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #d97706; margin-bottom: 6px; }
      .fact-title { font-size: 32px; font-weight: 700; color: #1c1917; line-height: 1.25; margin-bottom: 12px; }
      .fact-body { font-size: 16px; line-height: 1.55; color: #44403c; }
      .card-footer { display: flex; justify-content: space-between; align-items: center; border-top: 1.5px dashed #e7e5e4; padding-top: 15px; font-size: 12px; }
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
    content_css: `
      .card-content {
        background: #ffffff;
        border: 4px solid #000000;
        padding: 40px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-shadow: 10px 10px 0px #000000;
        position: relative;
      }
      .logo-header { display: flex; align-items: center; justify-content: space-between; border-bottom: 4px solid #000000; padding-bottom: 15px; }
      .logo-header img { height: 26px; filter: grayscale(1) contrast(2); }
      .logo-header span { font-weight: 800; font-size: 14px; text-transform: uppercase; }
      .fact-icon-container { display: inline-flex; background: #a855f7; border: 3px solid #000000; padding: 10px; box-shadow: 3px 3px 0px #000000; color: #ffffff; margin-top: 30px; }
      .fact-icon-container svg { width: 44px; height: 44px; }
      .fact-category { font-size: 13px; font-weight: 800; text-transform: uppercase; margin: 25px 0 10px 0; letter-spacing: 1px; }
      .fact-title { font-size: 34px; font-weight: 800; color: #000000; line-height: 1.15; margin-bottom: 15px; text-transform: uppercase; }
      .fact-body { font-size: 16px; line-height: 1.5; color: #000000; font-weight: 500; }
      .card-footer { display: flex; justify-content: space-between; align-items: center; border-top: 4px solid #000000; padding-top: 15px; font-size: 13px; font-weight: 800; }
      .society-handle { text-decoration: underline; }
      .interactive-prompt { background: #3b82f6; color: #ffffff; padding: 2px 8px; border: 2px solid #000000; box-shadow: 2px 2px 0px #000000; font-size: 10px; text-transform: uppercase; }
    `
  },
  {
    id: "07",
    name: "Mesh Gradient",
    fonts_url: "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&display=swap",
    canvas_css: `
      background: linear-gradient(135deg, #4f46e5 0%, #3b82f6 50%, #8b5cf6 100%);
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
      background: radial-gradient(circle at 10% 20%, rgba(255,255,255,0.1) 0%, transparent 30%),
                  radial-gradient(circle at 90% 80%, rgba(0,0,0,0.15) 0%, transparent 40%);
    `,
    particles_css: `
      .particle { background: #ffffff !important; --max-opacity: 0.45; }
      .particle:nth-child(1) { left: 10%; width: 4px; height: 4px; --dur: 9s; }
      .particle:nth-child(2) { left: 55%; width: 3px; height: 3px; --dur: 11s; }
      .particle:nth-child(3) { left: 80%; width: 5px; height: 5px; --dur: 7s; }
    `,
    content_css: `
      .logo-header { display: flex; align-items: center; gap: 10px; }
      .logo-header img { height: 26px; filter: brightness(2); }
      .logo-header span { font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: rgba(255, 255, 255, 0.8); }
      .fact-icon-container { display: flex; justify-content: flex-start; color: #ffffff; margin: 40px 0 20px 0; filter: drop-shadow(0 4px 10px rgba(0,0,0,0.25)); }
      .fact-category { font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: #bfdbfe; margin-bottom: 8px; }
      .fact-title { font-size: 36px; font-weight: 700; color: #ffffff; line-height: 1.2; margin-bottom: 20px; }
      .fact-body { font-size: 17px; line-height: 1.6; color: rgba(255, 255, 255, 0.9); }
      .card-footer { display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255, 255, 255, 0.2); padding-top: 20px; font-size: 12px; }
      .society-handle { font-weight: 600; color: #ffffff; }
      .interactive-prompt { color: rgba(255, 255, 255, 0.7); }
    `
  },
  {
    id: "08",
    name: "Blue Blueprint",
    fonts_url: "https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;700&display=swap",
    canvas_css: `
      background-color: #0f2c59;
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
    content_css: `
      .logo-header { display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(255, 255, 255, 0.3); padding-bottom: 12px; }
      .logo-header img { height: 22px; filter: brightness(2) contrast(0.5); }
      .logo-header span { font-weight: 500; font-size: 13px; text-transform: uppercase; color: rgba(255, 255, 255, 0.8); }
      .fact-icon-container { display: flex; justify-content: flex-start; color: rgba(255, 255, 255, 0.8); margin: 35px 0 15px 0; }
      .fact-icon-container svg { stroke-width: 1.5; }
      .fact-category { font-size: 13px; font-weight: 500; text-transform: uppercase; color: rgba(255, 255, 255, 0.7); margin-bottom: 10px; }
      .fact-category::after { content: ' //'; }
      .fact-title { font-size: 34px; font-weight: 700; color: #ffffff; line-height: 1.25; margin-bottom: 18px; }
      .fact-body { font-size: 16px; line-height: 1.6; color: rgba(255, 255, 255, 0.85); }
      .card-footer { display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255, 255, 255, 0.3); padding-top: 15px; font-size: 12px; }
      .society-handle { font-weight: 500; color: #ffffff; }
      .interactive-prompt { color: rgba(255, 255, 255, 0.6); }
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
    content_css: `
      .logo-header { display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #000000; padding-bottom: 12px; }
      .logo-header img { height: 24px; filter: grayscale(1) contrast(3); }
      .logo-header span { font-weight: 700; font-size: 14px; text-transform: uppercase; }
      .fact-icon-container { display: flex; justify-content: flex-start; color: #000000; margin: 40px 0 20px 0; }
      .fact-icon-container svg { stroke-width: 1.5; }
      .fact-category { font-size: 13px; font-weight: 600; text-transform: uppercase; color: #71717a; margin-bottom: 8px; letter-spacing: 1px; }
      .fact-title { font-size: 38px; font-weight: 700; color: #000000; line-height: 1.2; margin-bottom: 18px; letter-spacing: -0.5px; }
      .fact-body { font-size: 17px; line-height: 1.6; color: #3f3f46; }
      .card-footer { display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #000000; padding-top: 20px; font-size: 12px; font-weight: 600; text-transform: uppercase; }
      .society-handle { color: #000000; }
      .interactive-prompt { color: #71717a; }
    `
  },
  {
    id: "10",
    name: "Retro 8-Bit",
    fonts_url: "https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap",
    canvas_css: `
      background-color: #1e1e2e;
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
    content_css: `
      .logo-header { display: flex; align-items: center; gap: 8px; font-size: 8px; border-bottom: 2px solid #00e5ff; padding-bottom: 12px; }
      .logo-header img { height: 16px; filter: hue-rotate(90deg) brightness(1.5); image-rendering: pixelated; }
      .logo-header span { text-transform: uppercase; }
      .fact-icon-container { display: flex; justify-content: flex-start; color: #ff007f; margin: 30px 0 10px 0; }
      .fact-icon-container svg { image-rendering: pixelated; }
      .fact-category { font-size: 8px; text-transform: uppercase; color: #ff007f; margin-bottom: 10px; }
      .fact-title { font-size: 18px; color: #ffffff; line-height: 1.4; margin-bottom: 20px; text-transform: uppercase; }
      .fact-body { font-family: sans-serif; font-size: 15px; line-height: 1.5; color: #ddddff; }
      .card-footer { display: flex; justify-content: space-between; align-items: center; border-top: 2px solid #00e5ff; padding-top: 15px; font-size: 8px; }
      .society-handle { color: #00e5ff; }
      .interactive-prompt { color: #ff007f; }
    `
  }
];
