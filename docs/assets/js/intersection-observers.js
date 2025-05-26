document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for Animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);
  
    // Observe all sections
    document.querySelectorAll(".section").forEach((section) => {
      observer.observe(section);
    });
  
    // Experience Timeline Animation
    const timelineItems = document.querySelectorAll(".experience-item");
    const timelineObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateX(0)";
          }
        });
      },
      { threshold: 0.5 }
    );
  
    timelineItems.forEach((item) => {
      item.style.opacity = "0";
      item.style.transform = "translateX(-30px)";
      item.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      timelineObserver.observe(item);
    });
  });