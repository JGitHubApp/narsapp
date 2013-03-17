var signalSystemsAppLinkInfo = new AppLinkLog(
  [
    ['Back', '../images/glossy-black-icon-arrows-arrow-styled-left.png', '../htdocs/fastTrack.html', '#CCC'],
    ['Dates and Fees', '../images/glossy-black-icon-business-currency-dollar-sc35.png', 'http://www.jccc.edu/railroad/signal/training-dates-fees.html', '#0F0'],
    ['How to Apply', '../images/filler.png', 'http://www.jccc.edu/railroad/signal/admissions.html', 'white'],
    ['How to Prepare', '../images/../images/glossy-black-icon-business-notepad.png', 'http://www.jccc.edu/railroad/signal/training-day.html', '#F50'],
    ['Class Schedule', '../images/glossy-black-icon-business-calendar.png', '#', '#EEE']
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
