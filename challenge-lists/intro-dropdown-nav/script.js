const dropdownContainer = document.querySelectorAll(".nav-item.dropdown-container");
const dropdownName = document.querySelectorAll(".dropdown-name");

for (let i = 0; i < dropdownName.length; i++) {
    dropdownName[i].addEventListener('click', () => {
        dropdownContainer[i].classList.toggle("active");
    });
}

const menuButton = document.querySelector(".menu-logo");
const navigationContainer = document.querySelector(".navigation-container");
const bgDark = document.querySelector(".background-darkener");
const pageHeader = document.querySelector(".page-header");

menuButton.addEventListener('click', () => {
    navigationContainer.classList.add("active");
    pageHeader.classList.add("active");
    bgDark.classList.add("active");
});

const closeMenu = document.querySelector(".close-menu");

closeMenu.addEventListener("click", () => {
    navigationContainer.classList.remove("active")
    pageHeader.classList.remove("active");
    bgDark.classList.remove("active");
    
})