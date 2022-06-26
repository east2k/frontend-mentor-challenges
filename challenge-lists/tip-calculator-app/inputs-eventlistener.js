const numberInput = document.querySelectorAll(".number-input");
const amountInputContainer = document.querySelector(".input-container.amount");
const tipsButton = document.querySelectorAll(".tip-button");
const customTip = document.querySelector(".custom-tip");

numberInput.forEach((input) => {
    input.addEventListener('change', (event) => {
        if (event.target.name === "bill") {
            calculatorObject.bill = parseFloat(event.target.value);
            calculate();
        }
        else {
            if (parseFloat(event.target.value) === 0) amountInputContainer.classList.add("active");
            else {
                amountInputContainer.classList.remove("active");
                calculatorObject.people = parseFloat(event.target.value)
            };
            calculate();
        }
    })
})

tipsButton.forEach((button) => {
    button.addEventListener('click', () => {
        const currentActive = document.querySelector(".active");
        if (currentActive !== null) currentActive.classList.remove("active");
        button.classList.add("active");

        calculatorObject.tip = parseFloat("." + button.innerHTML);
        calculate();
    })
});

customTip.addEventListener('change', (event) => {
    const currentActive = document.querySelector(".active");
    if (currentActive !== null) currentActive.classList.remove("active");
    customTip.classList.add("active");

    if (event.target.value >= 100) calculatorObject.tip = parseFloat(event.target.value);
    else calculatorObject.tip = parseFloat("." + event.target.value);
    calculate();
})

resetButton.addEventListener('click', reset);