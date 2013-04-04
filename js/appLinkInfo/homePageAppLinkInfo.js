var homePageAppLinkInfo = new AppLinkLog(
	[
		['Fast Track Certificates', 'images/icons/glossy-black-icon-people-things-diploma-sc2.png', 'htdocs/fastTrack.html', '#608'],
		['Railroad Industry', 'images/icons/glossy-black-icon-signs-z-roadsign47.png', 'htdocs/railroadIndustry.html', '#EEE'],
		['Is this for Me?', 'images/icons/glossy-black-icon-people-things-people-man1.png', 'htdocs/forMe.html', '#88C'],
		['Hotels', 'images/icons/glossy-black-icon-people-things-bed.png', 'htdocs/hotels.html', '#11E'],
		['GI Bill Students', 'images/icons/glossy-black-icon-sports-hobbies-medal.png', 'http://www.jccc.edu/veterans/index.html', '#C00'],
		['Learning Tools', 'images/icons/glossy-black-icon-business-tools1.png', '#', '#181'],
		['About the Area', 'images/icons/glossy-black-icon-business-globe.png', 'htdocs/area.html', '#FB0'],
		['About Nars', 'images/icons/glossy-black-icon-transport-travel-transportation-train3-sc44.png', 'htdocs/aboutNars.html', '#D00'],
		['FAQ', 'images/icons/glossy-black-icon-alphanumeric-icon_091.png', 'htdocs/faq.html', '#F80']
	],

	[
		['school'],
		['educational'],
		[],
		[],
		['veterans', 'services', 'military'],
		[],
		[],
		[],
		['frequently', 'asked', 'questions']
	],

	[
		fastTrackAppLinkInfo,
		railroadIndustryAppLinkInfo,
		forMeAppLinkInfo,
		hotelsAppLinkInfo,
		,
		,
		areaAppLinkInfo,
		aboutNarsAppLinkInfo,

	]
);

delete fastTrackAppLinkInfo;
delete railroadIndustryAppLinkInfo;
delete forMeAppLinkInfo;
delete hotelsAppLinkInfo;
delete areaAppLinkInfo;
delete aboutNarsAppLinkInfo;

function loadHomePageAppLinks() {
	loadAppLinks(homePageAppLinkInfo, document.getElementById('container'));
	delete homePageAppLinkInfo;
}
