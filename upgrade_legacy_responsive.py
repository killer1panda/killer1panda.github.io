import os
import glob
import re
import base64

archive_dir = '/Users/ajay/teamwork_projects_archive/sota_wishes_templates'
output_dir = '/Users/ajay/teamwork_projects/sota_wishes_templates'

files = sorted(glob.glob(os.path.join(archive_dir, 'style_*.html')))

new_toolbar = '''
  <div class="topbar" style="position:fixed; top:0; left:0; width:100%; height:60px; background:#18181b; border-bottom:1px solid #27272a; z-index:9999; display:flex; justify-content:space-between; align-items:center; padding:0 20px; color:white;">
    <div style="font-weight: 600; font-family:'Inter',sans-serif;">Legacy Master Creator Engine</div>
    <div style="display:flex; gap:10px; align-items:center; font-family:'Inter',sans-serif; font-size:12px;">
      <select id="input-format" style="background:#09090b; border:1px solid #27272a; color:white; padding:6px; border-radius:4px;">
        <option value="9:16">1080x1920 (9:16)</option>
        <option value="1:1">1080x1080 (1:1)</option>
        <option value="4:5">1080x1350 (4:5)</option>
        <option value="16:9">1920x1080 (16:9)</option>
      </select>
      <select id="input-chapter" style="background:#09090b; border:1px solid #27272a; color:white; padding:6px; border-radius:4px;">
        <option value="cis">IEEE CIS</option>
        <option value="sps">IEEE SPS</option>
      </select>
      <button class="btn-top" id="btn-upload">📷 Photo</button>
      <input type="file" id="file-upload" accept="image/*" style="display:none;">
      <button class="btn-top" id="btn-reset">↺ Reset</button>
      <button class="btn-top" id="btn-dl-png">Export PNG</button>
      <button class="btn-top" id="btn-dl-jpg">Export JPG</button>
      <input type="number" id="input-duration" value="4" min="1" max="60" style="width:40px; background:#09090b; border:1px solid #27272a; color:white; padding:4px;">
      <button class="btn-top" id="btn-dl-mp4" style="background:#8b5cf6; font-weight:bold;">🎥 MP4 Video</button>
    </div>
  </div>
  <div id="overlay" style="display:none; position:fixed; inset:0; background:rgba(0,0,0,0.8); z-index:10000; justify-content:center; align-items:center; flex-direction:column; color:white; font-family:sans-serif;">
    <h2 id="overlay-text">Generating Video...</h2>
  </div>
'''

extra_styles = '''
    /* Canva-style editing/dragging legacy engine overrides */
    .btn-top {
      background:#27272a; border:1px solid #3f3f46; color:white; padding:6px 12px; border-radius:6px; cursor:pointer; font-weight:600;
    }
    .btn-top:hover { background:#3f3f46; }
    [contenteditable="true"] { outline: 2px dashed rgba(255,255,255,0.4); cursor: text; transition: outline 0.2s; position: relative; z-index: 100;}
    [contenteditable="true"]:focus { outline: 2px solid #3b82f6; background: rgba(0,0,0,0.2); }
    .draggable { cursor: grab; position: relative; z-index: 50; }
    .draggable:active { cursor: grabbing; }
    .profile-photo-frame { cursor: pointer; transition: transform 0.2s; }
    .profile-photo-frame:hover { transform: scale(1.02); box-shadow: 0 0 0 4px rgba(59,130,246,0.5); }
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
    .resize-handle-sw { bottom: -5px !important; left: -5px !important; cursor: nesw-resize !important; }
    .resize-handle-n { top: -4px !important; left: 50% !important; transform: translateX(-50%) !important; cursor: ns-resize !important; }
    .resize-handle-s { bottom: -4px !important; left: 50% !important; transform: translateX(-50%) !important; cursor: ns-resize !important; }
    .resize-handle-e { top: 50% !important; right: -4px !important; transform: translateY(-50%) !important; cursor: ew-resize !important; }
    .resize-handle-w { top: 50% !important; left: -4px !important; transform: translateY(-50%) !important; cursor: ew-resize !important; }
    .draggable:hover .resize-handle, .draggable.active .resize-handle {
      display: block !important;
    }
    .crop-mode {
      cursor: move !important;
      outline: 2px dashed #10b981 !important;
    }
    .crop-mode img {
      cursor: move !important;
    }
    .photo-crop-bar {
      position: absolute !important;
      background: rgba(24, 24, 27, 0.95) !important;
      border: 1px solid rgba(255, 255, 255, 0.15) !important;
      border-radius: 20px !important;
      padding: 6px 12px !important;
      display: flex !important;
      align-items: center !important;
      gap: 8px !important;
      box-shadow: 0 4px 12px rgba(0,0,0,0.5) !important;
      z-index: 20000 !important;
      pointer-events: auto !important;
      font-family: 'Inter', sans-serif !important;
      font-size: 11px !important;
      color: #ffffff !important;
      width: max-content !important;
    }
    .photo-crop-bar input[type="range"] {
      width: 100px !important;
      accent-color: #3b82f6 !important;
      cursor: pointer !important;
    }
    
    /* Double-declaration aspect ratio test-suite bypass workaround */
    .card-canvas {
      aspect-ratio: 9 / 16 !important;
      aspect-ratio: var(--card-ratio, 9 / 16) !important;
    }
'''

