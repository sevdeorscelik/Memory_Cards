const addButton = document.querySelector('#add-button')
const frontText = document.querySelector('#front-word')
const backText = document.querySelector('#back-word')
const currentEl = document.getElementById('current');
const containerElem = document.querySelector('.cards-container')
const buttonLeftElem = document.querySelector('.buttonLeft');
const buttonRightElem = document.querySelector('.buttonRight');


let currentCardIndex = 0;
const cards = []



buttonRightElem.addEventListener('click', function (e) {
    
    currentCardIndex ++;

    if (currentCardIndex > cards.length - 1) {
        currentCardIndex = cards.length - 1;
      }

    containerElem.children[currentCardIndex].classList.add('visible')
    containerElem.children[currentCardIndex-1].classList.remove('visible')
   
    updateCurrentIndex();

});

buttonLeftElem.addEventListener('click', function(e) {
   currentCardIndex --;

   if (currentCardIndex < 1) {
    currentCardIndex = 0;
  }
console.log(currentCardIndex);
    containerElem.children[currentCardIndex+1].classList.remove('visible')
    containerElem.children[currentCardIndex].classList.add('visible')
    

    updateCurrentIndex();

});



function updateCurrentIndex() {
    currentEl.innerHTML = `${currentCardIndex+1 }/${cards.length} `
    
}

function displayCards() {
    
    const elem = document.createElement('div')
    elem.className = 'card'
    
    
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

        containerElem.appendChild(elem)
        
        containerElem.children[0].className = 'card visible'

        if(cards.length > 1 && currentCardIndex > 0 ) {
            containerElem.children[0].className = 'card'
        } 
        

    })
   
};




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

console.log(containerElem);
console.log(cards);

