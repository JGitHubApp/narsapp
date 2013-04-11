/* Pictures */

/* Monitor for orientation change */
var previousOrientation = window.orientation;

function updateBackground() {
	/* used to update background fill */
	if(document.getElementById("picbg").style.display === "block") {
		var h = document.body.offsetHeight || document.body.scrollHeight || document.body.clientHeight; /* Try 3 ways to get the height. */

		/* If the page height is greater than window height make the background fill the entire page */
		if( h > window.innerHeight)
			document.getElementById("picbg").style.height=(h + "px");
	}
}

function showPic(pic) {
	/* Display Background Fill */
	document.getElementById("picbg").style.display="block";
	updateBackground();

	/* Display Image */
	document.getElementById("pic").style.display="block";
	document.getElementById("pic").style.backgroundImage=("url(" + pic.src + ")");
	var pixelsScrolled=window.pageYOffset || document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop; /* Get distance scrolled by user */
	document.getElementById("pic").style.top=(pixelsScrolled + "px"); /* Set the top equal to distance scrolled by user */
	document.getElementById("pclose").style.top=(pixelsScrolled + "px"); /* Set the top equal to distance scrolled by user */

	/* Display Close Icon */
	document.getElementById("pclose").style.display="block";
}

function hidePic() {
	/* Hide background and image */
	document.getElementById("picbg").style.display="";
	document.getElementById("pic").style.display="";
	document.getElementById("pclose").style.display="";
}

/* Monitor for orientation change */
function checkOrientation() {
	/* Check for orientation change */
	if(window.orientation !== previousOrientation) {
		previousOrientation = window.orientation;
		updateBackground();
	}
};

window.onresize = checkOrientation;
