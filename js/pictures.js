/* Pictures */

function resizePicture() {
	var pic = document.getElementById('pic');

	// Get window height and width
	var winHeight = window.innerHeight || (document.documentElement.clientHeight + 15);
	var winWidth = window.innerWidth || document.documentElement.clientWidth;
	
	// Contain the image within the window leaving a 15px offset
	pic.style.maxHeight = (winHeight-30) + 'px';
	pic.style.maxWidth = (winWidth-30) + 'px';

	// Get pixels scrolled from top of browser
	var pixelsScrolled=window.pageYOffset || document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop;
	document.getElementById('picbg').style.marginTop = pixelsScrolled + 'px';
}

function showPic(aPic) {
	document.getElementById('picbg').style.display = 'table';
	pic = document.getElementById('pic').src = aPic.src.replace(/\/thumbnail-/, '/');

	resizePicture();
	var update = function() {
		resizePicture();
	}

	window.addEventListener('resize', update, false);
	window.addEventListener('scroll', update, false);
}

function hidePic() {
	// Hide picbg
	picbg = document.getElementById('picbg')
	picbg.style.display = '';
	picbg.style.marginTop = '';
	window.removeEventListener('resize', update, false);
	window.removeEventListener('scroll', update, false);
}
