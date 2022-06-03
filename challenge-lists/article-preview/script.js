const shareIcon = document.querySelector(".share-icon");
const shareOptionBox = document.querySelector(".share-option");

shareIcon.addEventListener('click', () => {
    shareIcon.classList.toggle("active");
    shareOptionBox.classList.toggle("active");
});