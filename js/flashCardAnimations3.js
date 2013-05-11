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

// If touch events are supported
if ('ontouchstart' in window) {
	var touchX = null;
	var touchY = null;
	var tiltDirection = null;
	var prevTransform = null;

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
			var bb = document.getElementById('backButton').getElementsByTagName('img')[0];

			if ( // On return button
					touchX >= bb.offsetLeft &&
					touchX <= bb.offsetLeft + bb.offsetWidth &&
					touchY >= bb.offsetTop &&
					touchY <= bb.offsetTop + bb.offsetHeight) {

				location.href = document.getElementById('backButton').href;
			}
			else {
				event.preventDefault();
				var deg = fc.style[transformType].match(/(?!rotateY\()\d+/) % 360;

				var endX = event.changedTouches[0].pageX;
				var endY = event.changedTouches[0].pageY;

				// Left-Right
				if (Math.abs(touchX - endX) > Math.abs(touchY - endY)) {
					if (cardIsFlipped) {
						if (deg > 270 || deg < 90) {
							if (deg < 90)
								flipCard('left');
							else
								flipCard('right');
						}
						else {
							fc.style[transformType]  = prevTransform;
						}
					}
					else {
						if (deg > 90 && deg < 270) {
							if (deg > 180)
								flipCard('left');
							else
								flipCard('right');
						}
						else {
							fc.style[transformType]  = prevTransform;
						}
					}
				}
				else { // up-down
					var swipeDistance = touchY - endY;

					// If swipe distance is long enough
					if (Math.abs(swipeDistance) > 50) {
						fc.style[transformType] = prevTransform;

						if (swipeDistance > 0)
							animateCard('up')
						else
							animateCard('down')
					}
				}
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
			event.preventDefault();

			var curX = event.touches[0].pageX;
			var curY = event.touches[0].pageY;
			tiltDirection = swipeDirection(curX, curY);

			var distX = Math.abs(curX - touchX);
			var tiltAmount = distX / 2 > 180 ? 180:(distX / 2);

			switch (tiltDirection) {
				case 'left':
					tiltAmount = degreesFlipped - tiltAmount;
					updateRotation(tiltAmount);
					break;
				case 'right':
					tiltAmount = degreesFlipped + tiltAmount;
					updateRotation(tiltAmount);
					break;
				default:
					fc.style[transformType] = prevTransform;
					break;
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