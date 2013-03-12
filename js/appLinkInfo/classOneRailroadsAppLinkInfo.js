var classOneRailroadsAppLinkInfo = new AppLinkLog(
  [
    ['Back', '../images/glossy-black-icon-arrows-arrow-styled-left.png', 'railroadIndustry.html', '#CCCCCC'],
    ['BNSF', '../images/filler.png', 'http://www.bnsf.com', 'white'],
    ['CSX Transportation', '../images/filler.png', 'http://www.csx.com', 'white'],
    ['Norfolk Southern', '../images/filler.png', 'http://www.nscorp.com', 'white'],
    ['Union Pacific', '../images/filler.png', 'http://www.up.com', 'white'],
    ['Canadian National', '../images/filler.png', 'http://www.cn.ca/en/careers.htm', 'white'],
    ['Canadian Pacific', '../images/filler.png', 'http://www.cpr.ca/en/Careers/Pages/default.aspx', 'white'],
    ['Kansas City Southern', '../images/filler.png', 'http://www.kcsouthern.com/en-us/Careers/Pages/CareersMain.aspx', 'white']
  ],

  [
    [],
    ['burlington', 'northern', 'santa fe', 'railroad', 'railway'],
    ['railroad'],
    ['railroad'],
    ['railroad'],
    ['railroad'],
    ['railroad'],
    ['railroad']
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
