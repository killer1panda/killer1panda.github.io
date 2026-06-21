// STYLES DATABASE
const STYLES = [
  { num: "01", name: "90s Retro Grid" },
  { num: "02", name: "Minimalist Black & Gold" },
  { num: "03", name: "Soft Pastel Watercolor" },
  { num: "04", name: "Bold Maximalist Pop" },
  { num: "05", name: "Botanical Greenery" },
  { num: "06", name: "Vintage Polaroid Collage" },
  { num: "07", name: "Neon Glow Night" },
  { num: "08", name: "Scandinavian Hygge" },
  { num: "09", name: "Tropical Summer" },
  { num: "10", name: "Celestial Starry Night" },
  { num: "11", name: "Modern Geometric Abstract" },
  { num: "12", name: "Rustic Kraft & Twine" },
  { num: "13", name: "Candy Color Gradient" },
  { num: "14", name: "Art Deco Glamour" },
  { num: "15", name: "Doodle & Sketch" },
  { num: "16", name: "Boho Macramé & Earth" },
  { num: "17", name: "Kawaii Cute" },
  { num: "18", name: "Industrial Modern" },
  { num: "19", name: "Fairy Tale Storybook" },
  { num: "20", name: "Monochrome Elegance" },
  { num: "21", name: "Frutiger Aero Revival" },
  { num: "22", name: "MTV Signal Graphics" },
  { num: "23", name: "Surrealist Tech UI (HUD)" },
  { num: "24", name: "Distorted Cut Collage (Zine)" },
  { num: "25", name: "Memphis Milano Pop" },
  { num: "26", name: "Brutalist Web" },
  { num: "27", name: "Glitch Core / Vaporwave" },
  { num: "28", name: "Acid Graphic (Liquid Metal)" },
  { num: "29", name: "Cyberpunk Tech" },
  { num: "30", name: "Bauhaus Modern" },
  { num: "31", name: "Victorian Gothic" },
  { num: "32", name: "Risograph Print" },
  { num: "33", name: "Mid Century Modern (Atomic)" },
  { num: "34", name: "8-Bit Pixel Art (Arcade)" },
  { num: "35", name: "Folk Art Whimsy" },
  { num: "36", name: "Neo Noir Atmospheric" },
  { num: "37", name: "Bubblegum Pop (Glossy)" },
  { num: "38", name: "Desert Boho" },
  { num: "39", name: "Steampunk Chrono" },
  { num: "40", name: "Holographic Foil (Iridescent)" },
];

const styleList = document.getElementById('styleList');
const searchInput = document.getElementById('searchInput');
const previewFrame = document.getElementById('preview-frame');
const photoUpload = document.getElementById('photo-upload');

let currentStyle = '01';
let currentVariant = 'head_core';

// ─── INIT SIDEBAR ───
function renderSidebar(filter = "") {
  const filtered = STYLES.filter(s => s.name.toLowerCase().includes(filter.toLowerCase()) || s.num.includes(filter));
  styleList.innerHTML = filtered.map(s => `
    <div class="style-item ${s.num === currentStyle ? 'active' : ''}" data-num="${s.num}">
      <h3>Style ${s.num}: ${s.name}</h3>
      <div class="variant-selector">
        <button class="variant-btn ${s.num === currentStyle && currentVariant === 'head_core' ? 'active' : ''}" data-variant="head_core">Head & Core</button>
        <button class="variant-btn ${s.num === currentStyle && currentVariant === 'executive' ? 'active' : ''}" data-variant="executive">Executive</button>
      </div>
    </div>
  `).join('');
  
  // Attach events
  document.querySelectorAll('.variant-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const styleNum = e.target.closest('.style-item').dataset.num;
      const variant = e.target.dataset.variant;
      loadTemplate(styleNum, variant);
    });
  });
  
  document.querySelectorAll('.style-item').forEach(item => {
    item.addEventListener('click', () => {
      loadTemplate(item.dataset.num, currentVariant);
    });
  });
}

searchInput.addEventListener('input', (e) => renderSidebar(e.target.value));
renderSidebar();

