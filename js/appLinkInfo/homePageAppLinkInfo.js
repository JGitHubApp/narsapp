var homePageAppLinkInfo = new AppLinkLog(
  [
    ['Fast Track Certificates', 'images/simpleTracksSymbol.png', 'htdocs/fastTrack.html', '#330066'],
    ['Railroad Industry', 'images/rrSignSymbol.png', 'htdocs/railroadIndustry.html', '#EEEEEE'],
    ['Is this for Me?', 'images/manSymbol.png', 'htdocs/forMe.html', '#8888CC'],
    ['Hotels', 'images/bedFrontSymbol.png', 'htdocs/hotels.html', '#1111EE'],
    ['GI Bill Students', 'images/medalSymbol.png', '#', '#CC0000'],
    ['Learning Tools', 'images/crossedHammerWrenchSymbol.png', '#', '#882288'],
    ['About the Area', 'images/kansasSymbol.png', 'htdocs/area.html', '#FFBB00'],
    ['About Nars', 'images/simplePilotSymbol.png', 'htdocs/aboutNars.html', '#DD0000'],
    ['FAQ', 'images/questionMarkSymbol.png', '#', '#FF8800']
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
