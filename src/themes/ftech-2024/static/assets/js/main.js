function toggleMainNav(){

	menu = document.getElementById( "main-nav" );

	if( menu.style.display == "none" || menu.style.display == "" ){

		menu.style.display = "block";
	}else{

		menu.style.display = "none";
	}

	event.stopPropagation();
}
