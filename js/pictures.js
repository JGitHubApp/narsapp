/* Pictures */

function showPic(picId) {
 if(document.getElementById("pic").style.display === "none")
 {
    /* Display Background Fill */
    document.getElementById("picbg").style.display="block";
    var con = document.getElementById("h"); /* div that contains of entire page */
    var h = con.offsetHeight || con.clientHeight || con.scrollHeight; /* Try 3 ways to get the height. */

    /* If the page height is greater than window height make the background fill the entire page */
    if( h > window.innerHeight)
    {
     document.getElementById("picbg").style.height=(h + "px");
    }

    /* Display Image */
    document.getElementById("pic").style.display="block";
    document.getElementById("pic").style.backgroundImage=("url(" + document.getElementById(picId).getAttribute("src") + ")");
    var pixelsScrolled=window.pageYOffset || document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop; /* Get distance scrolled by user */
    document.getElementById("pic").style.top=(pixelsScrolled + "px"); /* Set the top equal to distance scrolled by user */

    /* Display Close Icon */
    document.getElementById("pclose").style.display="block";
    document.getElementById("pclose").style.top=(pixelsScrolled + "px"); /* Set the top equal to distance scrolled by user */

 }
 else
 {
    /* Hide background and image */
    document.getElementById("picbg").style.display="none";
    document.getElementById("pic").style.display="none";
    document.getElementById("pclose").style.display="none";
 }
}
