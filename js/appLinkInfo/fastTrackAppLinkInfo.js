var fastTrackAppLinkInfo = new AppLinkLog(
	[
		['Back', '../images/icons/glossy-black-icon-arrows-arrow-styled-left.png', '../index.html', '#CCC'],
		['Conductor', '../images/icons/glossy-black-icon-transport-travel-transportation-train4.png', '../htdocs/conductor.html', '#00E'],
		['Freight Car', '../images/icons/glossy-black-icon-transport-travel-transportation-train6-sc36.png', '../htdocs/freightCar.html', '#E00'],
		['Signal Systems', '../images/icons/glossy-black-icon-signs-stop-lights2.png', '../htdocs/signalSystems.html', '#EE0']
	],

	[
		[],
		[],
		[],
		[]
	],

	[
		,
		conductorAppLinkInfo,
		freightCarAppLinkInfo,
		signalSystemsAppLinkInfo
	]
);

delete conductorAppLinkInfo;
delete freightCarAppLinkInfo;
delete signalSystemsAppLinkInfo;

function loadFastTrackAppLinks() {
	loadAppLinks(fastTrackAppLinkInfo, document.getElementById('container'));
	delete fastTrackAppLinkInfo;
	getSearchQuery();
}
