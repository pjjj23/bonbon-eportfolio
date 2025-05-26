document.addEventListener('DOMContentLoaded', function() {
    // Loading Screen
    window.addEventListener("load", function () {
      const loadingScreen = document.getElementById("loadingScreen");
      const downloadBtn = document.getElementById("downloadBtn");
      setTimeout(() => {
        loadingScreen.classList.add("hidden");
        downloadBtn.classList.add("hidden");
      }, 1500);
    });
  });