// ─── LOAD TEMPLATE LOGIC ───
async function loadTemplate(styleNum, variant) {
  currentStyle = styleNum;
  currentVariant = variant;
  renderSidebar(searchInput.value);
  
  const filename = `style_${styleNum}_${variant}.html`;
  try {
    const response = await fetch(filename);
    if (!response.ok) throw new Error("Template not found");
    const htmlText = await response.text();
    
    // Parse the fetched HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlText, 'text/html');
    
    // Extract head elements (fonts, styles)
    const headContent = Array.from(doc.head.querySelectorAll('style, link[rel="stylesheet"]'))
      .map(el => el.outerHTML).join('\n');
      
    // Extract the card canvas
    const cardCanvas = doc.querySelector('.card-canvas');
    if (!cardCanvas) throw new Error("No .card-canvas found in template");
    
    // Construct the Iframe Document
    const iframeDoc = previewFrame.contentDocument || previewFrame.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        ${headContent}
        <style>
          /* Master Creator Overrides */
          body { 
            background: transparent !important; 
            margin: 0; padding: 20px; 
            display: flex; justify-content: center; align-items: flex-start;
          }
          .card-canvas {
            margin: 0 !important;
            transform-origin: top center;
          }
          
          /* Canva-like Editability Styles */
          [contenteditable="true"] {
            outline: 2px dashed rgba(255,255,255,0.4);
            outline-offset: 4px;
            cursor: text;
            transition: outline 0.2s;
            position: relative;
            z-index: 100;
          }
          [contenteditable="true"]:focus {
            outline: 2px solid #3b82f6;
            background: rgba(0,0,0,0.2);
          }
          
          /* Draggable cursor */
          .draggable {
            cursor: grab;
            position: relative;
          }
          .draggable:active {
            cursor: grabbing;
          }
          
          /* Photo Upload Indication */
          .profile-frame {
            cursor: pointer;
            transition: transform 0.2s;
          }
          .profile-frame:hover {
            transform: scale(1.02);
            box-shadow: 0 0 0 4px rgba(59,130,246,0.5);
          }
          
          /* 1:1 and 4:5 Aspect Ratio Fixes */
          .card-canvas[style*="1 / 1"] .main-wishing-header,
          .card-canvas[style*="4 / 5"] .main-wishing-header {
            font-size: clamp(1.4rem, 5vw, 2.2rem) !important;
            max-width: 90% !important;
            word-wrap: break-word !important;
            margin-left: auto !important; margin-right: auto !important;
          }
          .card-canvas[style*="1 / 1"] .name,
          .card-canvas[style*="4 / 5"] .name {
            font-size: clamp(1.5rem, 6vw, 2.5rem) !important;
            max-width: 90% !important;
            word-wrap: break-word !important;
          }
        </style>
      </head>
      <body>
        ${cardCanvas.outerHTML}
      </body>
      </html>
    `);
    iframeDoc.close();
    
    // Wait a tick for iframe to render, then inject Canva scripts
    setTimeout(() => {
      injectEditorEngine(iframeDoc);
      updateIframeHeight(iframeDoc);
    }, 100);
    
  } catch (err) {
    console.error("Error loading template:", err);
    previewFrame.contentDocument.body.innerHTML = `<h2 style="color: white; font-family: sans-serif; text-align: center;">Error loading template ${filename}</h2>`;
  }
}

// ─── EDITOR ENGINE (Injected into Iframe) ───
function injectEditorEngine(iframeDoc) {
  const card = iframeDoc.querySelector('.card-canvas');
  if (!card) return;

  // 1. Make text editable
  const textSelectors = ['.name', '.title', '.wishing-text', '.main-wishing-header', '.quote-text', '.date'];
  textSelectors.forEach(selector => {
    iframeDoc.querySelectorAll(selector).forEach(el => {
      el.setAttribute('contenteditable', 'true');
      el.setAttribute('spellcheck', 'false');
      // Prevent drag when editing text
      el.addEventListener('mousedown', (e) => e.stopPropagation());
    });
  });

  // 2. Photo Upload Hook
  const profileFrames = iframeDoc.querySelectorAll('.profile-frame');
  profileFrames.forEach(frame => {
    frame.addEventListener('click', (e) => {
      e.stopPropagation();
      // Store reference to the clicked frame globally so the input event knows where to put it
      window.targetProfileFrame = frame;
      photoUpload.click();
    });
  });

  // 3. Drag and Drop Engine
  const draggables = iframeDoc.querySelectorAll('.name, .title, .quote-container, .profile-frame, .main-wishing-header, .logo-header');
  draggables.forEach(el => {
    el.classList.add('draggable');
    let isDragging = false;
    let startX, startY, initialX, initialY;

    el.addEventListener('mousedown', startDrag);
    
    function startDrag(e) {
      if(e.target.hasAttribute('contenteditable')) return; // Don't drag if clicking text to edit
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
      
      const style = window.getComputedStyle(el);
      const matrix = new DOMMatrixReadOnly(style.transform);
      initialX = matrix.m41;
      initialY = matrix.m42;
      
      iframeDoc.addEventListener('mousemove', drag);
      iframeDoc.addEventListener('mouseup', stopDrag);
    }

    function drag(e) {
      if (!isDragging) return;
      e.preventDefault();
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      // We use transform translate to move it safely without breaking flex layouts
      el.style.transform = `translate(${initialX + dx}px, ${initialY + dy}px)`;
    }

    function stopDrag() {
      isDragging = false;
      iframeDoc.removeEventListener('mousemove', drag);
      iframeDoc.removeEventListener('mouseup', stopDrag);
    }
  });
}

// Handle actual photo upload
photoUpload.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file || !window.targetProfileFrame) return;
  
  const reader = new FileReader();
  reader.onload = (event) => {
    const dataUrl = event.target.result;
    const frame = window.targetProfileFrame;
    
    // Replace inner HTML with an object-fit image
    frame.innerHTML = `<img src="${dataUrl}" style="width: 100%; height: 100%; object-fit: cover; border-radius: inherit; display: block;" alt="Uploaded Photo" />`;
    // Remove svg fill
    frame.style.background = 'transparent';
  };
  reader.readAsDataURL(file);
});

function updateIframeHeight(iframeDoc) {
  const card = iframeDoc.querySelector('.card-canvas');
  if(card) {
    // dynamically adjust iframe wrapper width to match the aspect ratio limits
    previewFrame.style.maxWidth = '100%';
  }
}

// Initial Load
loadTemplate('01', 'head_core');

// ─── TOOLBAR CONTROLS ───

// Aspect Ratio
document.querySelectorAll('.ratio-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    document.querySelectorAll('.ratio-btn').forEach(b => b.classList.remove('btn-primary'));
    e.target.classList.add('btn-primary');
    
    const ratio = e.target.dataset.ratio;
    const iframeDoc = previewFrame.contentDocument;
    if(iframeDoc) {
      const card = iframeDoc.querySelector('.card-canvas');
      if(card) {
        card.style.aspectRatio = ratio;
        // The injected CSS will automatically handle the 1:1 / 4:5 text shrinking via attribute selector
      }
    }
  });
});

// Chapter Logo
document.querySelectorAll('.chapter-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    document.querySelectorAll('.chapter-btn').forEach(b => b.classList.remove('btn-primary'));
    e.target.classList.add('btn-primary');
    
    const chapter = e.target.dataset.chapter;
    const iframeDoc = previewFrame.contentDocument;
    if(iframeDoc) {
      const logoImg = iframeDoc.querySelector('.logo-header img:nth-child(2)');
      if(logoImg) {
        logoImg.src = chapter === 'cis' ? 'logos/ieee_cis_upes.png' : 'logos/ieee_sps_upes.png';
      }
    }
  });
});

// ─── EXPORT LOGIC (Image) ───
async function exportImage(format) {
  const iframeDoc = previewFrame.contentDocument;
  const card = iframeDoc.querySelector('.card-canvas');
  if(!card) return;

  // Temporarily hide edit outlines
  iframeDoc.querySelectorAll('[contenteditable="true"]').forEach(el => el.style.outline = 'none');

  const canvas = await html2canvas(card, {
    scale: 2, // High resolution
    useCORS: true,
    backgroundColor: null
  });

  iframeDoc.querySelectorAll('[contenteditable="true"]').forEach(el => el.style.outline = '');

  const link = document.createElement('a');
  link.download = `sota_wishes_${currentStyle}_${currentVariant}.${format}`;
  link.href = canvas.toDataURL(`image/${format === 'jpg' ? 'jpeg' : 'png'}`, 0.9);
  link.click();
}

document.getElementById('btn-dl-png').addEventListener('click', () => exportImage('png'));
document.getElementById('btn-dl-jpg').addEventListener('click', () => exportImage('jpg'));

// ─── EXPORT LOGIC (Video / MP4) ───
document.getElementById('btn-dl-mp4').addEventListener('click', async () => {
  try {
    alert("Instructions: A screen sharing dialog will appear. Please select the 'Current Tab' or 'Browser Window', and ensure 'Share Audio' is OFF. Recording will automatically stop after 5 seconds.");
    
    const stream = await navigator.mediaDevices.getDisplayMedia({
      video: { displaySurface: "browser", frameRate: { ideal: 60 } },
      audio: false,
      preferCurrentTab: true
    });

    const mediaRecorder = new MediaRecorder(stream, { mimeType: 'video/webm; codecs=vp9' });
    const chunks = [];

    mediaRecorder.ondataavailable = (e) => {
      if (e.data.size > 0) chunks.push(e.data);
    };

    mediaRecorder.onstop = () => {
      const blob = new Blob(chunks, { type: 'video/webm' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.download = `sota_wishes_${currentStyle}_${currentVariant}.webm`;
      link.href = url;
      link.click();
      
      // Cleanup
      stream.getTracks().forEach(track => track.stop());
      document.getElementById('recordingIndicator').style.display = 'none';
      document.body.style.background = '';
      document.querySelector('.sidebar').style.display = 'flex';
      document.querySelector('.floating-controls').style.display = 'flex';
    };

    // UI changes for recording mode (isolate the card)
    document.querySelector('.sidebar').style.display = 'none';
    document.querySelector('.floating-controls').style.display = 'none';
    document.body.style.background = '#000';
    document.getElementById('recordingIndicator').style.display = 'flex';

    // Start recording for 5 seconds
    mediaRecorder.start();
    setTimeout(() => {
      mediaRecorder.stop();
    }, 5000);

  } catch (err) {
    console.error("Video export failed:", err);
    alert("Video export was cancelled or failed. Error: " + err.message);
  }
});
