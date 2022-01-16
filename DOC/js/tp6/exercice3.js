window.addEventListener("load",run,false);

function run(){

	var tab,ligne,cellule,i,j;
	var laCase;
	var timer;
	
	tab = document.createElement("table");
	document.body.appendChild(tab);
	
	for(i=0;i<50;i++){
		ligne = document.createElement("tr");
		tab.appendChild(ligne);
		for(j=0;j<50;j++){
			cellule = document.createElement("td");
			cellule.addEventListener("click",caClique,false);
			ligne.appendChild(cellule);
		}
	}
	
	timer = setInterval(bouge,750);
	
	function bouge(){
		var i;
		var cellules = document.getElementsByTagName("td");
		var taille = cellules.length;
		laCase = parseInt(Math.random()*taille);
		for(i=0;i<taille;i++){
			if(i==laCase){
				cellules[i].style.backgroundColor = "red";
			}
			else {
				cellules[i].style.backgroundColor = "white";
			}
		}
		
	}
	
	function caClique(){
		var cellules = document.getElementsByTagName("td");
		if(cellules[laCase]==this){
			alert("Gagné");
			clearInterval(timer);
		}
	}
}
