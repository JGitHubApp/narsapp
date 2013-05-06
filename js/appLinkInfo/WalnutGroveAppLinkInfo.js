WalnutGroveAppLinkInfo = new AppLinkLog(
	[
		['Back', '../images/icons/glossy-black-icon-arrows-arrow-styled-left.png', '../htdocs/hotels.html', '#CCC'],
		['Walnut Grove RV Park', '../images/icons/glossy-black-icon-business-home8.png', 'http://www.walnutgroverv.com/', '#800000'],
		['913-262-3023', '../images/icons/glossy-black-icon-business-phone2.png', 'tel:9132623023', '#A00'],
		['Directions', '../images/icons/glossy-black-icon-business-globe.png', 'http://www.mapquest.com/maps?address=10218+Johnson+Dr&city=Shawnee&state=KS&zipcode=66203&redirect=true', '#06F']
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

function loadWalnutGroveAppLinks() {
	loadAppLinks(WalnutGroveAppLinkInfo, document.getElementById('appLinkAnchor'));
	delete WalnutGroveAppLinkInfo;
}
