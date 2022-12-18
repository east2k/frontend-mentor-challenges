const formCheckbox = document.querySelectorAll(".form-checkbox");

const checkboxPriceAmount = document.querySelectorAll(".checkbox-price-amount");
const checkboxPriceDate = document.querySelectorAll(".checkbox-price-date");

const updateCheckbox = () => {
    if (formStatus.flicked) {
        updatePrices("multiply");
    } else {
        updatePrices("divide");
    }
}

const updatePrices = (operation) => {
    for (let i = 0; i < checkboxPriceAmount.length; i++) {
        const price = parseFloat(checkboxPriceAmount[i].innerHTML);
        if (operation === "multiply") checkboxPriceAmount[i].innerHTML = price * 10;
        else checkboxPriceAmount[i].innerHTML = price / 10;
        checkboxPriceDate[i].innerHTML = formStatus.date;
    }
}

let addonPrice;
let addonPriceTimeline;

let summaryAddonCard;
let summaryAddon;

const addAddon = (event) => {
    if (event.checked) {
        formStatus.addons.push(event.value);
        if (event.value === addonCustom.name) {
            createDiv(addonCustom, formStatus.date);
        } else if (event.value === addonStorage.name) {
            createDiv(addonStorage, formStatus.date);
        } else {
            createDiv(addonOnline, formStatus.date);
        }
        calculate();
    } else {
        formStatus.addons = formStatus.addons.filter(e => e !== event.value);
        summaryAddonCard.forEach((addon, i) => {
            if (summaryAddon[i].innerHTML === event.value) {
                addon.remove();
            }
        });
        calculate();
    }
}