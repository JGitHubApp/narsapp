var hotelsAppLinkInfo = new AppLinkLog(
  [
    ['Back', '../images/glossy-black-icon-arrows-arrow-styled-left.png', '../index.html', '#CCC'],
    ['CandelWood Suites', '../images/filler.png', '../htdocs/CandlewoodSuites.html', 'white'],
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
