var appLinkNames;
var appLinkContainers;
var pHeader;
var hLogo;
var headContainer;
var headToolContainer;
var headTool;
var colFour;
var colThree;
var colTwo;
var hotelTh;
var hotelTd;
var hotelInfo;
var hotelTableContainer;
var singleHotelAmenities;

function pageLoad() {
	appLinkNames = document.querySelectorAll('.appLinkName');
	appLinkContainers = document.querySelectorAll('.appLinkContainer');
	pHeader = document.getElementById('header');
	hLogo = document.getElementById('logo');
	headContainer = document.getElementById('headerContainer');
	headToolContainer = document.getElementById('headerToolContainer');

	// Hotel Comparison Page
	if(document.getElementById('hotelTable')) {
		colFour = document.querySelectorAll('.col4');
		colThree = document.querySelectorAll('.col3');
		colTwo = document.querySelectorAll('.col2');
		hotelTh = document.getElementById('hotelTable').rows[0].getElementsByTagName('th');
		hotelTd = document.getElementById('hotelTable').rows;
		hotelInfo = document.getElementById('hotelInfo');
		hotelTableContainer = document.getElementById('tableContainer');
	}

	// Individual Hotel Page
	if(document.getElementById('address')) {
		singleHotelAmenities = document.getElementsByTagName('li');
	}
	
	pageSizing();

	window.attachEvent('onresize', pageSizing);
}

// Styles the header when the page width is less than or equal to the 6in width
function sizeHeaderLessThanSix(pHeader, headContainer, hLogo, headToolContainer, headTool) {
	pHeader.style.height="auto";
	pHeader.style.textAlign="center";
	pHeader.style.paddingBottom="3pt";

	headContainer.style.postion="static";
	if(document.getElementById('headerToolContainer')) {
		headContainer.style.height="102px";
		headToolContainer.style.width="96%";
		headToolContainer.style.top = "70%";
		headToolContainer.style.right = "0pt";
		headToolContainer.style.left = "0pt";
		headToolContainer.style.margin="0 auto 0 auto";
	}
	else {
		headContainer.style.height="70px";
	}

	hLogo.style.width="100%";
	hLogo.style.padding="0px";
	hLogo.style.height="auto";
	hLogo.style.minHeight="1px";
	hLogo.style.float="none";
	hLogo.style.display="inline-block";
}

// Styles the header when the page width is greater than the 6in width
function sizeHeaderGreaterThanSix(pHeader, headContainer, hLogo, headToolContainer, headTool) {
	pHeader.style.height="auto";
	pHeader.style.textAlign="right";
	pHeader.style.padding="0pt";

	headContainer.style.postion="relative";
	headContainer.style.height="70px";

	if(document.getElementById('headerToolContainer')) {
		headToolContainer.style.width="50%";
		headToolContainer.style.margin="-1em 0 0 0";
		headToolContainer.style.top = "50%";
		headToolContainer.style.right="10pt";
		headToolContainer.style.left = "auto";
		headToolContainer.style.position="absolute";
		headToolContainer.style.border = "2pt solid #000";
		headToolContainer.style.background = "#EEE";
	}

	hLogo.style.paddingLeft="10pt";
	hLogo.style.width="auto";
	hLogo.style.float="left";
}

// Updates appLinkContainers
function updateAppLinkContainers(aWidth, aHeight) {
	for(var i =0; i < appLinkContainers.length; i++) {
		appLinkContainers[i].style.width=aWidth;
		appLinkContainers[i].style.height=aHeight;
	}
}

// Updates appLinkNames
function updateAppLinkNames(aFontSize, aMarginTop) {
	for(var i =0; i < appLinkNames.length; i++) {
		appLinkNames[i].style.fontSize=aFontSize;
		appLinkNames[i].style.marginTop=aMarginTop;
	}
}

// Start hotels.html styling
// Sets display value of col4 of hotelTable
function setColFour(value) {
	for(var i =0; i < colFour.length; i++) {
		colFour[i].style.display=value;
	}
}

// Sets display value of col3 of hotelTable
function setColThree(value) {
	for(var i =0; i < colThree.length; i++) {
		colThree[i].style.display=value;
	}
}

// Sets display value of col2 of hotelTable
function setColTwo(value) {
	for(var i =0; i < colTwo.length; i++) {
		colTwo[i].style.display=value;
	}
}

// Set hotelTable th width
function setHotelThWidth(aWidth) {
	if(hotelTh != null) {
		for(var i =0; i < hotelTh.length; i++) {
			hotelTh[i].style.width=aWidth;
		}
	}
}

