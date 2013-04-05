var firstMatch = -1; // Contains the index of the first occurence of the matching appLink.

// Search through the appLinks.
function search(pattern, keypress) {
	if (keypress !== 32) { // not space key
		// Remove special characters
		pattern = pattern.toLowerCase().replace(/'[smd]|[^\w ]/g, '');
		// Remove common/unimportant words
		pattern = pattern.replace(/\b(\w{1,3} |(w(hat|hich|ill|ant|ith)|have|this|that|about|some|from|back|(look|find)(ing)?|info(rmation)?) )/g, ' ');

		var appLinks = document.getElementsByClassName('appLinkHyperLink');

		if (pattern === '') {
			for (var i = 0; i < appLinks.length; i++)
				appLinks[i].className = 'appLinkHyperLink';

			resetTabIndex(appLinks);
		}
		else if (keypress === 13) { // Enter key
			focusFirstOccurence();
		}
		else {
			highlightMatches(pattern, appLinks);
		}
	}
}

// Highlight all the appLinks that match the pattern.
function highlightMatches(pattern, appLinks) {
	firstMatch = -1;
	var matchCount = 0;
	pattern = pattern.trim().replace(/ {2,}/g, ' ');

	if (pattern === '') return;

	pattern = pattern.split(' ');

	// Iterate through all AppLink objects on current page
	for (var i = 0; i < appLinks.length; i++) {
		if (rootSearchTree.contains(i, pattern)) {
			if (firstMatch == -1) firstMatch = i;

			appLinks[i].className = 'appLinkHyperLink searched';
			appLinks[i].tabIndex = ++matchCount;
		}
		else {
			appLinks[i].className = 'appLinkHyperLink notSearched';
			appLinks[i].tabIndex = -1;
		}
	}

	if (firstMatch <= -1)
		resetTabIndex(appLinks);
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

// Sets the searchBar value equal to the URL string query.
function getSearchQuery() {
	// Parse search pattern from URL
	var query = location.search.substr(1).replace(/%20/g, ' ');

	if (query) {
		search(query); // Check for matches

		if (focusFirstOccurence())
			document.getElementById('searchBar').value = query;
		else
			search(''); // Reset searchBar
	}
}

// Updates an AppLink's hyperlink address
function putSearchQuery(link) {
	// Clear previous search pattern from link's address
	var cleanLink = link.href.toString().replace(/\?.*/, '');

	// Insert new string query link's address
	link.href = cleanLink + "?" + document.getElementById("searchBar").value
}

// Sets the tab index for all the appLinks to their default values.
function resetTabIndex(appLinks) {
	for (var i = 0; i < appLinks.length; i++)
		appLinks[i].tabIndex = '';

	firstMatch = -1;
}
