const billInput = document.querySelector(".input-container.bill .input-label input");
const amountInput = document.querySelector(".input-container.amount .input-label input");
const tipsButton = document.querySelectorAll(".tip-button");
const customTip = document.querySelector(".custom-tip");

billInput.addEventListener('change', (event) => {
    calculatorObject.bill = parseFloat(event.target.value);
    calculate();
})

amountInput.addEventListener('change', (event) => {
    calculatorObject.people = parseFloat(event.target.value);
    calculate();
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
