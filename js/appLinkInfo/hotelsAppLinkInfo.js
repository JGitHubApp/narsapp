var hotelsAppLinkInfo = new AppLinkLog(
	[
		['Back', '../images/icons/glossy-black-icon-arrows-arrow-styled-left.png', '../index.html', '#CCC'],
		['CandleWood Suites', '../images/icons/filler.png', '../htdocs/CandlewoodSuites.html', 'white'],
		['Chase Suites', '../images/icons/filler.png', '#', 'white'],
		['Crowne Plaza', '../images/icons/filler.png', '#', 'white'],
		['Drury Inn', '../images/icons/filler.png', '#', 'white'],
		['Hawthorne Suites', '../images/icons/filler.png', '#', 'white'],
		['Pear Tree Inn', '../images/icons/filler.png', '#', 'white'],
		['Walnut Grove RV Park', '../images/icons/filler.png', '#', 'white']
	],

	[
		[],
		['hotels','apartments', 'suites', 'kitchens', 'fitness', 'centers', 'athletics', 'clubs', 'passes', 'free', 'wifi', 'wireless', 'internet', 'access', 'breakfast', 'dinner', 'washers', 'washing', 'machines', 'dryers'],
		['hotels','apartments', 'suites', 'kitchens', 'fitness', 'centers', 'athletics', 'clubs', 'passes', 'free', 'wifi', 'wireless', 'internet', 'access', 'breakfast', 'dinner', 'shuttle', 'transportation', 'washers', 'washing', 'machines', 'dryers'],
		['hotels','fitness', 'centers', 'athletics', 'clubs', 'passes', 'free', 'wifi', 'wireless', 'internet', 'access', 'shuttle', 'transportation', 'washers', 'washing', 'machines', 'dryers', 'swimming', 'pools'],
		['hotels','fitness', 'centers', 'athletics', 'clubs', 'passes', 'free', 'wifi', 'wireless', 'internet', 'access', 'washers', 'washing', 'machines', 'dryers', 'swimming', 'pools'],
		['hotels','apartments', 'suites', 'kitchens', 'fitness', 'centers', 'free', 'wifi', 'wireless', 'internet', 'access', 'breakfast', 'dinner', 'shuttle', 'transportation', 'washers', 'washing', 'machines', 'dryers'],
		['hotels','fitness', 'centers', 'athletics', 'clubs', 'passes', 'free', 'wifi', 'wireless', 'internet', 'access', 'breakfast', 'washers', 'washing', 'machines', 'dryers'],
		['free', 'wifi', 'wireless', 'internet', 'access', 'washers', 'washing', 'machines', 'dryers']
	],

	[
		,
		CandlewoodSuitesAppLinkInfo,
		,
		,
		,
		,
		,
		
	]
);

delete CandlewoodSuitesAppLinkInfo;

function loadHotelsAppLinks() {
	loadAppLinks(hotelsAppLinkInfo, document.getElementById('container'));
	delete hotelsAppLinkInfo;
	getSearchQuery();
}
