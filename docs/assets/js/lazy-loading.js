document.addEventListener('DOMContentLoaded', function() {
    // Performance Optimization - Lazy Load Images
    if ("IntersectionObserver" in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove("lazy");
            imageObserver.unobserve(img);
          }
        });
      });
  
      document.querySelectorAll("img[data-src]").forEach((img) => {
        imageObserver.observe(img);
      });
    }
  });