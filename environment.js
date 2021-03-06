// Top button
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("totop").style.display = "block";
    } else {
        document.getElementById("totop").style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
}
// shadow effects
$(document).ready(function(){
	$("nav .btn-group").hover(function(){
	    $("#mask").fadeIn();
	}, function(){
		$("#mask").fadeOut();
		// $("#mask").hide();
	});
	$(".dropdown a").click(function(){
		$("#mask").fadeOut();
	});
});
