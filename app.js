
const audio = new Audio();
audio.src = './click.mp3';

const cards = document.querySelectorAll('.card');

let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

function flipCard() {
    if (lockBoard) return;

    this.classList.toggle('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
    } else {
        hasFlippedCard = false;
        secondCard = this;
        checkCard();
    }
}

function checkCard() {
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
        removeCards();
    } else {
        unFlipCards();
    }
}

function removeCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.add('remove');
        secondCard.classList.add('remove');
        resetBoard();
    }, 1500);
}

function unFlipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}


function shuffleCards() {
    cards.forEach(card => {
        let random = Math.floor(Math.random() * 12);
        card.style.order = random;
    });
}

shuffleCards();

cards.forEach(card => card.addEventListener('click', flipCard));


