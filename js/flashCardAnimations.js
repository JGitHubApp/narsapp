var cardIsFlipped = false;

function flipFlashCard() {
	if (cardIsFlipped)
		fc.className = '';
	else
		fc.className = 'flipped';

	cardIsFlipped = !cardIsFlipped;
}

fc.addEventListener('click', flipFlashCard);
