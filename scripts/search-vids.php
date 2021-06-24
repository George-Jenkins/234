<?php

include("includes.php");

$postPurpose = $_POST["postPurpose"];
$watchArray = [];
//used when grabbing news
$newsAndURLs = ["https://www.youtube.com/user/VOAvideo/videos"=>"news",
"https://www.youtube.com/user/TestTubeNetwork/videos"=>"news",
"https://www.youtube.com/user/WSJDigitalNetwork/videos"=>"news",
"https://www.youtube.com/user/enews/videos"=>"celebNews",
"https://www.youtube.com/user/ClevverNews/videos"=>"celebNews",
"https://www.youtube.com/user/HollywoodNOW/videos"=>"celebNews",
"https://www.youtube.com/channel/UCV61VqLMr2eIhH4f51PV0gA/videos"=>"political",
"https://www.youtube.com/user/democracynow/videos"=>"political",
"https://www.youtube.com/user/vicenews/videos"=>"political",
"https://www.youtube.com/user/TheGuardian/videos"=>"political",
"https://www.youtube.com/user/cnbc/videos"=>"business",
"https://www.youtube.com/user/Bloomberg/videos"=>"business",
"https://www.youtube.com/user/techcrunch/videos"=>"business"];


$musicAndURLs = ["https://www.youtube.com/playlist?list=PLFLjA-BCYmWH2x8545frQQStBS2z3qduv"=>"rap",
"https://www.youtube.com/playlist?list=PLhS3DcL9XnJjQEBHXxemzkg1V9wltUk5u"=>"rap",
"https://www.youtube.com/playlist?list=PL08QO4-WZCIf00RighBgUI195wK6Mvn6l"=>"rap_clean",
"https://www.youtube.com/playlist?list=PLmjpEeBZ-AG9FMxwO7A0wlc5NYZaSXtYO"=>"rap_clean",
"https://www.youtube.com/playlist?list=PLMC9KNkIncKtGvr2kFRuXBVmBev6cAJ2u"=>"pop"
/*"https://www.youtube.com/playlist?list=PLz8JsiLUtVnBxA-FerohlPB2HKtKQZe_m"=>"pop" vids don't have many views*/];


$musicAndURLs2 = ["https://www.youtube.com/user/FueledByRamen/videos"=>"rock"];


//get video addresses
if($postPurpose=="searchNews"){

foreach($newsAndURLs as $newsURL => $newsType){//for every type of news get the audio

$youtubePageNews = file_get_contents($newsURL);

//remove all spaces
$output = str_replace(array("\r\n", "\r"), "\n", $youtubePageNews);
$lines = explode("\n", $output);
$new_lines = array();
foreach ($lines as $i => $line) {
    if(!empty($line))
        $new_lines[] = trim($line);
}
$youtubePageNews = implode($new_lines);
//end of removing all spaces

preg_match_all('/<h3 class=\"yt-lockup-title \">(.*?)<\/div>/',$youtubePageNews,$pageSegmentsArray);

foreach($pageSegmentsArray[0] as $pageSegments){

//getLink
preg_match('/watch\?v=(.*?)">/',$pageSegments,$links);
$link = $links[1];
$link = html_entity_decode($link, ENT_NOQUOTES, 'UTF-8');

//see if link is in db already
$query = mysql_query("SELECT * FROM videos WHERE watch_string='$link' AND file!=''");
$numrows = mysql_num_rows($query);

//get duration
preg_match('/Duration: (.*?)[,.]/',$pageSegments,$duration);
$duration[1];

//get post time
preg_match('/yt-lockup-meta-info\"><li>(.*?)<\/li><\/ul>/',$pageSegments,$datePublished);
preg_match('/views<\/li><li>(.*?)ago<\/li>/',$datePublished[0],$datePublished);
$postTime = time() - (strtotime($datePublished[1])-time());

$time = time();

if(!$numrows && 360>(strtotime($duration[1]) - $time) && 70<(strtotime($duration[1]) - $time) && $postTime>($time-24*60*60) && $link && $postTime<=$time){//if video is within 6 minutes and greater than 70 secs
mysql_query("INSERT INTO videos VALUES ('','$link','$postTime','$newsType','','$time')");
$watchArray[] = $link;
}//if(360>(strtotime($duration[1]) - $time)

}//foreach


}//foreach($newsAndURLs as $newsType => $newsURL)

$return["done"] = $postPurpose;
$return["watchArray"] = $watchArray;
echo json_encode($return);
return;

}//if searchNews









