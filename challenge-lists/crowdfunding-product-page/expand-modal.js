const bookmarkButton = document.querySelector(".bookmark");

bookmarkButton.addEventListener('click', () => bookmarkButton.classList.toggle("marked"));

const backProjectButton = document.querySelector(".backproj");
const pageModal = document.querySelector(".page-modal-expanded");
const pageModalContainer = document.querySelector(".page-modal-container");
const modalCloseIcon = document.querySelector(".modal-close-icon");

backProjectButton.addEventListener('click', () => {
    pageModal.classList.add("expand")
    pageModalContainer.scrollIntoView();
});

modalCloseIcon.addEventListener('click', () => {
    pageModal.classList.remove("expand");
});

const successButton = document.querySelector(".success-button");

successButton.addEventListener('click', () => {
    pageModal.classList.remove("expand");
    pageModal.classList.remove("success");
});