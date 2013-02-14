// AppLinkLog object
function AppLinkLog(info, subAppLinkLogs) {
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

  this.synonyms = [];
  for (var i = 0; i < info.length; i++) {
    var tmpArray = [];
    for (var j = 4; j < info[i].length; j++)
      tmpArray.push(info[i][j]);

    if (subAppLinkLogs[i] && subAppLinkLogs[i].names) {
      tmpArray = tmpArray.concat(subAppLinkLogs[i].names);

      for (var j = 0; j < subAppLinkLogs[i].length; j++) {
        if (subAppLinkLogs[i].synonyms[j])
          tmpArray = tmpArray.concat(subAppLinkLogs[i].synonyms[j]);
        }
    }

    this.synonyms.push(tmpArray);
  }

  this.contains = contains;
  function contains(place, pattern) {
    var returnVal = [];
    for (var i = 0; i < pattern.length; i++)
      returnVal.push(false);

    for  (var i = 0; i < pattern.length; i++) {
      if (this.names[place].toLowerCase().indexOf(pattern[i]) !== -1)
        returnVal[i] = true;
      
      for (var j = 0; j < this.synonyms[place].length && !returnVal[i]; j++) {
        //alert(this.synonyms[place][j] + ' : ' + this.synonyms[place][j].indexOf(pattern[i]));
        if (this.synonyms[place][j].toLowerCase().indexOf(pattern[i]) !== -1)
          returnVal[i] = true;
      }
    }

    for (var i = 0; i < returnVal.length; i++)
      if (!returnVal[i])
        return false;

    return true;
  }
}

var checkListAppLinkInfo = new AppLinkLog(
  [ ['Back', '../images/backArrowSymbol.gif', '../index.html', '#FFFFFF'],
    ['Enrollment', '../images/diplomaSymbol.gif', '#', '#00FF00',
      'apply'],
    ['Supplies', '../images/chestSymbol.gif', '#', '#0000FF',
      'tools'],
    ['name4', '../images/homeSymbol.gif', '#', '#00FF00'],
    ['name5', '../images/homeSymbol.gif', '#', '#FF0000'],
    ['NAME', '../images/homeSymbol.gif', '#', '#FFFF00']],
  [ ,
    ,
    ,
    ,
    ,
     ]
);
    
var homePageAppLinkInfo = new AppLinkLog(
  [ ['CheckLists', 'images/requiredSymbol.gif', 'htdocs/checklists.html', '#FF0000',
    'checkmark'],
    ['Forecast', 'images/umbrellaSymbol.gif', 'http://weather.yahoo.com/', '#FFFF00',
      'weather'],
    ['Learning Tools', 'images/toolsSymbol.gif', 'http://www.google.com', '#0000FF',
      'educational'],
    ['name4', 'images/homeSymbol.gif', '#', '#00FF00'],
    ['name5', 'images/homeSymbol.gif', '#', '#FF0000'],
    ['name6', 'images/homeSymbol.gif', '#', '#0000FF'],
    ['name7', 'images/homeSymbol.gif', '#', '#00FF00'],
    ['name8', 'images/homeSymbol.gif', '#', '#0000FF'],
    ['Enrollment', 'images/diplomaSymbol.gif', '#', '#FF0000',
      'application', 'johnson', 'county', 'community', 'college'] ],
  [ checkListAppLinkInfo]
  /*
    example1,
    example2,
    example3,
    example4,
    example5,
    example6,
    example7,
    example8 ]
    */
);
