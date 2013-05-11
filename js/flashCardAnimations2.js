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
window.addEventListener('keydown', function(event) {
		switch (event.which) {
			case 37: // LEFT
				animateCard('left');
				break;
			case 39: // RIGHT
				animateCard('right');
				break;
			case 38: // UP
				animateCard('up');
				break;
			case 40: // DOWN
				animateCard('down');
				break;
		}
	}, false);

var touchX = null;
var touchY = null;
var tiltDirection = null;
var prevTransform = null;

// If touch events are supported
if ('ontouchstart' in window) {
	window.addEventListener('touchstart', function() {
		touchX = event.touches[0].pageX;
		touchY = event.touches[0].pageY;

		if ( touchX >= fc.offsetLeft &&
				touchX <= fc.offsetLeft + fc.offsetWidth &&
				touchY >= fc.offsetTop &&
				touchY <= fc.offsetTop + fc.offsetHeight) {
			event.preventDefault();
			prevTransform = fc.style[transformType];
		}
		else {
			touchX = null;
			touchY = null;
		}
	});

	window.addEventListener('touchend', function() {
		if (touchX != null && touchY != null) {
			fc.style[transformType] = prevTransform;

			var endX = event.changedTouches[0].pageX;
			var endY = event.changedTouches[0].pageY;
			var bb = document.getElementById('backButton').getElementsByTagName('img')[0];

			// If swipe length is long enough
			//if (Math.sqrt(Math.pow(touchX - endX, 2) + Math.pow(touchY - endY, 2)) > 50) {
			if (Math.abs(endX - touchX) > 50 || Math.abs(endY - touchY) > 50) {
				event.preventDefault();
				animateCard(swipeDirection(endX, endY));
			}
			else if ( // On return button
					touchX >= bb.offsetLeft &&
					touchX <= bb.offsetLeft + bb.offsetWidth &&
					touchY >= bb.offsetTop &&
					touchY <= bb.offsetTop + bb.offsetHeight) {

				location.href = document.getElementById('backButton').href;
			}

			tiltDirection = null;
			prevTransform = null;
		}
	});

	function swipeDirection(endX, endY) {
		var strDirection = '';

		if (Math.abs(touchX - endX) > Math.abs(touchY - endY))
			if (touchX > endX)
				strDirection = 'left';
			else
				strDirection = 'right';
		else
			if (touchY > endY)
				strDirection = 'up';
			else
				strDirection = 'down';

		return strDirection;
	}
}

var animateCard;
if ('classList' in document.body) {
	animateCard = function(direction) {
		switch (direction) {
			case 'left':
			case 'right':
				flipCard(direction);
				break;
			case 'up':
				fc.classList.add('moveUp');
				var t1 = setTimeout(goNextCard, 250);
				var t2 = setTimeout(function() {fc.classList.remove('moveUp');}, 500);
				break;
			case 'down':
				fc.classList.add('moveDown');
				var t1 = setTimeout(goBackCard, 250);
				var t2 = setTimeout(function() {fc.classList.remove('moveDown');}, 500);
				break;
		}
	}

	window.addEventListener('touchmove', function() {
		if (touchX != null && touchY != null) {
			if (event.changedTouches.length === 1) { // 1 finger
				event.preventDefault();

				var curX = event.touches[0].pageX;
				var curY = event.touches[0].pageY;

				// If tilt direction has changed
				if (tiltDirection != swipeDirection(curX, curY)) {
					// Reset Tilt
					fc.style[transformType] = prevTransform;
					distX = Math.abs(curX - touchX);

					// If length of swipe is long enough
					if (distX > 50) {
						tiltDirection = swipeDirection(curX, curY);
						var tiltAmount = 15;

						switch (tiltDirection) {
							case 'left':
								tiltAmount = degreesFlipped - tiltAmount;
								updateRotation(tiltAmount);
								break;
							case 'right':
								tiltAmount = degreesFlipped + tiltAmount;
								updateRotation(tiltAmount);
								break;
						}
					}
				}
			}
			else { // More than 1 finger
				touchX = null;
				touchY = null;
			}
		}
	});
}
else {
	animateCard = function(direction) {
		switch (direction) {
			case 'left':
			case 'right':
				flipCard(direction);
				break;
			case 'up':
				goNextCard();
				break;
			case 'down':
				goBackCard();
				break;
		}
	}
}

fc.addEventListener('click', flipCard, false);
