var firstMatch = -1; // Contains the index of the first appLink that matches the search pattern.

// Analyze keypress
function search(pattern, keypress) {
	if (keypress === 13)	// enter key
		focusFirstOccurence();
	else
		findPattern(pattern);
}

// Analyze pattern
function findPattern(pattern) {
	// Remove special characters and repeating spaces
	pattern = pattern.trim().toLowerCase().replace(/ {2,}/g, ' ').replace(/'[smd]|[^\w ]/g, '');
	// Remove common/unimportant words
	pattern = pattern.replace(/\b(\w{1,3} |(w(hat|hich|ill|ant|ith)|th(ere|is|at)|have|some|from|back|(look|find)(ing)?|info(rmation)?) )/g, '');

	if (pattern === '' || pattern === ' ')
		resetTabIndex();
	else
		highlightMatches(pattern);
}

// Highlight all the appLinks that match the pattern.
function highlightMatches(pattern, appLinks) {
	var appLinks = document.getElementsByClassName('appLinkHyperLink');
	pattern = pattern.split(' ');
	
	firstMatch = -1;
	var index = 1;

	// Iterate through all AppLink objects on current page
	for (var i = 0; i < appLinks.length; i++) {
		if (rootSearchTree.contains(i, pattern)) {
			if (firstMatch == -1) firstMatch = i;

			appLinks[i].className = 'appLinkHyperLink searched';
			appLinks[i].tabIndex = index++;
		}
		else {
			appLinks[i].className = 'appLinkHyperLink notSearched';
			appLinks[i].tabIndex = -1;
		}
	}
}

// Puts focus on first appLink that matches the search pattern
// Returns true if successful, false otherwise
function focusFirstOccurence() {
	if (firstMatch > -1) {
		document.getElementsByClassName('appLinkHyperLink')[firstMatch].focus();
		return true;
	}
	else {
		return false;
	}
}

// Sets the tab index for all the appLinks to their default values.
function resetTabIndex() {
	var appLinks = document.getElementsByClassName('appLinkHyperLink');

	for (var i = 0; i < appLinks.length; i++) {
		appLinks[i].className = 'appLinkHyperLink';
		appLinks[i].tabIndex = '';
	}

	firstMatch = -1;
}

// Updates an AppLink's hyperlink address
function putSearchQuery(link) {
	// Clear previous search pattern from link's address
	var cleanLink = link.href.replace(/\?.*/, '');

	// Insert new string query link's address
	link.href = cleanLink + '?' + document.getElementById("searchBar").value
}

// Sets the searchBar value equal to the URL string query if there is a match.
function getSearchQuery() {
	// Parse search pattern from URL
	var query = location.search.substr(1).replace(/%20/g, ' ');

	if (query) {
		search(query); // Check for matches

		if (focusFirstOccurence())
			document.getElementById('searchBar').value = query;
		else
			resetTabIndex();
	}
}
