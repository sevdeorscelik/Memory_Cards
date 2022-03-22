const addButton = document.querySelector('#add-button')
const frontText = document.querySelector('#front-word')
const backText = document.querySelector('#back-word')
const currentEl = document.getElementById('current');
const containerElem = document.querySelector('.cards-container')
const buttonLeftElem = document.querySelector('.buttonLeft');
const buttonRightElem = document.querySelector('.buttonRight');


let currentCardIndex = 0;
const cards = []



function updateCurrentIndex() {
  currentEl.innerHTML = `${currentCardIndex+1 }/${cards.length} `

}

function displayCards() {

  const elem = document.createElement('div')
  elem.className = 'inner-card'


  cards.forEach((card, index) => {

    //create a card
    elem.innerHTML = `
        <div class="card-front ">
          <p>
            ${card.front}
          </p>
        </div>
        <div class="card-back none">
          <p>
            ${card.back}
          </p>
        </div>
        `;

    containerElem.appendChild(elem)


    //crousel 

    containerElem.children[0].className = 'inner-card show'

    if (cards.length > 1 && currentCardIndex > 0) {
      containerElem.children[0].className = 'inner-card'
    }


    const frontCards = document.querySelectorAll('.card-front')
    const backCards = document.querySelectorAll('.card-back')
    

    //turn back the card
    frontCards.forEach(frontCard => {
      frontCard.addEventListener('click', function (e) {
        frontCard.classList.add('none')
        backCards.forEach(backCard => {
          backCard.classList.remove('none')
        })
      })
    });

    
    //turn front the card
    backCards.forEach(backCard => {
      backCard.addEventListener('click', function (e) {
        backCard.classList.add('none')
        frontCards.forEach(frontCard => {
          frontCard.classList.remove('none')
        })
      })
    })

  })
};


//new card create

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

//direction buttons

buttonRightElem.addEventListener('click', function (e) {

  currentCardIndex++;

  if (currentCardIndex > cards.length - 1) {
    currentCardIndex = cards.length - 1;
  }

  containerElem.children[currentCardIndex].classList.add('show')
  containerElem.children[currentCardIndex - 1].classList.remove('show')

  updateCurrentIndex();

});

buttonLeftElem.addEventListener('click', function (e) {
  currentCardIndex--;

  if (currentCardIndex < 1) {
    currentCardIndex = 0;
  }

  containerElem.children[currentCardIndex + 1].classList.remove('show')
  containerElem.children[currentCardIndex].classList.add('show')


  updateCurrentIndex();

});



console.log(containerElem);
console.log(cards);

