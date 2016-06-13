$(document).ready(function(){

//*****HOW AM I GOING TO DO THIS WITH CLASSES?!

	var portfolio = {

		// moves div with text over portfolio picture on hover
		hoverPort: function() {

			$(".port").hover(function() {
				$(".slide").stop().animate({"top" : "-110px"});
			}, function() {
				$(".slide").stop().animate({"top" : "-34"});
			});

		}, // end of hoverPort function

		slideUp: function() {
			$(".slide").css("top", "-110");
		}, // end of slideUp function

		slideDown: function() {
			$(".slide").css("top", "-34");
		} // end of slideDown function
	
	} // end of portfolio object

	portfolio.hoverPort();

}); // end of document.ready