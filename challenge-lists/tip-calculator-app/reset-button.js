
const resetButton = document.querySelector(".reset-button");

const reset = () => {
    calculatorObject.bill = 0;
    calculatorObject.tip = 0;
    calculatorObject.people = 0;
    calculate();

    numberInput[0].value = 0;
    numberInput[1].value = 0;

    customTip.value = 0;

    totalTipAmount.innerHTML = 0;
    totalAmount.innerHTML = 0;

    const currentActive = document.querySelector(".active");
    if (currentActive !== null) currentActive.classList.remove("active");

    resetButton.classList.remove("available");
}