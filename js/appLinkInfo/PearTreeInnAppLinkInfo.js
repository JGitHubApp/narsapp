PearTreeInnAppLinkInfo = new AppLinkLog(
	[
		['Back', '../images/icons/glossy-black-icon-arrows-arrow-styled-left.png', '../htdocs/hotels.html', '#CCC'],
		['Pear Tree Inn', '../images/icons/glossy-black-icon-business-home8.png', 'http://www.hotels.com/ho131850/pear-tree-inn-overland-park-overland-park-united-states', '#79C'],
		['913-451-0200', '../images/icons/glossy-black-icon-business-phone2.png', 'tel:9134510200', '#A00'],
		['Directions', '../images/icons/glossy-black-icon-business-globe.png', 'https://maps.google.com/maps?hl=en&ie=UTF-8&q=pear+tree+inn+overland+park&fb=1&gl=us&hq=pear+tree+inn+overland+park&hnear=pear+tree+inn+overland+park&cid=0,0,1444085942568358496&ei=RE5rUe-oFMHDtQbM_4HICw&sqi=2&ved=0CMgBEPwSMAA', '#06F']
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

function loadPearTreeInnAppLinks() {
	loadAppLinks(PearTreeInnAppLinkInfo, document.getElementById('appLinkAnchor'));
	delete PearTreeInnAppLinkInfo;
	getSearchQuery();
}
