const cards = document.querySelector('.cards');
const timeTag = document.querySelector('.time b');
const flipsTag = document.querySelector('.flips b');
const refreshBtn = document.querySelector('.details button');

let maxTime = 30;
let timeLeft = maxTime;
let flips = 0;
let matchedCard = 0;
let disableDeck = false;
let isPlaying = false;
let cardOne, cardTwo, timer;

/* Define a function to initialize the timer */
const initTimer = () => {
  if (timeLeft <= 0) {
    return clearInterval(timer);
  }
  timeLeft--;
  timeTag.innerHTML = timeLeft;
};

/* Define a function to resolve the algorithm about flipCard */
const flipCard = ({ target: clickedCard }) => {
  if (!isPlaying) {
    isPlaying = true;
    timer = setInterval(initTimer, 1000);
  }

  if (clickedCard !== cardOne && !disableDeck && timeLeft > 0) {
    flips++;
    flipsTag.innerHTML = flips;
    clickedCard.classList.add('flip');
    if (!cardOne) {
      return (cardOne = clickedCard);
    }
    cardTwo = clickedCard;
    disableDeck = true;

    let cardOneImg = cardOne.querySelector('.back-view img').src;
    let cardTwoImg = cardTwo.querySelector('.back-view img').src;
    matchCards(cardOneImg, cardTwoImg);
  }
};

/* Define a function to see if two image are matching each of them */
const matchCards = (img1, img2) => {
  if (img1 === img2) {
    matchCards++;
    if (matchedCard == 6 && timeLeft > 0) {
      return clearInterval(timer);
    }
    cardOne.removeEventListener('click', flipCard);
    cardTwo.removeEventListener('click', flipCard);
    cardOne = cardTwo = '';
    return (disableDeck = false);
  }

  setTimeout(() => {
    cardOne.classList.add('shake');
    cardOne.classList.add('shake');
  }, 400);

  setTimeout(() => {
    cardOne.classList.remove('shake', 'flip');
    cardTwo.classList.remove('shake', 'flip');
    cardOne = cardTwo = '';
    disableDeck = false;
  });
};
