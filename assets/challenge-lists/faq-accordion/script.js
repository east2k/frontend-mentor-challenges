const itemContainer = document.getElementsByClassName("item-container");
const questions = document.getElementsByClassName("item-question");
const boxIllustration = document.querySelector(".illustration-box");
const optionArrow = document.querySelectorAll(".item-question img");

for (let i = 0; i < itemContainer.length; i++) {
    questions[i].addEventListener('click', () => {
        if (itemContainer[i].classList.contains("active")) {
            itemContainer[i].classList.remove("active");
        } else {
            let activeElem = document.querySelector('.active');
            if (activeElem !== null) activeElem.classList.remove("active");

            itemContainer[i].classList.add("active");
        }
    });
}

for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('mouseover', () => {
        boxIllustration.classList.add("hovered");
    });
    questions[i].addEventListener('mouseout', () => {
        boxIllustration.classList.remove("hovered");
    });
}
