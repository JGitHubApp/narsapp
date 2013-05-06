CandlewoodSuitesAppLinkInfo = new AppLinkLog(
	[
		['Back', '../images/icons/glossy-black-icon-arrows-arrow-styled-left.png', '../htdocs/hotels.html', '#CCC'],
		['Candlewood Suites', '../images/icons/glossy-black-icon-business-home8.png', 'http://www.ichotelsgroup.com/h/d/cw/1/en/hotel/mkcom?rpb=hotel&crUrl=/h/d/cw/1/en/hotelsearchresults', '#005B9B'],
		['1-800-931-4667', '../images/icons/glossy-black-icon-business-phone2.png', 'tel:18009314667', '#A00'],
		['Directions', '../images/icons/glossy-black-icon-business-globe.png', 'http://goo.gl/maps/6Bhyc', '#06F']
	],

	[
		[],
		[],
		[],
		[]
	],

	[
		,
		,
		,
		
	]
);

function loadCandlewoodSuitesAppLinks() {
	loadAppLinks(CandlewoodSuitesAppLinkInfo, document.getElementById('appLinkAnchor'));
	delete CandlewoodSuitesAppLinkInfo;
}
