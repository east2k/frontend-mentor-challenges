// const question = document.getElementsByClassName("item-question");
// const answer = document.getElementsByClassName("item-answer");
const itemContainer = document.getElementsByClassName("item-container");

const showOrHide = (question) => {
    let active = document.querySelector(".item-container.active");
    console.log(question.classList.contains("active"));
    if (active === question) {
        question.classList.remove("active");
        console.log("fag")
    } else {
        question.classList.add("active");
    }


    // console.log(active);
    // console.log(question);
}

for (let i = 0; i < itemContainer.length; i++) {
    itemContainer[i].addEventListener('click', () => {
        let activeElem = document.querySelector('.active');
        if (activeElem !== null) activeElem.classList.remove("active");
        showOrHide(itemContainer[i]);
        // console.log("clicked");
    });
}

// for (let i = 0; i < question.length; i++) {
//     question[i].addEventListener('click', () => {
//         let activeElem = document.querySelectorAll('.active');
//         for(let active of activeElem){
//             console.log(active);
//             if (active !== null) active.classList.remove("active");
//         }
//         question[i].classList.toggle("active");
//         answer[i].classList.toggle("active");
//         console.log("clicked");
//     });
// }
// Array.from(question).forEach((question) => {
//     question.addEventListener('click', () => {
//         let activeElem = document.querySelector(".selected");
//         if (activeElem !== null) activeElem.classList.remove("selected");
//         question.classList.add("selected");
//         selectedOption = option.innerHTML;
//     });
// });