'use strict';

const cellOne = document.querySelector('.cell-one');
const cellTwo = document.querySelector('.cell-two');
const cellThree = document.querySelector('.cell-three');
const cellFour = document.querySelector('.cell-four');
const cellFive = document.querySelector('.cell-five');
const cellSix = document.querySelector('.cell-six');
const cellSeven = document.querySelector('.cell-seven');
const cellEight = document.querySelector('.cell-eight');
const cellNine = document.querySelector('.cell-nine');

const message = document.querySelector('#message-section');
const playerOneScoreEl = document.querySelector('#player-one-score');
const playerTwoScoreEl = document.querySelector('#player-two-score');
const resetGameBtn = document.querySelector('#reset-game');

let playerOneScore = 0;
let playerTwoScore = 0;

function checkIfCellIsAlreadyClicked() {}

function clickACell() {}

function resetGame() {
  playerOneScore = 0;
  playerTwoScore = 0;
  playerOneScoreEl.textContent = 0;
  playerTwoScoreEl.textContent = 0;
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

resetGameBtn.addEventListener('click', resetGame);
