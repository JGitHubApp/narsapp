CandlewoodSuitesAppLinkInfo = new AppLinkLog(
	[
		['Back', '../images/icons/glossy-black-icon-arrows-arrow-styled-left.png', '../htdocs/hotels.html', '#CCC'],
		['Hawthorne Suites', '../images/icons/glossy-black-icon-business-home8.png', 'http://www.hawthornOverlandPark.com', '#B32317'],
		['913-344-8100', '../images/icons/glossy-black-icon-business-phone2.png', 'tel:9133448100', '#A00'],
		['Directions', '../images/icons/glossy-black-icon-business-globe.png', 'http://goo.gl/maps/HLWVb', '#06F']
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
