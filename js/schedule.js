function goToWeek(weekName) {
	if (weekName !== 'default') {
		// Scroll to week
		location.href = '#' + weekName;

		// set week to selected value
		var week = document.getElementById(weekName);

		// Highlight the week temporarily
		week.style.backgroundColor = '#00D'
		setTimeout(function(){week.style.backgroundColor = ''}, 550);
	}
}
