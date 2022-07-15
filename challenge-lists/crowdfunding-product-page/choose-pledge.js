const pledge = document.querySelectorAll("input[type='radio'][name='pledge-radio']");
const cardModal = document.querySelectorAll(".card.modal");
const selectedPledgeAmount = document.querySelectorAll(".selected-pledge-amount");
const continueButton = document.querySelectorAll(".continue-button");
const modalSuccess = document.querySelector(".modal-success");

pledge.forEach((chosen, index) => {
    chosen.addEventListener('click', () => {
        const selected = document.querySelector(".selected")
        if (selected !== null) selected.classList.remove("selected");
        cardModal[index].classList.add("selected");

        continueButton[index].addEventListener('click', () => {
            calculate(selectedPledgeAmount[index].value, chosen.value)
            pageModal.classList.add("success");
            modalSuccess.scrollIntoView();
        });
    })
});

