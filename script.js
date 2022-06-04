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
let playing = true;
const switchPlayer = () => {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0EL.classList.toggle('player--active');
  player1EL.classList.toggle('player--active');
};
// Starting conditions
let scores, activePlayer, currentScore;
// initial the game
const init = () => {
  playing = true;
  score0EL.textContent = 0;
  score1EL.textContent = 0;
  current0EL.textContent = 0;
  current1EL.textContent = 0;
  diceEL.classList.add('hidden');
  scores = [0, 0];
  activePlayer = 0;
  currentScore = 0;
  player0EL.classList.add('player--active');
  player1EL.classList.remove('player--active');
  player0EL.classList.remove('player--winner');
  player1EL.classList.remove('player--winner');
};
init();

// Add to Scores Function

// Rolling Dice Functionality
btnRoll.addEventListener('click', () => {
  if (playing) {
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
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', () => {
  if (playing) {
    // add current score to active player score
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];
    // check is player score >= 100, finish the game
    if (scores[activePlayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEL.classList.add('hidden');
    } else {
      // switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
