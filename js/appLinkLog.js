// SearchTree object
function SearchTree() {
	this.contains = contains;
	function contains(place, pattern) {
		for	(var i = 0; i < pattern.length; i++)
			if (!binarySearch(this[place], pattern[i], 0, this[place].length-1))
				return false;
		return true;

		function binarySearch(a, p, min, max) {
			while (min <= max) {
				var mid = Math.floor((max + min) / 2);

				if (a[mid].indexOf(p) === 0)
					return true;
				else if (p < a[mid])
					max = mid - 1;
				else
					min = mid + 1;
			}

			return false;
		}
	}

	// Convert SearchTree to a one dimensional array
	this.flatten = flatten;
	function flatten() {
		var tmpArr = [];

		for (var i = 0; i < this.length; i++)
			tmpArr = tmpArr.concat(this[i]);

		return tmpArr;
	}
}

SearchTree.prototype = new Array();

// AppLinkLog object
function AppLinkLog(info, aliases, subAppLinkLogs) {
	// Create array of names
	this.names = [];
	for (var i = 0; i < info.length; i++)
		this.names.push(info[i][0])

	// Create array of image urls
	this.imageurls = [];
	for (var i = 0; i < info.length; i++)
		this.imageurls.push(info[i][1])

	// Create array of links
	this.links = [];
	for (var i = 0; i < info.length; i++)
		this.links.push(info[i][2])

	// Create array of background colors
	this.backgroundColors = [];
	for (var i = 0; i < info.length; i++)
		this.backgroundColors.push(info[i][3])


	// Create SearchTree for aliases
	this.aliases = new SearchTree();

	// Add names to SearchTree
	for (var i = 0; i < this.names.length; i++)
		this.aliases.push(this.names[i].toLowerCase().split(' '));

	// Add aliases to SearchTree
	for (var i = 0; i < aliases.length; i++)
		if (aliases[i][0])
			this.aliases[i] = this.aliases[i].concat(aliases[i]);

	// Add subAppLinkLog aliases to SearchTree
	for (var i = 0; i < subAppLinkLogs.length; i++)
		if (subAppLinkLogs[i])
			this.aliases[i] = this.aliases[i].concat(subAppLinkLogs[i].aliases.flatten());

	// Sort the SearchTree aliases
	for (var i = 0; i < this.aliases.length; i++)
		this.aliases[i].sort();

	// Remove duplicate aliases from the SearchTree
	for (var i = 0; i < this.aliases.length; i++)
		for (var j = this.aliases[i].length - 1; j > 0; j--)
			if (this.aliases[i][j].indexOf(this.aliases[i][j - 1]) === 0)
				this.aliases[i].splice(j - 1, 1);
}
