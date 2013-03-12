var areaAppLinkInfo = new AppLinkLog(
  [
    ['Back', '../images/glossy-black-icon-arrows-arrow-styled-left.png', '../index.html', '#CCCCCC'],
    ['Airport', '../images/glossy-black-icon-transport-travel-transportation-airplane4.png', 'http://www.flykci.com', 'white'],
    ['JCCC Campus Map', '../images/filler.png', '#', 'white'],
    ['Forecast', '../images/glossy-black-icon-people-things-umbrella2.png', 'http://weather.yahoo.com', '#FFCC00']
  ],

  [
    [],
    ['plane', 'flew', 'directions', 'kansas', 'city', 'international'],
    ['johnson', 'county', 'community', 'college'],
    ['weather', 'report', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'tomorrow', 'weekly', 'day', 'today']
  ],

  [
    ,
    ,
    ,
    
  ]
);

function loadAreaAppLinks() {
  loadAppLinks(areaAppLinkInfo, document.getElementById('container'));
  delete areaAppLinkInfo;
  getSearchQuery();
}
