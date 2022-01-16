window.addEventListener("load",run,false);

function run(){

	var secondes = 0;
	var timer;
	
	document.getElementById("start").addEventListener("click",start,false);
	document.getElementById("stop").addEventListener("click",stop,false);
	document.getElementById("reset").addEventListener("click",reset,false);
	
	function start(){
		timer = setInterval(caTourne,1000);
	}
	
	function stop(){
		clearInterval(timer);
	}
	
	function caTourne(){
		secondes++;
		document.getElementById("chrono").innerHTML = secondes+"s";
	}
	
	function reset(){
		secondes = 0;
		document.getElementById("chrono").innerHTML = secondes+"s";
	}
	
	
}
