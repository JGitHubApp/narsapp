// Blank Sign
	var noSign = new Sign('#222');

// red Sign
	var rSign = new Sign('#C00');
	var rBSign = new Sign('#C00', true);

// Green Sign
	var gSign = new Sign('#0A0');
	var gBSign = new Sign('#0A0', true);

// Yellow Sign
	var ySign = new Sign('#FF0');
	var yBSign = new Sign('#FF0', true);

// Lunar Sign
	var lSign = new Sign('#BBF');
	var lBSign = new Sign('#BBF', true);

// Array of Signals
signalArray = [];

var a9x1x3 = new Signal();
	a9x1x3.addRow([gSign, gSign, gSign, gSign]);
	a9x1x3.addRow([null, noSign, rSign, rSign]);
	a9x1x3.addRow([null, null, null, rSign]);
	signalArray.push(a9x1x3);

var b9x1x3 = new Signal();
	b9x1x3.addRow([gSign, gSign, gSign]);
	b9x1x3.addRow([noSign, noSign, rSign]);
	b9x1x3.addRow([noSign, rSign, noSign]);
	signalArray.push(b9x1x3);

var a9x1x4 = new Signal();
	a9x1x4.addRow([ySign]);
	a9x1x4.addRow([gBSign]);
	signalArray.push(a9x1x4);

var a9x1x5 = new Signal();
	a9x1x5.addRow([ySign, ySign, ySign]);
	a9x1x5.addRow([gSign, gSign, gSign]);
	a9x1x5.addRow([null, rSign, noSign]);
	signalArray.push(a9x1x5);

var a9x1x6 = new Signal();
	a9x1x6.addRow([yBSign, yBSign, yBSign, ySign]);
	a9x1x6.addRow([null, rSign, rSign, ySign]);
	a9x1x6.addRow([null, null, rSign, null]);
	signalArray.push(a9x1x6);

var b9x1x6 = new Signal();
	b9x1x6.addRow([yBSign, yBSign, ySign, yBSign]);
	b9x1x6.addRow([noSign, noSign, ySign, noSign]);
	b9x1x6.addRow([null, noSign, rSign, rSign]);
	signalArray.push(b9x1x6);

var c9x1x6 = new Signal();
	c9x1x6.addRow([yBSign, ySign]);
	c9x1x6.addRow([rSign, ySign]);
	c9x1x6.addRow([noSign, noSign]);
	signalArray.push(c9x1x6);

var a9x1x7 = new Signal();
	a9x1x7.addRow([ySign, ySign, ySign]);
	a9x1x7.addRow([lSign, lSign, rBSign]);
	a9x1x7.addRow([null, rSign, null]);
	signalArray.push(a9x1x7);

var b9x1x7 = new Signal();
	b9x1x7.addRow([ySign, ySign]);
	b9x1x7.addRow([rBSign, rBSign]);
	b9x1x7.addRow([noSign, rSign]);
	signalArray.push(b9x1x7);

var a9x1x8 = new Signal();
	a9x1x8.addRow([ySign, ySign, ySign, ySign]);
	a9x1x8.addRow([null, rSign, rSign, noSign]);
	a9x1x8.addRow([null, null, rSign, null]);
	signalArray.push(a9x1x8);

var b9x1x8 = new Signal();
	b9x1x8.addRow([ySign, ySign, noSign, ySign]);
	b9x1x8.addRow([noSign, noSign, ySign, rSign]);
	b9x1x8.addRow([noSign,  rSign,  null, noSign]);
	signalArray.push(b9x1x8);

var a9x1x9 = new Signal();
	a9x1x9.addRow([rSign, rSign, rSign, rSign]);
	a9x1x9.addRow([gSign, gSign, rSign, gSign]);
	a9x1x9.addRow([null,  rSign,  gSign, noSign]);
	signalArray.push(a9x1x9);

var a9x1x10 = new Signal();
	a9x1x10.addRow([rSign]);
	a9x1x10.addRow([ySign]);
	a9x1x10.addRow([ySign]);
	signalArray.push(a9x1x10);

var a9x1x11 = new Signal();
	a9x1x11.addRow([rSign, rSign, rSign]);
	a9x1x11.addRow([yBSign, yBSign, yBSign]);
	a9x1x11.addRow([null,  rSign,  noSign]);
	signalArray.push(a9x1x11);

var a9x1x12 = new Signal();
	a9x1x12.addRow([rSign, rSign, rSign, rSign]);
	a9x1x12.addRow([ySign, ySign, rSign, ySign]);
	a9x1x12.addRow([null,  rSign,  ySign, noSign]);
	signalArray.push(a9x1x12);

var a9x1x13 = new Signal();
	a9x1x13.addRow([rBSign, rSign, rSign, rBSign]);
	a9x1x13.addRow([null, rBSign, rBSign, rSign]);
	a9x1x13.addRow([null, null, rSign, null]);
	signalArray.push(a9x1x13);

var b9x1x13 = new Signal();
	b9x1x13.addRow([rBSign, rSign, rBSign, noSign]);
	b9x1x13.addRow([rSign, rSign, noSign, rBSign]);
	b9x1x13.addRow([rSign, rBSign]);
	signalArray.push(b9x1x13);

var c9x1x13 = new Signal();
	c9x1x13.addRow([lSign, lSign, lSign]);
	c9x1x13.addRow([null, rSign, rSign]);
	c9x1x13.addRow([null, null, rSign]);
	signalArray.push(c9x1x13);

var d9x1x13 = new Signal();
	d9x1x13.addRow([rSign, rSign, rSign, noSign]);
	d9x1x13.addRow([lSign, rSign, lSign, lSign]);
	d9x1x13.addRow([null, lSign, rSign]);
	signalArray.push(d9x1x13);

// e9x1x13

var f9x1x13 = new Signal();
	f9x1x13.addRow([noSign, rBSign, rBSign, rSign]);
	f9x1x13.addRow([rBSign, noSign, rSign, rBSign]);
	f9x1x13.addRow([rSign, rSign, noSign, noSign]);
	signalArray.push(f9x1x13);

// a9x1x14

var a9x1x15 = new Signal();
	a9x1x15.addRow([rSign, rSign, rSign, rSign]);
	a9x1x15.addRow([null, noSign, rSign, rSign]);
	a9x1x15.addRow([null, null, null, rSign]);
	signalArray.push(a9x1x15);

var b9x1x15 = new Signal();
	b9x1x15.addRow([noSign, noSign, rSign, rSign]);
	b9x1x15.addRow([rSign, rSign, noSign, rSign]);
	b9x1x15.addRow([null, rSign, rSign, noSign]);
	signalArray.push(b9x1x15);
