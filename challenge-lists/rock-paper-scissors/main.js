// choose card
const chipsRock = document.querySelector(".chip.rock");
const chipsPaper = document.querySelector(".chip.paper");
const chipsScissors = document.querySelector(".chip.scissors");

const gotoArena = (card) => {
  currentState.playerCard = card;
  displayArena();
  setTimeout(() => {
    currentState.houseCard = generateEnemyCard();
    displayArena();
  }, 500);
};

chipsRock.addEventListener("click", () => gotoArena(CARD.ROCK));
chipsPaper.addEventListener("click", () => gotoArena(CARD.PAPER));
chipsScissors.addEventListener("click", () => gotoArena(CARD.SCISSORS));

// setup elements
const setupElements = (elem, img, cardState) => {
  elem.classList.add(cardState);
  img.setAttribute("src", "images/icon-" + cardState + ".svg");
};

// display Arena
const arenaContainer = document.querySelector(".content-container");
const chipPlayer = document.querySelector(".chip.player");
const chipPlayerImg = document.querySelector(".chip.player .chip-image img");
const chipHouse = document.querySelector(".chip.house");
const chipHouseImg = document.querySelector(".chip.house .chip-image img");

const displayArena = () => {
  setupElements(chipPlayer, chipPlayerImg, currentState.playerCard);
  if (currentState.houseCard) {
    setupElements(chipHouse, chipHouseImg, currentState.houseCard);
    chipHouse.classList.remove("none");
    compareCards();
  }
  arenaContainer.classList.add("active");
};

// generate enemy card
function generateEnemyCard() {
  const index = Math.floor(Math.random() * (2 - 0 + 1) + 0);
  const cardValue = Object.values(CARD);

  return cardValue[index];
}

// compare cards
const compareCards = () => {
  if (
    (currentState.playerCard === CARD.ROCK &&
      currentState.houseCard === CARD.PAPER) ||
    (currentState.playerCard === CARD.PAPER &&
      currentState.houseCard === CARD.SCISSORS) ||
    (currentState.playerCard === CARD.SCISSORS &&
      currentState.houseCard === CARD.ROCK)
  ) {
    showResults(RESULT.LOSE);
  } else if (currentState.playerCard === currentState.houseCard) {
    showResults(RESULT.TIE);
  } else {
    showResults(RESULT.WIN);
  }
};

// show results
const showResults = (result) => {
  switch (result) {
    case true:
      arenaContainer.classList.add("win");
      chipPlayer.classList.add("winner");
      updateScore(SCORE.INCREASE);
      break;
    case null:
      arenaContainer.classList.add("tie");
      break;
    default:
      arenaContainer.classList.add("lose");
      chipHouse.classList.add("winner");
      updateScore(SCORE.DECREASE);
      break;
  }
};

// increment/decrement user score
const userScore = document.querySelector(".score-value");

const updateScore = (result) => {
  if (result) {
    currentState.scores++;
  } else {
    currentState.scores--;
    if (currentState.scores < 0) currentState.scores = 0;
  }
  userScore.innerHTML = currentState.scores;
};
