const addButton = document.querySelector('#add-button')
const frontText = document.querySelector('#front-word')
const backText = document.querySelector('#back-word')
const currentEl = document.getElementById('current');
const containerElem = document.querySelector('.cards-container')
const buttonLeftElem = document.querySelector('.buttonLeft');
const buttonRightElem = document.querySelector('.buttonRight');


let currentCardIndex = 1;
const cards = []




addButton.addEventListener('click', function (e) {
    
    cards.push({
        front: frontText.value,
        back: backText.value,
        visible: false
    });

    displayCards();
    updateCurrentIndex();
    
    frontText.value = ''
    backText.value = ''
});


function updateCurrentIndex() {
    currentEl.innerHTML = `${currentCardIndex }/${cards.length} `
    
}

function displayCards() {
    
    const elem = document.createElement('div')
    
    cards.forEach((card, index) => {
     
        elem.innerHTML = `
        <div class="inner-card">
        <div class="inner-card-front">
          <p>
            ${card.front}
          </p>
        </div>
        <div class="inner-card-back">
          <p>
            ${card.back}
          </p>
        </div>
      </div>
        `;

        elem.classList = 'card' + (index+1)
        containerElem.appendChild(elem)

    })

    elem.classList.add('card')
};

console.log(containerElem);
console.log(cards);


buttonLeftElem.addEventListener('click', function(e) {
    
    currentCardIndex -= 1;
    updateCurrentIndex();

});

buttonRightElem.addEventListener('click', function (e) {

    currentCardIndex += 1;
    updateCurrentIndex();
    
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