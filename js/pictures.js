/* Pictures */

function resizePicture() {
	var pic = document.getElementById('pic');

	// Get window height
	var winHeight = window.innerHeight || document.documentElement.clientHeight;
	var bodyHeight=document.body.offsetHeight || document.body.scrollHeight || document.body.clientHeight;

	// Get pixels scrolled from top of browser
	var pixelsScrolled=window.pageYOffset || document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop;

	// Covers page with background fill
	if(bodyHeight > winHeight)
		document.getElementById('picbg').style.height=(bodyHeight + 'px');
	else
		document.getElementById('picbg').style.height='100%';		//Fix for desktop browsers
	
	// Contain the image within the window leaving a 15px offset
	pic.style.maxHeight = (winHeight-30) + 'px';

	var picContainer = document.getElementById('picContainer');
	// Fix iOs scrolling past bottom of page and browser maximization issues
	if(((winHeight+pixelsScrolled) <= bodyHeight) || (pixelsScrolled==0))
		picContainer.style.top = pixelsScrolled + 'px';
	else
		picContainer.style.top = (bodyHeight - winHeight) + 'px';
}

function showPic(aPic) {
	document.getElementById('picContainer').style.display = 'table';
	document.getElementById('picbg').style.display = 'block';

	document.getElementById('pic').src = aPic.src.replace(/\/thumbnail-/, '/');

	resizePicture();
	window.addEventListener('resize', resizePicture, false);
	window.addEventListener('scroll', resizePicture, false);
}

function hidePic() {
	// Hide picbg
	document.getElementById('picContainer').style.display = '';
	document.getElementById('picbg').style.display = '';
	document.getElementById('pic').src = '';

	window.removeEventListener('resize', resizePicture, false);
	window.removeEventListener('scroll', resizePicture, false);
}

// Define window.addEventListener and removeEventListener
if (!window.addEventListener) {
	window.addEventListener = function(evnt, funct, value) {
		window.attachEvent('on' + evnt, funct);
	};

	window.removeEventListener = function(evnt, funct, value) {
		window.detachEvent('on' + evnt, funct);
	};
}
