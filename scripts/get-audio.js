(function(){



var backgroundDayImageArray = ["https://i2.wp.com/geoffboeing.com/wp-content/uploads/2015/07/01-mostar-bosnia-stari-most.jpg",
"http://trendviral.in/wp-content/uploads/2015/09/beautiful-city-2.jpg",
"http://img14.deviantart.net/293c/i/2013/294/5/b/city_skyscrapers_in_the_daytime_by_archangelical_stock-d6rci5k.jpg",
"http://www.hotellepanoramic.com/cache//mnt/web/sites/hotellepanoramic.com/httpdocs/images/galeriephotos/4272-800-02_fond_page.jpg.png",
"http://blog.utrip.com/wp-content/uploads/2013/04/iStock_000013029635_Medium-1024x682.jpg",
"https://upload.wikimedia.org/wikipedia/commons/d/dd/Nice-daytime-views-of-new-york-city-from-long-island-city.jpg",
"http://www.aareps.com/media/original/cgi-illustration-Architecture-futuristic-city-Skyline-daytime.jpg"];

var backgroundNightImageArray = ["http://cdn.pcwallart.com/images/japan-city-at-night-wallpaper-1.jpg",
"http://www.walldevil.com/wallpapers/a72/best-screen-image-of-beautiful-night-view-of-city.jpg",
"http://cdn.wallpapersafari.com/62/0/KfjAQq.jpg",
"http://i.imgur.com/MiHpfeO.jpg",
"http://eskipaper.com/images/night-cityscape-4.jpg",
"http://img09.deviantart.net/5595/i/2010/054/c/0/night_cityscape_2_by_csipesz.jpg",
"http://eskipaper.com/images/cityscape-12.jpg"];


var task = "start";//serves no purpose now
var musicClass = document.getElementsByClassName("music");
var newsClass = document.getElementsByClassName("news");
var musicPostString = "";
var newsPostString = "";
var indexNum = 0;
var indexNum2 = null;
var newsIndex = 0;
var musicIndex = 0;
var altNum = 0;
var songTitle = "";
var audioTitleDiv = document.getElementById("audio-title");
var nextButton = document.getElementById("next-button");
var newsArray;
var musicArray;
var currentArray;
var audioDiv = document.getElementById("audio-div");
var filePath = pathToRoot()+"digital-files/";
var srcTag = "";
var audioTag;
var timer;
var timer2;
var clickedPlay = false;

//see if user ever selected the news/music they want. If not, select everything
for(var x = 0; x < musicClass.length; x++){

var musicStorage = localStorage.getItem(musicClass[x].value);
if(!musicStorage && musicClass[x].value!='rap' || musicStorage=="true") musicClass[x].checked = true;

}//for

for(var x = 0; x < newsClass.length; x++){

var newsStorage = localStorage.getItem(newsClass[x].value);
if(!newsStorage || newsStorage == "true") newsClass[x].checked = true;

}//for









//put together the strings for news and music that will be turned into arrays when posted
for(var x = 0; x < musicClass.length; x++){
if(musicClass[x].checked) musicPostString += musicClass[x].value+",";
}//for

for(var x = 0; x < newsClass.length; x++){
if(newsClass[x].checked) newsPostString += newsClass[x].value+",";
}//for

var postObject = {musicPostString:musicPostString,newsPostString:newsPostString};










$.post(pathToRoot()+"scripts/get-audio.php",postObject,function(data){

newsArray = shuffle(JSON.parse(data.newsArray).filter(function(v){return v!==''}));
musicArray = shuffle(JSON.parse(data.musicArray).filter(function(v){return v!==''}));


function loadAudio(){

clearInterval(timer)//this gets set later but may be active at this point when user clicks next

if(newsIndex > newsArray.length - 1) newsIndex = 0;
if(musicIndex > musicArray.length - 1) musicIndex = 0;

if(altNum % 2 == 0){//when altNum is even, play music
currentArray = musicArray;
indexNum = musicIndex;
}
else{
currentArray = newsArray;
indexNum = newsIndex;
}



//handle case when user deselects all news or music
if(!musicArray.length || !newsArray.length){
if(!musicArray.length) currentArray = newsArray;
else currentArray = musicArray;

if(indexNum2 == null) indexNum2 = 0;
else indexNum2++;
if(indexNum2 > currentArray.length - 1) indexNum2 = 0;

indexNum = indexNum2;
}//if(!musicArray.length || !newsArray.length)




songTitle = currentArray[indexNum].replace(".mp3","").replace(/\(|\[.*\]|\)/g,"");
audioTitleDiv.innerHTML = songTitle;
audioPlayer = document.getElementById("audio-player");
srcTag = audioPlayer.childNodes[0];
srcTag.setAttribute("src",filePath+currentArray[indexNum].replace(/#/g,"%23"));

audioPlayer.load();
if(clickedPlay) audioPlayer.play();
audioPlayer.addEventListener("play",function(){ clickedPlay = true });

//make sure it's playing after a few seconds. If not reload it
if(deviceWidth()>768) waitTime = 5000;
else waitTime = 10000;
timer = setInterval(function(){

if(audioPlayer.currentTime<3 && !audioPlayer.paused){
audioPlayer.load();
audioPlayer.play();
}
else clearInterval(timer);

},waitTime);


audioPlayer.addEventListener("ended",loadAudio);

if(altNum % 2 != 0) newsIndex++;//When it's on news increase the index so when it starts at music again it's on the next song
else musicIndex++;

altNum++;

//check for new news
if(altNum == 4){

$.post(pathToRoot()+"scripts/get-audio.php",{newsArray:data.newsArray},function(data){

newsArray = newsArray.concat( shuffle(JSON.parse(data.newsArray)) );

},"json");

}//if (altNum == 4)



//set background image
var d = new Date();
hour = d.getHours();
dayOfWeek = d.getDay();
backgroundImageArray = (hour < 18) ? backgroundDayImageArray : backgroundNightImageArray;
document.body.style.backgroundImage = "url('"+backgroundImageArray[dayOfWeek]+"')";




}//loadAudio

loadAudio();
nextButton.onclick = loadAudio;

},"json");












//Handle caching checkbox selections and resetting news/music arrays based on selections
for(var x = 0; x < musicClass.length; x++){//for music
musicClass[x].onclick = function(){

var selectedValue = this.value;
var musicStorage = localStorage.getItem(selectedValue);
if(this.checked) localStorage.setItem(selectedValue,"true");//if it wasn't selected, set local storage
else localStorage.setItem(selectedValue,"false");//if it was selected

if(this.checked) musicPostString += this.value+",";//if checked add it to string
else musicPostString = musicPostString.replace(this.value+",","");

var postObject = {musicPostString:musicPostString};

$.post(pathToRoot()+"scripts/get-audio.php",postObject,function(data){

musicArray = shuffle(JSON.parse(data.musicArray)).filter(function(v){return v!==''});

},"json");//post

}//function
}//for


for(var x = 0; x < newsClass.length; x++){//for news
newsClass[x].onclick = function(){

var selectedValue = this.value;
var newsStorage = localStorage.getItem(selectedValue);
if(this.checked) localStorage.setItem(selectedValue,"true");//if it wasn't selected, set local storage
else localStorage.setItem(selectedValue,"false");//if it was selected

if(this.checked) newsPostString += this.value+",";//if checked add it to string
else newsPostString = newsPostString.replace(this.value+",","");

var postObject = {newsPostString:newsPostString};

$.post(pathToRoot()+"scripts/get-audio.php",postObject,function(data){

newsArray = shuffle(JSON.parse(data.newsArray)).filter(function(v){return v!==''});

},"json");//post

}//function
}//for













document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
//window.plugins.backgroundjs.lockBackgroundTime();

  var audioUrl = "http://nusiq.com/digital-files/A$AP%20Ferg%20-%20New%20Level%20REMIX%20(Audio)%20ft.%20Future,%20A$AP%20Rocky,%20Lil%20Uzi%20Vert.mp3";

  // Play an audio file (not recommended, since the screen will be plain black)
  //window.plugins.streamingMedia.playAudio(audioUrl);

MusicControls.create({
    track       : 'Time is Running Out',        // optional, default : ''
      artist      : 'Muse',                     // optional, default : ''
    cover       : 'images/next-button.png',      // optional, default : nothing
    // cover can be a local path (use fullpath 'file:///storage/emulated/...', or only 'my_image.jpg' if my_image.jpg is in the www folder of your app)
    //           or a remote url ('http://...', 'https://...', 'ftp://...')
  isPlaying   : true,                           // optional, default : true
    dismissable : true,                         // optional, default : false

    // hide previous/next/close buttons:
    hasPrev   : false,      // show previous button, optional, default: true
    hasNext   : false,      // show next button, optional, default: true
    hasClose  : true,       // show close button, optional, default: false

  // iOS only, optional
  album       : 'Absolution',     // optional, default: ''
  duration : 60, // optional, default: 0
  elapsed : 10, // optional, default: 0

    // Android only, optional
    // text displayed in the status bar when the notification (and the ticker) are updated
    ticker    : 'Now playing "Time is Running Out"'
}, function(){}, function(){});


function events(action) {
    switch(action) {
        case 'music-controls-next':
            // Do something
            break;
        case 'music-controls-previous':
            // Do something
            break;
        case 'music-controls-pause':
            // Do something
            break;
        case 'music-controls-play':
            // Do something
            break;
        case 'music-controls-destroy':
            // Do something
            break;

    // External controls (iOS only)
    case 'music-controls-toggle-play-pause' :
            // Do something
            break;

        // Headset events (Android only)
        case 'music-controls-media-button' :
            // Do something
            break;
        case 'music-controls-headset-unplugged':
            // Do something
            break;
        case 'music-controls-headset-plugged':
            // Do something
            break;
        default:
            break;
    }
}

// Register callback
MusicControls.subscribe(events);

// Start listening for events
// The plugin will run the events function each time an event is fired
MusicControls.listen();

alert(typeof MusicControls.create)

}//function
    




})();


