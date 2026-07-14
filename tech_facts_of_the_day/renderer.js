// RENDERER ENGINE FOR TECH FACTS OF THE DAY
class TechFactRenderer {
  constructor(targetId) {
    this.target = document.getElementById(targetId);
    this.iframe = document.createElement('iframe');
    this.iframe.setAttribute('title', 'Tech Fact Card Preview');
    this.iframe.style.border = 'none';
    this.iframe.style.width = '100%';
    this.iframe.style.height = '100%';
    this.target.appendChild(this.iframe);
    this.styleId = null;
  }

  setDimensions(w, h) {
    const iframeDoc = this.iframe.contentDocument || this.iframe.contentWindow.document;
    const canvas = iframeDoc.querySelector('.card-canvas');
    if (canvas) {
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
    }
  }

  async loadTemplate(styleId, appState) {
    this.styleId = styleId;
    const template = TECH_FACTS_REGISTRY.find(t => t.id === styleId) || TECH_FACTS_REGISTRY[0];

    const logoB64 = appState.logoDataUrl || '';
    const selectedIconSvg = DEFAULT_ICONS[appState.iconKey] || DEFAULT_ICONS['ai'];

    // Full HTML templates: load the entire original Stitch HTML directly
    if (template.full_html) {
      await new Promise(resolve => {
        this.iframe.onload = () => resolve();
        this.iframe.srcdoc = template.full_html;
      });
      
      // Swap content via data-tid attributes after the page loads
      this.updateData(appState);
      this.setupDraggables(appState);
      return;
    }

    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
  ${template.fonts_url ? `<link href="${template.fonts_url}" rel="stylesheet">` : ''}
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html, body {
      width: 100%; height: 100%; overflow: hidden; background: transparent;
      display: flex; justify-content: center; align-items: center;
    }
    
    /* ─── BASE CARD CANVAS ─── */
    .card-canvas {
      position: relative;
      width: 1080px;
      height: 1920px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      background-size: cover;
      background-position: center;
      ${template.canvas_css || ''}
    }
    
    .vignette-overlay {
      position: absolute; inset: 0; pointer-events: none; z-index: 4;
      background: radial-gradient(circle, transparent 50%, rgba(0,0,0,0.4) 100%);
    }
    
    .texture-overlay {
      ${template.texture_css || ''}
    }
    
    /* Particles */
    .particles {
      position: absolute; inset: 0; pointer-events: none; z-index: 3; overflow: hidden;
    }
    .particle {
      position: absolute;
      bottom: -20px;
      border-radius: 50%;
      opacity: 0;
      animation: floatUp var(--dur) linear infinite;
      animation-delay: var(--delay);
    }
    @keyframes floatUp {
      0% { transform: translateY(0) rotate(0deg); opacity: 0; }
      10% { opacity: var(--max-opacity); }
      90% { opacity: var(--max-opacity); }
      100% { transform: translateY(-110vh) rotate(360deg); opacity: 0; }
    }
    
    ${template.particles_css || ''}
    
    /* Content Overrides */
    .card-content {
      position: relative;
      z-index: 10;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .fact-main-block {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 30px;
      margin: 20px 0;
      width: 100%;
    }
    .fact-text-container {
      width: 100%;
    }
    
    ${template.content_css || ''}
    
    /* Canva-style editing outlines and handles */
    [contenteditable="true"] {
      outline: 2px dashed rgba(255, 255, 255, 0.15);
      cursor: grab;
      transition: outline 0.2s;
      overflow-wrap: break-word;
      word-break: break-word;
      hyphens: auto;
    }
    [contenteditable="true"]:focus {
      outline: 2px solid #3b82f6 !important;
      cursor: text;
    }
    
    .club-title, .fact-category, .fact-title, .fact-body, .society-handle, .interactive-prompt {
      overflow-wrap: break-word !important;
      word-break: break-word !important;
    }
    
    .draggable {
      cursor: grab;
      position: relative;
    }
    .draggable:active {
      cursor: grabbing;
    }
    .draggable:focus {
      outline: 2px dashed #3b82f6 !important;
      outline-offset: 4px;
    }
    
    @media (prefers-reduced-motion: reduce) {
      *, ::before, ::after {
        animation-delay: -1ms !important;
        animation-duration: 1ms !important;
        animation-iteration-count: 1 !important;
        background-attachment: scroll !important;
        scroll-behavior: auto !important;
        transition-duration: 0s !important;
        transition-delay: 0s !important;
      }
      .particle, .scanline {
        display: none !important;
      }
    }
    
    .resize-handle {
      position: absolute !important;
      width: 10px !important;
      height: 10px !important;
      background: #3b82f6 !important;
      border: 2px solid #ffffff !important;
      border-radius: 50% !important;
      z-index: 10000 !important;
      display: none !important;
    }
    .resize-handle-n, .resize-handle-s {
      width: 20px !important;
      height: 8px !important;
      border-radius: 4px !important;
    }
    .resize-handle-e, .resize-handle-w {
      width: 8px !important;
      height: 20px !important;
      border-radius: 4px !important;
    }
    .resize-handle-nw { top: -5px !important; left: -5px !important; cursor: nwse-resize !important; }
    .resize-handle-ne { top: -5px !important; right: -5px !important; cursor: nesw-resize !important; }
    .resize-handle-se { bottom: -5px !important; right: -5px !important; cursor: nwse-resize !important; }
    .resize-handle-sw { bottom: -5px !important; left: -5px !important; cursor: nwse-resize !important; }
    .resize-handle-n { top: -4px !important; left: 50% !important; transform: translateX(-50%) !important; cursor: ns-resize !important; }
    .resize-handle-s { bottom: -4px !important; left: 50% !important; transform: translateX(-50%) !important; cursor: ns-resize !important; }
    .resize-handle-e { top: 50% !important; right: -4px !important; transform: translateY(-50%) !important; cursor: ew-resize !important; }
    .resize-handle-w { top: 50% !important; left: -4px !important; transform: translateY(-50%) !important; cursor: ew-resize !important; }
    
    .draggable:hover .resize-handle, .draggable.active .resize-handle {
      display: block !important;
    }
  </style>
</head>
<body>
  <div class="card-canvas">
    <div class="vignette-overlay"></div>
    <div class="texture-overlay"></div>
    ${template.decorations || ''}
    <div class="particles">
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
    </div>
    
    <div class="card-content">
      <div class="logo-header">
        <img class="chapter-logo draggable" src="${logoB64}" style="${logoB64 ? '' : 'display:none;'}" alt="Logo" data-tid="logo">
        <span class="club-title draggable" data-tid="club-title">${appState.chapter === 'cis' ? 'IEEE CIS UPES' : 'IEEE SPS UPES'}</span>
      </div>
      
      <div class="fact-main-block">
        <div class="fact-icon-container draggable" data-tid="icon">
          <div class="fact-icon-wrapper" style="width:100%; height:100%;">
            ${selectedIconSvg}
          </div>
        </div>
        
        <div class="fact-text-container">
          <div class="fact-category draggable" data-tid="category">${appState.category}</div>
          <div class="fact-title draggable" data-tid="title">${appState.title}</div>
          <div class="fact-body draggable" data-tid="body">${appState.body}</div>
        </div>
      </div>
      
      <div class="card-footer">
        <span class="society-handle draggable" data-tid="handle">${appState.handle}</span>
        <span class="interactive-prompt draggable" data-tid="prompt">${appState.prompt || 'Did you know?'}</span>
      </div>
    </div>
  </div>
</body>
</html>
    `;

    await new Promise(resolve => {
      this.iframe.onload = () => resolve();
      this.iframe.srcdoc = htmlContent;
    });

    this.setupDraggables(appState);
  }

  updateData(appState) {
    const iframeDoc = this.iframe.contentDocument || this.iframe.contentWindow.document;
    if (!iframeDoc) return;

    // Restore all dynamically edited text fields
    if (appState.editedTexts) {
      for (const [tid, val] of Object.entries(appState.editedTexts)) {
        const el = iframeDoc.querySelector(`[data-tid="${tid}"]`);
        if (el) el.innerText = val;
      }
    }

    const clubTitle = iframeDoc.querySelector('[data-tid="club-title"]');
    if (clubTitle) {
      clubTitle.innerText = appState.chapter === 'cis' ? 'IEEE CIS UPES' : 'IEEE SPS UPES';
    }

    const category = iframeDoc.querySelector('[data-tid="category"]');
    if (category) {
      const template = TECH_FACTS_REGISTRY.find(t => t.id === this.styleId);
      const isTerminal = template && template.id === '01';
      category.innerText = (isTerminal ? '> ' : '') + appState.category;
    }

    const title = iframeDoc.querySelector('[data-tid="title"]');
    if (title) title.innerText = appState.title;

    const body = iframeDoc.querySelector('[data-tid="body"]');
    if (body) body.innerText = appState.body;

    const handle = iframeDoc.querySelector('[data-tid="handle"]');
    if (handle) handle.innerText = appState.handle;

    const prompt = iframeDoc.querySelector('[data-tid="prompt"]');
    if (prompt) prompt.innerText = appState.prompt || 'Did you know?';

    const logo = iframeDoc.querySelector('[data-tid="logo"]');
    if (logo) {
      if (appState.logoDataUrl) {
        logo.src = appState.logoDataUrl;
        logo.style.display = '';
      } else {
        logo.style.display = 'none';
      }
    }

    const illustration = iframeDoc.querySelector('[data-tid="illustration"]');
    if (illustration) {
      if (!illustration.hasAttribute('data-orig-src')) {
        illustration.setAttribute('data-orig-src', illustration.src);
      }
      illustration.src = appState.illustrationDataUrl || illustration.getAttribute('data-orig-src') || '';
    }

    const iconWrapper = iframeDoc.querySelector('.fact-icon-wrapper') || iframeDoc.querySelector('[data-tid="icon"]');
    if (iconWrapper) {
      if (DEFAULT_ICONS[appState.iconKey]) {
        iconWrapper.innerHTML = DEFAULT_ICONS[appState.iconKey];
      }
    }
  }

  setupDraggables(appState) {
    const iframeDoc = this.iframe.contentDocument || this.iframe.contentWindow.document;
    const canvas = iframeDoc.querySelector('.card-canvas') || iframeDoc.querySelector('[data-tid="card-container"]') || iframeDoc.body;
    if (!canvas) return;

    // Apply inline font color pickers and accent variables
    if (appState.accentColor) {
      canvas.style.setProperty('--accent-color', appState.accentColor);
      if (this.styleId === '01') {
        canvas.style.color = appState.accentColor;
        canvas.style.borderColor = appState.accentColor;
        canvas.style.boxShadow = `inset 0 0 20px ${appState.accentColor}33`;
        const category = iframeDoc.querySelector('.fact-category');
        if (category) category.style.color = appState.accentColor;
        const body = iframeDoc.querySelector('.fact-body');
        if (body) body.style.color = appState.accentColor;
        const footer = iframeDoc.querySelector('.card-footer');
        if (footer) footer.style.borderColor = appState.accentColor;
        const logoText = iframeDoc.querySelector('.logo-header span');
        if (logoText) logoText.style.color = appState.accentColor;
        const handle = iframeDoc.querySelector('.society-handle');
        if (handle) handle.style.color = appState.accentColor;
        const particles = iframeDoc.querySelectorAll('.particle');
        particles.forEach(p => {
          p.style.backgroundColor = appState.accentColor;
          p.style.boxShadow = `0 0 8px ${appState.accentColor}`;
        });
      } else if (this.styleId === '04') {
        canvas.style.color = appState.accentColor;
        canvas.style.borderColor = appState.accentColor;
        const handle = iframeDoc.querySelector('.society-handle');
        if (handle) handle.style.color = appState.accentColor;
      } else if (this.styleId === '06') {
        canvas.style.backgroundColor = appState.accentColor;
      } else if (this.styleId === '07') {
        canvas.style.background = `linear-gradient(135deg, ${appState.accentColor} 0%, #1e1b4b 100%)`;
      }
    }

    const getTid = (el) => {
      return el.getAttribute('data-tid');
    };

    // Make all text elements editable
    const editables = Array.from(iframeDoc.querySelectorAll('.fact-category, .fact-title, .fact-body, .society-handle, .club-title, .interactive-prompt, [data-tid]'))
      .filter(el => {
        const tid = el.getAttribute('data-tid') || '';
        const isContainer = ['top-bar', 'bottom-bar', 'footer', 'card-container', 'logo', 'illustration'].includes(tid) || tid.startsWith('container-') || tid.startsWith('illustration-');
        const isImg = el.tagName.toLowerCase() === 'img';
        return !isContainer && !isImg;
      });

    editables.forEach(el => {
      el.setAttribute('contenteditable', 'true');
      el.setAttribute('spellcheck', 'false');
      el.addEventListener('input', () => {
        const tid = getTid(el);
        let val = el.innerText.replace(/\u00a0/g, ' ');

        if (!appState.editedTexts) appState.editedTexts = {};
        appState.editedTexts[tid] = val;

        // Legacy compatibility sync
        if (tid === 'category') appState.category = val;
        if (tid === 'title') appState.title = val;
        if (tid === 'body') appState.body = val;
        if (tid === 'handle') appState.handle = val;
        if (tid === 'prompt') appState.prompt = val;
        if (tid === 'club-title') appState.clubTitle = val;
        
        // Sync text field to parent input
        const inputId = tid === 'category' ? 'input-category' : 
                        (tid === 'title' ? 'input-title' : 
                        (tid === 'body' ? 'input-body' : 
                        (tid === 'prompt' ? 'input-prompt' : null)));
        if (inputId) {
          const input = document.getElementById(inputId);
          if (input) input.value = val;
        }
        if (typeof window.saveState === 'function') window.saveState();
      });
      el.addEventListener('mousedown', (e) => e.stopPropagation());
    });

    const draggables = Array.from(iframeDoc.querySelectorAll('.draggable'));

    draggables.forEach(el => {
      const tid = getTid(el);
      el.setAttribute('tabindex', '0');

      const style = window.getComputedStyle(el);
      if (style.position === 'static') {
        el.style.position = 'relative';
      }

      // Add 8-way resize handles to layout containers, icons, logos, and illustration containers, single handle to text
      const isContainer = ['icon', 'logo', 'illustration', 'top-bar', 'bottom-bar', 'footer', 'card-container'].includes(tid);
      if (isContainer) {
        const directions = ['nw', 'n', 'ne', 'e', 'se', 's', 'sw', 'w'];
        directions.forEach(dir => {
          const h = iframeDoc.createElement('div');
          h.className = `resize-handle resize-handle-${dir}`;
          h.setAttribute('data-dir', dir);
          el.appendChild(h);
        });
      } else {
        const handle = iframeDoc.createElement('div');
        handle.className = 'resize-handle resize-handle-se';
        handle.setAttribute('data-dir', 'se');
        el.appendChild(handle);
      }

      let isDragging = false;
      let startX, startY;
      let originalTx = 0, originalTy = 0;

      el.addEventListener('mousedown', (e) => {
        e.stopPropagation(); // Prevent dragging parent container
        if (e.target.getAttribute('contenteditable') === 'true' && e.target === iframeDoc.activeElement) {
          return;
        }

        // Selection hook to open details panel
        if (typeof window.selectElement === 'function') {
          window.selectElement(tid);
        }

        // Highlight active element border
        draggables.forEach(d => d.classList.remove('active'));
        el.classList.add('active');

        // Compute scaling from parent wrapper
        const scaleWrapper = document.getElementById('scale-wrapper');
        let scale = 1;
        if (scaleWrapper) {
          const scaleStr = scaleWrapper.style.transform;
          const scaleMatch = scaleStr.match(/scale\(([^)]+)\)/);
          if (scaleMatch) {
            scale = parseFloat(scaleMatch[1]);
          }
        }

        isDragging = true;
        el.style.cursor = 'grabbing';
        startX = e.screenX;
        startY = e.screenY;

        if (!appState.transforms) appState.transforms = {};
        const existing = appState.transforms[tid] || { x: 0, y: 0, scale: 1 };
        originalTx = existing.x || 0;
        originalTy = existing.y || 0;

        const onMouseMove = (ev) => {
          if (!isDragging) return;
          ev.preventDefault();

          const dx = (ev.screenX - startX) / scale;
          const dy = (ev.screenY - startY) / scale;

          let newTx = originalTx + dx;
          let newTy = originalTy + dy;
          const currentScale = existing.scale !== undefined ? existing.scale : 1;

          // Guided align snapping lines
          if (canvas) {
            const snapThreshold = 5;
            const localThreshold = snapThreshold / scale;
            
            const originalLocalLeft = el.offsetLeft - originalTx;
            const originalLocalTop = el.offsetTop - originalTy;
            
            let localElLeft = originalLocalLeft + newTx;
            let localElTop = originalLocalTop + newTy;
            const localElWidth = el.offsetWidth;
            const localElHeight = el.offsetHeight;
            let localElCenterX = localElLeft + localElWidth / 2;
            let localElCenterY = localElTop + localElHeight / 2;
            
            const localCanvasWidth = canvas.offsetWidth;
            const localCanvasHeight = canvas.offsetHeight;
            const localCanvasCenterX = localCanvasWidth / 2;
            const localCanvasCenterY = localCanvasHeight / 2;
            
            const otherElements = Array.from(canvas.querySelectorAll('.draggable')).filter(other => other !== el);
            
            let snappedX = false;
            let guideLinesX = [];
            
            // Center of canvas snap
            const diffCanvasX = localElCenterX - localCanvasCenterX;
            if (Math.abs(diffCanvasX) < localThreshold) {
              newTx -= diffCanvasX;
              localElLeft -= diffCanvasX;
              localElCenterX = localCanvasCenterX;
              guideLinesX.push({ x: localCanvasCenterX });
              snappedX = true;
            }
            
            // Align other elements snap X
            if (!snappedX) {
              for (const other of otherElements) {
                const otherTid = getTid(other);
                const otherTrans = appState.transforms[otherTid] || { x: 0, y: 0 };
                const otherOrigLocalLeft = other.offsetLeft - (otherTrans.x || 0);
                const localOtherLeft = otherOrigLocalLeft + (otherTrans.x || 0);
                const localOtherWidth = other.offsetWidth;
                const localOtherCenterX = localOtherLeft + localOtherWidth / 2;
                const localOtherRight = localOtherLeft + localOtherWidth;
                
                const diffLeft = localElLeft - localOtherLeft;
                if (Math.abs(diffLeft) < localThreshold) {
                  newTx -= diffLeft;
                  localElLeft -= diffLeft;
                  localElCenterX = localElLeft + localElWidth / 2;
                  guideLinesX.push({ x: localOtherLeft });
                  snappedX = true;
                  break;
                }
                const localElRight = localElLeft + localElWidth;
                const diffRight = localElRight - localOtherRight;
                if (Math.abs(diffRight) < localThreshold) {
                  newTx -= diffRight;
                  localElLeft -= diffRight;
                  localElCenterX = localElLeft + localElWidth / 2;
                  guideLinesX.push({ x: localOtherRight });
                  snappedX = true;
                  break;
                }
                const diffCenter = localElCenterX - localOtherCenterX;
                if (Math.abs(diffCenter) < localThreshold) {
                  newTx -= diffCenter;
                  localElLeft -= diffCenter;
                  localElCenterX = localOtherCenterX;
                  guideLinesX.push({ x: localOtherCenterX });
                  snappedX = true;
                  break;
                }
              }
            }
            
            let snappedY = false;
            let guideLinesY = [];
            
            // Center of canvas snap Y
            const diffCanvasY = localElCenterY - localCanvasCenterY;
            if (Math.abs(diffCanvasY) < localThreshold) {
              newTy -= diffCanvasY;
              localElTop -= diffCanvasY;
              localElCenterY = localCanvasCenterY;
              guideLinesY.push({ y: localCanvasCenterY });
              snappedY = true;
            }
            
            // Align other elements snap Y
            if (!snappedY) {
              for (const other of otherElements) {
                const otherTid = getTid(other);
                const otherTrans = appState.transforms[otherTid] || { x: 0, y: 0 };
                const otherOrigLocalTop = other.offsetTop - (otherTrans.y || 0);
                const localOtherTop = otherOrigLocalTop + (otherTrans.y || 0);
                const localOtherHeight = other.offsetHeight;
                const localOtherCenterY = localOtherTop + localOtherHeight / 2;
                const localOtherBottom = localOtherTop + localOtherHeight;
                
                const diffTop = localElTop - localOtherTop;
                if (Math.abs(diffTop) < localThreshold) {
                  newTy -= diffTop;
                  localElTop -= diffTop;
                  localElCenterY = localElTop + localElHeight / 2;
                  guideLinesY.push({ y: localOtherTop });
                  snappedY = true;
                  break;
                }
                const localElBottom = localElTop + localElHeight;
                const diffBottom = localElBottom - localOtherBottom;
                if (Math.abs(diffBottom) < localThreshold) {
                  newTy -= diffBottom;
                  localElTop -= diffBottom;
                  localElCenterY = localElTop + localElHeight / 2;
                  guideLinesY.push({ y: localOtherBottom });
                  snappedY = true;
                  break;
                }
                const diffCenter = localElCenterY - localOtherCenterY;
                if (Math.abs(diffCenter) < localThreshold) {
                  newTy -= diffCenter;
                  localElTop -= diffCenter;
                  localElCenterY = localOtherCenterY;
                  guideLinesY.push({ y: localOtherCenterY });
                  snappedY = true;
                  break;
                }
              }
            }
            
            // Render Snaps
            let guideContainer = canvas.querySelector('.guide-container');
            if (!guideContainer) {
              guideContainer = iframeDoc.createElement('div');
              guideContainer.className = 'guide-container';
              guideContainer.style.position = 'absolute';
              guideContainer.style.inset = '0';
              guideContainer.style.pointerEvents = 'none';
              guideContainer.style.zIndex = '9999';
              canvas.appendChild(guideContainer);
            }
            guideContainer.innerHTML = '';
            
            guideLinesX.forEach(g => {
              const line = iframeDoc.createElement('div');
              line.className = 'guide-line guide-line-vertical';
              line.style.position = 'absolute';
              line.style.top = '0';
              line.style.bottom = '0';
              line.style.left = `${g.x}px`;
              line.style.width = '0';
              line.style.borderLeft = '1.5px dashed #ff007f';
              guideContainer.appendChild(line);
            });
            
            guideLinesY.forEach(g => {
              const line = iframeDoc.createElement('div');
              line.className = 'guide-line guide-line-horizontal';
              line.style.position = 'absolute';
              line.style.left = '0';
              line.style.right = '0';
              line.style.top = `${g.y}px`;
              line.style.height = '0';
              line.style.borderTop = '1.5px dashed #ff007f';
              guideContainer.appendChild(line);
            });
          }

          appState.transforms[tid] = { x: newTx, y: newTy, scale: currentScale, w: existing.w, h: existing.h };
          el.style.transform = `translate(${newTx}px, ${newTy}px) scale(${currentScale})`;
        };

        const onMouseUp = () => {
          isDragging = false;
          el.style.cursor = 'grab';
          iframeDoc.removeEventListener('mousemove', onMouseMove);
          iframeDoc.removeEventListener('mouseup', onMouseUp);
          document.removeEventListener('mousemove', onMouseMove);
          document.removeEventListener('mouseup', onMouseUp);

          const guideContainer = canvas.querySelector('.guide-container');
          if (guideContainer) guideContainer.innerHTML = '';

          if (typeof window.saveState === 'function') window.saveState();
        };

        iframeDoc.addEventListener('mousemove', onMouseMove);
        iframeDoc.addEventListener('mouseup', onMouseUp);
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
      });

      // Handle Resizing
      const handles = el.querySelectorAll('.resize-handle');
      handles.forEach(h => {
        h.addEventListener('mousedown', (e) => {
          e.stopPropagation();
          e.preventDefault();

          const dir = h.getAttribute('data-dir');
          let isResizing = true;
          const rect = el.getBoundingClientRect();
          const startX = e.clientX;
          const startY = e.clientY;
          const startW = el.offsetWidth;
          const startH = el.offsetHeight;

          const existing = appState.transforms[tid] || { x: 0, y: 0, scale: 1 };
          const originalScale = existing.scale || 1;
          const originalTx = existing.x || 0;
          const originalTy = existing.y || 0;
          const originalW = existing.w || startW;
          const originalH = existing.h || startH;

          const cx = rect.left + rect.width / 2;
          const cy = rect.top + rect.height / 2;
          const d0 = Math.sqrt(Math.pow(startX - cx, 2) + Math.pow(startY - cy, 2));
          const originalFontSize = parseFloat(el.style.fontSize) || parseFloat(this.iframe.contentWindow.getComputedStyle(el).fontSize) || 16;

          const onResizeMove = (ev) => {
            if (!isResizing) return;
            ev.preventDefault();

            const isBoxStretch = ['icon', 'logo', 'illustration', 'top-bar', 'bottom-bar', 'footer', 'card-container'].includes(tid);
            if (isBoxStretch) {
              // 8-way box stretching
              const dx = ev.clientX - startX;
              const dy = ev.clientY - startY;

              let newW = originalW;
              let newH = originalH;
              let newTx = originalTx;
              let newTy = originalTy;

              if (dir.includes('e')) {
                newW = originalW + dx;
              } else if (dir.includes('w')) {
                newW = originalW - dx;
                newTx = originalTx + dx;
              }

              if (dir.includes('s')) {
                newH = originalH + dy;
              } else if (dir.includes('n')) {
                newH = originalH - dy;
                newTy = originalTy + dy;
              }

              if (newW < 20) {
                const diff = 20 - newW;
                newW = 20;
                if (dir.includes('w')) newTx -= diff;
              }
              if (newH < 20) {
                const diff = 20 - newH;
                newH = 20;
                if (dir.includes('n')) newTy -= diff;
              }

              appState.transforms[tid] = { x: newTx, y: newTy, w: newW, h: newH, scale: 1 };
              el.style.maxWidth = 'none';
              el.style.maxHeight = 'none';
              el.style.minWidth = '0';
              el.style.minHeight = '0';
              el.style.width = `${newW}px`;
              el.style.height = `${newH}px`;
              el.style.transform = `translate(${newTx}px, ${newTy}px) scale(1)`;
            } else {
              // Proportional scaling for text (adjust font size directly)
              const d1 = Math.sqrt(Math.pow(ev.clientX - cx, 2) + Math.pow(ev.clientY - cy, 2));
              let ratio = d1 / d0;
              let newFontSize = Math.round(originalFontSize * ratio);
              if (newFontSize < 8) newFontSize = 8;
              if (newFontSize > 150) newFontSize = 150;

              if (!appState.textStyles) appState.textStyles = {};
              if (!appState.textStyles[tid]) appState.textStyles[tid] = {};
              appState.textStyles[tid].fontSize = newFontSize;

              el.style.fontSize = `${newFontSize}px`;
              el.style.transform = `translate(${originalTx}px, ${originalTy}px) scale(1)`;
              appState.transforms[tid] = { x: originalTx, y: originalTy, scale: 1 };
              
              if (appState.activeElementTid === tid) {
                const sizeInput = window.parent.document.getElementById('text-size') || window.document.getElementById('text-size');
                if (sizeInput) sizeInput.value = newFontSize;
              }
            }
          };

          const onResizeUp = () => {
            isResizing = false;
            iframeDoc.removeEventListener('mousemove', onResizeMove);
            iframeDoc.removeEventListener('mouseup', onResizeUp);
            document.removeEventListener('mousemove', onResizeMove);
            document.removeEventListener('mouseup', onResizeUp);

            if (typeof window.saveState === 'function') window.saveState();
          };

          iframeDoc.addEventListener('mousemove', onResizeMove);
          iframeDoc.addEventListener('mouseup', onResizeUp);
          document.addEventListener('mousemove', onResizeMove);
          document.addEventListener('mouseup', onResizeUp);
        });
      });
    });

