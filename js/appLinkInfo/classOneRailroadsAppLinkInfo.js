var classOneRailroadsAppLinkInfo = new AppLinkLog(
  [
    ['Back', '../images/backArrowSymbol.png', 'railroadIndustry.html', '#CCCCCC'],
    ['BNSF', '../images/filler.png', '#', 'white'],
    ['CSX Transportation', '../images/filler.png', '#', 'white'],
    ['Norfolk Southern', '../images/filler.png', '#', 'white'],
    ['Union Pacific', '../images/filler.png', '#', 'white'],
    ['Canadian National', '../images/filler.png', '#', 'white'],
    ['Canadian Pacific', '../images/filler.png', '#', 'white'],
    ['Kansas City Southern', '../images/filler.png', '#', 'white']
  ],

  [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
  ],

  [
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    
  ]
);

function loadClassOneRailroadsAppLinks() {
  loadAppLinks(classOneRailroadsAppLinkInfo, document.getElementById('container'));
  delete classOneRailroadsAppLinkInfo;
  getSearchQuery();
}
