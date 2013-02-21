var signalSystemsAppLinkInfo = new AppLinkLog(
  [
    ['Back', '../images/backArrowSymbol.png', '../htdocs/fastTrack.html', '#CCCCCC'],
    ['Date and Fees', '../images/dollarSymbol.png', '#', '#00FF00'],
    ['How to Apply', '../images/filler.png', '#', 'white'],
    ['Preparation', '../images/filler.png', '#', 'white'],
    ['Class Schedule', '../images/clock2.png', '#', '#EEEEEE']
  ],

  [
    [],
    ['money', 'tuition', 'times'],
    [''],
    ['prepare', 'ready'],
    ['time', 'when']
  ],

  [
    ,
    ,
    ,
    ,
    
  ]
);

function loadSignalSystemsAppLinks() {
  loadAppLinks(signalSystemsAppLinkInfo, document.getElementById('container'));
  delete signalSystemsAppLinkInfo;
  getSearchQuery();
}
