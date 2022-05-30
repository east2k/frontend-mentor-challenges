const inputContainer = document.querySelector(".section-input-container");
const emailInputBox = document.querySelector(".section-email-input");
const inputButton = document.querySelector(".section-button");
const errorIcon = document.querySelector(".error-icon");
const inputReminder = document.querySelector(".input-reminder");

const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

inputButton.addEventListener('click', () => {
    if (validEmail.test(emailInputBox.value)) {
        inputContainer.classList.add("success");
        inputContainer.classList.remove("error");

    } else {
        inputContainer.classList.add("error");
        inputContainer.classList.remove("success");
    }
});

emailInputBox.addEventListener('keyup', ()=>{
    inputContainer.classList.remove("error");
    inputContainer.classList.remove("success");
});