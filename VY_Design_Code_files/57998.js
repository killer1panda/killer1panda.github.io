// audio.js - Web Audio API implementation for Vivek Yadav Design & Code
window.VY = window.VY || {};
window.VY.modules = window.VY.modules || {};

(() => {
  if (window.__VY_AUDIO_ENGINE_ACTIVE__) return;
  window.__VY_AUDIO_ENGINE_ACTIVE__ = true;

  if (window.VY.modules.audio) return;

  // Web Audio API context
  let audioContext;
  let isMuted = localStorage.getItem('vy-sound-muted') === 'true';
  let bgmPlaying = false;
  let bgmSource;

  function initAudio() {
    if (!audioContext) {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioContext.state === 'suspended') {
      audioContext.resume();
    }
  }

  // Generate simple sounds using Web Audio API
  function generateTone(frequency, duration, volume = 0.1, type = 'sine') {
    if (isMuted) return;
    initAudio();

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    oscillator.type = type;

    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(volume, audioContext.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);
  }

  function generateNoise(duration, volume = 0.1) {
    if (isMuted) return;
    initAudio();

    const bufferSize = audioContext.sampleRate * duration;
    const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
    const output = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const source = audioContext.createBufferSource();
    const gainNode = audioContext.createGain();

    source.buffer = buffer;
    source.connect(gainNode);
    gainNode.connect(audioContext.destination);

    gainNode.gain.setValueAtTime(volume, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);

    source.start();
  }

  function generateWhoosh(duration, volume = 0.2) {
    if (isMuted) return;
    initAudio();

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    const filter = audioContext.createBiquadFilter();

    oscillator.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(800, audioContext.currentTime + duration);
    oscillator.type = 'sawtooth';

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1000, audioContext.currentTime);
    filter.frequency.exponentialRampToValueAtTime(200, audioContext.currentTime + duration);

    gainNode.gain.setValueAtTime(volume, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);
  }

  function playBGM() {
    if (isMuted || bgmPlaying) return;
    initAudio();

    // Simple ambient loop using oscillators
    const oscillators = [];
    const frequencies = [220, 330, 440]; // A major chord

    frequencies.forEach((freq, index) => {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.setValueAtTime(freq, audioContext.currentTime);
      oscillator.type = 'sine';

      gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);

      oscillator.start(audioContext.currentTime + index * 0.1);
      oscillators.push({ oscillator, gainNode });
    });

    bgmSource = oscillators;
    bgmPlaying = true;

    // Fade out after 30 seconds
    setTimeout(() => {
      oscillators.forEach(({ gainNode }) => {
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 2);
      });
      setTimeout(() => {
        oscillators.forEach(({ oscillator }) => oscillator.stop());
        bgmPlaying = false;
      }, 2000);
    }, 30000);
  }

  function stopBGM() {
    if (bgmSource) {
      bgmSource.forEach(({ gainNode }) => {
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.5);
      });
      setTimeout(() => {
        bgmSource.forEach(({ oscillator }) => oscillator.stop());
        bgmSource = null;
        bgmPlaying = false;
      }, 500);
    }
  }

  // Sound functions
  const sounds = {
    shred: () => generateNoise(0.1, 0.1),
    paperwoosh: () => generateWhoosh(0.3, 0.2),
    openclose: () => generateTone(800, 0.2, 0.15, 'square'),
    transition: () => generateWhoosh(0.5, 0.3),
    bgm: () => playBGM(),
    bgmStop: () => stopBGM()
  };

  // Debounce for hover sounds
  const hoverCooldowns = {};

  function playSound(soundName) {
    if (isMuted) return;

    const now = Date.now();
    if (hoverCooldowns[soundName] && now - hoverCooldowns[soundName] < 50) return;
    hoverCooldowns[soundName] = now;

    if (sounds[soundName]) {
      sounds[soundName]();
    }
  }

  // DOM event listeners
  function initEventListeners() {
    // Sound button toggle
    const soundBtn = document.querySelector('[data-btn-sound]');
    if (soundBtn) {
      soundBtn.addEventListener('click', () => {
        isMuted = !isMuted;
        localStorage.setItem('vy-sound-muted', isMuted);
        if (isMuted) {
          stopBGM();
        }
        // Update UI
        const bars = soundBtn.querySelectorAll('[data-btn-sound-bar]');
        bars.forEach(bar => {
          bar.style.animationPlayState = isMuted ? 'paused' : 'running';
        });
      });
    }

    // Hover sounds
    document.addEventListener('mouseover', (e) => {
      if (e.target.matches('[data-sound-hover]')) {
        const sound = e.target.getAttribute('data-sound-hover');
        playSound(sound);
      }
    });

    // Click sounds
    document.addEventListener('click', (e) => {
      if (e.target.matches('[data-sound]')) {
        const sound = e.target.getAttribute('data-sound');
        playSound(sound);
      }
    });

    // Page transition sounds
    document.addEventListener('DOMContentLoaded', () => {
      playSound('bgm');
    });

    // Barba transition sounds
    if (window.Barba) {
      window.Barba.Dispatcher.on('transitionCompleted', () => {
        playSound('transition');
      });
    }
  }

  // Initialize
  document.addEventListener('DOMContentLoaded', initEventListeners);

  // User interaction to enable audio
  document.addEventListener('click', initAudio, { once: true });
  document.addEventListener('touchstart', initAudio, { once: true });

  window.VY.modules.audio = {
    play: playSound,
    mute: () => { isMuted = true; stopBGM(); },
    unmute: () => { isMuted = false; },
    isMuted: () => isMuted
  };

})();