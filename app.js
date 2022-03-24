import {
	users
} from './users.js';
import {
	pages
} from "./pages.js";

// HTML ELEMENT VARIABLES
const addButton = document.querySelector('#add-button')
const frontText = document.querySelector('#front-word')
const backText = document.querySelector('#back-word')
const currentEl = document.getElementById('current');
const containerElem = document.querySelector('.cards-container')
const buttonLeftElem = document.querySelector('.buttonLeft');
const buttonRightElem = document.querySelector('.buttonRight');
const clearBtn = document.querySelector('#clear')

const mainPage = document.querySelector('.container')
const loginCont = document.querySelector('.login-container')

const homeBtn = document.querySelector('#home')
const loginBtn = document.querySelector('#login')



homeBtn.addEventListener('click', function () {
	loginCont.style.visibility = 'hidden'
	mainPage.style.visibility = 'visible'
	clearBtn.style.visibility = 'visible'

	loginBtn.style.borderBottom = 'none'
	homeBtn.style.borderBottom = 'solid 2px white'

})

loginBtn.addEventListener('click', function () {
	loginCont.style.visibility = 'visible'
	mainPage.style.visibility = 'hidden'
	clearBtn.style.visibility = 'hidden'

	loginBtn.style.borderBottom = 'solid 2px white'
	homeBtn.style.borderBottom = 'none'

})


//LOGIN FUNC

const email = document.querySelector('#mail')
const password = document.querySelector('#pass')
const signInBtn = document.querySelector('#button')

signInBtn.addEventListener('click', function () {
	users.map(user => {
		if (user.mail === email.value && user.password === password.value) {
			loginCont.style.visibility = 'hidden'
			mainPage.style.visibility = 'visible'
			clearBtn.style.visibility = 'visible'

			loginBtn.style.borderBottom = 'none'
	homeBtn.style.borderBottom = 'solid 2px white'

		}
	})

})




// GLOBAL VARIABLES
let currentCardIndex = 0;
const cards = []

// RIGHT BUTTON
buttonRightElem.addEventListener('click', function (e) {
	currentCardIndex++;
	if (currentCardIndex > cards.length - 1) {
		currentCardIndex = cards.length - 1;
	}
	displayCards();
});

// LEFT BUTTON
buttonLeftElem.addEventListener('click', function (e) {
	currentCardIndex--;
	if (currentCardIndex < 1) {
		currentCardIndex = 0;
	}
	displayCards();
});

// ADD BUTTON
addButton.addEventListener('click', function (e) {

	cards.push({
		front: frontText.value,
		back: backText.value
	});
	displayCards();
	setCardsData(cards)
	frontText.value = '';
	backText.value = '';
});

// CLEAR BUTTON
clearBtn.addEventListener('click', () => {
	localStorage.clear();
	containerElem.innerHTML = '';
	//window.location.reload();
});

// DISPLAY CARDS
function displayCards() {

	// add all cards into container
	containerElem.innerHTML = `
	${cards.map((card) => {
		return `
<div class="card">
	<div class="card-front">
		<p>${card.front}</p>
	</div>
	<div class="card-back none">
		<p>${card.back}</p>
	</div>
</div>	
`;
	}).join('')}
`;

	// add event handlers to front and back of cards
	const frontCardElems = document.querySelectorAll('.card-front')
	const backCardElems = document.querySelectorAll('.card-back')
	frontCardElems.forEach((frontCard, index) => {
		frontCard.addEventListener('click', (e) => {
			frontCard.classList.add('none');
			backCardElems[index].classList.remove('none');
		});
	});
	backCardElems.forEach((backCard, index) => {
		backCard.addEventListener('click', (e) => {
			backCard.classList.add('none');
			frontCardElems[currentCardIndex].classList.remove('none');
		});
	});

	// hide all cards except current card
	const cardElems = document.querySelectorAll('.card');
	cardElems.forEach(cardElem => cardElem.style.display = 'none');
	Array.from(cardElems)[currentCardIndex].style.display = 'block';

	currentEl.innerHTML = `${currentCardIndex + 1}/${cards.length} `
};

//getItem - LocalStorAge

function getCardsData() {
	let words;

	if (localStorage.getItem('words') === null) {
		words = []
	} else {
		words = JSON.parse(localStorage.getItem('words'));
	}
	return words;

}

//setItem - LocalStorage

function setCardsData(cards) {
	let words = getCardsData();


	words.push(cards)

	//  words.push(cards);

	localStorage.setItem("words", JSON.stringify(words));
}


//cardsToUI

function cardsToUI() {
	let words = getCardsData();


	displayCards(words);

}