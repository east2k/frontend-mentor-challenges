const summaryChangerButton = document.querySelector(".summary-changer-button");

summaryChangerButton.addEventListener('click', changeFlickState);

const summaryTimeline = document.querySelector(".summary-timeline");
const totalTimeline = document.querySelector(".total-timeline");
const totalPriceTimeline = document.querySelector(".total-price-timeline");

const servicePrice = document.querySelector(".service-price");
const servicePriceTimeline = document.querySelector(".service-price-timeline");

const chosenRadio = document.querySelector(".chosen-radio");

const updateSummary = () => {
    chosenRadio.innerHTML = formStatus.plan;
    if (formStatus.plan === planArcade.name) {
        currentlyChosenRad.price = planArcade.price;
    } else if (formStatus.plan === planAdvanced.name) {
        currentlyChosenRad.price = planAdvanced.price;
    } else {
        currentlyChosenRad.price = planPro.price;
    }
    servicePrice.innerHTML = currentlyChosenRad.price;
    servicePriceTimeline.innerHTML = formStatus.date;
    totalPriceTimeline.innerHTML = formStatus.date;
    if (formStatus.flicked) {
        summaryTimeline.innerHTML = "Yearly";
        totalTimeline.innerHTML = "Yearly";
        updateSummaryPrices("multiply");
    } else {
        summaryTimeline.innerHTML = "Monthly";
        totalTimeline.innerHTML = "Monthly";
        updateSummaryPrices("divide");
    }
}


const updateSummaryPrices = (operation) => {
    if (addonPrice !== undefined) {
        for (let i = 0; i < addonPrice.length; i++) {
            const price = parseFloat(addonPrice[i].innerHTML);
            if (operation === "multiply") addonPrice[i].innerHTML = price * 10;
            else addonPrice[i].innerHTML = price / 10;
            addonPriceTimeline[i].innerHTML = formStatus.date;
        }
    }
}