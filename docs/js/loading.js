export function initLoadingScreen() {
    const loadingScreen = document.getElementById("loadingScreen");
    const downloadBtn = document.getElementById("downloadBtn");
    
    if (!loadingScreen || !downloadBtn) return;
  
    window.addEventListener("load", function() {
      setTimeout(() => {
        loadingScreen.classList.add("hidden");
        downloadBtn.classList.add("hidden");
      }, 1500);
    });
  }