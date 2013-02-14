var firstMatch = -1; // Contains the index of the first occurence of the matching appLink.

// Positions the searchBar.
function searchBar_relocate() {
  var windowY = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

  // If screen scrolls past searchBar
  if (document.getElementById('sticky-anchor').offsetTop - windowY <= 0)
    // Stick searchBar to top of screen
    document.getElementById('searchContainer').className = 'sticky';
  else
    // Set searchBar position to default
    document.getElementById('searchContainer').className = '';
}

// Search through the appLinks.
function search(pattern, keypress) {
  pattern = pattern.trim(' ').toLowerCase().replace(/\W/g, '');
  if (keypress !== 32) {
    var appLinks = document.getElementsByClassName('appLinkHyperLink');

    if (pattern === '') {
      for (var i = 0; i < appLinks.length; i++) {
        appLinks[i].classList.remove('searched');
        appLinks[i].classList.remove('notSearched');
      }

      window.scroll(0, 0);
      resetTabIndex(appLinks);
    }
    else if (keypress === 13) {
      if (firstMatch > -1)
        appLinks[firstMatch].click();
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
  pattern = pattern.split(' ');

  // Iterate through all AppLink objects on current page
  for (var i = 0; i < appLinks.length; i++) {
    if (rootAppLinkLog.contains(i, pattern)) {
      if (firstMatch == -1) firstMatch = i;

      appLinks[i].classList.remove('notSearched');
      appLinks[i].classList.add('searched');
      appLinks[i].tabIndex = ++matchCount;
    }
    else {
      appLinks[i].classList.remove('searched');
      appLinks[i].classList.add('notSearched');
      appLinks[i].tabIndex = -1;
    }
  }

  // Scroll to first match
  if (firstMatch > -1)
    window.scroll((appLinks[firstMatch].offsetLeft - 10), (appLinks[firstMatch].offsetTop - 80));
  else
    resetTabIndex(appLinks);
}

// Sets the searchBar value equal to the string query.
function getSearchQuery() {
  var query = location.search.substr(1).replace(/%20/g, ' ');

  if (query) {
    document.getElementById('searchBar').value = query;
    search(query);
  }
}

function putSearchQuery(link) {
  var cleanLink = link.href.toString().replace(/\?.*/, '');
  link.href = cleanLink + "?" + document.getElementById("searchBar").value
}

// Sets the tab index for all the appLinks to their default values.
function resetTabIndex(appLinks) {
  for (var i = 0; i < appLinks.length; i++)
    appLinks[i].tabIndex = '';
}
