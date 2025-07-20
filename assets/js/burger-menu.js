const burgerButton = document.querySelector('.burger-btn');
const headerMenu = document.querySelector('.header-menu');
const burgerCloseButton = document.querySelector('.burger-close-button');
const menuOverlay = document.querySelector('.menu-overlay');

burgerButton.addEventListener('click', () => showMenu());
burgerCloseButton.addEventListener('click', () => hideMenu());
menuOverlay.addEventListener('click', () => hideMenu());

function showMenu(){
    headerMenu.classList.remove('hidden-menu');
    menuOverlay.classList.remove('hidden');
}

function hideMenu(){
    headerMenu.classList.add('hidden-menu');
    menuOverlay.classList.add('hidden');
}



