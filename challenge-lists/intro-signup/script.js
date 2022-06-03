const signButton = document.querySelector(".signup-button");
const signInputEmail = document.querySelector(".signup-input.email-address");
const signSuccess = document.querySelector(".signup-success");
const signInput = document.getElementsByClassName("signup-input");
const signInputContainer = document.getElementsByClassName("signup-input-container");


const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

signButton.addEventListener('click', () => {
    for (let i = 0; i < signInput.length; i++) {
        if (signInput[i].value === '') {
            signInputContainer[i].classList.add("active");
            signInputContainer[i].classList.remove("email-error");
            signButton.classList.add("active");
            signSuccess.classList.remove("active");
        } else if (!validEmail.test(signInputEmail.value)) {
            signInputEmail.parentElement.classList.add("email-error");
            signInputContainer[i].classList.remove("active");
            signButton.classList.add("active");
            signSuccess.classList.remove("active");
        } else {
            signInputContainer[i].classList.remove("active");
            signInputContainer[i].classList.remove("email-error");
            signButton.classList.remove("active");
            signSuccess.classList.add("active");
        }
    }
});

for (let inputBox of signInput) {
    inputBox.addEventListener('keyup', () => {
        inputBox.parentElement.classList.remove("active");
        inputBox.parentElement.classList.remove("email-error");
        signButton.classList.remove("active");
        signSuccess.classList.remove("active");
    });
}