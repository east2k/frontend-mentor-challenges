
const totalTipAmount = document.querySelector(".result-total.amount")
const totalAmount = document.querySelector(".result-total.total")

const calculate = () => {
    let initialTotal, total;
    initialTotal = (calculatorObject.bill * calculatorObject.tip) / calculatorObject.people;
    total = (calculatorObject.bill / calculatorObject.people) + initialTotal;

    if ((!isNaN(initialTotal) && !isNaN(total)) && (isFinite(initialTotal) && isFinite(total))) {
        totalTipAmount.innerHTML = initialTotal.toFixed(2);
        totalAmount.innerHTML = total.toFixed(2);
        resetButton.classList.add("available");
    }
}