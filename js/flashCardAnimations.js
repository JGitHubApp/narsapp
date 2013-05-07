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

function goBackCard() {
	if (--currentSignal < 0) {
		if (--currentRule < 0)
			currentRule = signalArray.length - 1;
		currentSignal = signalArray[currentRule].length - 1;
	}

	drawSignal(signalArray[currentRule][currentSignal], ruleArray[currentRule]);
}

function goNextCard() {
	if (signalArray[currentRule].length <= ++currentSignal) {
		if (++currentRule >= signalArray.length)
			currentRule = 0;
		currentSignal = 0;
	}

	drawSignal(signalArray[currentRule][currentSignal], ruleArray[currentRule]);
}

fc.addEventListener('click', flipCard, false);
document.getElementById('gotoBackCard').addEventListener('click', goBackCard, false);
document.getElementById('gotoNextCard').addEventListener('click', goNextCard, false);
