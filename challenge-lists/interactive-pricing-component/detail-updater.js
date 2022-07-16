const pricingView = document.querySelector(".pricing-views");
const pricingTotal = document.querySelector(".pricing-total");
const switchCheck = document.querySelector(".switch-check");

const checkVal = (overallValue) => {
    const pageviewKeys = Object.keys(pageview);
    pageviewKeys.forEach((view, index) => {
        if (overallValue === index) {
            pricingView.innerHTML = pageview[view];
        }
    });
}

const updateDetails = () => {

    const currentValue = parseInt(slider.value);
    const calculatedValue = currentValue * 12 - (currentValue * 12) * 0.25;
    const currentLowVal = (currentValue / slider.min) - 1;

    if (!billing.status) {
        checkVal(currentLowVal);
        pricingTotal.innerHTML = currentValue.toFixed(2);
    } else {
        checkVal(currentLowVal);
        pricingTotal.innerHTML = calculatedValue.toFixed(2);
    }
}