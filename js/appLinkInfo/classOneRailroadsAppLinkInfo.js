var classOneRailroadsAppLinkInfo = new AppLinkLog(
	[
		['Back', '../images/icons/glossy-black-icon-arrows-arrow-styled-left.png', 'railroadIndustry.html', '#CCC'],
		['BNSF', '../images/icons/filler.png', 'http://www.bnsf.com', 'white'],
		['CSX Transportation', '../images/icons/filler.png', 'http://www.csx.com', 'white'],
		['Norfolk Southern', '../images/icons/filler.png', 'http://www.nscorp.com', 'white'],
		['Union Pacific', '../images/icons/filler.png', 'http://www.up.com', 'white'],
		['Canadian National', '../images/icons/filler.png', 'http://www.cn.ca/en/careers.htm', 'white'],
		['Canadian Pacific', '../images/icons/filler.png', 'http://www.cpr.ca/en/Careers/Pages/default.aspx', 'white'],
		['Kansas City Southern', '../images/icons/filler.png', 'http://www.kcsouthern.com/en-us/Careers/Pages/CareersMain.aspx', 'white']
	],

	[
		[],
		['burlington', 'northern', 'santa fe', 'railroad', 'railway'],
		['railroad'],
		['railroad'],
		['railroad'],
		['railroad'],
		['railroad'],
		['railroad']
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
