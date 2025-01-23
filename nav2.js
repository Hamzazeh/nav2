
window.onload = function() {
  window.scrollTo(0, 0); // Scrolls to the top
};


function open_navbar(){
	document.querySelector(".ycor").style.top = "0"
	document.querySelector(".overlay").style.display = "block"
	document.querySelector(".up-btn").style.display = "none"
}

function hidden_navbar(){
	document.querySelector(".ycor").style.top = "-600%"
	document.querySelector(".overlay").style.display = "none"
	document.querySelector(".up-btn").style.display = "block"
}

