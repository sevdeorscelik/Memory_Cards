const frontWordInput = document.querySelector('#front-word')
const backWordInput = document.querySelector('#back-word')
const cardsContainer = document.querySelector('.cards-container')
const addButton = document.querySelector('#add-button')


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

















/*
addButton.addEventListener('click', () => {

    const newWord1 = frontWordInput.value
    const newWord2 = backWordInput.value

    cardsContainer.innerHTML = `
        <button class='left'> << </button>
        <div class='card1'>${newWord1}</div>
        <div class='card2 block'>${newWord2}</div>
        <button class='right'>   >> </button>

    `
    frontWordInput.value = ''
    backWordInput.value = ''


    //card turn-back
    const card1 = document.querySelector('.card1')
    const card2 = document.querySelector('.card2')

    card1.addEventListener('click', () => {
        card1.classList.add('block')
        card2.classList.remove('block')
    })


    card2.addEventListener('click', () => {
        card1.classList.remove('block')
        card2.classList.add('block')

    })


})
*/



