const cards = document.querySelector('.cards');
const timeTag = document.querySelector('.time b');
const flipsTap = document.querySelector('.flips b');
const refreshBtn = document.querySelector('.details button');

let maxTime = 30;
let timeLeft = maxTime;
let flips = 0;
let matchedCard = 0;
let disableDeck = false;
let isPlaying = false;
let cardOne, cardTwo, timer;
