'use strict';

const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0EL = document.querySelector('#current--0');
const current1EL = document.querySelector('#current--1');
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
// Starting conditions
score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add('hidden');
const scores = [0, 0];
let activePlayer = 0;
let currentScore = 0;
// Add to Scores Function

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
    document.querySelector(`#current--${activePlayer}`).textContent =
    currentScore;
  } else {
    //   Swtich to next
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0EL.classList.toggle('player--active');
    player1EL.classList.toggle('player--active');
  }
});
