jQuery(document).ready(function() {
		
	jQuery(".meni2").click(function() {
		
		jQuery("nav").slideToggle(400, function() {
			jQuery(this).toggleClass("nav-expanded").css('display', '');
		});
		
	});
	
});