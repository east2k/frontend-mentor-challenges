// open rules
const buttonOpenRules = document.querySelector(".open-rules-btn");
const rulesModal = document.querySelector(".rules-modal");
const closeModal = document.querySelector(".close-modal");

buttonOpenRules.addEventListener("click", () => {
  rulesModal.classList.add("expand");
});

closeModal.addEventListener("click", () => {
  rulesModal.classList.remove("expand");
});