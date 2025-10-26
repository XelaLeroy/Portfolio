const menu_button = document.querySelector('.ham-button');
const ham_menu = document.querySelector('.ham-menu');
const close_button = document.querySelector('.close-menu');
const menu_links = document.querySelectorAll('.ham-menu-item a');

menu_button.addEventListener('click', () => {
    close_button.style.display = 'block';
    ham_menu.classList.add('active');

})

close_button.addEventListener('click', () => {
    ham_menu.classList.remove('active');
    close_button.style.display = 'none';

})

menu_links.forEach(link => {
    link.addEventListener('click', () => {
        ham_menu.classList.remove('active');
        close_button.style.display = 'none';
    });
});

const buttons = document.querySelectorAll('.skills-btn button');
const cardInner = document.querySelector('.skills-card-inner');

// Ajouter un clic sur chaque bouton
buttons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    // Toggle la classe active sur les boutons
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Si c'est le deuxième bouton (Soft Skills), flip la carte
    if(index === 1) {
      cardInner.classList.add('flipped');
    } else {
      cardInner.classList.remove('flipped');
    }
  });
});

const dots = document.querySelectorAll('.dot');
const scrollSnap = document.querySelector('.scroll-snap');

scrollSnap.addEventListener('scroll', () => {
  let index;

  if (window.innerWidth < 1024) {
    index = Math.round(scrollSnap.scrollLeft / scrollSnap.clientWidth);
  } else {
    index = Math.round(scrollSnap.scrollTop / scrollSnap.clientHeight);
  }

  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
});

async function loadProjectsPreview() {
  const res = await fetch('projects.json');
  const projects = await res.json();

  const previewProjects = projects.slice(0, 3);
  const projectsContainer = document.querySelector('.projects');

  previewProjects.forEach(project => {
    const html = `
      <a href="project-details.html?id=${project.id}">
        <div class="project-item">
          <div class="project-img-container">
            <img src="${project.image}" alt="${project.title}" class="project-img">
          </div>
          <div class="project-content">
            <div class="project-title">
              <h3>${project.title}</h3>
            </div>
            <div class="project-technos">
              ${project.technos.map(t => `<p>${t}</p>`).join('')}
            </div>
            <div class="project-description">${project.short_description}</div>
          </div>
        </div>
      </a>
    `;
    projectsContainer.insertAdjacentHTML('beforeend', html);
  });
}

loadProjectsPreview();

