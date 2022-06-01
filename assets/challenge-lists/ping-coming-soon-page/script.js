const pageInputContainer = document.querySelector(".page-input");
const notifyButton = document.querySelector(".notify-button");
const inputEmail = document.querySelector(".email-input");

const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

notifyButton.addEventListener('click', () => {
    if(!validEmail.test(inputEmail.value)){
        pageInputContainer.classList.add("active");
        pageInputContainer.classList.remove("success");
    }else{
        pageInputContainer.classList.add("success");
        pageInputContainer.classList.remove("active");
    }
});

inputEmail.addEventListener('keyup', ()=>{
    pageInputContainer.classList.remove("active");
    pageInputContainer.classList.remove("success");
});