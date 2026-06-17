'use strict';

// Players
const playerOne = {
  name: document.querySelector('#player-one-name'),
  color: 'purple',
  score: 0,
};

const playerTwo = {
  name: document.querySelector('#player-two-name'),
  color: 'orange',
  score: 0,
};

// Buttons
const button = {
  newGame: document.querySelector('#new-game'),
  reset: document.querySelector('#reset'),
  startGame: document.querySelector('#start-game-btn'),
};

// Form & Error Messages
const form = document.querySelector('form');
const errorEmptyName = document.querySelector('.error-empty-name');
const errorSameName = document.querySelector('.error-same-name');

// Game Section
const entireGameSection = document.querySelector('.entire-game-section');
const game = document.querySelector('.game');

// Game Grid Cells
const cellOne = document.querySelector('.cell-one');
const cellTwo = document.querySelector('.cell-two');
const cellThree = document.querySelector('.cell-three');
const cellFour = document.querySelector('.cell-four');
const cellFive = document.querySelector('.cell-five');
const cellSix = document.querySelector('.cell-six');
const cellSeven = document.querySelector('.cell-seven');
const cellEight = document.querySelector('.cell-eight');
const cellNine = document.querySelector('.cell-nine');

// Game Information
const currentPlayerTurn = document.querySelector('#whos-turn-is-it');
const message = document.querySelector('#message-section');
const playerOneScoreDisplay = document.querySelector(
  '#player-one-score-display',
);
const playerTwoScoreDisplay = document.querySelector(
  '#player-two-score-display',
);

// Functions
function hideForm() {
  form.classList.add('hidden');
}

function showForm() {
  form.classList.remove('hidden');
}

function showEntireGameSection() {
  entireGameSection.classList.remove('hidden');
}

function hideEntireGameSection() {
  entireGameSection.classList.add('hidden');
}

function showGame() {
  game.classList.remove('hidden');
  game.classList.add('grid');
}

function hideGame() {
  game.classList.remove('grid');
  game.classList.add('hidden');
}

function showEmptyNameError() {
  errorEmptyName.classList.remove('hidden');
}

function hideEmptyNameError() {
  errorEmptyName.classList.add('hidden');
}

function showSameNameError() {
  errorSameName.classList.remove('hidden');
}

function hideSameNameError() {
  errorSameName.classList.add('hidden');
}

function updateNames() {
  document.querySelectorAll('.player-one').forEach((el) => {
    el.textContent = playerOne.name.value;
  });
  document.querySelectorAll('.player-two').forEach((el) => {
    el.textContent = playerTwo.name.value;
  });
}

function startGame() {
  if (playerOne.name.value.length === 0 || playerTwo.name.value.length === 0) {
    showEmptyNameError();
  } else if (playerOne.name.value === playerTwo.name.value) {
    showSameNameError();
  } else {
    showEntireGameSection();
    updateNames();
    form.reset();
    hideForm();
    hideEmptyNameError();
    hideSameNameError();
  }
}

function clickACell() {
  if (
    this.classList.contains('clicked-by-player-one') ||
    this.classList.contains('clicked-by-player-two')
  ) {
    message.textContent = 'Cell is already checked!';
  } else {
    if (currentPlayerTurn.textContent === '1') {
      this.classList.add('clicked-by-player-one');
      currentPlayerTurn.textContent = '2';
      checkIfSomeoneWon();
    } else {
      this.classList.add('clicked-by-player-two');
      currentPlayerTurn.textContent = '1';
      checkIfSomeoneWon();
    }
  }
}

