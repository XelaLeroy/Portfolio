const menu_button = document.querySelector('.ham-button');
const ham_menu = document.querySelector('.ham-menu');
const close_button = document.querySelector('.close-menu')

menu_button.addEventListener('click', () => {
    close_button.style.display = 'block';
    ham_menu.classList.add('active');

})

close_button.addEventListener('click', () => {
    ham_menu.classList.remove('active');
    close_button.style.display = 'none';

})

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