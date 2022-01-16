window.addEventListener("load",run,false);

function run(){

	var papillon = document.getElementById("papillon");
	papillon.addEventListener("mouseover",bouge,false);
	
	function bouge(){
		papillon.style.left = (Math.floor(Math.random()*1130))+"px";
		papillon.style.top = (Math.floor(Math.random()*593))+"px";
	}

}
