var homePageAppLinkInfo = new AppLinkLog(
  [
    ['Fast Track Certificates', 'images/glossy-black-icon-people-things-diploma-sc2.png', 'htdocs/fastTrack.html', '#660088'],
    ['Railroad Industry', 'images/glossy-black-icon-signs-z-roadsign47.png', 'htdocs/railroadIndustry.html', '#EEEEEE'],
    ['Is this for Me?', 'images/glossy-black-icon-people-things-people-man1.png', 'htdocs/forMe.html', '#8888CC'],
    ['Hotels', 'images/glossy-black-icon-people-things-bed.png', 'htdocs/hotels.html', '#1111EE'],
    ['GI Bill Students', 'images/glossy-black-icon-sports-hobbies-medal.png', '#', '#CC0000'],
    ['Learning Tools', 'images/glossy-black-icon-business-tools1.png', '#', '#118811'],
    ['About the Area', 'images/glossy-black-icon-business-globe.png', 'htdocs/area.html', '#FFBB00'],
    ['About Nars', 'images/glossy-black-icon-transport-travel-transportation-train3-sc44.png', 'htdocs/aboutNars.html', '#DD0000'],
    ['FAQ', 'images/glossy-black-icon-alphanumeric-icon_091.png', 'htdocs/faq.html', '#FF8800']
  ],

  [
    ['school'],
    ['educational'],
    [],
    [],
    ['veterans', 'services', 'military'],
    [],
    [],
    [],
    ['frequently', 'asked', 'questions']
  ],

  [
    fastTrackAppLinkInfo,
    railroadIndustryAppLinkInfo,
    forMeAppLinkInfo,
    hotelsAppLinkInfo,
    ,
    ,
    areaAppLinkInfo,
    aboutNarsAppLinkInfo,

  ]
);

delete fastTrackAppLinkInfo;
delete railroadIndustryAppLinkInfo;
delete forMeAppLinkInfo;
delete hotelsAppLinkInfo;
delete areaAppLinkInfo;
delete aboutNarsAppLinkInfo;

function loadHomePageAppLinks() {
  loadAppLinks(homePageAppLinkInfo, document.getElementById('container'));
  delete homePageAppLinkInfo;
}
