var railroadIndustryAppLinkInfo = new AppLinkLog(
  [
    ['Back', '../images/backArrowSymbol.png', '../index.html', '#CCCCCC'],
    ['ASLRRA Homepage', '../images/filler.png', '#', 'white'],
    ['Class I Railroads', '../images/filler.png', '../htdocs/classOneRailroads.html', 'white']
  ],

  [
    [],
    [],
    ['one', '1']
  ],

  [
    ,
    ,
    classOneRailroadsAppLinkInfo
  ]
);

delete classOneRailroadsAppLinkInfo;

function loadRailroadIndustryAppLinks() {
  loadAppLinks(railroadIndustryAppLinkInfo, document.getElementById('container'));
  delete railroadIndustryAppLinkInfo;
  getSearchQuery();
}
