DruryInnAppLinkInfo = new AppLinkLog(
	[
		['Back', '../images/icons/glossy-black-icon-arrows-arrow-styled-left.png', '../htdocs/hotels.html', '#CCC'],
		['Drury Inn & Suites', '../images/icons/glossy-black-icon-business-home8.png', 'https://wwwc.druryhotels.com/propertyoverview.aspx?property=0100', '#79C'],
		['913-345-1500', '../images/icons/glossy-black-icon-business-phone2.png', 'tel:9133451500', '#A00'],
		['Directions', '../images/icons/glossy-black-icon-business-globe.png', 'http://goo.gl/maps/Y3796', '#06F']
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

function loadDruryInnAppLinks() {
	loadAppLinks(DruryInnAppLinkInfo, document.getElementById('appLinkAnchor'));
	delete DruryInnAppLinkInfo;
}
