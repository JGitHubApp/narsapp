/*
Layout of the AppLink object:

+---------------------------------+
|       +-----------------+       |
|       |   +---------+   |       |
|       |   |         |   |       |
|       |   | PICTURE |   |       |
|       |   |         |   |       |
|       |   +---------+   |       |
|       |                 |       |
|       |   +---------+   |       |
|       |   |  NAME   |   |       |
|       |   +---------+   |       |
|       |                 |       |
|       |    HYPERLINK    |       |
|       +-----------------+       |
|            CONTAINER            |
+---------------------------------+

			<div class='appLinkContainer'>
				<a class='appLinkHyperLink' href='#' onclick='this.href += "?" + document.getElementById("searchBar").value'>
					<img src='image' class='appLinkPic' />
					<div class='appLinkName'></div>
				</a>
			</div>
*/

// Create appLinks indicated in appLinkInfo and place them in container
function loadAppLinks(appLinkInfo, container) {

	// AppLink Object declaration
	function AppLink (name, image, link, color, tabindex) {

		// Create picture
		this.picture = document.createElement('img');
		this.picture.setAttribute('class', 'appLinkPic');
		this.picture.src = image;
		this.picture.alt = name;
		if (color) this.picture.style.backgroundColor = color;

		// Create Name
		this.name = document.createElement('p');
		this.name.setAttribute('class', 'appLinkName');
		this.name.appendChild(document.createTextNode(name));

		// Create HyperLink
		this.hyperLink = document.createElement('a');
		this.hyperLink.setAttribute('class', 'appLinkHyperLink');
		this.hyperLink.setAttribute('href', link);
		this.hyperLink.setAttribute('onclick', 'putSearchQuery(this)');
		this.hyperLink.setAttribute('ontouchstart', '');
		if (tabindex) this.hyperLink.setAttribute('tabindex', tabindex);
		this.hyperLink.appendChild(this.picture);
		this.hyperLink.appendChild(this.name);

		// Create Container
		this.container = document.createElement('div');
		this.container.setAttribute('class', 'appLinkContainer');
		this.container.appendChild(this.hyperLink);
	}

	if (!container) container = document.body

	// Create a link for every sub-array within appLinkInfo.
	for (var i = 0; i < appLinkInfo.names.length; i++) {
		var tmp = new AppLink(appLinkInfo.names[i], appLinkInfo.imageurls[i], appLinkInfo.links[i], appLinkInfo.backgroundColors[i], i+1);
		container.appendChild(tmp.container);
	}

	// Extend container to contain all AppLinks
	var clearFix = document.createElement('div');
	clearFix.setAttribute('class', 'clearfix');
	container.appendChild(clearFix);

	rootSearchTree = appLinkInfo.aliases;
}
