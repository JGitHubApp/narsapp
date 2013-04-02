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
    ['hotels','apartments', 'suites', 'kitchens', 'fitness', 'centers', 'athletics', 'clubs', 'passes', 'wifi', 'wireless', 'internet', 'breakfast', 'dinner', 'washers', 'washing', 'machines', 'dryers'],
    ['hotels','apartments', 'suites', 'kitchens', 'fitness', 'centers', 'athletics', 'clubs', 'passes', 'wifi', 'wireless', 'internet', 'breakfast', 'dinner', 'shuttle', 'washers', 'washing', 'machines', 'dryers'],
    ['hotels','fitness', 'centers', 'athletics', 'clubs', 'passes', 'wifi', 'wireless', 'internet', 'shuttle', 'washers', 'washing', 'machines', 'dryers', 'pools'],
    ['hotels','fitness', 'centers', 'athletics', 'clubs', 'passes', 'wifi', 'wireless', 'internet', 'shuttle', 'washers', 'washing', 'machines', 'dryers', 'pools'],
    ['hotels','apartments', 'suites', 'kitchens', 'fitness', 'centers', 'wifi', 'wireless', 'internet', 'breakfast', 'dinner', 'shuttle', 'washers', 'washing', 'machines', 'dryers'],
    ['hotels','fitness', 'centers', 'athletics', 'clubs', 'passes', 'wifi', 'wireless', 'internet', 'breakfast', 'washers', 'washing', 'machines', 'dryers'],
    ['wifi', 'wireless', 'internet', 'washers', 'washing', 'machines', 'dryers']
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