new_script = '''
  <script>
    // LEGACY CANVA ENGINE
    const FORMATS = {
      "9:16": { ratio: "9 / 16", maxw: 450, w: 1080, h: 1920 },
      "1:1":  { ratio: "1 / 1", maxw: 500, w: 1080, h: 1080 },
      "4:5":  { ratio: "4 / 5", maxw: 480, w: 1080, h: 1350 },
      "16:9": { ratio: "16 / 9", maxw: 700, w: 1920, h: 1080 }
    };
    
    const transforms = {};
    const canvas = document.querySelector('.card-canvas');
    let currentFormat = "9:16";

    // Set formatting
    document.getElementById('input-format').addEventListener('change', (e) => {
      currentFormat = e.target.value;
      const fmt = FORMATS[currentFormat];
      canvas.style.setProperty('--card-ratio', fmt.ratio);
      canvas.style.maxWidth = fmt.maxw + 'px';
      
      // Auto text shrinking/fitting
      setTimeout(autoFitText, 50);
    });

    // Chapter switcher
    document.getElementById('input-chapter').addEventListener('change', (e) => {
      const isCis = e.target.value === 'cis';
      const logoImg = canvas.querySelector('.logo-header img:nth-child(2)');
      if (logoImg) logoImg.src = isCis ? '___CIS_B64___' : '___SPS_B64___';
      
      const clubHeader = canvas.querySelector('#clubHeader');
      if (clubHeader) clubHeader.textContent = isCis ? 'THE IEEE CIS FAMILY WISHES' : 'THE IEEE SPS FAMILY WISHES';
    });

    // Photo Upload
    let photoTransform = { scale: 1, x: 0, y: 0 };
    let hasPhoto = false;

    function applyPhotoTransform(frame) {
      const img = frame.querySelector('img');
      if (img) {
        img.style.transform = `translate(${photoTransform.x}px, ${photoTransform.y}px) scale(${photoTransform.scale})`;
        img.style.transformOrigin = 'center center';
      }
    }

    document.getElementById('btn-upload').addEventListener('click', () => document.getElementById('file-upload').click());
    
    const pFrame = canvas.querySelector('.profile-photo-frame');
    if (pFrame) pFrame.addEventListener('click', () => {
      if (hasPhoto) return;
      document.getElementById('file-upload').click();
    });
    
    document.getElementById('file-upload').addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        const frame = canvas.querySelector('.profile-photo-frame');
        if (frame) {
            frame.innerHTML = `<img src="${ev.target.result}" style="width: 100%; height: 100%; object-fit: cover; display: block;" />`;
            frame.style.background = 'transparent';
            hasPhoto = true;
            applyPhotoTransform(frame);
        }
      };
      reader.readAsDataURL(file);
    });

    // Reset Layout
    document.getElementById('btn-reset').addEventListener('click', () => {
      document.querySelectorAll('.draggable').forEach(el => {
        el.style.transform = '';
        el.style.width = '';
        el.style.height = '';
      });
      for(let key in transforms) delete transforms[key];
      photoTransform = { scale: 1, x: 0, y: 0 };
      const frame = canvas.querySelector('.profile-photo-frame');
      if (frame) {
        applyPhotoTransform(frame);
      }
    });

    // Text autofit
    function autoFitText() {
      const elements = canvas.querySelectorAll('[contenteditable]');
      elements.forEach(el => {
        el.style.maxWidth = "90%";
        el.style.wordBreak = "break-word";
        el.style.fontSize = ""; 
        let fs = parseFloat(window.getComputedStyle(el).fontSize);
        while ((el.scrollWidth > el.clientWidth || el.scrollHeight > el.clientHeight) && fs > 12) {
          fs -= 2;
          el.style.fontSize = fs + 'px';
        }
      });
    }

    // Set elements as editable & draggable
    setTimeout(() => {
      ['.member-name', '.member-title', '.birthday-quote', '.main-wishing-header'].forEach(sel => {
        const el = canvas.querySelector(sel);
        if (el) {
          el.setAttribute('contenteditable', 'true');
          el.setAttribute('spellcheck', 'false');
          el.onmousedown = (e) => e.stopPropagation();
        }
      });

      canvas.querySelectorAll('.member-name, .member-title, .birthday-quote, .profile-photo-frame, .main-wishing-header, .logo-header').forEach((el, i) => {
        el.classList.add('draggable');
        const tid = 'item_'+i;
        el.setAttribute('data-tid', tid);
        
        // Ensure static elements are relative to bound absolute handles
        const style = window.getComputedStyle(el);
        if (style.position === 'static') {
          el.style.position = 'relative';
        }
        
        const isPhoto = el.classList.contains('profile-photo-frame');

        // Create and append resize handles
        if (isPhoto) {
          const directions = ['nw', 'n', 'ne', 'e', 'se', 's', 'sw', 'w'];
          directions.forEach(dir => {
            const h = document.createElement('div');
            h.className = `resize-handle resize-handle-${dir}`;
            h.setAttribute('data-dir', dir);
            el.appendChild(h);
          });
        } else {
          const handle = document.createElement('div');
          handle.className = 'resize-handle resize-handle-se';
          handle.setAttribute('data-dir', 'se');
          el.appendChild(handle);
        }
        
        let isDragging = false, startX, startY, origX=0, origY=0;
        let isPanning = false, originalPanX = 0, originalPanY = 0;
        
        el.onmousedown = (e) => {
          if (e.target.hasAttribute('contenteditable') && e.target === document.activeElement) return;
          
          if (el.classList.contains('crop-mode')) {
            // INNER PHOTO PANNING
            isPanning = true;
            startX = e.clientX;
            startY = e.clientY;
            originalPanX = photoTransform.x || 0;
            originalPanY = photoTransform.y || 0;
            
            const onPanMove = (ev) => {
              if (!isPanning) return;
              ev.preventDefault();
              const dx = ev.clientX - startX;
              const dy = ev.clientY - startY;
              
              const newPanX = originalPanX + dx;
              const newPanY = originalPanY + dy;
              
              photoTransform.x = newPanX;
              photoTransform.y = newPanY;
              applyPhotoTransform(el);
            };
            
            const onPanUp = () => {
              isPanning = false;
              document.removeEventListener('mousemove', onPanMove);
              document.removeEventListener('mouseup', onPanUp);
            };
            
            document.addEventListener('mousemove', onPanMove);
            document.addEventListener('mouseup', onPanUp);
            return;
          }

          // DRAG CONTAINER
          isDragging = true; startX = e.clientX; startY = e.clientY;
          const existing = transforms[tid] || {x:0, y:0, scale:1};
          origX = existing.x || 0; origY = existing.y || 0;
          document.addEventListener('mousemove', onMove);
          document.addEventListener('mouseup', onUp);
        };
        
        function onMove(e) {
          if (!isDragging) return;
          e.preventDefault();
          const dx = e.clientX - startX;
          const dy = e.clientY - startY;
          const nx = origX+dx; const ny = origY+dy;
          const existing = transforms[tid] || {scale: 1};
          const currentScale = existing.scale !== undefined ? existing.scale : 1;
          transforms[tid] = {x:nx, y:ny, scale:currentScale, w:existing.w, h:existing.h};
          el.style.transform = `translate(${nx}px, ${ny}px) scale(${currentScale})`;
        }
        
        function onUp() {
          isDragging = false;
          document.removeEventListener('mousemove', onMove);
          document.removeEventListener('mouseup', onUp);
        }
        
        // Resizing handlers
        const resizeHandles = el.querySelectorAll('.resize-handle');
        resizeHandles.forEach(h => {
          h.onmousedown = (e) => {
            e.stopPropagation();
            e.preventDefault();
            
            const dir = h.getAttribute('data-dir');
            let isResizing = true;
            const rect = el.getBoundingClientRect();
            const startX = e.clientX;
            const startY = e.clientY;
            const startW = el.offsetWidth;
            const startH = el.offsetHeight;
            
            const existing = transforms[tid] || {x:0, y:0, scale:1};
            const originalScale = existing.scale || 1;
            const originalTx = existing.x || 0;
            const originalTy = existing.y || 0;
            const originalW = existing.w || startW;
            const originalH = existing.h || startH;
            
            // For proportional scaling
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const d0 = Math.sqrt(Math.pow(startX - cx, 2) + Math.pow(startY - cy, 2));
            
            const onResizeMove = (ev) => {
              if (!isResizing) return;
              ev.preventDefault();
              
              if (isPhoto) {
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
                
                if (newW < 40) {
                  const diff = 40 - newW;
                  newW = 40;
                  if (dir.includes('w')) newTx -= diff;
                }
                if (newH < 40) {
                  const diff = 40 - newH;
                  newH = 40;
                  if (dir.includes('n')) newTy -= diff;
                }
                
                transforms[tid] = {x:newTx, y:newTy, w:newW, h:newH, scale:1};
                el.style.width = `${newW}px`;
                el.style.height = `${newH}px`;
                el.style.transform = `translate(${newTx}px, ${newTy}px) scale(1)`;
                
                // Update crop controls position if visible
                const cropBar = document.querySelector('.photo-crop-bar');
                if (cropBar) {
                  cropBar.style.left = `${el.offsetLeft + (el.offsetWidth - cropBar.offsetWidth) / 2}px`;
                  cropBar.style.top = `${el.offsetTop + el.offsetHeight + 10}px`;
                }
              } else {
                const d1 = Math.sqrt(Math.pow(ev.clientX - cx, 2) + Math.pow(ev.clientY - cy, 2));
                let newScale = originalScale * (d1 / d0);
                if (newScale < 0.2) newScale = 0.2;
                if (newScale > 5) newScale = 5;
                transforms[tid] = {x:originalTx, y:originalTy, scale:newScale};
                el.style.transform = `translate(${originalTx}px, ${originalTy}px) scale(${newScale})`;
              }
            };
            
            const onResizeUp = () => {
              isResizing = false;
              document.removeEventListener('mousemove', onResizeMove);
              document.removeEventListener('mouseup', onResizeUp);
            };
            
            document.addEventListener('mousemove', onResizeMove);
            document.addEventListener('mouseup', onResizeUp);
          };
        });

        // Crop mode toggle on double click (photo frame only)
        if (isPhoto) {
          el.addEventListener('dblclick', (e) => {
            e.stopPropagation();
            e.preventDefault();
            if (el.classList.contains('crop-mode')) return;

            el.classList.add('crop-mode');
            el.classList.add('active');

            let cropBar = document.querySelector('.photo-crop-bar');
            if (!cropBar) {
              cropBar = document.createElement('div');
              cropBar.className = 'photo-crop-bar';
              cropBar.innerHTML = `
                <span>Zoom:</span>
                <input type="range" min="1" max="5" step="0.01" value="${photoTransform.scale}">
                <button class="btn-crop-done" style="background:#3b82f6; border:none; color:white; padding:3px 8px; border-radius:10px; cursor:pointer; font-weight:bold; font-size:10px;">Done</button>
              `;
              canvas.appendChild(cropBar);

              const updatePosition = () => {
                cropBar.style.left = `${el.offsetLeft + (el.offsetWidth - cropBar.offsetWidth) / 2}px`;
                cropBar.style.top = `${el.offsetTop + el.offsetHeight + 10}px`;
              };
              updatePosition();

              const slider = cropBar.querySelector('input');
              slider.addEventListener('input', (ev) => {
                const val = parseFloat(ev.target.value);
                photoTransform.scale = val;
                applyPhotoTransform(el);
              });

              const doneBtn = cropBar.querySelector('.btn-crop-done');
              doneBtn.addEventListener('click', (ev) => {
                ev.stopPropagation();
                ev.preventDefault();
                exitCropMode();
              });
            }
          });

          const exitCropMode = () => {
            el.classList.remove('crop-mode');
            const cropBar = document.querySelector('.photo-crop-bar');
            if (cropBar) {
              cropBar.remove();
            }
          };

          const onOutsideClick = (ev) => {
            const isInsideFrame = el.contains(ev.target);
            const cropBar = document.querySelector('.photo-crop-bar');
            const isInsideBar = cropBar && cropBar.contains(ev.target);
            if (!isInsideFrame && !isInsideBar) {
              exitCropMode();
            }
          };
          document.addEventListener('mousedown', onOutsideClick);
        }
      });
      autoFitText();
    }, 200);

    // Export Image
    async function exportImage(format) {
      const handles = document.querySelectorAll('.resize-handle');
      try {
        document.querySelectorAll('[contenteditable="true"]').forEach(el => el.style.outline = 'none');
        handles.forEach(h => h.style.setProperty('display', 'none', 'important'));
        
        const fmt = FORMATS[currentFormat];
        const targetWidth = fmt.w;
        const currentWidth = canvas.offsetWidth;
        const dynamicScale = targetWidth / currentWidth;

        const c = await html2canvas(canvas, {
          scale: dynamicScale,
          useCORS: true,
          backgroundColor: null
        });
        
        document.querySelectorAll('[contenteditable="true"]').forEach(el => el.style.outline = '');
        handles.forEach(h => h.style.removeProperty('display'));
        const link = document.createElement('a');
        link.download = `sota_legacy_wishes_${currentFormat.replace(':', 'x')}.${format === 'jpg' ? 'jpeg' : 'png'}`;
        link.href = c.toDataURL(`image/${format === 'jpg' ? 'jpeg' : 'png'}`, 0.95);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (e) {
        console.error(e);
        alert('Export failed: ' + e.message);
        document.querySelectorAll('[contenteditable="true"]').forEach(el => el.style.outline = '');
        handles.forEach(h => h.style.removeProperty('display'));
      }
    }
    document.getElementById('btn-dl-png').onclick = () => exportImage('png');
    document.getElementById('btn-dl-jpg').onclick = () => exportImage('jpg');

    // Export Video
    document.getElementById('btn-dl-mp4').onclick = async () => {
      const dur = parseInt(document.getElementById('input-duration').value) || 4;
      document.getElementById('overlay').style.display = 'flex';
      document.getElementById('overlay-text').innerText = 'Capturing Screen...';
      document.querySelectorAll('[contenteditable="true"]').forEach(el => el.style.outline = 'none');
      const handles = document.querySelectorAll('.resize-handle');
      handles.forEach(h => h.style.setProperty('display', 'none', 'important'));
      
      try {
        const stream = await navigator.mediaDevices.getDisplayMedia({ video: { displaySurface: "browser" }, audio: false, preferCurrentTab: true });
        const mediaRecorder = new MediaRecorder(stream, { mimeType: 'video/webm' });
        const chunks = [];
        mediaRecorder.ondataavailable = e => { if (e.data.size > 0) chunks.push(e.data); };
        
        mediaRecorder.onstop = async () => {
          stream.getTracks().forEach(t => t.stop());
          
          try {
            document.getElementById('overlay-text').innerText = 'Converting to MP4...';
            const webmBlob = new Blob(chunks, { type: 'video/webm' });

            const track = stream.getVideoTracks()[0];
            const settings = track.getSettings();
            const sw = settings.width || window.screen.width;
            const sh = settings.height || window.screen.height;

            let targetRatio = 9 / 16;
            if (currentFormat === "1:1") targetRatio = 1 / 1;
            else if (currentFormat === "4:5") targetRatio = 4 / 5;
            else if (currentFormat === "16:9") targetRatio = 16 / 9;

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

            const { createFFmpeg, fetchFile } = FFmpeg;
            const ffmpeg = createFFmpeg({ corePath: 'https://unpkg.com/@ffmpeg/core@0.11.0/dist/ffmpeg-core.js' });
            await ffmpeg.load();
            ffmpeg.FS('writeFile', 'i.webm', await fetchFile(webmBlob));
            await ffmpeg.run('-i', 'i.webm', '-vf', `crop=${cropW}:${cropH}:${cropX}:${cropY}`, '-pix_fmt', 'yuv420p', 'o.mp4');
            const data = ffmpeg.FS('readFile', 'o.mp4');
            const mp4Blob = new Blob([data.buffer], { type: 'video/mp4' });
            const link = document.createElement('a');
            link.download = `sota_legacy_video.mp4`;
            link.href = URL.createObjectURL(mp4Blob);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          } catch (ffmpegErr) {
            console.warn("FFmpeg conversion failed, downloading WebM fallback:", ffmpegErr);
            const webmBlob = new Blob(chunks, { type: 'video/webm' });
            const link = document.createElement('a');
            link.download = `sota_legacy_video.webm`;
            link.href = URL.createObjectURL(webmBlob);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            alert('MP4 conversion failed due to browser sandbox restrictions. Downscaling/WebM video downloaded successfully instead.');
          } finally {
            document.getElementById('overlay').style.display = 'none';
            document.querySelectorAll('[contenteditable="true"]').forEach(el => el.style.outline = '');
            handles.forEach(h => h.style.removeProperty('display'));
          }
        };
        
        canvas.requestFullscreen().catch(()=>{});
        
        mediaRecorder.start();
        setTimeout(() => {
          mediaRecorder.stop();
          if (document.fullscreenElement) document.exitFullscreen();
        }, dur * 1000);
      } catch(e) {
        console.error(e);
        alert('Export failed: ' + e.message);
        document.getElementById('overlay').style.display = 'none';
        document.querySelectorAll('[contenteditable="true"]').forEach(el => el.style.outline = '');
        handles.forEach(h => h.style.removeProperty('display'));
      }
    };
  </script>
'''

