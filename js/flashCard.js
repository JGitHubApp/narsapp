var signRadius = 28;
var postGap = 28;
var signalMargin = 0;

var blink = true;
var blinkingSigns = [];
var blinkEvent = setInterval (function() {
	for (var i = 0; i < blinkingSigns.length; i++)
		drawSign(blinkingSigns[i][0], blinkingSigns[i][1], (blink ? '#222':blinkingSigns[i][2]), true);
	blink = !blink;
}, 1000);

function drawSign(x, y, color, small) {
	small = small === true ? 5:0;
	var fc = document.getElementById('flashCard').getContext('2d');

	fc.beginPath();
	fc.arc(x, y, signRadius - small, 0, 2 * Math.PI, false);
	fc.fillStyle = color;
	fc.fill();
	fc.lineWidth = 22 - (small * 2);
	fc.strokeStyle = '#000';
	fc.stroke();
}

function drawPost(x) {
	var fc = document.getElementById('flashCard').getContext('2d');
	fc.beginPath();
	fc.moveTo(x - postGap, signRadius * 12);
	fc.lineTo(x + postGap, signRadius * 12);
	fc.moveTo(x, signRadius * 12);
	fc.lineTo(x, signRadius);
	fc.lineWidth = 5;
	fc.strokeStyle = '#000';
	fc.stroke();
}

function drawPosts(n) {
	canvas = document.getElementById('flashCard');
	canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);

	var signWidth = (signRadius * 2) + postGap;
	signalMargin = ((canvas.width - (signWidth * n - postGap)) / 2) + signRadius;

	for (var i = 0; i < n; i++)
		drawPost(signalMargin + (signWidth * i));
}

function drawSignal(signal) {
	blinkingSigns = [];
	blink = true;
	drawPosts(signal.width);

	for (var row = 0; row < signal.length; row++)
		for (var col = 0; col < signal[row].length; col++)
			if (signal[row][col] != null) {
			var y = signRadius + postGap + (row * ((signRadius * 2) + postGap));
			var x = signalMargin + (((signRadius * 2) + postGap) * col);
			var c = signal[row][col].color;
			drawSign(x, y, c);

			if (signal[row][col].blink)
				blinkingSigns.push([x, y, c]);
		}
}

// Sign object
function Sign(color, blink) {
	this.color = color;
	this.blink = (blink === true);
}

// Signal object
function Signal() {
	this.width = 0;

	this.addRow = function(a) {
		if (a.length > this.width)
			this.width = a.length;

		this.push(a);
	}
}
Signal.prototype = new Array();

// Resize the canvas height
function resizeFlashCard() {
	document.getElementById('flashCard').style.maxHeight = (window.innerHeight || document.documentElement.clientHeight) + 'px';
}

// Change to random signal
function drawRandomSignal() {
	var randomSignal = Math.floor(Math.random() * signalArray.length);
	drawSignal(signalArray[randomSignal]);
}
