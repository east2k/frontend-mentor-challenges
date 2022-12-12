const hambugerIcon = document.querySelector(".hamburger-icon");
const clostIcon = document.querySelector(".close-icon");
const pageNav = document.querySelector(".page-nav");
const pageWrapper = document.querySelector(".page-wrapper");


const clickOnBurger = () => {
    pageWrapper.classList.toggle("active");
    pageNav.classList.toggle("active");
}

hambugerIcon.addEventListener('click', clickOnBurger);
clostIcon.addEventListener('click', clickOnBurger);
