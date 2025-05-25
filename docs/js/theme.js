export function initTheme() {
    // Dynamic Color Theme Based on Time
    function updateThemeBasedOnTime() {
      const hour = new Date().getHours();
      const root = document.documentElement;
      root.style.setProperty(
        "--accent-color", 
        hour >= 6 && hour < 18 ? "#FF6B35" : "#8B5CF6"
      );
    }
  
    updateThemeBasedOnTime();
    setInterval(updateThemeBasedOnTime, 3600000); // Update every hour
  }