forMeAppLinkInfo = new AppLinkLog(
	[
		['Back', '../images/icons/glossy-black-icon-arrows-arrow-styled-left.png', '../index.html', '#CCC'],
		['Industry Requirements', '../images/icons/glossy-black-icon-business-clipboard2-sc1.png', 'http://www.jccc.edu/railroad/requirements.html', '#D63'],
		['Successful Attributes', '../images/icons/manOnRailroadTracks.png', 'http://www.jccc.edu/railroad/attributes.html', '#3C3']
	],

	[
		[],
		['typical', 'mandatory'],
		['railroad', 'worker']
	],

	[
		,
		,
		
	]
);

function loadForMeAppLinks() {
	loadAppLinks(forMeAppLinkInfo, document.getElementById('container'));
	delete forMeAppLinkInfo;
	getSearchQuery();
}
