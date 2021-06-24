<?php

include("includes.php");

$email = $_GET["email"];
$password = $_GET["password"];

$query = mysql_query("SELECT * FROM users WHERE email='$email' AND verified='3'");
$numrows = mysql_num_rows($query);

if($numrows){
	echo "email taken";
	return;
}//if

$salt = mt_rand();
$time = time();

$saltPassword = hash("SHA256",$password.$salt);
$code = mt_rand();
$sessionID = uniqid();

//determine user's status. 
//2 means should be verified but can still get a session. 
//3 means verified. 
//1 means needs to be verified and can't get session until that happens
$query = mysql_query("SELECT * FROM users WHERE email='$email' AND verified='2'");
$numrows = mysql_num_rows($query);
if($numrows){
	$verified = 1;
	echo "check email";
}
else{
	$verified = 2;
	echo $sessionID;
}

$link = DOMAIN . "scripts/verify-account.php?email=".$email."&code=".$code;

mysql_query("INSERT INTO users VALUES ('','$email','','$saltPassword','$salt','$code','','$sessionID','$verified','$time')");

//send email here

?>