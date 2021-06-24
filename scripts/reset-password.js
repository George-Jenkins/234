(function(){

	//get info in url
	var url = window.location.href;
	var email = url.match(/email=(.*?)(&|$)/i);
	email = email[1];
	var code = url.match(/code=(.*?)(&|$)/i);
	code = code[1];
	
	document.getElementById("form").onsubmit = function(e){
	
		e.preventDefault();
		
		resetMessages();
	
		var password = document.getElementById("password").value;
		var repeatPassword = document.getElementById("repeat-password").value;
	
		if(!password || !repeatPassword) return;
	
		if(password.length < 6){
			
			document.getElementById("password-div").style.color = "red";
			document.getElementById("password-div").innerHTML = "At least 6 characters";
			return;
		}//if
	
		if(password != repeatPassword){
			
			document.getElementById("repeat-password-div").style.color = "red";
			document.getElementById("repeat-password-div").innerHTML = "Passwords don't match";
			return;
		}//if
	
		var postInfo = {email:email, code:code, password:password};
	
		$.post("scripts/ios-login.php?email="+email,postInfo,function(data){
			
			if(data == "wrong info"){
				document.getElementsByClassName("form-div1")[0].innerHTML = "There was an error. Please click link in email again.";
				return;
			}//if
			
			document.getElementsByClassName("form-div1")[0].innerHTML = "Password was reset";
			
		});//post
	
	}//onsubmit
	
function resetMessages(){
	
	document.getElementById("repeat-password-div").style.color = "black";
	document.getElementById("repeat-password-div").innerHTML = "Repeat password";
	
	document.getElementById("password-div").style.color = "black";
	document.getElementById("password-div").innerHTML = "Password";
	
}//function	
	
})();