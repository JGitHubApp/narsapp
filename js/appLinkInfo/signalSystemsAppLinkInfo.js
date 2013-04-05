signalSystemsAppLinkInfo = new AppLinkLog(
	[
		['Back', '../images/icons/glossy-black-icon-arrows-arrow-styled-left.png', '../htdocs/fastTrack.html', '#CCC'],
		['Dates and Fees', '../images/icons/glossy-black-icon-business-currency-dollar-sc35.png', 'http://www.jccc.edu/railroad/signal/training-dates-fees.html', '#0F0'],
		['How to Apply', '../images/icons/glossy-black-icon-business-document4.png', 'http://www.jccc.edu/railroad/signal/admissions.html', '#FFF'],
		['How to Prepare', '../images/icons/glossy-black-icon-business-notepad.png', 'http://www.jccc.edu/railroad/signal/training-day.html', '#F50'],
		['Class Schedule', '../images/icons/glossy-black-icon-business-calendar.png', '#', '#EEE']
	],

	[
		[],
		['fast', 'track', 'signals', 'systems', 'money', 'tuition', 'times'],
		['fast', 'track', 'signals', 'systems'],
		['fast', 'track', 'signals', 'systems', 'preparations', 'ready'],
		['fast', 'track', 'signals', 'systems', 'time', 'when']
	],

	[
		,
		,
		,
		,
		
	]
);

function loadSignalSystemsAppLinks() {
	loadAppLinks(signalSystemsAppLinkInfo, document.getElementById('container'));
	delete signalSystemsAppLinkInfo;
	getSearchQuery();
}
