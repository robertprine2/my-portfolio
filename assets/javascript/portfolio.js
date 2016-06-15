$(document).ready(function(){

//*****HOW AM I GOING TO DO THIS WITH CLASSES?!

	var portfolio = {

		// variable to decide whether to hide or show dropdown on nav bar

		clickOn: 0,

		// moves div with text over portfolio picture on hover
		hoverPort: function() {

			$(".port").hover(function() {
				$(this).next(".slide").stop().animate({"top" : "-110px"});
			}, function() {
				$(this).next(".slide").stop().animate({"top" : "-34"});
			});

		}, // end of hoverPort function

		// on click makes a dropdown of nav choices for users on small screens

		hamburger: function() {
			
			$(".hamburger").on("click", function() {

				if (portfolio.clickOn == 1) {
					portfolio.clickOn = 0;
					$("#myDropdown").css("display", "none");
				}

				else {
					portfolio.clickOn = 1;
					$("#myDropdown").css("display", "block");
				}

			}); // end of hamburger on click

		}, // end of hamburger function

		// on click makes hamburger dropdown disappear when clicking on one of the dropdown choices
	
		disappear: function() {

			$(".disappear").on("click", function() {

				$("#myDropdown").css("display", "none");

			}); // end of disappear on click

		} // end of disappear function

	} // end of portfolio object

	portfolio.hoverPort();

	portfolio.hamburger();

	portfolio.disappear();

}); // end of document.ready