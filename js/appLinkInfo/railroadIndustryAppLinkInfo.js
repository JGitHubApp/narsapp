var railroadIndustryAppLinkInfo = new AppLinkLog(
  [
    ['Back', '../images/glossy-black-icon-arrows-arrow-styled-left.png', '../index.html', '#CCCCCC'],
    ['ASLRRA Homepage', '../images/filler.png', 'http://www.aslrra.org', 'white'],
    ['Class I Railroads', '../images/glossy-black-icon-transport-travel-transportation-train8-sc43.png', '../htdocs/classOneRailroads.html', '#FF4400']
  ],

  [
    [],
    ['american', 'short', 'line', 'association', 'railroad'],
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
