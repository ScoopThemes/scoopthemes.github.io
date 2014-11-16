var appMaster = {
	menuToggler: function(){
		// Menu Toggler
	    $('#menuToggler').on('click', function(e) {
	    	e.preventDefault();
	    	/* Act on the event */
	    	$('#wrapper').toggleClass('toggled');
	    });
	    
	},
	anotherFunction: function(){
		// Add you custom here and don't forget to change the object title (anotherFunction)
	}
}