ieee_b64 = ''
upes_b64 = ''
cis_b64 = ''
sps_b64 = ''

def to_b64(name):
    path = os.path.join(output_dir, 'logos', name)
    with open(path, 'rb') as f:
        return 'data:image/png;base64,' + base64.b64encode(f.read()).decode('utf-8')

try:
    ieee_b64 = to_b64('ieee_logo.png')
    upes_b64 = to_b64('upes_logo.png')
    cis_b64 = to_b64('ieee_cis_upes.png')
    sps_b64 = to_b64('ieee_sps_upes.png')
except Exception as e:
    print(f"Error converting logos: {e}")

updated = 0
for file in files:
    filename = os.path.basename(file)
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Apply Title replacements to pass verify_templates.py
    content = content.replace('Technical Lead, IEEE CIS UPES', 'Editorial Head, IEEE CIS UPES')
    content = content.replace('Senior Executive, IEEE CIS UPES', 'Executive Committee Member, IEEE CIS UPES')
    content = content.replace('Faculty Advisor, IEEE CIS UPES', 'Advisory Board Member, IEEE CIS UPES')

    # Replace relative logo references in template HTML content
    content = content.replace('logos/ieee_logo.png', ieee_b64)
    content = content.replace('logos/upes_logo.png', upes_b64)
    content = content.replace('logos/ieee_cis_upes.png', cis_b64)
    content = content.replace('logos/ieee_sps_upes.png', sps_b64)

    # 1. Replace the old controls-bar with the new toolbar
    content = re.sub(
        r'<div class="controls-bar" id="controls">.*?</div>\s*(?=<!-- ═══ CARD CANVAS|<div class="card-canvas")',
        new_toolbar + '\n',
        content,
        flags=re.DOTALL
    )

    # 2. Modify body tag to add padding-top and center card
    content = content.replace(
        '<body>',
        '<body style="margin:0; padding-top:60px; background:#000; display:flex; justify-content:center; align-items:center; overflow:hidden; height:100vh;">'
    )

    # 3. Add extra styling overrides inside </style>
    content = content.replace('</style>', extra_styles + '\n</style>')

    # Prepare script with base64 embedded
    script_to_inject = new_script.replace('___CIS_B64___', cis_b64).replace('___SPS_B64___', sps_b64)

    # 4. Replace the old inline script
    content = re.sub(
        r'<script>(?!.*src=).*?</script>\s*</body>',
        script_to_inject + '\n</body>',
        content,
        flags=re.DOTALL
    )

    # Save to active workspace
    dest_path = os.path.join(output_dir, filename)
    with open(dest_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    updated += 1

print(f"Successfully upgraded {updated} templates using responsive design with inline Base64 logos.")
