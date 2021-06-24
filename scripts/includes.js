function shuffle(v){
    for(var j, x, i = v.length; i; j = parseInt(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x);
    return v;
};

function deviceWidth(){
	var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
	return width;
};

function pathToRoot(){
	var location = window.location.href;
	var count = location.match(/\//g).length;
	var path = "";
	for(var x = 0; x < count-4; x++){
		path +="../";
	}//for
	
	path = "http://nusiq.com/";
	
	return path;
}

//prevent caching of includes
var includesScript = document.getElementsByTagName("script")[1];
var includesSource = includesScript.getAttribute('src');
var d = new Date();
var milliSec = d.getTime();
includesScript.setAttribute("src",includesSource+milliSec);
localStorage.setItem("lastVisit",milliSec);
