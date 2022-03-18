const addButton = document.querySelector('button');
const frontText = document.querySelector('front');
const backText = document.querySelector('back');
const containerElem = document.querySelector('container');
const buttonLeftElem = document.querySelector('buttonLeft');
const buttonRightElem = document.querySelector('buttonRight');

const currentCardIndex = 0;

const cards = [];

addButton.addEventListener('click', function (e) {
	cards.push({
		front: frontText.value,
		back: backText.value,
		visible: false
	});
	displayCards();
});

buttonLeftElem.addEventListener('click', function (e) {
	currentCardIndex--;
	displayCards();
});

buttonRightElem.addEventListener('click', function (e) {
	currentCardIndex++;
	displayCards();
});

displayCards = () => {
	// empty container element
	cards.forEach(card => {
		// ...const elem = createElement...
		// ...containerElem.addChild(elem)
	})
}