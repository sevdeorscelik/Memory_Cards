const addButton = document.querySelector('#add-button')
const frontText = document.querySelector('#front-word')
const backText = document.querySelector('#back-word')
const containerElem = document.querySelector('.cards-container')
const buttonLeftElem = document.querySelector('buttonLeft');
const buttonRightElem = document.querySelector('buttonRight');


const currentCardIndex = 0;
const cards = []


addButton.addEventListener('click', function (e) {
    
    cards.push({
        front: frontText.value,
        back: backText.value,
        visible: false
    });

    frontText.value = ''
    backText.value = ''
    displayCards();
});

function displayCards() {
    
    const elem = document.createElement('div')
    
    cards.forEach((card, index) => {
     
        elem.innerHTML = card.front
        elem.classList = 'card' + (index+1)
        containerElem.appendChild(elem)

        
    })

    elem.classList.add('card')
};





buttonLeftElem.addEventListener('click', function (e) {
    currentCardIndex--;
    displayCards();
});

buttonRightElem.addEventListener('click', function (e) {
    currentCardIndex++;
    displayCards();
});







/*
addButton.addEventListener('click', () => {
    

    const newWord1 = frontWordInput.value
    const newWord2 = backWordInput.value

    let card1 = document.createElement('div')
    let card2 = document.createElement('div')
    
    card1.innerHTML = newWord1
    card2.innerHTML= newWord2

    cardsContainer.appendChild(card1)
    cardsContainer.appendChild(card2)


    frontWordInput.value = ''
    backWordInput.value = ''


    card1.classList.add('card1')
    card2.classList.add('card2')
    
   
    //card turn-back
    card2.classList.add('block')

    card1.addEventListener('click', () => {
        card1.classList.add('block')
        card2.classList.remove('block')
    })

    
    card2.addEventListener('click',() => {
        card1.classList.remove('block')
        card2.classList.add('block')
        
    })
    console.log(cardsContainer);

})

*/