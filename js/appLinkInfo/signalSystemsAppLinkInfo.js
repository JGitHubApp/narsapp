var signalSystemsAppLinkInfo = new AppLinkLog(
  [
    ['Back', '../images/glossy-black-icon-arrows-arrow-styled-left.png', '../htdocs/fastTrack.html', '#CCCCCC'],
    ['Dates and Fees', '../images/glossy-black-icon-business-currency-dollar-sc35.png', 'http://www.jccc.edu/railroad/signal/training-dates-fees.html', '#00FF00'],
    ['How to Apply', '../images/filler.png', 'http://www.jccc.edu/railroad/signal/admissions.html', 'white'],
    ['How to Prepare', '../images/../images/glossy-black-icon-business-notepad.png', 'http://www.jccc.edu/railroad/signal/training-day.html', '#FF5500'],
    ['Class Schedule', '../images/glossy-black-icon-business-calendar.png', '#', '#EEEEEE']
  ],

  [
    [],
    ['money', 'tuition', 'times'],
    [''],
    ['preparations', 'ready'],
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
