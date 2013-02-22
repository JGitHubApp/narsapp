var aboutNarsAppLinkInfo = new AppLinkLog(
  [
    ['Back', '../images/glossy-black-icon-arrows-arrow-styled-left.png', '../index.html', '#CCCCCC'],
    ['Pictures', '../images/glossy-black-icon-people-things-camera.png', '#', '#00AA33'],
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
