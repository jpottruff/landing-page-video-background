// ION ICON MENU JS (Enable if using Ion Icons)
const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');
const MENU_ICON = 'menu-outline';
const CLOSE_ICON = 'close-outline';

menuToggle.addEventListener('click', () => {
    (menuToggle.getAttribute('name') === MENU_ICON) ? 
        menuToggle.setAttribute('name', CLOSE_ICON) 
        : menuToggle.setAttribute('name', MENU_ICON);

    showcase.classList.toggle('active');
});