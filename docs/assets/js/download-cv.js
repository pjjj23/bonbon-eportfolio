document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById("downloadBtn");
    
    downloadBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const fileId = "1lrB82ZpAjtrHj_JuF99hfIXxOUtkzHdd";
        
        // Create temporary link
        const link = document.createElement("a");
        link.href = `https://drive.google.com/uc?export=download&id=${fileId}`;
        link.target = "_blank";
        link.download = "Philip_John_CV.pdf"; // Suggested filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}); 