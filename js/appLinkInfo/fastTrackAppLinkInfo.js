var fastTrackAppLinkInfo = new AppLinkLog(
  [
    ['Back', '../images/glossy-black-icon-arrows-arrow-styled-left.png', '../index.html', '#CCCCCC'],
    ['Conductor', '../images/glossy-black-icon-transport-travel-transportation-train4.png', '#', '#0000EE'],
    ['Freight Car', '../images/glossy-black-icon-transport-travel-transportation-train6-sc36.png', '#', '#EE0000'],
    ['Signal Systems', '../images/glossy-black-icon-signs-stop-lights2.png', '../htdocs/signalSystems.html', '#EEEE00']
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
