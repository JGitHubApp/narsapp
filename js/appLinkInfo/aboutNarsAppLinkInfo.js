aboutNarsAppLinkInfo = new AppLinkLog(
	[
		['Back', '../images/icons/glossy-black-icon-arrows-arrow-styled-left.png', '../index.html', '#CCC'],
		['Twitter', '../images/icons/twitter-bird-dark-bgs.png', 'https://twitter.com/NARS_RRTraining', '#00ACED'],
		['Facebook', '../images/icons/f_logo.png', 'http://www.facebook.com/pages/National-Academy-of-Railroad-Science/162421800480129', '#3B5B99'],
		['Pictures', '../images/icons/glossy-black-icon-people-things-camera.png', 'pictures.html', '#0A3'],
		['NARS Workwear', '../images/icons/work-it.gif', 'http://www.work-itsalesllc.com/NARS-Workwear-and-Boots_c41.htm', '#000']
	],

	[
		[],
		['social'],
		['social'],
		['photographs', 'images', 'gallery'],
		[]
	],

	[
		,
		,
		,
		,
		
	]
);

function loadAboutNarsAppLinks() {
	loadAppLinks(aboutNarsAppLinkInfo, document.getElementById('container'));
	delete aboutNarsAppLinkInfo;
	getSearchQuery();
}
