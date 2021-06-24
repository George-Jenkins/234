<?php

$newsURL = "https://www.youtube.com/user/VOAvideo/videos";

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


//get duration
preg_match('/Duration: (.*?)[,.]/',$pageSegments,$duration);
$duration[1];

//get post time
preg_match('/yt-lockup-meta-info\"><li>(.*?)<\/li><\/ul>/',$pageSegments,$datePublished);
preg_match('/views<\/li><li>(.*?)ago<\/li>/',$datePublished[0],$datePublished);
$postTime = time() - (strtotime($datePublished[1])-time());

echo $link.'<br>';

$time = time();



}//foreach

?>