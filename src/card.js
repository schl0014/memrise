import { uppsMatched, shuffle, checkWin, deck } from "./app.js"
import { moveCount, starCount } from "./count.js";
import { startTimer } from "./timer.js";
let openCards = [];
let clockRunning = true;

/**
 * handle clicks on the card
 *
 * @param {*} event event
 */
export function cardClick(event) {
  const targetCard = event.target;
  // checks for valid card
  if (
    targetCard.classList.contains('card') &&
    !targetCard.classList.contains('match') &&
    openCards.length < 2 &&
    !openCards.includes(targetCard)
  ) {
    if (clockRunning) {
      startTimer();
      clockRunning = false;
    }
    cardToggle(targetCard);
    // push card to array
    openCards.push(targetCard);
    // check if two cards are open
    if (openCards.length === 2) {
      cardMatch();
      moveCount();
      starCount();
    }
  }
}

/**
 *
 * toggle the card classes on click
 *
 * @param {*} card
 */
function cardToggle(card) {
  card.classList.toggle('open');
  card.classList.toggle('animate__flipInY');
}

/**
 * handle cards when match is found
 */
function cardMatch() {
  // check match on basis of classnames

  if (openCards[0].firstElementChild.className === openCards[1].firstElementChild.className) {
    openCards.forEach(openCard => {
      addCLassToMatchedCards(openCard)
    });
    openCards = [];
    // increment matched for each card pair matched
    uppsMatched();
  } else {
    // no match found
    setTimeout(function () {
      // add animation to unmatched cards
      openCards.forEach(opencard => {
        addAddClassToWrongMatchedCards(opencard)
        cardToggle(opencard)
      });

    }, 1000);
    setTimeout(function () {
      openCards.forEach(opencard => {
        removeClassCards(opencard)
      });
      // empty the array before new cards are added
      openCards = [];
    }, 2000);
  }
  // call to check if win condition is reached
  checkWin();
}

export function setClockrunning() {
  clockRunning = true;
}

/**
 * calls the shuffle function on the deck of cards
 */
export function ApplyShuffledCards() {
  // get array from nodelist
  const cards = Array.from(document.querySelectorAll('.deck li'));
  const shuffleCards = shuffle(cards);
  for (const card of shuffleCards) {
    // append the newly shuffled cards
    deck.appendChild(card);
  }
}

/**
 * remove the the class shakeX and fixed
 *
 * @param {*} openCard card that is selected
 */
function removeClassCards(openCard) {
  openCard.classList.remove('animate__shakeX');
  openCard.classList.remove('fixed');
}

/**
 * add the the class shakeX and fixed
 *
 * @param {*} openCard card that is selected
 */
function addAddClassToWrongMatchedCards(openCard) {
  openCard.classList.add('animate__shakeX');
  openCard.classList.add('fixed');
}

/**
 * add animation to matched cards
 *
 * @param {*} openCard card that is matched right
 */
function addCLassToMatchedCards(openCard) {
  openCard.classList.toggle('match');
  // remove animations added earlier
  openCard.classList.remove('animate__flipInY');
  openCard.classList.remove('animate__shakeX');
  // add animation to matched cards
  openCard.classList.add('animate__rubberBand');
}
