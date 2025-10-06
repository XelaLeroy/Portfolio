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