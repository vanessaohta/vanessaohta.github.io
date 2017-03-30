// Make it rain!

// When the user scrolls down the window
	// If the distance scrolled is greater than or equal to 640px
		// Make nav fixed
	// else 
		// Make nav static
var element_position = $('nav').offset().top;
console.log(element_position);

$(window).on('scroll', function(event) {
	event.preventDefault;
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = element_position;

    if(y_scroll_pos > scroll_pos_test) {
        $('nav').addClass('sticky');
    } else {
    	$('nav').removeClass('sticky');
    }
});

//notes and resources for slider: 
	//http://www.catchmyfame.com/2009/06/25/jquery-beforeafter-plugin/