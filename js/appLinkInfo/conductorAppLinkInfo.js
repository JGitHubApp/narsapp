var conductorAppLinkInfo = new AppLinkLog(
	[
		['Back', '../images/icons/glossy-black-icon-arrows-arrow-styled-left.png', '../htdocs/fastTrack.html', '#CCC'],
		['Dates and Fees', '../images/icons/glossy-black-icon-business-currency-dollar-sc35.png', 'http://www.jccc.edu/railroad/conductor/training-dates-fees.html', '#0F0'],
		['How to Apply', '../images/icons/glossy-black-icon-business-document4.png', 'http://www.jccc.edu/railroad/conductor/admissions.html', '#FFF'],
		['How to Prepare', '../images/icons/glossy-black-icon-business-notepad.png', 'http://www.jccc.edu/railroad/conductor/training-day.html', '#F50'],
		['Class Schedule', '../images/icons/glossy-black-icon-business-calendar.png', '../htdocs/conductorSchedule.html', '#EEE']
	],

	[
		[],
		['fast', 'track', 'conductors', 'money', 'tuition', 'times'],
		['fast', 'track', 'conductors', ''],
		['fast', 'track', 'conductors', 'preparations', 'ready'],
		['fast', 'track', 'conductors', 'time', 'when']
	],

	[
		,
		,
		,
		,
		
	]
);

function loadConductorAppLinks() {
	loadAppLinks(conductorAppLinkInfo, document.getElementById('container'));
	delete conductorAppLinkInfo;
	getSearchQuery();
}
