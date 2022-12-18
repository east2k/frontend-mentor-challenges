const formGroupRadio = document.querySelectorAll(".form-group-radio");
const formRadio = document.querySelectorAll(".form-radio");

formGroupRadio.forEach((rad, i) => {
    formStatus.plan = formRadio[0].value;
    rad.addEventListener("click", () => {
        const currentChecked = document.querySelector(".checked-radio");
        if (currentChecked !== null) {
            currentChecked.classList.remove("checked-radio")
        }
        if (currentChecked.value === planArcade.name) {
            currentlyChosenRad.price = planArcade.price;
        } else if (currentChecked.value === planAdvanced.name) {
            currentlyChosenRad.price = planAdvanced.price;
        } else {
            currentlyChosenRad.price = planPro.price;
        }
        formStatus.plan = formRadio[i].value;
        chosenRadio.innerHTML = formStatus.plan;
        servicePrice.innerHTML = currentlyChosenRad.price;
        rad.classList.add("checked-radio");
        calculate();
    });
});

const radioPrice = document.querySelectorAll(".radio-price");
const radioDate = document.querySelectorAll(".radio-price-date");
const discountMessage = document.querySelectorAll(".discount-message");

const addDiscount = (status) => {
    discountMessage.forEach((msg) => {
        if (status) {
            msg.classList.add("show");
        } else {
            msg.classList.remove("show");
        }
    });
}

// sry for messy code
// can't think straight
// I'm just depressed rn
// fk life
// hope u have a lovely day though :)