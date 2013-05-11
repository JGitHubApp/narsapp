learningToolsAppLinkInfo = new AppLinkLog(
	[
		['Back', '../images/icons/glossy-black-icon-arrows-arrow-styled-left.png', '../index.html', '#CCC'],
		['Signals Flash Cards', '../images/icons/glossy-black-icon-business-document1.png', 'flashCard.html', '#05A'],
		['Flash Card Prototype', '../images/icons/glossy-black-icon-business-document1.png', 'flashCard2.html', '#FFF'],
		['Flash Card Prototype 2', '../images/icons/glossy-black-icon-business-document1.png', 'flashCard3.html', '#FFF']
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

	]
);

function loadLearningToolsAppLinks() {
	loadAppLinks(learningToolsAppLinkInfo, document.getElementById('container'));
	delete learningToolsAppLinkInfo;
	getSearchQuery();
}
