const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

// PNG MENU JS (Enable if using .png files)
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    showcase.classList.toggle('active');
});


