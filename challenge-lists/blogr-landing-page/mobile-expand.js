const pageHeader = document.querySelector(".page-header");
const menuLogo = document.querySelector(".menu-logo");
const closeLogo = document.querySelector(".close-logo");


menuLogo.addEventListener('click', () => {
    pageHeader.classList.add("expand");
})
closeLogo.addEventListener('click', () => {
    pageHeader.classList.remove("expand");
})