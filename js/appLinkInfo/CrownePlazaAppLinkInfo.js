CrownePlazaAppLinkInfo = new AppLinkLog(
	[
		['Back', '../images/icons/glossy-black-icon-arrows-arrow-styled-left.png', '../htdocs/hotels.html', '#CCC'],
		['Crowne Plaza', '../images/icons/glossy-black-icon-business-home8.png', 'http://www.cplenexa.com', '#971865'],
		['913-217-1000', '../images/icons/glossy-black-icon-business-phone2.png', 'tel:9132171000', '#A00'],
		['Directions', '../images/icons/glossy-black-icon-business-globe.png', 'http://goo.gl/maps/51jvx', '#06F']
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

function loadCrownePlazaAppLinks() {
	loadAppLinks(CrownePlazaAppLinkInfo, document.getElementById('appLinkAnchor'));
	delete CrownePlazaAppLinkInfo;
	getSearchQuery();
}
