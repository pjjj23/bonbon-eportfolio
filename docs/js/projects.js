// Project data would be imported from a separate data file
import { projectsData } from './data/projects.js';

export function initProjectModals() {
  const modal = document.getElementById("projectModal");
  if (!modal) return;

  // Modal Elements
  const modalClose = document.getElementById("modalClose");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  // ... other modal elements

  function openProjectModal(projectId) {
    const project = projectsData.find(p => p.id === projectId) || projectsData[0];
    // Populate modal with project data...
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeProjectModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }

  // Add click events to project cards
  document.querySelectorAll(".project-card").forEach(card => {
    const projectId = card.getAttribute("data-project-id");
    card.addEventListener("click", () => openProjectModal(projectId));
  });

  modalClose.addEventListener("click", closeProjectModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeProjectModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeProjectModal();
    }
  });
}