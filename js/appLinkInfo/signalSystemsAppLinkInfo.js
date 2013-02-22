var signalSystemsAppLinkInfo = new AppLinkLog(
  [
    ['Back', '../images/glossy-black-icon-arrows-arrow-styled-left.png', '../htdocs/fastTrack.html', '#CCCCCC'],
    ['Date and Fees', '../images/glossy-black-icon-alphanumeric-dollar-sign.png', '#', '#00FF00'],
    ['How to Apply', '../images/filler.png', '#', 'white'],
    ['Preparation', '../images/filler.png', '#', 'white'],
    ['Class Schedule', '../images/glossy-black-icon-business-calendar.png', '#', '#EEEEEE']
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
