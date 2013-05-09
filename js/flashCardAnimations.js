var cardIsFlipped = false;
var flipCard;

// layout engine (webkit, moz, etc...)
var LE = '';

if ('webkitTransform' in fc.style)
	LE = 'webkit';
else if ('mozTransform' in fc.style)
	LE = 'moz';
else if ('MsTransform' in fc.style)
	LE = 'moz';

// Check if flip effect is supported
if (((LE === '' ? 'b':LE + 'B') + 'ackfaceVisibility') in fc.style) {

	var degreesFlipped = 36000000;
	fc.style[(LE === '' ? 't':LE + 'T') + 'ransition'] = 'none';
	fc.style.webkitTransform = 'rotateY(' + degreesFlipped + 'deg)';

	setTimeout( function () { fc.style[(LE === '' ? 't':LE + 'T') + 'ransition'] = ''; }, 10);

	var transformType = ((LE === '' ? 't':LE + 'T') + 'ransform')
	// Flip flash card over
	flipCard = function(direction) {
			if (direction === 'left')
				degreesFlipped -= 180;
			else
				degreesFlipped += 180;
		
		fc.style[transformType]  = 'rotateY(' + degreesFlipped + 'deg)';

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
