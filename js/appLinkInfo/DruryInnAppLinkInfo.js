CandlewoodSuitesAppLinkInfo = new AppLinkLog(
	[
		['Back', '../images/icons/glossy-black-icon-arrows-arrow-styled-left.png', '../htdocs/hotels.html', '#CCC'],
		['Drury Inn', '../images/icons/glossy-black-icon-business-home8.png', 'https://wwwc.druryhotels.com/propertyoverview.aspx?property=0100', '#79C'],
		['913-345-1500', '../images/icons/glossy-black-icon-business-phone2.png', 'tel:9133451500', '#A00'],
		['Directions', '../images/icons/glossy-black-icon-business-globe.png', 'http://goo.gl/maps/d2a2e', '#06F']
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
	getSearchQuery();
}
