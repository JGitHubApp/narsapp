var forMeAppLinkInfo = new AppLinkLog(
  [
    ['Back', '../images/glossy-black-icon-arrows-arrow-styled-left.png', '../index.html', '#CCCCCC'],
    ['Typical Mandatory Industry Requirements', '../images/filler.png', '#', 'white'],
    ['Successful Railroad Worker Attributes', '../images/manOnRailroadTracks.png', '#', '#33CC33']
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
