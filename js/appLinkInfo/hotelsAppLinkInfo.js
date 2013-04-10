hotelsAppLinkInfo = new AppLinkLog(
	[
		['Back', '../images/icons/glossy-black-icon-arrows-arrow-styled-left.png', '../index.html', '#CCC'],
		['Candlewood Suites', '../images/icons/glossy-black-icon-business-home8.png', 'CandlewoodSuites.html', '#005B9B'],
		['Chase Suites', '../images/icons/glossy-black-icon-business-home8.png', 'ChaseSuites.html', '#77933C'],
		['Crowne Plaza', '../images/icons/glossy-black-icon-business-home8.png', 'CrownePlaza.html', '#971865'],
		['Drury Inn & Suites', '../images/icons/glossy-black-icon-business-home8.png', 'DruryInn.html', '#79C'],
		['Hawthorn Suites', '../images/icons/glossy-black-icon-business-home8.png', 'HawthornSuites.html', '#B32317'],
		['Pear Tree Inn', '../images/icons/glossy-black-icon-business-home8.png', '#', '#79C'],
		['Walnut Grove RV Park', '../images/icons/glossy-black-icon-business-home8.png', '#', '#800000']
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
		,
		,
		,
		,
		,
		,
		
	]
);

function loadHotelsAppLinks() {
	loadAppLinks(hotelsAppLinkInfo, document.getElementById('container'));
	delete hotelsAppLinkInfo;
	getSearchQuery();
}
