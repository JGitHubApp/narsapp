
function updateColumn(obj, col) {
  var tbl = document.getElementById('hotelTable');

  for (var i = 1; i <= 7; i++) {
    var cell = tbl.getElementsByTagName('tr')[i].getElementsByTagName('td')[col];

    cell.innerHTML = hotelAmenities[obj.selectedIndex][i-1][0];

    cell.classList.remove('true');
    cell.classList.remove('false');

    if (hotelAmenities[obj.selectedIndex][i-1][1])
      cell.classList.add(hotelAmenities[obj.selectedIndex][i-1][1]);
  }
}

var hotelAmenities =
  [
    [['$34.99', ''], ['$50.00', ''], ['$44.00', ''], ['$59.00', ''], ['$45.00<br />*$50.00 Suite', ''], ['$45.00', ''], ['$30.00 OR $480 / month', '']],
    [['0.8 miles', ''], ['4.3 miles', ''], ['3 miles', ''], ['4.3 miles', ''], ['1 mile', ''], ['4.3 miles', ''], ['10 miles', '']],
    [['Free', 'true'], ['Free', 'true'], ['Free', 'true'], ['Free', 'true'], ['Free', 'true'], ['Free', 'true'], ['Free', 'true']],
    [['', 'true'], ['', 'true'], ['', 'false'], ['', 'true'], ['*', 'true'], ['', 'false'], ['', 'false']],
    [['', 'true'], ['', 'true'], ['', 'false'], ['', 'false'], ['*', 'true'], ['', 'false'], ['', 'false']],
    [['', 'true'], ['', 'true'], ['', 'true'], ['', 'true'], ['', 'true'], ['', 'true'], ['', 'false']],
    [['', 'true'], ['', 'true'], ['', 'true'], ['', 'true'], ['', 'false'], ['', 'true'], ['', 'false']],
    [['Free', 'true'], ['Free', 'true'], ['', 'false'], ['Free', 'true'], ['Free', 'true'], ['Free', 'true'], ['', 'false']],
    [['M-Th', 'true'], ['M-Th', 'true'], ['', 'false'], ['7 nights a week', 'true'], ['M-Th', 'true'], ['', 'false'], ['', 'false']],
    [['', 'false'], ['', 'true'], ['', 'true'], ['', 'false'], ['', 'true'], ['', 'false'], ['', 'false']],
    [['Free', 'true'], ['', 'true'], ['', 'true'], ['', 'true'], ['', 'true'], ['', 'true'], ['', 'true']],
    [['', 'false'], ['', 'false'], ['', 'true'], ['', 'true'], ['', 'false'], ['', 'false'], ['', 'false']],
  ];

for (var i = 1; i <= 4; i++)
  updateColumn(document.getElementById('col' + i), i-1)
