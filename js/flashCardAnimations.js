var cardIsFlipped = false;
var flipCard;

// layout engine (webkit, moz, etc...)
var LE = '';

if ('webkitTransform' in fc.style)
	LE = 'webkit';
else if ('MozTransform' in fc.style)
	LE = 'Moz';

// Check if flip effect is supported
if (((LE === '' ? 'b':LE + 'B') + 'ackfaceVisibility') in fc.style && !!(window.SVGSVGElement)) {
	// Use high degree for browsers that don't support negative rotation
	var degreesFlipped = 3600000;

	// Get transform type for layout engine
	var transformType = ((LE === '' ? 't':LE + 'T') + 'ransform')

	// Change Rotation
	fc.style[transformType] = 'rotateY(' + degreesFlipped + 'deg)';

	// Create transition property after change has taken effect
	setTimeout( function () {
		var transitionType = (LE === '' ? 't':LE + 'T') + 'ransition';
		var transitionVal = 'transform 0.5s ease-out';

		if (LE)
			transitionVal = '-' + LE.toLowerCase() + '-' + transitionVal;

			fc.style[transitionType] = transitionVal;
	}, 100);

	function updateRotation(degrees) {
		fc.style[transformType] = fc.style[transformType].replace(/(?!rotateY\()\d+/, degrees);
	}

	// Flip flash card over
	flipCard = function(direction) {
			if (direction === 'left')
				degreesFlipped -= 180;
			else
				degreesFlipped += 180;
		
		updateRotation(degreesFlipped);
		cardIsFlipped = !cardIsFlipped;
	}
}
else { // If flip effect is not supported
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
