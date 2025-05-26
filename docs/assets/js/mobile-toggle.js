document.addEventListener('DOMContentLoaded', function() {
    // Mobile Toggle Functionality
    const mobileToggle = document.getElementById("mobileToggle");
    const idPanel = document.querySelector(".id-panel");
  
    // Toggle ID panel visibility on mobile
    mobileToggle.addEventListener("click", function () {
      idPanel.classList.toggle("active");
  
      // Change the icon based on state
      const icon = this.querySelector("i");
      if (idPanel.classList.contains("active")) {
        icon.className = "fas fa-times";
      } else {
        icon.className = "fas fa-id-card";
      }
    });
  
    // Hide panel when scrolling on mobile
    let lastScrollTop = 0;
    window.addEventListener(
      "scroll",
      function () {
        // Only execute on mobile/tablet sizes
        if (window.innerWidth <= 1200) {
          const st = window.pageYOffset || document.documentElement.scrollTop;
  
          // If scrolled more than 50px, hide the panel
          if (Math.abs(lastScrollTop - st) > 50) {
            idPanel.classList.remove("active");
            mobileToggle.querySelector("i").className = "fas fa-id-card";
          }
  
          lastScrollTop = st <= 0 ? 0 : st;
        }
      },
      false
    );
  
    // Adjust layout when window is resized
    window.addEventListener("resize", function () {
      if (window.innerWidth > 1200) {
        // On larger screens, ensure the panel is always visible
        idPanel.classList.remove("active");
      }
    });
  });