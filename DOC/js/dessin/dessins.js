window.addEventListener("load",start,false);

function boite(nom) {
 for (var i=0;i<4;i++) {
 avance (200,nom);
 tourne (90,nom);
 }
}

function start() {
	// écouteur pour passer d'un dessin à un autre
	document.getElementById("suivant").addEventListener("click",suivant,false);
	initCanvas();
	
	// ensemble des fonctions d'affichage
	var formes = Object.keys(lstFun)
	var ptr = 0;
	
	function suivant() {
		document.getElementById("nomforme").innerHTML = formes[ptr];
		lstFun[formes[ptr]]();
		ptr++;
		if (ptr == formes.length) {
			ptr = 0;
		}
	}
	
	suivant(); // affichage de la première forme

}
