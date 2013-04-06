function goToWeek(menu) {
	if (menu.value !== 'default') {
		// set week to selected value
		var week = document.getElementById(menu.value);

		// Scroll to week
		scrollTo(0, week.offsetTop);

		// Highlight the week temporarily
		week.style.backgroundColor = '#00D'
		setTimeout(function(){week.style.backgroundColor = ''}, 550);
	}
}
