var fastTrackAppLinkInfo = new AppLinkLog(
  [
    ['Back', '../images/glossy-black-icon-arrows-arrow-styled-left.png', '../index.html', '#CCCCCC'],
    ['Conductor', '../images/glossy-black-icon-transport-travel-transportation-train4.png', '#', '#FFFFFF'],
    ['Freight Car', '../images/glossy-black-icon-transport-travel-transportation-train6-sc36.png', '#', '#FFFFFF'],
    ['Signal Systems', '../images/filler.png', '../htdocs/signalSystems.html', '#FFFFFF']
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
    signalSystemsAppLinkInfo
  ]
);

delete signalSystemsAppLinkInfo

function loadFastTrackAppLinks() {
  loadAppLinks(fastTrackAppLinkInfo, document.getElementById('container'));
  delete fastTrackAppLinkInfo;
  getSearchQuery();
}
