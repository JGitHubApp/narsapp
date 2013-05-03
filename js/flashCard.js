var fc = document.getElementById('flashCard');
var fFc = document.getElementById('frontFlashCard');
var bFc = document.getElementById('backFlashCard');

var signRadius = 32;
var postGap = 30;
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
	var context = fFc.getContext('2d');

	context.beginPath();
	context.arc(x, y, signRadius - small, 0, 2 * Math.PI, false);
	context.fillStyle = color;
	context.fill();
	context.lineWidth = 22 - (small * 2);
	context.strokeStyle = '#000';
	context.stroke();
}

function drawPost(x) {
	var context = fFc.getContext('2d');
	context.beginPath();
	context.moveTo(x - postGap, signRadius * 12);
	context.lineTo(x + postGap, signRadius * 12);
	context.moveTo(x, signRadius * 12);
	context.lineTo(x, signRadius);
	context.lineWidth = 5;
	context.strokeStyle = '#000';
	context.stroke();
}

function drawPosts(n) {
	fFc.getContext('2d').clearRect(0, 0, fFc.width, fFc.height);

	var signWidth = (signRadius * 2) + postGap;
	signalMargin = ((fFc.width - (signWidth * n - postGap)) / 2) + signRadius;

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

function drawRule(rule) {
	var message = 'Rule ' + rule.number + '\n' + rule.name + '\n' + rule.indication;
	var context = bFc.getContext('2d');
	context.textAlign = 'center';

	// Print Rule
	context.font='bold 48px Oxygen, "Open-Sans", sans-serif';
	context.fillText('Rule ' + rule.number, bFc.width / 2, 60);

	// Print Name
	context.font='bold 38px Oxygen, "Open-Sans", sans-serif';
	context.fillText(rule.name, bFc.width / 2, 120);

	// Print Indication
	context.font='bold 28px Oxygen, "Open-Sans", sans-serif';
	context.fillText(rule.indication, bFc.width / 2, 200);
}

// Sign class
function Sign(color, blink) {
	this.color = color;
	this.blink = (blink === true);
}

// Signal class
function Signal() {
	this.width = 0;

	this.addRow = function(a) {
		if (a.length > this.width)
			this.width = a.length;

		this.push(a);
	}
}
Signal.prototype = new Array();

// Rule class
function Rule(number, name, indication) {
	this.number = number;
	this.name = name;
	this.indication = indication;
}

function resizeFlashCard() {
	h = (window.innerHeight || document.documentElement.clientHeight) + 'px';
	fc.style.maxHeight = h;
	fFc.style.maxHeight = h;
	bFc.style.maxHeight = h;

	w = (window.innerWidth || document.documentElement.clientWidth) + 'px';
	fc.style.maxWidth = w;
	fFc.style.maxWidth = w;
	bFc.style.maxWidth = w;
}
window.addEventListener('resize', resizeFlashCard);

// Change to random signal
function drawRandomSignal() {
	var randomSignalRule = Math.floor(Math.random() * signalArray.length);
	var randomSignal = Math.floor(Math.random() * signalArray[randomSignalRule].length);
	drawSignal(signalArray[randomSignalRule][randomSignal]);
	drawRule(ruleArray[randomSignalRule]);
}
