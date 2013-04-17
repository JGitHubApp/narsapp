areaAppLinkInfo = new AppLinkLog(
	[
		['Back', '../images/icons/glossy-black-icon-arrows-arrow-styled-left.png', '../index.html', '#CCC'],
		['Airport', '../images/icons/glossy-black-icon-transport-travel-transportation-airplane4.png', 'http://www.flykci.com', '#69E'],
		['JCCC Campus Map', '../images/icons/glossy-black-icon-business-www-search-ps.png', '#', '#158'],
		['5 Guys Transportation', '../images/icons/glossy-black-icon-transport-travel-transportation-car1.png', 'http://www.5guystransportation.com', '#00A'],
		['Forecast', '../images/icons/glossy-black-icon-people-things-umbrella2.png', 'http://weather.yahoo.com', '#FC0']
	],

	[
		[],
		['plane', 'flew', 'directions', 'kansas', 'city', 'international'],
		['johnson', 'county', 'community', 'college'],
		['5', 'shuttle', 'service'],
		['weather', 'report', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'tomorrow', 'weekly', 'day', 'today']
	],

	[
		,
		,
		,
		,
		
	]
);

function loadAreaAppLinks() {
	loadAppLinks(areaAppLinkInfo, document.getElementById('container'));
	delete areaAppLinkInfo;
	getSearchQuery();
}
