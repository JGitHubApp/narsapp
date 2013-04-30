classOneRailroadsAppLinkInfo = new AppLinkLog(
	[
		['Back', '../images/icons/glossy-black-icon-arrows-arrow-styled-left.png', 'railroadIndustry.html', '#CCC'],
		['BNSF', '../images/icons/glossy-black-icon-transport-travel-transportation-train8-sc43.png', 'http://www.bnsf.com', '#F85D13'],
		['Canadian National', '../images/icons/glossy-black-icon-transport-travel-transportation-train8-sc43.png', 'http://www.cn.ca/en/careers.htm', '#335'],
		['Canadian Pacific', '../images/icons/glossy-black-icon-transport-travel-transportation-train8-sc43.png', 'http://www.cpr.ca/en/Careers/Pages/default.aspx', '#C60B2F'],
		['CSX Transportation', '../images/icons/glossy-black-icon-transport-travel-transportation-train8-sc43.png', 'http://www.csx.com', '#0E4980'],
		['Kansas City Southern', '../images/icons/glossy-black-icon-transport-travel-transportation-train8-sc43.png', 'http://www.kcsouthern.com/en-us/Careers/Pages/CareersMain.aspx', '#C60B2F'],
		['Norfolk Southern', '../images/icons/glossy-black-icon-transport-travel-transportation-train8-sc43.png', 'http://www.nscorp.com', '#345068'],
		['Union Pacific', '../images/icons/glossy-black-icon-transport-travel-transportation-train8-sc43.png', 'http://www.up.com', '#ECAC00']
	],

	[
		[],
		['burlington', 'northern', 'santa', 'fe', 'railroads', 'railway'],
		['railroads'],
		['railroads'],
		['railroads'],
		['railroads'],
		['railroads'],
		['railroads']
	],

	[
		,
		,
		,
		,
		,
		,
		,
		
	]
);

function loadClassOneRailroadsAppLinks() {
	loadAppLinks(classOneRailroadsAppLinkInfo, document.getElementById('container'));
	delete classOneRailroadsAppLinkInfo;
	getSearchQuery();
}
