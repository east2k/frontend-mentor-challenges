
// Initiate Buttons
const backButton = document.querySelector(".form-button.back");
const nextButton = document.querySelector(".form-button.next");

// Back and Next buttons
backButton.addEventListener('click', () => {
    previousStep = currentStep;
    gotoNextStep("back");
});

nextButton.addEventListener('click', () => {
    previousStep = currentStep;
    textInputValidator();
    if (textInputValidator()) gotoNextStep("next");
    if (currentStep === 5) {
        endForm();
    }
});

const gotoNextStep = (i) => {
    if (i === "back" && currentStep > 1) {
        currentStep--;
        nextButton.innerHTML = "Next Step";
        nextButton.classList.remove("confirm");
        runForm();
    } else if (i === "next" && currentStep < 5) {
        currentStep++;
        if (currentStep === 4) {
            nextButton.innerHTML = "Confirm";
            nextButton.classList.add("confirm");
        }
        runForm();
    }
}
