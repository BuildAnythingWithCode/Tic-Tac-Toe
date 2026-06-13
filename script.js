'use strict';

const game = document.querySelector('.game');

const cellOne = document.querySelector('.cell-one');
const cellTwo = document.querySelector('.cell-two');
const cellThree = document.querySelector('.cell-three');
const cellFour = document.querySelector('.cell-four');
const cellFive = document.querySelector('.cell-five');
const cellSix = document.querySelector('.cell-six');
const cellSeven = document.querySelector('.cell-seven');
const cellEight = document.querySelector('.cell-eight');
const cellNine = document.querySelector('.cell-nine');

const currentPlayerTurn = document.querySelector('#whos-turn-is-it');
const message = document.querySelector('#message-section');
const playerOneScoreEl = document.querySelector('#player-one-score');
const playerTwoScoreEl = document.querySelector('#player-two-score');
const newGameBtn = document.querySelector('#new-game');
const resetBtn = document.querySelector('#reset');

let playerOneScore = 0;
let playerTwoScore = 0;

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
    playerOneScore++;
    playerOneScoreEl.textContent = playerOneScore;
    game.classList.remove('grid');
    game.classList.add('hidden');
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
      'Player 2 Wins! The score has been updated. Click "New Game" to play again, or "Reset" to reset.';
    playerTwoScore++;
    playerTwoScoreEl.textContent = playerTwoScore;
    game.classList.remove('grid');
    game.classList.add('hidden');
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
  game.classList.remove('hidden');
  game.classList.add('grid');
  message.textContent = 'Message Center';
}

function reset() {
  newGame();
  playerOneScore = 0;
  playerTwoScore = 0;
  playerOneScoreEl.textContent = 0;
  playerTwoScoreEl.textContent = 0;
  currentPlayerTurn.textContent = '1';
}

cellOne.addEventListener('click', clickACell);
cellTwo.addEventListener('click', clickACell);
cellThree.addEventListener('click', clickACell);
cellFour.addEventListener('click', clickACell);
cellFive.addEventListener('click', clickACell);
cellSix.addEventListener('click', clickACell);
cellSeven.addEventListener('click', clickACell);
cellEight.addEventListener('click', clickACell);
cellNine.addEventListener('click', clickACell);

newGameBtn.addEventListener('click', newGame);
resetBtn.addEventListener('click', reset);
