/* Questions */
function toggleAnswer(obj) {
  if (obj.getElementsByTagName('dd')[0].style.display === '') {
    for (var i = 0; i < document.getElementsByClassName('qContainer').length; i++)
      closeAnswer(document.getElementsByClassName('qContainer')[i]);

    openAnswer(obj);
  }
  else {
    closeAnswer(obj);
  }
}

function openAnswer(obj) {
    obj.getElementsByTagName('dd')[0].style.display = 'block';
    obj.getElementsByTagName('dt')[0].style.borderBottom = 'none';
    obj.getElementsByClassName('indicateExpand')[0].innerHTML = '-';
}

function closeAnswer(obj) {
    obj.getElementsByTagName('dd')[0].style.display = '';
    obj.getElementsByTagName('dt')[0].style.borderBottom = '';
    obj.getElementsByClassName('indicateExpand')[0].innerHTML = '+';
}

/* Searchbar */
function search(pattern) {
  pattern = pattern.trim().toLowerCase().replace(/\s+/g, ' ').split(' ');

  faqs = document.getElementsByClassName('qContainer');

  for (var i = 0; i < faqs.length; i++) {
    var found = true;

    for (var j = 0; j < pattern.length; j++) {
      if (faqs[i].getElementsByTagName('h2')[0].innerHTML.toLowerCase().indexOf(pattern[j]) === -1 &&
          faqs[i].getElementsByClassName('keywords')[0].innerHTML.indexOf(pattern[j]) === -1) {
        faqs[i].style.display = 'none';
        found = false;
      }
    }

    if (found)
      faqs[i].style.display = 'block';
  }
}
