function display( param ){
	document.getElementById("content_container").classList.toggle("fade");
	if( param == "about" )
		document.getElementById("about").style.display = "block";
	else if( param == "skill" )
		document.getElementById("skill").style.display = "block";
	else if( param == "portfolio" )
		document.getElementById("portfolio").style.display = "block";
	else
		document.getElementById("contact").style.display = "block";
}

function closeAllContent(){
	const all = document.getElementById("content_container").querySelectorAll(".content");
	for( var i = 0; i < all.length; i++ )
		all[i].style.display = "none";
}

function backToHome(){
	closeAllContent();
	document.getElementById("content_container").classList.toggle("fade");
}

function changeDialogue( param ){
	var dialogue = "";
	if( param == "about" )
		dialogue = "Wanna know about me ? click it!";
	else if( param == "skill" )
		dialogue = "And.. that's my skills info, click it!";
	else if( param == "portfolio" )
		dialogue = "That's for my portfolio, click it!";
	else if( param == "contact" )
		dialogue = "Contact me, hope we can have fun!";
	else
		dialogue = "Hello.. Welcome to My Site!";
	document.getElementById("dialogue").innerHTML = dialogue;
}