function checkIfSomeoneWon() {
  if (
    (cellOne.classList.contains('clicked-by-player-one') &&
      cellTwo.classList.contains('clicked-by-player-one') &&
      cellThree.classList.contains('clicked-by-player-one')) ||
    (cellFour.classList.contains('clicked-by-player-one') &&
      cellFive.classList.contains('clicked-by-player-one') &&
      cellSix.classList.contains('clicked-by-player-one')) ||
    (cellSeven.classList.contains('clicked-by-player-one') &&
      cellEight.classList.contains('clicked-by-player-one') &&
      cellNine.classList.contains('clicked-by-player-one')) ||
    (cellOne.classList.contains('clicked-by-player-one') &&
      cellFour.classList.contains('clicked-by-player-one') &&
      cellSeven.classList.contains('clicked-by-player-one')) ||
    (cellTwo.classList.contains('clicked-by-player-one') &&
      cellFive.classList.contains('clicked-by-player-one') &&
      cellEight.classList.contains('clicked-by-player-one')) ||
    (cellThree.classList.contains('clicked-by-player-one') &&
      cellSix.classList.contains('clicked-by-player-one') &&
      cellNine.classList.contains('clicked-by-player-one')) ||
    (cellOne.classList.contains('clicked-by-player-one') &&
      cellFive.classList.contains('clicked-by-player-one') &&
      cellNine.classList.contains('clicked-by-player-one')) ||
    (cellThree.classList.contains('clicked-by-player-one') &&
      cellFive.classList.contains('clicked-by-player-one') &&
      cellSeven.classList.contains('clicked-by-player-one'))
  ) {
    message.textContent =
      'Player 1 Wins! The score has been updated. Click "New Game" to play again, or "Reset" to reset.';
    playerOne.score++;
    playerOneScoreDisplay.textContent = playerOne.score;
    hideGame();
  } else if (
    (cellOne.classList.contains('clicked-by-player-two') &&
      cellTwo.classList.contains('clicked-by-player-two') &&
      cellThree.classList.contains('clicked-by-player-two')) ||
    (cellFour.classList.contains('clicked-by-player-two') &&
      cellFive.classList.contains('clicked-by-player-two') &&
      cellSix.classList.contains('clicked-by-player-two')) ||
    (cellSeven.classList.contains('clicked-by-player-two') &&
      cellEight.classList.contains('clicked-by-player-two') &&
      cellNine.classList.contains('clicked-by-player-two')) ||
    (cellOne.classList.contains('clicked-by-player-two') &&
      cellFour.classList.contains('clicked-by-player-two') &&
      cellSeven.classList.contains('clicked-by-player-two')) ||
    (cellTwo.classList.contains('clicked-by-player-two') &&
      cellFive.classList.contains('clicked-by-player-two') &&
      cellEight.classList.contains('clicked-by-player-two')) ||
    (cellThree.classList.contains('clicked-by-player-two') &&
      cellSix.classList.contains('clicked-by-player-two') &&
      cellNine.classList.contains('clicked-by-player-two')) ||
    (cellOne.classList.contains('clicked-by-player-two') &&
      cellFive.classList.contains('clicked-by-player-two') &&
      cellNine.classList.contains('clicked-by-player-two')) ||
    (cellThree.classList.contains('clicked-by-player-two') &&
      cellFive.classList.contains('clicked-by-player-two') &&
      cellSeven.classList.contains('clicked-by-player-two'))
  ) {
    message.textContent =
      'Player 2 Wins! Click "New Game" to play again, or "Reset" to reset.';
    playerTwo.score++;
    playerTwoScoreDisplay.textContent = playerTwo.score;
    hideGame();
  } else if (
    (cellOne.classList.contains('clicked-by-player-one') ||
      cellOne.classList.contains('clicked-by-player-two')) &&
    (cellTwo.classList.contains('clicked-by-player-one') ||
      cellTwo.classList.contains('clicked-by-player-two')) &&
    (cellThree.classList.contains('clicked-by-player-one') ||
      cellThree.classList.contains('clicked-by-player-two')) &&
    (cellFour.classList.contains('clicked-by-player-one') ||
      cellFour.classList.contains('clicked-by-player-two')) &&
    (cellFive.classList.contains('clicked-by-player-one') ||
      cellFive.classList.contains('clicked-by-player-two')) &&
    (cellSix.classList.contains('clicked-by-player-one') ||
      cellSix.classList.contains('clicked-by-player-two')) &&
    (cellSeven.classList.contains('clicked-by-player-one') ||
      cellSeven.classList.contains('clicked-by-player-two')) &&
    (cellEight.classList.contains('clicked-by-player-one') ||
      cellEight.classList.contains('clicked-by-player-two')) &&
    (cellNine.classList.contains('clicked-by-player-one') ||
      cellNine.classList.contains('clicked-by-player-two'))
  ) {
    message.textContent = 'Tie!';
    hideGame();
  }
}

function newGame() {
  cellOne.classList.remove('clicked-by-player-one');
  cellOne.classList.remove('clicked-by-player-two');
  cellTwo.classList.remove('clicked-by-player-one');
  cellTwo.classList.remove('clicked-by-player-two');
  cellThree.classList.remove('clicked-by-player-one');
  cellThree.classList.remove('clicked-by-player-two');
  cellFour.classList.remove('clicked-by-player-one');
  cellFour.classList.remove('clicked-by-player-two');
  cellFive.classList.remove('clicked-by-player-one');
  cellFive.classList.remove('clicked-by-player-two');
  cellSix.classList.remove('clicked-by-player-one');
  cellSix.classList.remove('clicked-by-player-two');
  cellSeven.classList.remove('clicked-by-player-one');
  cellSeven.classList.remove('clicked-by-player-two');
  cellEight.classList.remove('clicked-by-player-one');
  cellEight.classList.remove('clicked-by-player-two');
  cellNine.classList.remove('clicked-by-player-one');
  cellNine.classList.remove('clicked-by-player-two');
  showGame();
  message.textContent = '- Message Center -';
}

function reset() {
  newGame();
  playerOne.score = 0;
  playerTwo.score = 0;
  playerOneScoreDisplay.textContent = playerOne.score;
  playerTwoScoreDisplay.textContent = playerTwo.score;
  currentPlayerTurn.textContent = '1';
  updateNames();
  showForm();
  hideEntireGameSection();
  hideEmptyNameError();
  hideSameNameError();
}

// Event Handlers
button.startGame.addEventListener('click', startGame);
button.newGame.addEventListener('click', newGame);
button.reset.addEventListener('click', reset);
cellOne.addEventListener('click', clickACell);
cellTwo.addEventListener('click', clickACell);
cellThree.addEventListener('click', clickACell);
cellFour.addEventListener('click', clickACell);
cellFive.addEventListener('click', clickACell);
cellSix.addEventListener('click', clickACell);
cellSeven.addEventListener('click', clickACell);
cellEight.addEventListener('click', clickACell);
cellNine.addEventListener('click', clickACell);
