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
