const optionList = document.querySelector(".rating-list ul").getElementsByTagName("li");
const submitButton = document.querySelector(".rating-submit");

let selectedOption;
Array.from(optionList).forEach((option) => {
    option.addEventListener('click', () => {
        let activeElem = document.querySelector(".selected");
        if (activeElem !== null) activeElem.classList.remove("selected");
        option.classList.add("selected");
        selectedOption = option.innerHTML;
    });
});

const ratingState = document.querySelector(".rating-wrapper.rating-state");

submitButton.addEventListener('click', () => {
    console.log(selectedOption);
    if (selectedOption !== undefined) {
        ratingState.classList.remove("active");
        enterThankState();
    } else{
        alert("Please select an option First");
    }
});

const thankState = document.querySelector(".rating-wrapper.thank-you-state");
const selectedRating = document.getElementById("selected-rating");

const enterThankState = () => {
    thankState.classList.add("active");
    selectedRating.innerHTML = selectedOption;
}