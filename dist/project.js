const params = new URLSearchParams(window.location.search);
const projectId = params.get("id");

async function loadProject() {
  try {
    const response = await fetch("projects.json");
    const projects = await response.json();

    const project = projects.find(p => p.id === projectId);

    if (!project) {
      document.querySelector(".project-page").innerHTML = "<p>Projet introuvable 😢</p>";
      return;
    }

    // injecter dans les éléments existants
    document.getElementById("project-title").textContent = project.title;
    document.getElementById("project-image").src = project.image;
    document.getElementById("project-image").alt = project.title;
    document.getElementById("project-description").textContent = project.description;

    // technos
    const techContainer = document.getElementById("project-technos");
    techContainer.innerHTML = project.technos.map(t => `<span>${t}</span>`).join("");
  } catch (error) {
    console.error(error);
    document.querySelector(".project-page").innerHTML = "<p>Erreur lors du chargement du projet 😔</p>";
  }
}

loadProject();
