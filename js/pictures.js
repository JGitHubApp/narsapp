/* Pictures */

function displayPicture() {
	var pic=document.getElementById("pic");
	pic.style.display="block";
	var picbg=document.getElementById("picbg");
	// Display Image

	// Get window height and width - Get body height - Pixels scrolled from top of browser
	var winHeight=window.innerHeight || (document.documentElement.clientHeight + 15);
	var winWidth=window.innerWidth || document.documentElement.clientWidth;
	var bodyHeight=document.body.offsetHeight || document.body.scrollHeight || document.body.clientHeight;
	var pixelsScrolled=window.pageYOffset || document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop;
	
	picbg.style.display="block";
	// Covers page in background fill - phone fix
	if(bodyHeight > winHeight)
		picbg.style.height=(bodyHeight + "px");

	// Contain the image within the window leaving a 15px offset
	pic.style.maxHeight=(winHeight-30) + "px";
	pic.style.maxWidth=(winWidth-30) + "px";

	// Center the image and offset it based on current viewing area
	pic.style.top=((winHeight*0.5) + pixelsScrolled)+"px";
	pic.style.marginTop="-" + ((pic.height / 2) + 5)+ "px";
	pic.style.marginLeft="-" + ((pic.width / 2) + 5) + "px";

	// Display Close Icon
	document.getElementById("pclose").style.top=(pixelsScrolled + "px");
	document.getElementById("pclose").style.display="block";
}

function showPic(aPic) {
	var pic=document.getElementById("pic");
	var i=new Image();
	i.src= aPic.src.replace(/\/thumbnail-/, '/'); // <- Change this line to set up thumbnails
	var failSafe=setTimeout("displayPicture();", 2000);
	pic.onload=displayPicture;
	pic.src=i.src;
	clearTimeout(failSafe);
	i=null;
}

function hidePic() {
	// Hide background and image
	document.getElementById("picbg").style.display="";
	var pic = document.getElementById("pic");
	pic.style.display="";
	pic.src="";
	document.getElementById("pclose").style.display="";
}

function update() {
	if(document.getElementById("pic").style.display === "block") {
		displayPicture();
	}
}
window.onresize=update;
