var fc = document.getElementById('flashCard');
var fFc = document.getElementById('frontFlashCard');
var bFc = document.getElementById('backFlashCard');

var signRadius = 32;
var postGap = 30;
var signalMargin = 0;

var signIsBlinking = true;
var blinkingSigns = [];
var blinkEvent = setInterval (function() {
	for (var i = 0; i < blinkingSigns.length; i++)
		drawSign(blinkingSigns[i][0], blinkingSigns[i][1], (signIsBlinking ? '#222':blinkingSigns[i][2]), true);
	signIsBlinking = !signIsBlinking;
}, 500);

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

function drawSignal(signal, rule) {
	blinkingSigns = [];
	signIsBlinking = true;
	drawPosts(signal.width);

	for (var row = 0; row < signal.length; row++)
		for (var col = 0; col < signal[row].length; col++)
			if (signal[row][col] != null) {
			var y = signRadius + postGap + (row * ((signRadius * 2) + postGap));
			var x = signalMargin + (((signRadius * 2) + postGap) * col);
			var c = signal[row][col].color;
			drawSign(x, y, c);

			if (signal[row][col].signIsBlinking)
				blinkingSigns.push([x, y, c]);
		}

	if (rule !== undefined) drawRule(rule);
}

function drawRule(rule) {
	// Print Rule
	document.getElementById('signalRule').innerHTML = 'Rule ' + rule.number;
	
	// Print Rule
	document.getElementById('signalName').innerHTML = rule.name;

	// Print Rule
	document.getElementById('signalIndication').innerHTML = rule.indication;
}

// Sign class
function Sign(color, signIsBlinking) {
	this.color = color;
	this.signIsBlinking = (signIsBlinking === true);
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

// Change to random signal
function drawRandomSignal() {
	var randomSignalRule = Math.floor(Math.random() * signalArray.length);
	var randomSignal = Math.floor(Math.random() * signalArray[randomSignalRule].length);

	drawSignal(signalArray[randomSignalRule][randomSignal], ruleArray[randomSignalRule]);
}

function resizeFlashCard() {
	fFc.style.maxHeight = (window.innerHeight || document.documentElement.clientHeight) + 'px';
	fFc.style.maxWidth = (window.innerWidth || document.documentElement.clientWidth) + 'px';
	var h = fFc.offsetHeight + 'px';
	var w = fFc.offsetWidth + 'px';

	fc.style.maxHeight = h;
	bFc.style.maxHeight = h;
	fc.style.maxWidth = w;
	bFc.style.maxWidth = w;
}
window.addEventListener('resize', resizeFlashCard);
