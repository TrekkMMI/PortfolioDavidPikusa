/*****************************
fonction utilitaires générales
******************************/

/* création du fond de carte sous forme d'un tableau 
   il est possible d'accéder à chaque cellule via le DOM 
   puisqu'lles possèdent toutes un identifiant différent de la forme 'cx_y'
   où x et y sont des coordonnées
*/
function createTable(taille) {
	var table,tr,td,i,j;

	table = document.createElement("table");
	for(var i=0;i<taille;i++){
		tr = document.createElement("tr");
		for(var j=0;j<taille;j++){
			td = document.createElement("td");
			td.setAttribute("id","c"+j+"_"+i);
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
	document.body.appendChild(table);
}

/* placement d'une couleur de fond sur une cellule à partir de coordonnée */
function plot(x,y,couleur) {
	document.getElementById("c"+x+"_"+y).style.backgroundColor = couleur;
}


/* récupère la couleur d'une cellule aux coordonnées x,y */
function getCouleur(x,y) {
	return document.getElementById("c"+x+"_"+y).style.backgroundColor;
}

/* fin de partie */
function gagne(msg) {
	document.getElementById("message").innerHTML = msg;
}





