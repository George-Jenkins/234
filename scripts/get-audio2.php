<?php
include("includes.php");

foreach($GENRES as $genres => $genre){

	$query = mysql_query("SELECT * FROM videos WHERE genre='$genre'");
	
	$genreFileArray = [];
	
	while($get_array = mysql_fetch_assoc($query)){
		
		$file = $get_array["file"];
		$fileExists = file_exists("../digital-files/".$file);
		if($file && $fileExists) $genreFileArray[] = urldecode($file);
	
	}//while
	shuffle($genreFileArray);
	$return[$genre] = $genreFileArray;
	
}//foreach


echo json_encode($return);

?>