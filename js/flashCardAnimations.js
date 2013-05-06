var cardIsFlipped = false;
var flipCard;

// Check if flip effect is supported
if ('backfaceVisibility' in fc.style ||
		'WebkitBackfaceVisibility' in fc.style ||
		'MozBackfaceVisibility' in fc.style ||
		'MsBackfaceVisibility' in fc.style) {
	// Flip flash card over
	flipCard = function() {
		if (cardIsFlipped)
			fc.className = ''; // Flip to front of flash card
		else
			fc.className = 'flipped';

		cardIsFlipped = !cardIsFlipped;
	}
}
else {
	bFc.style.visibility = 'hidden';
	// Simulate card flip
	flipCard = function() {
		if (cardIsFlipped) {
			fFc.style.visibility = 'visible';
			bFc.style.visibility = 'hidden';
		}
		else {
			fFc.style.visibility = 'hidden';
			bFc.style.visibility = 'visible';
		}

		cardIsFlipped = !cardIsFlipped;
	}
}

fc.addEventListener('click', flipCard, false);
