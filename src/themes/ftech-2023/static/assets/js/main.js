$(document).ready(function(){

	// Toggle main nav
	$( "body > header a.toggle" ).click( function(){
		event.stopPropagation();
		$( "body > header ul.main" ).toggle();
	});


	$( document ).click( function( event ){

		var menu = $( "body > header ul.main" );

		if( $( "body > header a.toggle" ).is( ":visible" ) && menu.is( ":visible" )){
			$( "body > header ul.main" ).hide();
		}
	});
});

/* Closes any open popups on the page. In this context, a pop is something that
 * is opened with a button and is toggle-able. Frequently seen with menus.*/
function closePopups(){

	document.querySelectorAll( `[aria-expanded="true"]` ).forEach(( button, index ) => {
		button.click();
	});
}

document.addEventListener( "DOMContentLoaded", function(){

	// Toggle mainnav
	document.querySelectorAll( `body > header a.toggle` ).addEventListener( "click", function( e ){
		e.stopPropagation();

	});

	// close popups when the body is clicked
	document.addEventListener( "click", function(){ closePopups(); });
});
