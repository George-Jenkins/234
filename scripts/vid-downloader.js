var YoutubeMp3Downloader = require('/home/nusiqcom/www/youtube-scripts/youtube-mp3-downloader');

var request = require("request");


request({
  uri: "http://nusiq.com/scripts/search-vids.php",
  method: "POST",
  //timeout: 1000000000,
  followRedirect: true,
  maxRedirects: 10,
  form: {
    postPurpose: "searchNews"
  }
}, function(error, response, body) {
	body = JSON.parse(body);
	var watchArray = body.watchArray;
	 
  	console.log(body.done);

var Downloader = function() {

    var self = this;
   
    //Configure YoutubeMp3Downloader with your settings 
    self.YD = new YoutubeMp3Downloader({
        "ffmpegPath": "/usr/local/bin/ffmpeg",        // Where is the FFmpeg binary located? 
        "outputPath": "/home/nusiqcom/public_html/tmp-digital-files",    // Where should the downloaded and encoded files be stored? 
        "youtubeVideoQuality": "highest",       // What video quality should be used? 
        "queueParallelism": 2,                  // How many parallel downloads/encodes should be started? 
        "progressTimeout": 2000                 // How long should be the interval of the progress reports 
    });

    self.callbacks = {};
 	
 	//Download video and save as MP3 file 
	//self.YD.download("xh0ctVznxdM");
 	
    self.YD.on("finished", function(data) {
        
        if (self.callbacks[data.videoId]) {
            self.callbacks[data.videoId](null,data);
        } else {
            console.log("Error: No callback for videoId!");
        }
    
    });
 
    self.YD.on("error", function(error) {
        console.log(error);
    });
    
}


Downloader.prototype.getMP3 = function(track, callback){
    var self = this;
    
    // Register callback 
    self.callbacks[track.videoId] = callback;
    // Trigger download 
    self.YD.download(track.videoId, track.name);
    
}

module.exports = Downloader;



var dl = new Downloader();
var i = 0;

for(var x=0; x<watchArray.length; x++){

var watchString = body.watchArray[x];
 
dl.getMP3({videoId: watchString}, function(err,res){
    i++;
    if(err){
        throw err;
        }
    else{
        console.log("Song "+ i + " was downloaded: " + res.file);
    }

if(i == watchArray.length){//I added this. When last vid is downloaded increase volume of all vids
	request({
	uri: "http://nusiq.com/scripts/audio-volume.php",
	method: "POST",
	//timeout: 1000000000,
	followRedirect: true,
	maxRedirects: 10,
	form: {}
	}, function(error, response, body) {});//function(error, response, body)
}//if (x == watchArray.length-1)


});//dl.getMP3({videoId: watchString}, function(err,res){



}//for(var x=0; x<watchArray.length; x++)



});//function(error, response, body)



/* 
dl.getMP3({videoId: "gQH0t8obtEg", name: "United By PlatinumEDM.mp3"}, function(err,res){
    i++;
    if(err)
    
        throw err;
    else{
        console.log("Song "+ i + " was downloaded: " + res.file);
    }
});
*/


/*
learn how to use express and body-parser
var express = require('express')
var bodyParser = require('body-parser')
*/ 

/*
This is using jquery
require("jsdom").env("", function(err, window) {
    if (err) {
        console.error(err);
        return;
    }
 
    var $ = require("/home/nusiqcom/public_html/node_modules/jquery")(window);
	
});
*/
