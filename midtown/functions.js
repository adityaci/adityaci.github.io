function startUp(){
	var localDiscovery = document.getElementById("localDiscovery");
	var mainMenu = document.getElementById("mainMenu");
	fadeIn(localDiscovery);
	sleep(2000).then( function() {
		fadeOut(localDiscovery);
	})
	sleep(4000).then( function() {
		fadeIn(mainMenu);
	})
}
function fadeIn( element ){
	element.style.visibility = 'visible';
	element.style.opacity = '1';
}
function fadeOut( element ){
	element.style.opacity = '0';
	element.style.visibility = 'hidden';
}
function hideAllContent(){
	var content = document.getElementsByClassName("content");
	for( var i = 0; i < 4; i++ ){
		content[i].style.opacity = '0';
		content[i].style.visibility = 'hidden';
	}
}
function showSidebar( who ){
	var sidebar = document.getElementById("sidebar");
	var mainMenu = document.getElementById("mainMenu");
	if( sidebar.style.width == '' ){
		if( getComputedStyle(document.querySelector('#sidebar')).zIndex == "1")
			sidebar.style.width = '100%';
		else
			sidebar.style.width = '25%';
		mainMenu.style.right = '25%';
	}
	hideAllContent();
	fadeIn(document.getElementById( who ));
}
function closeSidebar(){
	hideAllContent();
	var sidebar = document.getElementById("sidebar");
	var mainMenu = document.getElementById("mainMenu");
	if( sidebar.style.width == '25%' || sidebar.style.width == '100%' ){
		sidebar.style.width = '';
		mainMenu.style.right = '0';
	}
}
function sleep( ms ){
	return new Promise( function ( resolve ) { return setTimeout(resolve, ms) });
}