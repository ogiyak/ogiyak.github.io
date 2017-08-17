// Top button
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
}

$(document).ready(function(){
	$(".dropdown").hover(function(){
	    $("#mask").fadeIn();
	}, function(){
		$("#mask").hide();
	});
	$(".item").on("click", function(){
		if ($(".popup").css("display") == "none") {
			$(".popup").css("display", "block");
		}else{
			$(".popup").css("display", "none");
		}
	    
	});
});
