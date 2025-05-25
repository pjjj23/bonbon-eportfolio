export function initDownloadButton() {
    const downloadBtn = document.getElementById("downloadBtn");
    if (!downloadBtn) return;
  
    downloadBtn.addEventListener("click", () => {
      const storage = firebase.storage();
      const storageRef = storage.ref("AlayTrabaho/Bonbon-Philip-John-SchoolID.pdf");
  
      downloadBtn.disabled = true;
      downloadBtn.innerText = "Downloading...";
  
      storageRef.getDownloadURL()
        .then(url => fetch(url))
        .then(response => {
          if (!response.ok) throw new Error("Network response was not ok");
          return response.blob();
        })
        .then(blob => {
          const link = document.createElement("a");
          link.href = window.URL.createObjectURL(blob);
          link.download = "Philip_John_SchoolID.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          window.URL.revokeObjectURL(link.href);
          downloadBtn.disabled = false;
          downloadBtn.innerText = "Download CV";
        })
        .catch(error => {
          console.error("Download failed:", error);
          alert("Failed to download file.");
          downloadBtn.disabled = false;
          downloadBtn.innerText = "Download CV";
        });
    });
  }