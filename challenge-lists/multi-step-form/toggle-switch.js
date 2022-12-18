

const switchFlick = document.querySelector(".switch-flick");

const changeFlickState = () => {
    switchFlick.classList.toggle("flicked");
    for (let i = 0; i < radioPrice.length; i++) {
        const price = parseFloat(radioPrice[i].innerHTML);
        if (switchFlick.classList.contains("flicked")) {
            formStatus.flicked = true;
            formStatus.date = "yr";
            radioPrice[i].innerHTML = price * 10;
            radioDate[i].innerHTML = formStatus.date;
            addDiscount(formStatus.flicked);
        } else {
            formStatus.flicked = false;
            formStatus.date = "mo";
            radioPrice[i].innerHTML = price / 10;
            radioDate[i].innerHTML = formStatus.date;
            addDiscount(formStatus.flicked);
        }
    }
    if (switchFlick.classList.contains("flicked")) {
        planArcade.price *= 10;
        planAdvanced.price *= 10;
        planPro.price *= 10;
    } else {
        planArcade.price /= 10;
        planAdvanced.price /= 10;
        planPro.price /= 10;
    }
    updateCheckbox();
    updateSummary();
    calculate();
}

switchFlick.addEventListener("click", changeFlickState);

