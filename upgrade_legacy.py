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
'''

new_script = '''
  <script src="https://cdn.jsdelivr.net/npm/@ffmpeg/ffmpeg@0.11.8/dist/ffmpeg.min.js"></script>
  <script>
    // LEGACY CANVA ENGINE
    const FORMATS = {
      "9:16": { w: 1080, h: 1920 },
      "1:1":  { w: 1080, h: 1080 },
      "4:5":  { w: 1080, h: 1350 },
      "16:9": { w: 1920, h: 1080 }
    };
    
    const transforms = {};
    const canvas = document.querySelector('.card-canvas');
    let currentFormat = "9:16";

    document.getElementById('input-format').addEventListener('change', (e) => {
      currentFormat = e.target.value;
      const dims = FORMATS[currentFormat];
      canvas.style.width = dims.w + 'px';
      canvas.style.height = dims.h + 'px';
      applyScaling();
      setTimeout(autoFitText, 50);
    });

    document.getElementById('input-chapter').addEventListener('change', (e) => {
      const isCis = e.target.value === 'cis';
      const logoImg = canvas.querySelector('.logo-header img:nth-child(2)');
      if(logoImg) logoImg.src = isCis ? 'logos/ieee_cis_upes.png' : 'logos/ieee_sps_upes.png';
    });

    document.getElementById('btn-upload').addEventListener('click', () => document.getElementById('file-upload').click());
    
    const pFrame = canvas.querySelector('.profile-frame');
    if(pFrame) pFrame.addEventListener('click', () => document.getElementById('file-upload').click());
    
    document.getElementById('file-upload').addEventListener('change', (e) => {
      const file = e.target.files[0];
      if(!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        const frame = canvas.querySelector('.profile-frame');
        if(frame) {
            frame.innerHTML = `<img src="${ev.target.result}" style="width: 100%; height: 100%; object-fit: cover; display: block;" />`;
            frame.style.background = 'transparent';
        }
      };
      reader.readAsDataURL(file);
    });

    document.getElementById('btn-reset').addEventListener('click', () => {
      document.querySelectorAll('.draggable').forEach(el => el.style.transform = '');
      for(let key in transforms) delete transforms[key];
    });

    function applyScaling() {
      const wrapper = document.getElementById('scale-wrapper');
      const dims = FORMATS[currentFormat];
      const scaleX = (window.innerWidth - 40) / dims.w;
      const scaleY = (window.innerHeight - 100) / dims.h;
      const scale = Math.min(scaleX, scaleY, 1);
      wrapper.style.transform = `scale(${scale})`;
    }
    window.addEventListener('resize', applyScaling);
    applyScaling();

    function autoFitText() {
      const elements = canvas.querySelectorAll('[contenteditable]');
      elements.forEach(el => {
        el.style.maxWidth = "90%";
        el.style.wordBreak = "break-word";
        el.style.fontSize = ""; 
        let fs = parseFloat(window.getComputedStyle(el).fontSize);
        while((el.scrollWidth > el.clientWidth || el.scrollHeight > el.clientHeight) && fs > 12) {
          fs -= 2;
          el.style.fontSize = fs + 'px';
        }
      });
    }

    setTimeout(() => {
      ['.name', '.title', '.quote-text', '.main-wishing-header', '.date'].forEach(sel => {
        const el = canvas.querySelector(sel);
        if(el) {
          el.setAttribute('contenteditable', 'true');
          el.setAttribute('spellcheck', 'false');
          el.onmousedown = (e) => e.stopPropagation();
        }
      });

      canvas.querySelectorAll('.name, .title, .quote-container, .profile-frame, .main-wishing-header, .logo-header').forEach((el, i) => {
        el.classList.add('draggable');
        el.setAttribute('data-tid', 'item_'+i);
        let isDragging = false, startX, startY, origX=0, origY=0;
        
        el.onmousedown = (e) => {
          if(e.target.hasAttribute('contenteditable') && e.target === document.activeElement) return;
          isDragging = true; startX = e.clientX; startY = e.clientY;
          const tid = el.getAttribute('data-tid');
          const existing = transforms[tid] || {x:0,y:0};
          origX = existing.x; origY = existing.y;
          document.addEventListener('mousemove', onMove);
          document.addEventListener('mouseup', onUp);
        };
        function onMove(e) {
          if(!isDragging) return;
          e.preventDefault();
          const scaleStr = document.getElementById('scale-wrapper').style.transform;
          const scaleMatch = scaleStr.match(/scale\(([^)]+)\)/);
          const scale = scaleMatch ? parseFloat(scaleMatch[1]) : 1;
          const dx = (e.clientX - startX) / scale;
          const dy = (e.clientY - startY) / scale;
          const nx = origX+dx; const ny = origY+dy;
          transforms[el.getAttribute('data-tid')] = {x:nx, y:ny};
          el.style.transform = `translate(${nx}px, ${ny}px)`;
        }
        function onUp() {
          isDragging = false;
          document.removeEventListener('mousemove', onMove);
          document.removeEventListener('mouseup', onUp);
        }
      });
      autoFitText();
    }, 200);

    async function exportImage(format) {
      document.querySelectorAll('[contenteditable="true"]').forEach(el => el.style.outline = 'none');
      const c = await html2canvas(canvas, { scale: 1, useCORS: true, backgroundColor: null });
      document.querySelectorAll('[contenteditable="true"]').forEach(el => el.style.outline = '');
      const link = document.createElement('a');
      link.download = `sota_legacy_wishes_${format}.` + (format==='jpg'?'jpeg':'png');
      link.href = c.toDataURL(`image/${format === 'jpg' ? 'jpeg' : 'png'}`, 0.95);
      link.click();
    }
    document.getElementById('btn-dl-png').onclick = () => exportImage('png');
    document.getElementById('btn-dl-jpg').onclick = () => exportImage('jpg');

    document.getElementById('btn-dl-mp4').onclick = async () => {
      const dur = parseInt(document.getElementById('input-duration').value) || 4;
      document.getElementById('overlay').style.display = 'flex';
      document.getElementById('overlay-text').innerText = 'Capturing Screen...';
      document.querySelectorAll('[contenteditable="true"]').forEach(el => el.style.outline = 'none');
      
      try {
        const stream = await navigator.mediaDevices.getDisplayMedia({ video: { displaySurface: "browser" }, audio: false, preferCurrentTab: true });
        const mediaRecorder = new MediaRecorder(stream, { mimeType: 'video/webm' });
        const chunks = [];
        mediaRecorder.ondataavailable = e => { if (e.data.size > 0) chunks.push(e.data); };
        
        mediaRecorder.onstop = async () => {
          stream.getTracks().forEach(t => t.stop());
          document.getElementById('overlay-text').innerText = 'Converting to MP4...';
          const webmBlob = new Blob(chunks, { type: 'video/webm' });
          const { createFFmpeg, fetchFile } = FFmpeg;
          const ffmpeg = createFFmpeg({ corePath: 'https://unpkg.com/@ffmpeg/core@0.11.0/dist/ffmpeg-core.js' });
          await ffmpeg.load();
          ffmpeg.FS('writeFile', 'i.webm', await fetchFile(webmBlob));
          await ffmpeg.run('-i', 'i.webm', '-c:v', 'copy', 'o.mp4');
          const data = ffmpeg.FS('readFile', 'o.mp4');
          const mp4Blob = new Blob([data.buffer], { type: 'video/mp4' });
          const link = document.createElement('a');
          link.download = `sota_legacy_video.mp4`;
          link.href = URL.createObjectURL(mp4Blob);
          link.click();
          document.getElementById('overlay').style.display = 'none';
          document.querySelectorAll('[contenteditable="true"]').forEach(el => el.style.outline = '');
        };
        
        const prevScale = document.getElementById('scale-wrapper').style.transform;
        document.getElementById('scale-wrapper').style.transform = 'scale(1)';
        canvas.requestFullscreen().catch(()=>{});
        
        mediaRecorder.start();
        setTimeout(() => {
          mediaRecorder.stop();
          if(document.fullscreenElement) document.exitFullscreen();
          document.getElementById('scale-wrapper').style.transform = prevScale;
        }, dur * 1000);
      } catch(e) {
        console.error(e);
        alert('Export failed: ' + e.message);
        document.getElementById('overlay').style.display = 'none';
      }
    };
  </script>
