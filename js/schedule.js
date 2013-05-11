function goToWeek(weekName) {
	if (weekName !== 'default') {
		// set week to selected value
		var week = document.getElementById(weekName);

		// Scroll to week
		scrollTo(0, week.offsetTop);

		// Highlight the week temporarily
		week.style.backgroundColor = '#00D'
		setTimeout(function(){week.style.backgroundColor = ''}, 550);
	}
}
