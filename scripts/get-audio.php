<?php
include("includes.php");

$task = $_POST["task"];
$newsPostString = $_POST["newsPostString"];
$musicPostString = $_POST["musicPostString"];

$selectNews = explode(",",rtrim($newsPostString,","));
$selectMusic = explode(",",rtrim($musicPostString,","));

$pageNewsArray = $_POST["newsArray"];

if($pageNewsArray){//if checking for new news

$pageNewsArray = trim($pageNewsArray,"]");
$pageNewsArray = trim($pageNewsArray,"[");
$pageNewsArray = trim($pageNewsArray,'"');
$pageNewsArray = str_replace('","',"','",$pageNewsArray);
}
else $pageNewsArray = "";

$postTimeLimit = time()-1*24*60*60;

$digFilePath = "../digital-files/";

//get news
foreach($selectNews as $newsType){

	$query = mysql_query("SELECT * FROM videos WHERE genre='$newsType' AND post_time>$postTimeLimit AND file!='' AND file NOT IN ('$pageNewsArray')");
	$numrows = mysql_num_rows($query);
	
	while($get_array = mysql_fetch_array($query)){
	
	$file = $get_array["file"];
	if(!file_exists($digFilePath.$file)) continue;
	$newsArray .= '"'.$file.'",';
	
	}//while
	
}//foreach


//get song
for($x = 0; $x < 100; $x++){
	
	$randIndex = mt_rand(0,sizeof($selectMusic)-1);
	$musicType = $selectMusic[$randIndex];
	
	$foundSong = false;
	
	while(!$foundSong){
	
	$query = mysql_query("SELECT * FROM videos WHERE genre='$musicType' AND file!='' ORDER BY RAND()");
	$get = mysql_fetch_assoc($query);
	$file = $get["file"];
	if(file_exists($digFilePath.$file)) $foundSong = true;
	
	}//found song
	
	$musicArray .= '"'.$file.'",';
}//for

$return["newsArray"] = "[".rtrim($newsArray,",")."]";
$return["musicArray"] = "[".rtrim($musicArray,",")."]";
echo json_encode($return);

?>