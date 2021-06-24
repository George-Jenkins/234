<?php

include("includes.php");

$email = $_GET["email"];
$password = $_GET["password"];

$login = $_GET["login"];//Has value when logging in
$forgot = $_GET["forgot"];//Has value when sending email to reset password
$code = $_POST["code"];//Has value if resetting passsword
$sessionID = $_GET["sessionID"];
$newEmail = $_GET["newEmail"];//has value when changing email

$query = mysql_query("SELECT * FROM users WHERE email='$email'");
$get = mysql_fetch_assoc($query);

if($login){// (Logging in)

	$salt = $get["salt"];
	$saltPassword = hash("SHA256",$password.$salt);

	$query = mysql_query("SELECT * FROM users WHERE email='$email' AND password='$saltPassword' AND verified!='1'");
	$numrows = mysql_num_rows($query);

	if(!$numrows){
		echo "wrong info";
		return;
	}
	
	$sessionID = uniqid();
	mysql_query("UPDATE users set session_id='$sessionID' WHERE email='$email' AND password='$saltPassword'");
	
	echo $sessionID;
	
	return;
}//if

if($forgot){// (Forgot login info)

	$numrows = mysql_num_rows($query);
	
	if(!$numrows){
	
		echo "wrong email";
		return;
	}//if
	
	$code = mt_rand();
	mysql_query("UPDATE users SET code='$code' WHERE email='$email'");
	
	//send email here
	return;
}//if

if($code){
	
	//make sure code is correct
	$query = mysql_query("SELECT * FROM users WHERE email='$email' AND code='$code'");
	$numrows = mysql_num_rows($query);
	
	if(!$numrows){
		echo "wrong info";
		return;
	}//if
	
	//reset password
	$password = $_POST["password"];
	$newCode = mt_rand();
	$newSalt = mt_rand();
	$newSaltPassword = hash("SHA256",$password.$newSalt);
	
	mysql_query("UPDATE users SET password='$newSaltPassword', code='$newCode', salt='$newSalt' WHERE code='$code' AND email='$email'");
	
	echo "done";
	return;
}//if

if($newEmail){
	
	$query = mysql_query("SELECT * FROM users WHERE email='$newEmail' AND verified='3'");
	
	if(mysql_num_rows($query)){
		echo "email taken";
		return;
	};
	
	//determine user's status. 
	//2 means should be verified but can still get a session. 
	//3 means verified. 
	//1 means needs to be verified and can't get session until that happens
	$query = mysql_query("SELECT * FROM users WHERE email='$newEmail' AND verified='2'");
	$numrows = mysql_num_rows($query);
	$code2 = mt_rand();
	if($numrows){
		$verified = 1;
		mysql_query("UPDATE users SET code2='$code2', email2='$newEmail' WHERE email='$email' AND session_id='$sessionID'");
		//$link = "http://nusiq.com/scripts/verify-account.php?newEmail=***&email=***&code=***";
		echo "check email";
	}
	else{
		$verified = 2;
		mysql_query("UPDATE users SET email='$newEmail', email2='$newEmail', verified='$verified', code2='$code2' WHERE email='$email' AND session_id='$sessionID'");
		//note to self. make newEmail and email the same for link in email
		echo "email changed";
	}
	
	//send email here
	$link = DOMAIN . "scripts/verify-account.php?newEmail=".$newEmail."&email=".$email."&code=".$code;
	
	return;
}//if

if($sessionID){
	
	$query = mysql_query("DELETE FROM users WHERE email='$email' AND session_id='$sessionID'");
	if(mysql_num_rows($query)) echo "account deleted";
	
}//if

?>


