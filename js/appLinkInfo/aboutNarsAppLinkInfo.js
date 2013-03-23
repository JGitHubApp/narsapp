var aboutNarsAppLinkInfo = new AppLinkLog(
  [
    ['Back', '../images/icons/glossy-black-icon-arrows-arrow-styled-left.png', '../index.html', '#CCC'],
    ['Twitter', '../images/icons/twitter-bird-dark-bgs.png', 'https://twitter.com/NARS_RRTraining', '#00ACED'],
    ['Facebook', '../images/icons/f_logo.png', 'http://www.facebook.com/pages/National-Academy-of-Railroad-Science/162421800480129', '#3B5B99'],
    ['Pictures', '../images/icons/glossy-black-icon-people-things-camera.png', '#', '#0A3']
  ],

  [
    [],
    ['social'],
    ['social'],
    ['photographs']
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
