var hotelsAppLinkInfo = new AppLinkLog(
  [
    ['Back', '../images/backArrowSymbol.png', '../index.html', '#CCCCCC'],
    ['CandelWood Suites', '../images/filler.png', '#', 'white'],
    ['Chase Suites', '../images/filler.png', '#', 'white'],
    ['Crowne Plaza', '../images/filler.png', '#', 'white'],
    ['Drury Inn', '../images/filler.png', '#', 'white'],
    ['Hawthorne Suites', '../images/filler.png', '#', 'white'],
    ['Pear Tree Inn', '../images/filler.png', '#', 'white'],
    ['Walnut Grove RV Park', '../images/filler.png', '#', 'white']
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

function loadHotelsAppLinks() {
  loadAppLinks(hotelsAppLinkInfo, document.getElementById('container'));
  delete hotelsAppLinkInfo;
  getSearchQuery();
}
