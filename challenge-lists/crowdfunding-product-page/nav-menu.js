const menuLogo = document.querySelector(".hamburger-logo");
const closeMenuLogo = document.querySelector(".close-menu-logo");
const navListContainer = document.querySelector(".nav-list-container");
const pageHeader = document.querySelector(".page-header");

menuLogo.addEventListener('click', () => {
    navListContainer.classList.add('active');
    pageHeader.classList.add('active');
});

closeMenuLogo.addEventListener('click', () => {
    navListContainer.classList.remove('active');
    pageHeader.classList.remove('active');
});