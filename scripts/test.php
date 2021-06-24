<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

include("includes.php");

/*
//get rap
$youtubePageMusic = file_get_contents("https://www.youtube.com/playlist?list=PLz8JsiLUtVnBxA-FerohlPB2HKtKQZe_m");

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

$query = mysql_query("SELECT * FROM videos WHERE watch_string='$link'");
$get = mysql_fetch_assoc($query);
$file = $get["file"];



}

*/

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
$newsAndURLs = ["news","celebNews","political","business"];
//exec('/usr/local/bin/ffmpeg -i ../tmp-digital-files/"How to Vacation Like a Celebrity | E! News.mp3" -af "volume=2.0" ../digital-files/"How to Vacation Like a Celebrity | E! News.mp3"');
//exec('/usr/local/bin/ffmpeg -i ../tmp-digital-files/"Greg Wyler OneWeb To Create 3,000 Jobs | Squawk Box | CNBC.mp3" -af "volume=2.0" ../digital-files/"Greg Wyler OneWeb To Create 3,000 Jobs | Squawk Box | CNBC.mp3"');


$time = time()-2*24*60*60;

foreach($newsAndURLs as $address => $genre){

$query = mysql_query("SELECT * FROM videos WHERE genre='$genre' ORDER BY post_time DESC");

while($get_array = mysql_fetch_array($query)){

$file = $get_array['file'];
$id = $get_array['id'];

$post_time = $get_array['post_time'];

$threeDaysAgo = time()-(3*24*60*60);

if($post_time<$threeDaysAgo || $post_time>time()){
//mysql_query("DELETE FROM videos WHERE id='$id'");
unlink('../digital-files/'.$file);

}//foreach

}//if

$dirFiles = scandir('../digital-files');
foreach($dirFiles as $dirFile){
$escapedDirFile = mysql_real_escape_string($dirFile);
$query = mysql_query("SELECT * FROM videos WHERE file='$escapedDirFile'");
$numrows = mysql_num_rows($query);
if(!$numrows) unlink('../digital-files/'.$dirFile);

}//while

}//foreach




?>