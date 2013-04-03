var freightCarAppLinkInfo = new AppLinkLog(
  [
    ['Back', '../images/icons/glossy-black-icon-arrows-arrow-styled-left.png', '../htdocs/fastTrack.html', '#CCC'],
    ['Dates and Fees', '../images/icons/glossy-black-icon-business-currency-dollar-sc35.png', 'http://www.jccc.edu/railroad/freight-car/training-dates-fees.html', '#0F0'],
    ['How to Apply', '../images/icons/glossy-black-icon-business-document4.png', 'http://www.jccc.edu/railroad/freight-car/admissions.html', '#FFF'],
    ['How to Prepare', '../images/icons/glossy-black-icon-business-notepad.png', 'http://www.jccc.edu/railroad/freight-car/training-day.html', '#F50'],
    ['Class Schedule', '../images/icons/glossy-black-icon-business-calendar.png', '#', '#EEE']
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

function loadfreightCarAppLinks() {
  loadAppLinks(freightCarAppLinkInfo, document.getElementById('container'));
  delete freightCarAppLinkInfo;
  getSearchQuery();
}
