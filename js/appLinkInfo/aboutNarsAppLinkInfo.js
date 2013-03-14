var aboutNarsAppLinkInfo = new AppLinkLog(
  [
    ['Back', '../images/glossy-black-icon-arrows-arrow-styled-left.png', '../index.html', '#CCCCCC'],
    ['Pictures', '../images/glossy-black-icon-people-things-camera.png', '#', '#00AA33'],
    ['Twitter', '../images/twitter-bird-dark-bgs.png', 'https://twitter.com/NARS_RRTraining', '#00ACED'],
    ['Facebook', '../images/f_logo.png', 'http://www.facebook.com/pages/National-Academy-of-Railroad-Science/162421800480129', '#3B5B99']
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
