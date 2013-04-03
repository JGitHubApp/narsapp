var CandlewoodSuitesAppLinkInfo = new AppLinkLog(
  [
    ['Back', '../images/icons/glossy-black-icon-arrows-arrow-styled-left.png', '../htdocs/hotels.html', '#CCC'],
    ['Candlewood Suites', '../images/icons/filler.png', 'http://www.ichotelsgroup.com/h/d/cw/1/en/hotel/mkcom?rpb=hotel&crUrl=/h/d/cw/1/en/hotelsearchresults', 'white'],
    ['Phone', '../images/icons/glossy-black-icon-business-phone2.png', 'tel:18009314667', '#A00']
  ],

  [
    [],
    [],
    []
  ],

  [
    ,
    ,
    
  ]
);

function loadCandlewoodSuitesAppLinks() {
  loadAppLinks(CandlewoodSuitesAppLinkInfo, document.getElementById('appLinkAnchor'));
  delete CandlewoodSuitesAppLinkInfo;
  getSearchQuery();
}

/*
var CandlewoodSuitesAppLinkInfo = new AppLinkLog(
  [
    ['Back', '../images/icons/glossy-black-icon-arrows-arrow-styled-left.png', '../htdocs/hotels.html', '#CCC'],
    ['Candelwood Suites', '../images/icons/filler.png', 'http://www.ichotelsgroup.com/h/d/cw/1/en/hotel/mkcom?rpb=hotel&crUrl=/h/d/cw/1/en/hotelsearchresults', 'white'],
    ['Phone', '../images/icons/glossy-black-icon-business-phone2.png', 'tel:18009314667', '#A00'],
    ['Directions', '../images/icons/glossy-black-icon-business-globe.png', 'http://goo.gl/maps/hZlTs', '#06F']
  ],

  [
    [],
    [],
    [],
    []
  ],

  [
    ,
    ,
    ,
    
  ]
);

function loadCandlewoodSuitesAppLinks() {
  loadAppLinks(CandlewoodSuitesAppLinkInfo, document.getElementById('appLinkAnchor'));
  delete CandlewoodSuitesAppLinkInfo;
  getSearchQuery();
}
*/