    // Keyboard navigation for active draggable element
    if (window._handleDraggableKeyDown) {
      iframeDoc.removeEventListener('keydown', window._handleDraggableKeyDown);
    }
    window._handleDraggableKeyDown = (e) => {
      const activeEl = iframeDoc.querySelector('.draggable.active') || iframeDoc.activeElement;
      if (!activeEl || !activeEl.classList.contains('draggable')) return;
      
      // If we are actively typing inside contenteditable, don't move the element with arrows
      if (iframeDoc.activeElement === activeEl && activeEl.getAttribute('contenteditable') === 'true') {
        return;
      }
      
      const step = e.shiftKey ? 10 : 2;
      let moved = false;
      const tid = activeEl.getAttribute('data-tid');
      if (!tid) return;
      
      if (!appState.transforms) appState.transforms = {};
      if (!appState.transforms[tid]) appState.transforms[tid] = { x: 0, y: 0, scale: 1 };
      const trans = appState.transforms[tid];
      
      if (e.key === 'ArrowUp') {
        trans.y -= step;
        moved = true;
      } else if (e.key === 'ArrowDown') {
        trans.y += step;
        moved = true;
      } else if (e.key === 'ArrowLeft') {
        trans.x -= step;
        moved = true;
      } else if (e.key === 'ArrowRight') {
        trans.x += step;
        moved = true;
      }
      
      if (moved) {
        e.preventDefault();
        const scaleVal = trans.scale !== undefined ? trans.scale : 1;
        activeEl.style.transform = `translate(${trans.x}px, ${trans.y}px) scale(${scaleVal})`;
        
        // Sync custom text properties panel position labels if open
        if (typeof window.saveState === 'function') window.saveState();
      }
    };
    iframeDoc.addEventListener('keydown', window._handleDraggableKeyDown);

