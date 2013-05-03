var cardIsFlipped = false;

// Flip flash card over
function flipCard() {
	if (cardIsFlipped) {
		// Flip to front of flash card
		fc.className = '';
	}
	else {
		// Choose random flip action
		var randNum = Math.floor(Math.random() * 20);

		if (randNum <= 8)
			fc.className = 'flippedLeft';
		else if (randNum <= 17)
			fc.className = 'flippedRight';
		else if (randNum <= 18)
			fc.className = 'flippedLeftAround';
		else
			fc.className = 'flippedRightAround';
	}

	cardIsFlipped = !cardIsFlipped;
}

fc.addEventListener('click', flipCard, false);
