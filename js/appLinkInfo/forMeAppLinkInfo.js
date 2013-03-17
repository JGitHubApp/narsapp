var forMeAppLinkInfo = new AppLinkLog(
  [
    ['Back', '../images/glossy-black-icon-arrows-arrow-styled-left.png', '../index.html', '#CCC'],
    ['Typical Mandatory Industry Requirements', '../images/filler.png', 'http://www.jccc.edu/railroad/requirements.html', 'white'],
    ['Successful Railroad Worker Attributes', '../images/manOnRailroadTracks.png', 'http://www.jccc.edu/railroad/attributes.html', '#3C3']
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

function loadForMeAppLinks() {
  loadAppLinks(forMeAppLinkInfo, document.getElementById('container'));
  delete forMeAppLinkInfo;
  getSearchQuery();
}
