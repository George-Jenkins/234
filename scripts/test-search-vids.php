<?php

/*

FAKE PAGE!!!!!!

*/


$postPurpose = "searchNews";
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
//$query = mysql_query("SELECT * FROM videos WHERE watch_string='$link' AND file!=''");
//$numrows = mysql_num_rows($query);

//get duration
preg_match('/Duration: (.*?)[,.]/',$pageSegments,$duration);
$duration[1];

//get post time
preg_match('/yt-lockup-meta-info\"><li>(.*?)<\/li><\/ul>/',$pageSegments,$datePublished);
preg_match('/views<\/li><li>(.*?)ago<\/li>/',$datePublished[0],$datePublished);
$postTime = time() - (strtotime($datePublished[1])-time());

echo $datePublished[1]."<br>";

echo date('Y-m-d',$postTime)."<br>";

echo $postTime."<br>";

$time = time();



}//foreach


}//foreach($newsAndURLs as $newsType => $newsURL)


return;

}//if searchNews



?>