/* Pictures */

function resizePicture() {
	var pic = document.getElementById('pic');
	var picContainer = document.getElementById('picContainer');

	// Get window height
	var winHeight = window.innerHeight || document.documentElement.clientHeight;
	// Get body height
	var bodyHeight=document.body.offsetHeight || document.body.scrollHeight || document.body.clientHeight;
	// Get pixels scrolled from top of browser
	var pixelsScrolled=window.pageYOffset || document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop;

	// Covers page with background fill
	if(bodyHeight > winHeight)
		document.getElementById('picbg').style.height = bodyHeight + 'px';
	else {
		document.getElementById('picbg').style.height = winHeight + 'px';		//Fix for desktop browsers
		pixelsScrolled = 0;		// Force pixelsScrolled to be zero if the window gets bigger than the body
	}

	// Contain the image within the window leaving a 15px offset
	pic.style.maxHeight = (winHeight-30) + 'px';

	// Fix browser maximization issues and on phone orientation change
	if(((winHeight+pixelsScrolled) <= bodyHeight) || (pixelsScrolled==0))
		picContainer.style.top = pixelsScrolled + 'px';
	else
		picContainer.style.top = (bodyHeight - winHeight) + 'px';

	// Fix iOs non-homescreen browsing not vertically center issue (noticed on iPhone 4 with iOs 6.1.3)
	// Sets the picContainer height to be the window height.. CSS height: 100%; wasn't covering 100% of the screen
	picContainer.style.height = winHeight + 'px';
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
