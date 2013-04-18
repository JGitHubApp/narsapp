/* Questions */
function toggleAnswer(obj) {
	if (obj.getElementsByTagName('dd')[0].style.display === '') {
		for (var i = 0; i < getElementsByClassName(document, 'qContainer').length; i++)
			closeAnswer(getElementsByClassName(document, 'qContainer')[i]);

		openAnswer(obj);
	}
	else {
		closeAnswer(obj);
	}
}

function openAnswer(obj) {
		obj.getElementsByTagName('dd')[0].style.display = 'block';
		obj.getElementsByTagName('dt')[0].style.borderBottom = 'none';
		getElementsByClassName(obj, 'indicateExpand')[0].innerHTML='-';
}

function closeAnswer(obj) {
		obj.getElementsByTagName('dd')[0].style.display = '';
		obj.getElementsByTagName('dt')[0].style.borderBottom = '';
		getElementsByClassName(obj, 'indicateExpand')[0].innerHTML = '+';
}

/* Searchbar */
function search(pattern) {
	pattern = pattern.replace(/^\s+|\s+$/g, '').toLowerCase().replace(/\s+/g, ' ').split(' ');

	faqs = getElementsByClassName(document, 'qContainer');

	for (var i = 0; i < faqs.length; i++) {
		var found = true;

		for (var j = 0; j < pattern.length && found; j++) {
			if (faqs[i].getElementsByTagName('h3')[0].innerHTML.toLowerCase().indexOf(pattern[j]) === -1 &&
					getElementsByClassName(faqs[i], 'keywords')[0].innerHTML.indexOf(pattern[j]) === -1) {
				found = false;
			}
		}

		if (found)
			faqs[i].style.display = 'block';
		else
				faqs[i].style.display = 'none';
	}
}

// Use querySelectorAll if getElementsByClassName undefined
function getElementsByClassName(obj, value) {
	if(obj.getElementsByClassName)
		return obj.getElementsByClassName(value);
	else
		return obj.querySelectorAll('.' + value);
}
