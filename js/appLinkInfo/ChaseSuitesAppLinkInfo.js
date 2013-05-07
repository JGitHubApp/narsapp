ChaseSuitesAppLinkInfo = new AppLinkLog(
	[
		['Back', '../images/icons/glossy-black-icon-arrows-arrow-styled-left.png', '../htdocs/hotels.html', '#CCC'],
		['Chase Suites', '../images/icons/glossy-black-icon-business-home8.png', 'http://www.chasehoteloverlandpark.com', '#77933C'],
		['913-491-3333', '../images/icons/glossy-black-icon-business-phone2.png', 'tel:9134913333', '#A00'],
		['Directions', '../images/icons/glossy-black-icon-business-globe.png', 'http://goo.gl/maps/zLQE1', '#06F']
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

function loadChaseSuitesAppLinks() {
	loadAppLinks(ChaseSuitesAppLinkInfo, document.getElementById('appLinkAnchor'));
	delete ChaseSuitesAppLinkInfo;
}
