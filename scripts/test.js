$(document).ready(function(){

$.ajax({
    url: 'scripts/search-vids.php',
    success:function(data){
    alert('rr')
    }, 
    type: 'POST',
    dataType:'json', 
    contentType: 'application/json'
	})

})