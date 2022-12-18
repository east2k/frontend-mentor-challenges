// Current step showing
let currentStep = 1;
let previousStep = 1;

const formGroupInfo = document.querySelectorAll(".form-group-info");
const formTextInput = document.querySelectorAll(".form-input-info");
const formErrorMsg = document.querySelectorAll(".form-error-message");

const checkFormError = {
    textInput: [false, false, false]
}

const email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const textInputValidator = () => {
    formTextInput.forEach((formText, index) => {
        if (formText.value.length === 0) {
            checkFormError.textInput[index] = true;
            formGroupInfo[index].classList.add("error");
            formErrorMsg[index].innerHTML = "This field is required";
        } else {
            if (!email.test(formTextInput[1].value)) {
                checkFormError.textInput[1] = true;
                formGroupInfo[1].classList.add("error");
                formErrorMsg[1].innerHTML = "Invalid Email";
            }
            checkFormError.textInput[index] = false;
            formStatus.name = formTextInput[0];
            formStatus.email = formTextInput[1];
            formStatus.phone = formTextInput[2];
            formGroupInfo[index].classList.remove("error");
        }
    });
    if (checkFormError.textInput.every(v => v === false)) {
        return true;
    }
    return false;
}

formTextInput.forEach((input, i) => {
    input.addEventListener('keyup', () => {
        formGroupInfo[i].classList.remove("error");
    });
});

