document.addEventListener('DOMContentLoaded', function() {
    // Dynamic Color Theme Based on Time
    function updateThemeBasedOnTime() {
      const hour = new Date().getHours();
      const root = document.documentElement;
  
      if (hour >= 6 && hour < 11) {
        // Day theme - lighter accent
        root.style.setProperty("--accent-color", "#FF6B35");
      } else {
        // Night theme - cooler accent
        root.style.setProperty("--accent-color", "#8B5CF6");
      }
    }
  
    updateThemeBasedOnTime();
    setInterval(updateThemeBasedOnTime, 3600000); // Update every hour
  });