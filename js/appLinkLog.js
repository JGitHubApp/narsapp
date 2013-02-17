// SearchTree object
function SearchTree() {
  this.contains = contains;
  function contains(place, pattern) {
    for  (var i = 0; i < pattern.length; i++)
      if (!binarySearch(this[place], pattern[i], 0, this[place].length-1))
        return false;
    return true;

    function binarySearch(a, p, min, max) {
      if (min <= max) {
        var mid = Math.floor((max + min) / 2);

        if (a[mid].indexOf(p) === 0)
          return true;
        else if (p < a[mid])
          return binarySearch(a, p, min, mid-1);
        else
          return binarySearch(a, p, mid+1, max);
      }

      return false;
    }
  }

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
  this.names = [];
  for (var i = 0; i < info.length; i++)
    this.names.push(info[i][0])

  this.imageurls = [];
  for (var i = 0; i < info.length; i++)
    this.imageurls.push(info[i][1])

  this.links = [];
  for (var i = 0; i < info.length; i++)
    this.links.push(info[i][2])

  this.backgroundColors = [];
  for (var i = 0; i < info.length; i++)
    this.backgroundColors.push(info[i][3])

  this.aliases = new SearchTree();
  for (var i = 0; i < this.names.length; i++)
    this.aliases.push(this.names[i].toLowerCase().split(' '));
  for (var i = 0; i < aliases.length; i++)
    if (aliases[i][0])
      this.aliases[i] = this.aliases[i].concat(aliases[i]);
  for (var i = 0; i < subAppLinkLogs.length; i++)
    if (subAppLinkLogs[i])
      this.aliases[i] = this.aliases[i].concat(subAppLinkLogs[i].aliases.flatten());
  for (var i = 0; i < this.aliases.length; i++)
    this.aliases[i].sort();
}