'''

updated = 0
for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Skip if already upgraded
    if "Legacy Master Creator Engine" in content:
        continue

    # 1. Remove old controls-bar safely
    content = re.sub(r'<div class="controls-bar">.*?</div>\s*<div class="card-canvas">', '<div class="card-canvas">', content, flags=re.DOTALL)
    
    # 2. Add Toolbar
    content = content.replace('<body', '<body style="margin:0; padding-top:60px; background:#000; display:flex; justify-content:center; align-items:center; overflow:hidden; height:100vh;"')
    content = content.replace('<div class="card-canvas">', f'{new_toolbar}\n<div id="scale-wrapper" style="transform-origin:center center; transition:transform 0.2s;">\n<div class="card-canvas">')
    
    # Close scale-wrapper at the end
    content = content.replace('</body>', '</div>\n</body>')

    # 3. Modify .card-canvas CSS for fixed pixel layout
    content = re.sub(r'\.card-canvas\s*\{[^}]*\}', 
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
    
    # Strip any specific aspect ratios
    content = re.sub(r'aspect-ratio:[^;]+;', '', content)
    content = re.sub(r'max-width:\s*450px;', '', content)

    # 4. Remove the old inline script
    # The old script usually starts with "const card = " or "const ratioBtns ="
    content = re.sub(r'<script>.*?</script>', '', content, flags=re.DOTALL)
    
    # 5. Add the new script before </body>
    content = content.replace('</body>', f'{new_script}\n</body>')

    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)
        
    updated += 1

print(f"Successfully upgraded {updated} legacy template files.")
