HawthornSuitesAppLinkInfo = new AppLinkLog(
	[
		['Back', '../images/icons/glossy-black-icon-arrows-arrow-styled-left.png', '../htdocs/hotels.html', '#CCC'],
		['Hawthorn Suites', '../images/icons/glossy-black-icon-business-home8.png', 'http://www.hawthornOverlandPark.com', '#B32317'],
		['913-344-8100', '../images/icons/glossy-black-icon-business-phone2.png', 'tel:9133448100', '#A00'],
		['Directions', '../images/icons/glossy-black-icon-business-globe.png', 'http://goo.gl/maps/fLtox', '#06F']
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

function loadHawthornSuitesAppLinks() {
	loadAppLinks(HawthornSuitesAppLinkInfo, document.getElementById('appLinkAnchor'));
	delete HawthornSuitesAppLinkInfo;
}
