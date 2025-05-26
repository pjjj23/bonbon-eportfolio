document.addEventListener("DOMContentLoaded", function () {
  // Project data - replace with your actual project data
  const projectsData = [
    {
      id: "ctu-boarding-houses",
      title: "CTU-Argao Campus Accredited Boarding houses",
      category: "Web Development",
      description:
        "A responsive capstone project website developed for CTU-Argao Campus (CTU-AC), designed to help students conveniently find accredited boarding houses. The platform supports three user roles: Superadmin (SAO), Admin (boarding house owners), and Students each with dedicated functionalities. Key features include virtual tours, real-time room availability tracking, booking management, messaging system, and interactive location viewing, all tailored to enhance the boarding house search and management experience.",
      client: "CTU-Argao Campus Student Affairs Office",
      date: "2024",
      role: "Leader/Core Developer",
      image: "assets/img/ctu-accredited-project/cover.png",
      technologies: [
        { name: "Django", icon: "fab fa-python" },
        { name: "HTML5", icon: "fab fa-html5" },
        { name: "CSS3", icon: "fab fa-css3-alt" },
        { name: "JavaScript", icon: "fab fa-js" },
        { name: "Firebase", icon: "fas fa-fire" },
      ],
      links: {
        live: "https://accreditedboardinghousesctuac.pythonanywhere.com/",
        code: "https://github.com/pjjj23/ctu-ac-accreditedboardinghouse-datalink",
      },
      gallery: [
        "assets/img/ctu-accredited-project/gallery1.png",
        "assets/img/ctu-accredited-project/gallery2.png",
        "assets/img/ctu-accredited-project/gallery3.png",
        "assets/img/ctu-accredited-project/gallery4.png",
        "assets/img/ctu-accredited-project/gallery5.png",
        "assets/img/ctu-accredited-project/gallery6.png",
        "assets/img/ctu-accredited-project/gallery7.png",
      ],
    },
    {
      id: "weather-finder",
      title: "Weather Finder",
      category: "Web Application",
      description:
        "A web application that delivers real-time weather updates for any location worldwide. It provides accurate and up-to-date information including wind speed, humidity, atmospheric pressure, and visibility based on user input. The application is seamlessly integrated with WeatherAPI.com to ensure reliable and precise weather data.",
      client: "Retail Solutions Inc.",
      date: "2022",
      role: "Frontend Lead",
      image: "assets/img/weather-finder-project/cover.png",
      technologies: [
        { name: "HTML5", icon: "fab fa-html5" },
        { name: "CSS3", icon: "fab fa-css3-alt" },
        { name: "JavaScript", icon: "fab fa-js" },
      ],
      links: {
        live: "https://weatherfinder-alpha.vercel.app/",
        code: "https://github.com/pjjj23/weatherfinder",
      },
      gallery: [
        "assets/img/weather-finder-project/gallery1.png",
        "assets/img/weather-finder-project/gallery2.png",
        "assets/img/weather-finder-project/gallery3.png",
      ],
    },
    {
      id: "plant-quiz-game",
      title: "Plant Quiz Game",
      category: "Web Game Development",
      description:
        "An augmented reality application that allows users to visualize furniture in their space before making a purchase decision. The app uses advanced AR technologies to accurately place 3D models of furniture in the real world, with features for measuring spaces, custom color selection, and saving layouts.",
      client: "FurnishNow",
      date: "2022",
      role: "AR Developer",
      image: "assets/img/plant-quiz-project/cover.png",
      technologies: [
        { name: "React Native", icon: "fab fa-react" },
        { name: "ARKit", icon: "fas fa-cubes" },
        { name: "ARCore", icon: "fas fa-cube" },
        { name: "Firebase", icon: "fas fa-fire" },
      ],
      links: {
        live: "",
        code: "https://github.com/pjjj23/PlantQuizGame",
      },
      gallery: [
        "assets/img/plant-quiz-project/gallery1.png",
        "assets/img/plant-quiz-project/gallery2.png",
        "assets/img/plant-quiz-project/gallery3.png",
        "assets/img/plant-quiz-project/gallery4.png",
        "assets/img/plant-quiz-project/gallery5.png",
      ],
    },
    {
      id: "scheduling-project",
      title: "Scheduling Project",
      category: "Data Visualization",
      description:
        "A comprehensive analytics dashboard with real-time data visualization, custom charts, and interactive reporting features. The dashboard includes customizable widgets, role-based access control, data export capabilities, and automated report generation to help businesses make data-driven decisions.",
      client: "DataMetrics Corp",
      date: "2021",
      role: "Data Visualization Expert",
      image: "assets/img/scheduling-project/cover.png",
      technologies: [
        { name: "Django", icon: "fab fa-python" },
        { name: "PostgreSQL", icon: "fas fa-database" },
      ],
      links: {
        live: "",
        code: "https://github.com/pjjj23/schedule-project",
      },
      gallery: [
        "assets/img/scheduling-project/gallery1.png",
        "assets/img/scheduling-project/gallery2.png",
        "assets/img/scheduling-project/gallery3.png",
      ],
    },
    {
      id: "smartpet-feeder",
      title: "Smartpet Feeder",
      category: "IoT Project",
      description:
        "An IoT-based SmartFeeder that lets you feed your pet remotely using your smartphone, requiring an internet connection for both the device and feeder. It offers convenience and peace of mind for pet owners who are frequently away from home. With real-time control and scheduling features, the SmartFeeder ensures your pet never misses a meal.",
      client: "DataMetrics Corp",
      date: "2024",
      role: "Data Visualization Expert",
      image: "assets/img/smartpet-feeder-project/cover.png",
      technologies: [{ name: "C++", icon: "" }],
      links: {
        live: "https://www.canva.com/design/DAGCOKehpQE/Su4TLbBUVErRlamOHxALVQ/edit?utm_content=DAGCOKehpQE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
        code: "",
      },
      gallery: [
        "assets/img/smartpet-feeder-project/gallery3.jfif",
        "assets/img/smartpet-feeder-project/gallery1.jfif",
        "assets/img/smartpet-feeder-project/gallery2.jfif",
        "assets/img/smartpet-feeder-project/gallery4.jfif",
        "assets/img/smartpet-feeder-project/gallery5.jfif",
        "assets/img/smartpet-feeder-project/gallery6.jfif",
        "assets/img/smartpet-feeder-project/gallery7.jfif",
        "assets/img/smartpet-feeder-project/gallery8.jfif",
        "assets/img/smartpet-feeder-project/gallery9.jfif",
      ],
    },
    {
      id: "alert-mob-app",
      title: "Alert App",
      category: "Emergency Mobile App",
      description:
        "An IoT-based SmartFeeder that lets you feed your pet remotely using your smartphone, requiring an internet connection for both the device and feeder. It offers convenience and peace of mind for pet owners who are frequently away from home. With real-time control and scheduling features, the SmartFeeder ensures your pet never misses a meal.",
      client: "DataMetrics Corp",
      date: "2024",
      role: "Data Visualization Expert",
      image: "assets/img/alert-app-project/cover.png",
      technologies: [{ name: "C#", icon: "" }],
      links: {
        live: "",
        code: "https://github.com/pjjj23/CallEmergencyHotline_Xamarin",
      },
      gallery: [
        "assets/img/alert-app-project/gallery1.jfif",
        "assets/img/alert-app-project/gallery2.jfif",
        "assets/img/alert-app-project/gallery3.jfif",
      ],
    },
    {
      id: "alay-trabaho-project",
      title: "Alay Trabaho Web",
      category: "Job Posting",
      description:
        "An IoT-based SmartFeeder that lets you feed your pet remotely using your smartphone, requiring an internet connection for both the device and feeder. It offers convenience and peace of mind for pet owners who are frequently away from home. With real-time control and scheduling features, the SmartFeeder ensures your pet never misses a meal.",
      client: "DataMetrics Corp",
      date: "2025",
      role: "Data Visualization Expert",
      image: "assets/img/alay-trabaho-project/cover.png",
      technologies: [{ name: "React", icon: "fa-brands fa-react" }],
      links: {
        live: "#",
        code: "https://github.com/pjjj23/alay-trabaho-web",
      },
      gallery: [
        "assets/img/alay-trabaho-project/gallery1.png",
        "assets/img/alay-trabaho-project/gallery2.png",
        "assets/img/alay-trabaho-project/gallery3.png",
      ],
    },
  ];

  // DOM Elements
  const modal = document.getElementById("projectModal");
  const modalClose = document.getElementById("modalClose");
  const projectCards = document.querySelectorAll(".project-card");

  // Modal Elements
  const modalImage = document.getElementById("modalImage");
  const modalCategory = document.getElementById("modalCategory");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const modalClient = document.getElementById("modalClient");
  const modalDate = document.getElementById("modalDate");
  const modalRole = document.getElementById("modalRole");
  const modalTech = document.getElementById("modalTech");
  const modalLinks = document.getElementById("modalLinks");
  const liveLink = document.getElementById("liveLink");
  const codeLink = document.getElementById("codeLink");
  const modalGallery = document.getElementById("modalGallery");

  // Add click event handlers for live and code links
  liveLink.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (!href || href === "#" || href.trim() === "") {
      e.preventDefault();
      alert("View live link is unavailable for this project.");
    }
  });

  codeLink.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (!href || href === "#" || href.trim() === "") {
      e.preventDefault();
      alert("Code link is unavailable for this project.");
    }
  });

  // Open modal with specific project data
  function openProjectModal(projectId) {
    const project = projectsData.find((p) => p.id === projectId);
    const projectData = project || projectsData[0];

    modalImage.style.backgroundImage = `url('${projectData.image}')`;
    modalCategory.textContent = projectData.category;
    modalTitle.textContent = projectData.title;
    modalDescription.textContent = projectData.description;
    modalClient.textContent = projectData.client;
    modalDate.textContent = projectData.date;
    modalRole.textContent = projectData.role;

    modalTech.innerHTML = "";
    projectData.technologies.forEach((tech) => {
      const techTag = document.createElement("div");
      techTag.className = "modal-tech-tag";
      techTag.innerHTML = `<i class="${tech.icon}"></i> ${tech.name}`;
      modalTech.appendChild(techTag);
    });

    liveLink.href = projectData.links.live || "#";
    codeLink.href = projectData.links.code || "#";

    // Add/remove disabled class based on link availability
    if (!projectData.links.live || projectData.links.live === "#") {
      liveLink.classList.add("disabled-link");
    } else {
      liveLink.classList.remove("disabled-link");
    }

    if (!projectData.links.code || projectData.links.code === "#") {
      codeLink.classList.add("disabled-link");
    } else {
      codeLink.classList.remove("disabled-link");
    }

    modalGallery.innerHTML = "";
    projectData.gallery.forEach((img) => {
      const galleryItem = document.createElement("div");
      galleryItem.className = "gallery-item";
      galleryItem.style.backgroundImage = `url('${img}')`;
      galleryItem.addEventListener("click", () => {
        window.open(img, "_blank");
      });
      modalGallery.appendChild(galleryItem);
    });

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
    document.querySelector(".project-modal").scrollTop = 0;
  }

  function closeProjectModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }

  projectCards.forEach((card) => {
    const projectId = card.getAttribute("data-project-id");
    card.addEventListener("click", () => {
      openProjectModal(projectId);
    });
  });

  modalClose.addEventListener("click", closeProjectModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeProjectModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeProjectModal();
    }
  });

  document.querySelector(".project-modal").addEventListener("click", (e) => {
    e.stopPropagation();
  });

  const modalContainer = document.querySelector(".project-modal");
  modalContainer.addEventListener("mousemove", (e) => {
    if (!modal.classList.contains("active")) return;

    const rect = modalContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPercent = x / rect.width - 0.5;
    const yPercent = y / rect.height - 0.5;

    modalImage.style.transform = `scale(1.05) translate(${xPercent * -10}px, ${
      yPercent * -10
    }px)`;
  });

  modalContainer.addEventListener("mouseleave", () => {
    modalImage.style.transform = "scale(1) translate(0, 0)";
  });
});
