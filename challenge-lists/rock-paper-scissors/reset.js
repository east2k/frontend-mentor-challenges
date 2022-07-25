
// reset
const resetButton = document.querySelector(".modal-btn");

const reset = () => {
  arenaContainer.classList.remove("active", "lose", "win", "tie");
  chipPlayer.classList.remove("winner", "rock", "paper", "scissors");
  chipHouse.classList.remove("winner", "rock", "paper", "scissors");
  chipHouse.classList.add("none");
  currentState.playerCard = null;
  currentState.houseCard = null;
  chipPlayerImg.setAttribute("src", "");
  chipHouseImg.setAttribute("src", "");
};

resetButton.addEventListener("click", () => {
  reset();
});
