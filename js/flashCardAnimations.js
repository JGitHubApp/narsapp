var cardIsFlipped = false;

// Flip flash card over
function flipCard() {
	if (cardIsFlipped)
		fc.className = ''; // Flip to front of flash card
	else
		fc.className = 'flipped';

	cardIsFlipped = !cardIsFlipped;
}

fc.addEventListener('click', flipCard, false);
