var cardIsFlipped = false;
var degreesFlipped = 0;

function flipCard() {
	if (cardIsFlipped)
		fc.className = '';
	else
		fc.className = 'flipped';

	cardIsFlipped = !cardIsFlipped;
}

fc.addEventListener('click', flipCard, false);
