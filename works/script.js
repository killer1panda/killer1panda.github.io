// Lazy load image handler
document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    img.addEventListener('load', () => img.classList.add('loaded'));
    img.addEventListener('error', () => img.classList.add('loaded'));
});
