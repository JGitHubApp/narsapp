/* IE8 Flash Card */

var fc = document.getElementById('flashCard');

// Define window.addEventListener for IE8
if (!window.addEventListener) {
	window.addEventListener = function(evnt, funct, value) {
		// IE8 Do nothing because explorer canvas needs to be modified to support resizing
		// window.attachEvent('on' + evnt, funct);
	};
}

// Defines fc.addEventListener
if (!fc.addEventListener) {
	fc.addEventListener = function(evnt, funct, value) {
		fc.attachEvent('on' + evnt, funct);
	};

	// document.attachEvent enables the controls. IE8 does NOT attach keydown to window.
	// This defines the card controls for IE8.
	document.attachEvent('onkeydown', function(event) {
		switch (event.keyCode) {
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
}
