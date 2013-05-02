function getTransformProperty() {
	var properties = [
		'transform',
		'WebkitTransform',
		'msTransform',
		'MozTransform',
		'OTransform'
	];
	var p;
	while (p = properties.shift()) {
			if (typeof fc.style[p] != 'undefined') {
					return p;
			}
	}
	return false;
}

var rotateProperty = getTransformProperty();
var cardIsFlipped = false;
var degreesFlipped = 0;

function flipCard() {
	// Get x coordinate within card
	var x = event.clientX - fc.getBoundingClientRect().left;

	// If click was on Right side of card
	if (x > fc.width / 2)
		degreesFlipped += 180;
	else
		degreesFlipped -= 180;

	// Flip card
	fc.style[rotateProperty] = 'rotateY(' + degreesFlipped + 'deg)';

	cardIsFlipped = !cardIsFlipped;
}

fc.addEventListener('click', flipCard, false);
