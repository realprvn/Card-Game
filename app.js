const audio  = new Audio()
audio.src = './click.mp3';

const cards =  document.querySelectorAll('.card');


function FlipCard() {
    this.classList.toggle('flip');
}


cards.forEach(card =>  card.addEventListener('click', ()=>{
    
    card.classList.toggle('flip')
}
));
