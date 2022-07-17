const arrowPrevious = document.querySelector(".arrow.prev");
const arrowNext = document.querySelector(".arrow.next");
const contentBanner = document.querySelector(".content-banner");
const sliderImage = document.querySelector(".slider-image");

let index = 0;

const removeClass = () => {
    contentBanner.children[index].classList.remove('active');
    sliderImage.children[index].classList.remove('active');
}

const addClass = () => {
    contentBanner.children[index].classList.add('active');
    sliderImage.children[index].classList.add('active');
}

const updateSlide = () => {
    if (index < 0) {
        index = contentBanner.children.length - 1;
        addClass();
    } else if (index < contentBanner.children.length) {
        addClass();
    } else {
        index = 0;
        addClass();
    }
}

arrowNext.addEventListener('click', () => {
    removeClass();
    index++;
    updateSlide();
});


arrowPrevious.addEventListener('click', () => {
    removeClass();
    index--;
    updateSlide();
});
