<?php
include("includes.php");

$code = $_GET["code"];
$email = $_GET["email"];
$newEmail = $_GET["newEmail"];

$newCode = mt_rand();

if(!$newEmail){//confirming email when registering
	$query = mysql_query("SELECT * FROM users WHERE email='$email' AND code='$code'");
	$numrows = mysql_num_rows($query);

	if($numrows){//registering
		mysql_query("UPDATE users SET verified='3', code='$newCode' WHERE email='$email' AND code='$code'");
		mysql_query("DELETE FROM users WHERE email='$email' AND verified!='3'");
		$message = "Account Verified!";
	}//if
	else $message = "Error";
}//if

elseif($newEmail){//confirming email when changing email
	
	$query = mysql_query("SELECT * FROM users WHERE email='$email' AND email2='$newEmail' AND code2='$code'");
	$numrows = mysql_num_rows($query);
	
	if($numrows){
		mysql_query("UPDATE users SET email='$newEmail', email2='', verified='3', code2='$newCode' WHERE email='$email' AND code2='$code'");
		mysql_query("DELETE FROM users WHERE email='$newEmail' AND verified!='3'");
		$message = "Email changed";
	}//if
	else $message = "Error";
}//elseif

else{
	$message = "Error";
}//else

?>
<!DOCTYPE html>
<html lang="en">
<head>
<title>Verify Account</title>
<meta name="viewport" content="device-width=width, initial-scale=1, maximum-scale=1, minimum-scale=1"/>
<link href="../css/general.css" rel="stylesheet" type="text/css"/>
<link href="../css/forms.css" rel="stylesheet" type="text/css"/>
<link href="../css/fonts/open-sans.css" rel="stylesheet" type="text/css"/>
<link href="../css/fonts/fredokaone.css" rel="stylesheet" type="text/css"/>
</head>

<body class="text1">

<center>

<p>

<div class="title">
<?php 
echo $message 
?>
</div>

</p>

</center>

<script src="scripts/jquery.js"></script>
<script src="scripts/reset-password.js"></script>

</body>
</html>