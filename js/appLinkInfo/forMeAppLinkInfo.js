var forMeAppLinkInfo = new AppLinkLog(
  [
    ['Back', '../images/glossy-black-icon-arrows-arrow-styled-left.png', '../index.html', '#CCCCCC'],
    ['Typical Mandatory Industry Requirements', '../images/filler.png', 'http://www.jccc.edu/railroad/requirements.html', 'white'],
    ['Successful Railroad Worker Attributes', '../images/manOnRailroadTracks.png', 'http://www.jccc.edu/railroad/attributes.html', '#33CC33']
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