    // Focus listener to show active border outline when tabbed
    draggables.forEach(d => {
      d.addEventListener('focus', () => {
        draggables.forEach(item => item.classList.remove('active'));
        d.classList.add('active');
        if (typeof window.selectElement === 'function') {
          const tid = d.getAttribute('data-tid');
          window.selectElement(tid);
        }
      });
    });

    // Restore positions
    if (appState.transforms) {
      for (const [tid, pos] of Object.entries(appState.transforms)) {
        const el = iframeDoc.querySelector(`[data-tid="${tid}"]`);
        if (el) {
          const isBoxStretch = ['icon', 'logo', 'illustration', 'top-bar', 'bottom-bar', 'footer', 'card-container'].includes(tid);
          if (isBoxStretch && pos.w && pos.h) {
            el.style.maxWidth = 'none';
            el.style.maxHeight = 'none';
            el.style.minWidth = '0';
            el.style.minHeight = '0';
            el.style.width = `${pos.w}px`;
            el.style.height = `${pos.h}px`;
          }
          const scaleVal = pos.scale !== undefined ? pos.scale : 1;
          el.style.transform = `translate(${pos.x}px, ${pos.y}px) scale(${scaleVal})`;
        }
      }
    }

    // Restore custom text styles from appState
    if (appState.textStyles) {
      for (const [tid, styles] of Object.entries(appState.textStyles)) {
        const el = iframeDoc.querySelector(`[data-tid="${tid}"]`);
        if (el) {
          if (styles.fontSize) el.style.fontSize = styles.fontSize + 'px';
          if (styles.fontWeight) el.style.fontWeight = styles.fontWeight;
          if (styles.color) el.style.color = styles.color;
          if (styles.textAlign) el.style.textAlign = styles.textAlign;
          if (styles.letterSpacing) el.style.letterSpacing = styles.letterSpacing + 'px';
          if (styles.lineHeight) el.style.lineHeight = styles.lineHeight;
        }
      }
    }
  }

  async exportImage(format) {
    const iframeDoc = this.iframe.contentDocument || this.iframe.contentWindow.document;
    if (!iframeDoc) return;
    const canvasEl = iframeDoc.querySelector('.card-canvas');
    if (!canvasEl) return;

    // Temporarily hide edit guides & boundaries
    const editables = iframeDoc.querySelectorAll('[contenteditable="true"]');
    const originalOutlines = [];
    editables.forEach(el => {
      originalOutlines.push({ el, outline: el.style.outline });
      el.style.outline = 'none';
    });

    const handles = iframeDoc.querySelectorAll('.resize-handle');
    handles.forEach(h => h.style.setProperty('display', 'none', 'important'));
    const guides = iframeDoc.querySelectorAll('.guide-container');
    guides.forEach(g => g.style.setProperty('display', 'none', 'important'));

    // Remove active outlines
    const draggables = iframeDoc.querySelectorAll('.draggable');
    draggables.forEach(d => d.classList.remove('active'));

    try {
      const html2canvas = window.html2canvas;
      const iframeWin = this.iframe.contentWindow;
      const computedBg = iframeWin.getComputedStyle(canvasEl).backgroundColor;
      const isTransparent = !computedBg || computedBg === 'transparent' || computedBg === 'rgba(0, 0, 0, 0)';
      const exportBg = isTransparent ? '#000000' : computedBg;

      const canvas = await html2canvas(canvasEl, {
        scale: 1.5,
        useCORS: true,
        backgroundColor: exportBg
      });

      const formatExt = format === 'jpg' ? 'jpeg' : 'png';
      const link = document.createElement('a');
      link.download = `tech_fact_${this.styleId || 'card'}.${format}`;
      link.href = canvas.toDataURL(`image/${formatExt}`, 0.95);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error('Image export failed:', err);
      alert('Export failed: ' + err.message);
    } finally {
      originalOutlines.forEach(item => {
        item.el.style.outline = item.outline;
      });
      handles.forEach(h => h.style.removeProperty('display'));
      guides.forEach(g => g.style.removeProperty('display'));
    }
  }

  async exportVideo(durationSec) {
    const iframeDoc = this.iframe.contentDocument || this.iframe.contentWindow.document;
    if (!iframeDoc) return;
    const canvasEl = iframeDoc.querySelector('.card-canvas');
    if (!canvasEl) return;

    const overlay = document.getElementById('overlay');
    const overlayText = document.getElementById('overlay-text');
    if (overlay) overlay.style.display = 'flex';
    if (overlayText) overlayText.innerText = 'Capturing Screen...';

    const editables = iframeDoc.querySelectorAll('[contenteditable="true"]');
    const originalOutlines = [];
    editables.forEach(el => {
      originalOutlines.push({ el, outline: el.style.outline });
      el.style.outline = 'none';
    });

    const handles = iframeDoc.querySelectorAll('.resize-handle');
    handles.forEach(h => h.style.setProperty('display', 'none', 'important'));
    const guides = iframeDoc.querySelectorAll('.guide-container');
    guides.forEach(g => g.style.setProperty('display', 'none', 'important'));

    const draggables = iframeDoc.querySelectorAll('.draggable');
    draggables.forEach(d => d.classList.remove('active'));

    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: { displaySurface: "browser", frameRate: { ideal: 30 } },
        audio: false,
        preferCurrentTab: true
      });

      const mediaRecorder = new MediaRecorder(stream, { mimeType: 'video/webm' });
      const chunks = [];
      mediaRecorder.ondataavailable = e => {
        if (e.data.size > 0) chunks.push(e.data);
      };

      mediaRecorder.onstop = async () => {
        stream.getTracks().forEach(t => t.stop());
        if (overlayText) overlayText.innerText = 'Converting to MP4...';

        const webmBlob = new Blob(chunks, { type: 'video/webm' });

        try {
          const track = stream.getVideoTracks()[0];
          const settings = track.getSettings();
          const sw = settings.width || window.screen.width;
          const sh = settings.height || window.screen.height;

          const format = document.getElementById('input-format')?.value || '9:16';
          let targetRatio = 9 / 16;
          if (format === "1:1") targetRatio = 1 / 1;
          else if (format === "4:5") targetRatio = 4 / 5;
          else if (format === "16:9") targetRatio = 16 / 9;

          const streamRatio = sw / sh;
          let cropW, cropH, cropX, cropY;
          if (targetRatio < streamRatio) {
            cropH = sh;
            cropW = Math.round(sh * targetRatio);
            if (cropW % 2 !== 0) cropW -= 1;
            cropX = Math.round((sw - cropW) / 2);
            cropY = 0;
          } else {
            cropW = sw;
            cropH = Math.round(sw / targetRatio);
            if (cropH % 2 !== 0) cropH -= 1;
            cropX = 0;
            cropY = Math.round((sh - cropH) / 2);
          }

          const { createFFmpeg, fetchFile } = window.FFmpeg;
          const ffmpeg = createFFmpeg({
            corePath: 'https://unpkg.com/@ffmpeg/core@0.11.0/dist/ffmpeg-core.js',
            log: true
          });

          await ffmpeg.load();
          ffmpeg.FS('writeFile', 'input.webm', await fetchFile(webmBlob));
          await ffmpeg.run('-i', 'input.webm', '-vf', `crop=${cropW}:${cropH}:${cropX}:${cropY}`, '-pix_fmt', 'yuv420p', 'output.mp4');
          const data = ffmpeg.FS('readFile', 'output.mp4');

          const mp4Blob = new Blob([data.buffer], { type: 'video/mp4' });
          const url = URL.createObjectURL(mp4Blob);

          const link = document.createElement('a');
          link.download = `tech_fact_${this.styleId || 'card'}.mp4`;
          link.href = url;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } catch (ffmpegErr) {
          console.warn("FFmpeg conversion failed, downloading WebM fallback:", ffmpegErr);
          const url = URL.createObjectURL(webmBlob);
          const link = document.createElement('a');
          link.download = `tech_fact_${this.styleId || 'card'}.webm`;
          link.href = url;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          alert('MP4 conversion failed. WebM video downloaded successfully instead.');
        } finally {
          if (overlay) overlay.style.display = 'none';
          originalOutlines.forEach(item => {
            item.el.style.outline = item.outline;
          });
          handles.forEach(h => h.style.removeProperty('display'));
          guides.forEach(g => g.style.removeProperty('display'));
        }
      };

      const scaleWrapper = document.getElementById('scale-wrapper');
      const prevScale = scaleWrapper ? scaleWrapper.style.transform : '';
      if (scaleWrapper) {
        scaleWrapper.style.transform = 'scale(1)';
      }

      await canvasEl.requestFullscreen().catch((err) => {
        console.warn("Fullscreen request failed", err);
      });

      mediaRecorder.start();

      setTimeout(() => {
        mediaRecorder.stop();
        if (iframeDoc.fullscreenElement || document.fullscreenElement) {
          (iframeDoc.exitFullscreen || document.exitFullscreen).call(iframeDoc.fullscreenElement ? iframeDoc : document);
        }
        if (scaleWrapper) {
          scaleWrapper.style.transform = prevScale;
        }
      }, durationSec * 1000);

    } catch (err) {
      console.error('Video export failed:', err);
      alert('Export failed: ' + err.message);
      if (overlay) overlay.style.display = 'none';
      originalOutlines.forEach(item => {
        item.el.style.outline = item.outline;
      });
      handles.forEach(h => h.style.removeProperty('display'));
      guides.forEach(g => g.style.removeProperty('display'));
    }
  }
}
