var fastTrackAppLinkInfo = new AppLinkLog(
  [
    ['Back', '../images/backArrowSymbol.png', '../index.html', '#CCCCCC'],
    ['Conductor', '../images/simplePilotWithSmokeSymbol.png', '#', '#FFFFFF'],
    ['Freight Car', '../images/freightCarSymbol.png', '#', '#FFFFFF'],
    ['Signal Systems', '../images/rrSignSymbol.png', '../htdocs/signalSystems.html', '#FFFFFF']
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
