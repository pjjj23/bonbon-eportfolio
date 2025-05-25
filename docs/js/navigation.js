export function initNavigation() {
    // Navbar scroll effect
    const navbar = document.getElementById("navbar");
    if (navbar) {
      window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });
    }
  
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      });
    });
  
    // Mobile toggle functionality
    const mobileToggle = document.getElementById("mobileToggle");
    const idPanel = document.querySelector(".id-panel");
    
    if (mobileToggle && idPanel) {
      mobileToggle.addEventListener("click", function() {
        idPanel.classList.toggle("active");
        const icon = this.querySelector("i");
        icon.className = idPanel.classList.contains("active") 
          ? "fas fa-times" 
          : "fas fa-id-card";
      });
  
      // Hide panel when scrolling on mobile
      let lastScrollTop = 0;
      window.addEventListener("scroll", function() {
        if (window.innerWidth <= 1200) {
          const st = window.pageYOffset || document.documentElement.scrollTop;
          if (Math.abs(lastScrollTop - st) > 50) {
            idPanel.classList.remove("active");
            if (mobileToggle.querySelector("i")) {
              mobileToggle.querySelector("i").className = "fas fa-id-card";
            }
          }
          lastScrollTop = st <= 0 ? 0 : st;
        }
      }, false);
    }
  }