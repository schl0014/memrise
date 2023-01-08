import { getMoves, uppsMoves } from "./app";

/**
 * increments the moves and adds them to the page
 */
export function moveCount() {
  uppsMoves()
  const move = document.querySelector('.moves');
  move.innerHTML = `${getMoves()}`;
}

/**
 * adds stars based on move count
 */
export function starCount() {
  if (getMoves() === 16 || getMoves() === 24) {
    const stars = document.querySelectorAll('.stars li');
    for (const star of stars) {
      // consider only those stars that are visible
      if (star.style.display !== 'none') {
        star.style.display = 'none';
        break;
      }
    }
  }
}
