document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if(btn){
    btn.addEventListener('click', () => {
      nav.style.display = nav.style.display === 'block' ? '' : 'block';
    });
  }

  // Make gallery images clickable (open in new tab for now)
  document.querySelectorAll('.gallery-grid img, .featured img').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => {
      window.open(img.src, '_blank');
    });
  });
});