// Set hotelTable td height
function setHotelTdHeight(aHeight) {
	var hotelRowTd;
	for(var i =1; i < hotelTd.length; i++) {
		hotelRowTd = hotelTd[i].getElementsByTagName('td');
		for(var j =0; j < hotelRowTd.length; j++)
		{
			hotelRowTd[j].style.height=aHeight;
		}
	}
}

// Style the hotels table
function styleHotelTable(colFourVal, colThreeVal, colTwoVal, thWidth, htInfoHeight, htInfoFirst, tdHeight, hotelContainerWidth) {
	if(document.getElementById('hotelTable')) {
		setColFour(colFourVal);
		setColThree(colThreeVal);
		setColTwo(colTwoVal);
		setHotelThWidth(thWidth);
		hotelInfo.style.height=htInfoHeight;
		hotelInfo.firstChild.style.display=htInfoFirst;
		setHotelTdHeight(tdHeight);
		hotelTableContainer.style.width=hotelContainerWidth;
	}
}
// End hotels.html styling

// Style a hotel page like CandlewoodSuites.html..
function styleIndividualHotelAmenties(aWidth) {
	if(document.getElementById('address')) {
		for(var i=0; i < singleHotelAmenities.length; i++)
		{
			singleHotelAmenities[i].style.width=aWidth;
		}
	}
}

function pageSizing() {
	var winWidth = document.documentElement.clientWidth;

	switch(true) {
	case ((winWidth <= 260)):
		updateAppLinkContainers('50%', '1.4in');
		updateAppLinkNames('7pt', '0pt');

		sizeHeaderLessThanSix(pHeader, headContainer, hLogo, headToolContainer, headTool);

		styleHotelTable('none', 'none', 'none', '100%', '0.85in', 'none', '1.4in', '50%');

		styleIndividualHotelAmenties('100%');

		break;
	case ((winWidth <= 332) && (winWidth > 260)): // Media Query max-Width: 3.5 in
		updateAppLinkContainers('33.3%', '1.4in');
		updateAppLinkNames('10pt', '0pt');

		sizeHeaderLessThanSix(pHeader, headContainer, hLogo, headToolContainer, headTool);

		styleHotelTable('none', 'none', 'none', '100%', '0.95in', 'none', '1.4in', '66.6%');

		// Used to handle defaultHotel.css difference
		if(document.getElementById('address')) {
			updateAppLinkContainers('50%', '1.7in');
		}
		styleIndividualHotelAmenties('100%');

		break;
	case ((winWidth <= 360) && (winWidth > 332)): // Media Query max-Width: 4 in
		updateAppLinkContainers('33.3%', '1.5in');
		updateAppLinkNames('10pt', '0pt');

		sizeHeaderLessThanSix(pHeader, headContainer, hLogo, headToolContainer, headTool);

		styleHotelTable('none', 'none', 'table-cell', '50%', '0.95in', 'none', '1.5in', '66.6%');

		// Used to handle defaultHotel.css difference
		if(document.getElementById('address')) {
			updateAppLinkContainers('50%', '1.7in');
		}
		styleIndividualHotelAmenties('100%');

		break;
	case ((winWidth <= 556) && (winWidth > 360)): // Media Query max-Width: 6 in
		updateAppLinkContainers('25%', '1.7in');
		updateAppLinkNames('10pt', '4pt');

		sizeHeaderLessThanSix(pHeader, headContainer, hLogo, headToolContainer, headTool);

		styleHotelTable('none', 'none', 'table-cell', '50%', '1.25in', 'none', '1.7in', '75%');

		styleIndividualHotelAmenties('50%');

		break;
	case ((winWidth <= 954) && (winWidth > 556)):
		updateAppLinkContainers('25%', '1.9in');
		updateAppLinkNames('12pt', '4pt');

		sizeHeaderGreaterThanSix(pHeader, headContainer, hLogo, headToolContainer, headTool);

		styleHotelTable('none', 'table-cell', 'table-cell', '33.3%', '1.45in', 'block', '1.9in', '75%');

		styleIndividualHotelAmenties('33%');

		break;
	case ((winWidth > 954)): // Media Query min-Width: 10 in
		updateAppLinkContainers('20%', '1.9in');
		updateAppLinkNames('14pt', '4pt');

		sizeHeaderGreaterThanSix(pHeader, headContainer, hLogo, headToolContainer, headTool);

		styleHotelTable('table-cell', 'table-cell', 'table-cell', '25%', '1.45in', 'block', '1.9in', '75%');

		// Used to handle defaultHotel.css difference
		if(document.getElementById('address')) {
			updateAppLinkContainers('25%', '1.9in');
		}
		styleIndividualHotelAmenties('33%');

		break;
	}
}

// attach to onload event
window.attachEvent("onload", pageLoad);
