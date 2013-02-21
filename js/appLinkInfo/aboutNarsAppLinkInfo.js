var aboutNarsAppLinkInfo = new AppLinkLog(
  [
    ['Back', '../images/backArrowSymbol.png', '../index.html', '#CCCCCC'],
    ['Pictures', '../images/camera.png', '#', '#00AA33'],
    ['Twitter', '../images/twitter-bird-dark-bgs.png', '#', '#00ACED'],
    ['Facebook', '../images/f_logo.png', '#', '#3B5B99']
  ],

  [
    [],
    ['photographs'],
    ['social'],
    ['social']
  ],

  [
    ,
    ,
    ,
    
  ]
);

function loadAboutNarsAppLinks() {
  loadAppLinks(aboutNarsAppLinkInfo, document.getElementById('container'));
  delete aboutNarsAppLinkInfo;
  getSearchQuery();
}
