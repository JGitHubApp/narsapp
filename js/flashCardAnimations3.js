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
if (((LE === '' ? 'b':LE + 'B') + 'ackfaceVisibility') in fc.style && 'classList' in fc) {
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

window.addEventListener('keydown', function() {
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
	});

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
				var prevDeg = prevTransform.match(/(?!rotateY\()\d+/) % 360;
				var deg = fc.style[transformType].match(/(?!rotateY\()\d+/) % 360;
				console.log(deg);


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
					if (touchY - endY > 0)
						animateCard('up')
					else
						animateCard('down')
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

			// Reset Tilt
			fc.style[transformType]  = prevTransform;
			distX = Math.abs(curX - touchX);

			// If length of swipe is long enough
			if (distX > 50) {
				tiltDirection = swipeDirection(curX, curY);
				var tiltAmount = (distX - 50) / 2 > 180 ? 180:((distX - 50) / 2);

				switch (tiltDirection) {
					case 'left':
						tiltAmount = degreesFlipped - tiltAmount;
						fc.style[transformType]  = 'rotateY(' + tiltAmount + 'deg)';
						break;
					case 'right':
						tiltAmount = degreesFlipped + tiltAmount;
						fc.style[transformType]  = 'rotateY(' + tiltAmount + 'deg)';
						break;
				}
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
