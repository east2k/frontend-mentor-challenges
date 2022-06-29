const hamburgerMenu = document.querySelector(".hamburger-menu");
const pageNav = document.querySelector(".page-navigation");

hamburgerMenu.addEventListener('click', ()=>{
    pageNav.classList.toggle("active");
});