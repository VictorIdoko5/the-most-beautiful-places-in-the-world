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
window.onload = function() {
  // Always show the modal on page load
  document.getElementById("welcomeModal").style.display = "flex";

  document.getElementById("laterBtn").onclick = function() {
    document.getElementById("welcomeModal").style.display = "none";
    // ✅ No saving — so it will come back again on refresh
  };

  document.getElementById("supportBtn").onclick = function() {
    document.getElementById("welcomeModal").style.display = "none";
    // ✅ Redirect to support page
    window.location.href = "Support Us.html";
  };
};
