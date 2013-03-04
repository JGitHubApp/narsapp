var firstMatch = -1; // Contains the index of the first occurence of the matching appLink.

// Search through the appLinks.
function search(pattern, keypress) {
  if (keypress !== 32) { // not space key
    // Remove special characters
    pattern = pattern.toLowerCase().replace(/'[smd]|[^\w ]/g, '');
    // Remove common/pointless words
    pattern = pattern.replace(/\b(\w{1,3} |(what|which|next|this|will|want|about|from|(need|look|find)(ing)?|info(rmation)?) )/g, ' ');

    var appLinks = document.getElementsByClassName('appLinkHyperLink');

    if (pattern === '') {
      for (var i = 0; i < appLinks.length; i++) {
        appLinks[i].classList.remove('searched');
        appLinks[i].classList.remove('notSearched');
      }

      window.scroll(0, 0);
      resetTabIndex(appLinks);
    }
    else if (keypress === 13) { // Enter key
      if (firstMatch > -1)
        appLinks[firstMatch].focus();
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
    if (!navigator.platform.match('iPhone|iPod|iPad'))
    window.scroll((appLinks[firstMatch].offsetLeft - 10), (appLinks[firstMatch].offsetTop - 80));
  else
    resetTabIndex(appLinks);
}

function imitateFocus(imitate) {
  var firstAppLink = document.getElementsByClassName('appLinkHyperLink')[firstMatch];

  if (imitate)
    firstAppLink.classList.add('imitateFocus');
  else
    firstAppLink.classList.remove('imitateFocus');
}

// Sets the searchBar value equal to the string query.
function getSearchQuery() {
  var query = location.search.substr(1).replace(/%20/g, ' ');

  if (query) {
    search(query);
    if (firstMatch > -1)
    {
      document.getElementById('searchBar').value = query;
      document.getElementsByClassName('appLinkHyperLink')[firstMatch].focus();
    }
    else
      search('');
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
