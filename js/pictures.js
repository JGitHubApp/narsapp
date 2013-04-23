/* Pictures */

function resizePicture() {
	var pic = document.getElementById('pic');

	// Get window height
	var winHeight = window.innerHeight || (document.documentElement.clientHeight + 15);
	
	// Contain the image within the window leaving a 15px offset
	pic.style.maxHeight = (winHeight-30) + 'px';

	// Get pixels scrolled from top of browser
	var pixelsScrolled=window.pageYOffset || document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop;
	document.getElementById('picbg').style.marginTop = pixelsScrolled + 'px';
}

function showPic(aPic) {
	document.getElementById('picbg').style.display = 'table';
	document.getElementById('pic').src = aPic.src.replace(/\/thumbnail-/, '/');

	resizePicture();
	update = resizePicture;
	if (window.addEventListener) {
		window.addEventListener('resize', update);
		window.addEventListener('scroll', update);
	}
}

function hidePic() {
	// Hide picbg
	var picbg = document.getElementById('picbg');
	picbg.style.display = '';
	picbg.style.marginTop = '';
	document.getElementById('pic').src = '';

	if (window.addEventListener) {
		window.removeEventListener('resize', update);
		window.removeEventListener('scroll', update);
	}
}
