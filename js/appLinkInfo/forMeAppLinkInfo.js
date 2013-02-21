var forMeAppLinkInfo = new AppLinkLog(
  [
    ['Back', '../images/filler.png', '../index.html', 'white'],
    ['Typical Mandatory Industry Requirements', '../images/filler.png', '#', 'white'],
    ['Successful Railroad Worker Attributes', '../images/filler.png', '#', 'white']
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
