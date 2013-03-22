var hotelsAppLinkInfo = new AppLinkLog(
  [
    ['Back', '../images/icons/glossy-black-icon-arrows-arrow-styled-left.png', '../index.html', '#CCC'],
    ['CandelWood Suites', '../images/icons/filler.png', '../htdocs/CandlewoodSuites.html', 'white'],
    ['Chase Suites', '../images/icons/filler.png', '#', 'white'],
    ['Crowne Plaza', '../images/icons/filler.png', '#', 'white'],
    ['Drury Inn', '../images/icons/filler.png', '#', 'white'],
    ['Hawthorne Suites', '../images/icons/filler.png', '#', 'white'],
    ['Pear Tree Inn', '../images/icons/filler.png', '#', 'white'],
    ['Walnut Grove RV Park', '../images/icons/filler.png', '#', 'white']
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
