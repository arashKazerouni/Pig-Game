'use strict';

const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0EL = document.querySelector('#current--0');
const current1EL = document.querySelector('#current--1');
// Starting conditions
score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add('hidden');

let currentScore = 0;

// Rolling Dice Functionality
btnRoll.addEventListener('click', () => {
  // Generating Random Dice Roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  // Display Dice
  diceEL.classList.remove('hidden');
  diceEL.src = `dice-${dice}.png`;
  // Check for rolled 1
  if (dice !== 1) {
    //   Add to current score
    currentScore += dice;
    current0EL.textContent = currentScore;
  } else {
    //   Swtich to next player
  }
});
