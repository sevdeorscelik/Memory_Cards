const addButton = document.querySelector('#add-button')
const frontText = document.querySelector('#front-word')
const backText = document.querySelector('#back-word')
const currentEl = document.getElementById('current');
const containerElem = document.querySelector('.cards-container')
const buttonLeftElem = document.querySelector('.buttonLeft');
const buttonRightElem = document.querySelector('.buttonRight');


let currentCardIndex = 0;
const cards = []





buttonLeftElem.addEventListener('click', function(e) {
    
    currentCardIndex -= 1;
    updateCurrentIndex();

});

buttonRightElem.addEventListener('click', function (e) {

    currentCardIndex += 1;

   const a = document.querySelectorAll(".card");
   
   a[currentCardIndex].className = 'card visible'
   a[currentCardIndex-1].className = 'card'
   

    updateCurrentIndex();

});



function updateCurrentIndex() {
    currentEl.innerHTML = `${currentCardIndex+1  }/${cards.length} `
    
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

        containerElem.appendChild(elem)

    })
    
    elem.classList.add('card')
    document.querySelectorAll(".card")[0].className = 'card visible';
    
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

    currentCardIndex = 0;
});


console.log(containerElem);
console.log(cards);

