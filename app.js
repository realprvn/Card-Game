const audio  = new Audio()
audio.src = './click.mp3';

const cards =  document.querySelectorAll('.card');

let hasFlippedCard = false;
let firstcard,secondCard;


function flipCard() {
    this.classList.toggle('flip');

   if(!hasFlippedCard) {
        hasFlippedCard = true
        firstcard = this

    }
    else {
        hasFlippedCard = false;
        secondCard = this;

        if (firstcard.dataset.framework === secondCard.dataset.framework){
            setTimeout(() => {
                firstcard.classList.toggle('remove');
                secondCard.classList.toggle('remove');
                firstcard.removeEventListener('click',flipCard);  
                secondCard.removeEventListener('click',flipCard);  
            }, 1500);
            
           
        }

        else {
            setTimeout(() => {
                firstcard.classList.remove('flip');
                secondCard.classList.remove('flip');
            } ,1500)
        }
    }
    
}


cards.forEach(card =>  card.addEventListener('click', flipCard));
    

