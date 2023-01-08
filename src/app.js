import { setClockrunning, ApplyShuffledCards, cardClick } from "./card.js";
import { resetTime, resetTimer } from "./timer.js";
let moves = 0;

let matched = 0;
const CARD_PAIRS = 8;
export const deck = document.querySelector('.deck');
deck.addEventListener('click', cardClick, false);

/**
 * handles the shuffling of cards
 *
 * @param {*} array array with cards
 * @returns array with shuffled cards
 */
export function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

/**
 *check for win condition when matched is equal to total card pairs
 */
export function checkWin() {
  if (matched === CARD_PAIRS) {
    resetTimer();
    displayStats();
    toggleModal();
  }
}

/**
 * toggle the modal when needed
 */
export function toggleModal() {
  const dialog = document.querySelector('.dialog');
  dialog.classList.toggle('hide');
}

/**
 * write stats to the modal
 */
function displayStats() {
  const time = document.querySelector('.clock').innerHTML;
  let moves = document.querySelector('.moves').innerHTML;
  const stars = document.querySelectorAll('.stars li');
  const modalStar = document.querySelector('.box-star');
  const modalInfo = document.querySelector('.box-info');
  moves++;
  modalInfo.innerHTML = `with ${moves} moves and took ${time} to complete`;
  // reset modalStar to avoid star appending
  modalStar.innerHTML = '';
  for (const star of stars) {
    if (star.style.display !== 'none') {
      // create star elements and add it to the modal
      const starElement = document.createElement('I');
      starElement.className = 'fa fa-star';
      starElement.style.fontSize = '32px';
      starElement.style.color = '#f0f000';
      modalStar.appendChild(starElement);
    }
  }
}

/**
 * reset the game to its initial state
 */
function resetGame() {
  matched = 0;
  resetTimer()
  setClockrunning()
  // reset time
  resetTime()
  const clock = document.querySelector('.clock');
  clock.innerHTML = '0 : 00';
  // reset moves
  moves = 0;
  document.querySelector('.moves').innerHTML = `${moves}`;
  const stars = document.querySelectorAll('.stars li');
  // reset stars
  for (const star of stars) {
    star.style.display = 'inline-block';
  }
  // reset card state
  const cards = document.querySelectorAll('.deck li');
  for (const card of cards) {
    card.className = 'card animate__animated';
  }
  // shuffle cards on reset
  ApplyShuffledCards();
}

/**
 * handle functionality to replay the game
 */
function replayGame() {
  resetGame();
  toggleModal();
}

// listeners for the buttons
document.querySelector('.restart').addEventListener('click', resetGame);
document.querySelector('.box-replay').addEventListener('click', replayGame);
// shuffle cards on page load
document.addEventListener('DOMContentLoaded', ApplyShuffledCards);

/**
 * upps the matched card number by one
 */
export function uppsMatched() {
  matched++
}

/**
 * upps the moves by one
 */
export function uppsMoves() {
  moves++
}

/**
 * get the moves
 *
 * @returns the moves of the player
 */
export function getMoves() {
  return moves;
}
