const totalPriceAmount = document.querySelector(".total-price-amount");

const calculate = () => {
    let total = 0;
    const plan = parseFloat(servicePrice.innerHTML);
    if (addonPrice !== undefined) {
        let arr = [...addonPrice];
        console.log(arr);
        arr.forEach(addon => {
            const addonPrice = parseFloat(addon.innerHTML);
            total += addonPrice;
        });
    }
    total += plan
    totalPriceAmount.innerHTML = total;
}
