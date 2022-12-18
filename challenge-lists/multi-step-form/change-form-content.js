
// Initiate form details
const formTitle = document.querySelector(".form-title");
const formDescription = document.querySelector(".form-description");

// Initiate form container
const formStepContainer = document.querySelectorAll(".form-step-container");
const formStepItemNumber = document.querySelectorAll(".step-item");

// Form current showing
const runForm = () => {
    if (currentStep > 1) {
        backButton.classList.add("show");
    } else {
        backButton.classList.remove("show");
    }
    stepList.forEach(step => {
        if (currentStep === step.stepNumber) {
            formTitle.innerHTML = step.title;
            formDescription.innerHTML = step.description;
            formStepItemNumber[previousStep - 1].classList.remove("active-step");
            formStepItemNumber[currentStep - 1].classList.add("active-step");
            formStepContainer[previousStep - 1].classList.remove("active-step");
            formStepContainer[currentStep - 1].classList.add("active-step");
        }
    });
}

runForm();

const finalStep = document.querySelector(".final-step");
const formContent = document.querySelector(".form-content");

const endForm = () => {
    finalStep.classList.add("done");
    formContent.classList.add("done");
}
