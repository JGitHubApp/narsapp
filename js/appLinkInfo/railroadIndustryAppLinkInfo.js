railroadIndustryAppLinkInfo = new AppLinkLog(
	[
		['Back', '../images/icons/glossy-black-icon-arrows-arrow-styled-left.png', '../index.html', '#CCC'],
		['ASLRRA Homepage', '../images/icons/aslrra_logo.jpg', 'http://www.aslrra.org', '#25408F'],
		['Class I Railroads', '../images/icons/glossy-black-icon-transport-travel-transportation-train8-sc43.png', '../htdocs/classOneRailroads.html', '#F40']
	],

	[
		[],
		['american', 'short', 'line', 'association', 'railroad'],
		['one', '1']
	],

	[
		,
		,
		classOneRailroadsAppLinkInfo
	]
);

delete classOneRailroadsAppLinkInfo;

function loadRailroadIndustryAppLinks() {
	loadAppLinks(railroadIndustryAppLinkInfo, document.getElementById('container'));
	delete railroadIndustryAppLinkInfo;
	getSearchQuery();
}