elseif($postPurpose=="searchMusic"){

foreach($musicAndURLs as $musicURL => $musicType){


//get rap
$youtubePageMusic = file_get_contents($musicURL);

//remove all spaces
$output = str_replace(array("\r\n", "\r"), "\n", $youtubePageMusic);
$lines = explode("\n", $output);
$new_lines = array();
foreach ($lines as $i => $line) {
    if(!empty($line))
        $new_lines[] = trim($line);
}
$youtubePageMusic = implode($new_lines);
//end of removing all spaces

preg_match_all('/<a class=\"pl-video-title-link yt-uix-tile-link(.*?)<\/span><\/div>/',$youtubePageMusic,$youtubePageSegments);

foreach($youtubePageSegments[0] as $pageSegment){

preg_match('/<div class=\"timestamp"><span aria-label=\"(.*?)[,"]/',$pageSegment,$vidLength);
$vidLength = $vidLength[1];
$rightLength = false;
if((strtotime($vidLength) - time()) < 360 && (strtotime($vidLength) - time()) > 60) $rightLength = true;

preg_match('/watch\?v=(.*?)[&"]/',$pageSegment,$link);
$link = $link[1];

$query = mysql_query("SELECT * FROM videos WHERE watch_string='$link' AND file!=''");
$numrows = mysql_num_rows($query);

$time = time();

if(!$numrows && $rightLength && $link!='undefined'){
$watchArray[] = $link;
mysql_query("INSERT INTO videos VALUES ('','$link','','$musicType','','$time')");
}//if

}//foreach


}//foreach($musicAndURLs as $musicType => $musicURL)








//this will handle music pages that are formatted differently
foreach($musicAndURLs2 as $musicURL => $musicType){//for every type of news get the audio

$youtubePageNews = file_get_contents($musicURL);

//remove all spaces
$output = str_replace(array("\r\n", "\r"), "\n", $youtubePageNews);
$lines = explode("\n", $output);
$new_lines = array();
foreach ($lines as $i => $line) {
    if(!empty($line))
        $new_lines[] = trim($line);
}
$youtubePageMusic = implode($new_lines);
//end of removing all spaces

preg_match_all('/<h3 class=\"yt-lockup-title \">(.*?)<\/div>/',$youtubePageMusic,$pageSegmentsArray);

foreach($pageSegmentsArray[0] as $pageSegments){

//getLink
preg_match('/watch\?v=(.*?)">/',$pageSegments,$links);
$link = $links[1];
$link = html_entity_decode($link, ENT_NOQUOTES, 'UTF-8');

//see if link is in db already
$query = mysql_query("SELECT * FROM videos WHERE watch_string='$link' AND file!=''");
$numrows = mysql_num_rows($query);

//get duration
preg_match('/Duration: (.*?)[,.]/',$pageSegments,$duration);
$duration[1];

$time = time();

if(!$numrows && 360>(strtotime($duration[1]) - $time) && 70<(strtotime($duration[1]) - $time) && $link!='undefined'){//if video is within 6 minutes and greater than 70 secs
mysql_query("INSERT INTO videos VALUES ('','$link','','$musicType','','$time')");
$watchArray[] = $link;
}//if(360>(strtotime($duration[1]) - $time)

}//foreach


}//foreach($newsAndURLs as $newsType => $newsURL)








$return["done"] = $postPurpose;
$return["watchArray"] = $watchArray;
echo json_encode($return);



}//searchMusic







elseif($postPurpose=="addFileName"){

$fileName = $_POST["fileName"];
$fileName = explode("/",$fileName);
$fileName = mysql_real_escape_string(end($fileName));

$videoId = $_POST["videoId"];

mysql_query("UPDATE videos SET file='$fileName' WHERE watch_string='$videoId'");
mysql_query("DELETE FROM videos WHERE watch_string='$videoId' AND file=''");


//delete any duplicate audio
$delArray = [];
$query = mysql_query("SELECT * FROM videos WHERE file!='' ORDER BY id DESC");
while($get_array = mysql_fetch_array($query)){
$id = $get_array["id"];
$link = $get_array["watch_string"];
if(!in_array($link,$delArray)) $delArray[$link] = $id;
}//while
foreach($delArray as $link=>$id){
mysql_query("DELETE FROM videos WHERE watch_string='$link' AND id!='$id'");
}//foreach




//delete old news
foreach($newsAndURLs as $newsURL => $newsType){
$timeLimit = time() - 4*24*60*60;
mysql_query("DELETE FROM videos WHERE post_time < $timeLimit AND genre='$newsType'");
}



$return["done"] = $fileName." ".$videoId;
echo json_encode($return);

}//elseif($postPurpose=="addFileName")

?>