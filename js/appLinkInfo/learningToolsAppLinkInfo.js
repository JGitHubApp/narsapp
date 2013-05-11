learningToolsAppLinkInfo = new AppLinkLog(
	[
		['Back', '../images/icons/glossy-black-icon-arrows-arrow-styled-left.png', '../index.html', '#CCC'],
		['Signals Flash Cards', '../images/icons/glossy-black-icon-business-document1.png', 'flashCard.html', '#05A'],
	],

	[
		[],
		[]
	],

	[
		,

	]
);

function loadLearningToolsAppLinks() {
	loadAppLinks(learningToolsAppLinkInfo, document.getElementById('container'));
	delete learningToolsAppLinkInfo;
	getSearchQuery();
}
