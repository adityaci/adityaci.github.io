function display( param ){
	closeAllContent();
	if( getComputedStyle(document.querySelector('.spacer')).display === "none" )
		document.getElementById("content_container").style.display = "block";
	else
		document.getElementById("content_container").classList.toggle("fade");
	if( param == "about" )
		document.getElementById("about").style.display = "block";
	else if( param == "skill" )
		document.getElementById("skill").style.display = "block";
	else if( param == "portfolio" )
		document.getElementById("portfolio").style.display = "block";
	else
		document.getElementById("contact").style.display = "block";
	document.getElementById('content_container').scrollIntoView()
}

function closeAllContent(){
	const all = document.getElementById("content_container").querySelectorAll(".content");
	for( var i = 0; i < all.length; i++ )
		all[i].style.display = "none";
}

function backToHome(){
	closeAllContent();
	if( getComputedStyle(document.querySelector('.spacer')).display === "none" )
		document.getElementById("content_container").removeAttribute("style");
	else
		document.getElementById("content_container").classList.toggle("fade");
}

function changeDialogue( param ){
	var dialogue = "";
	if( param == "about" )
		dialogue = "Wanna know about me ?";
	else if( param == "skill" )
		dialogue = "And.. that's my skills info.";
	else if( param == "portfolio" )
		dialogue = "That's for my portfolio.";
	else if( param == "contact" )
		dialogue = "Contact me, hope we can have fun!";
	else
		dialogue = "Hello.. Welcome to My Site!";
	document.getElementById("dialogue").innerHTML = dialogue;
}