var fastTrackAppLinkInfo = new AppLinkLog(
  [
    ['Back', '../images/glossy-black-icon-arrows-arrow-styled-left.png', '../index.html', '#CCC'],
    ['Conductor', '../images/glossy-black-icon-transport-travel-transportation-train4.png', '#', '#00E'],
    ['Freight Car', '../images/glossy-black-icon-transport-travel-transportation-train6-sc36.png', '#', '#E00'],
    ['Signal Systems', '../images/glossy-black-icon-signs-stop-lights2.png', '../htdocs/signalSystems.html', '#EE0']
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
