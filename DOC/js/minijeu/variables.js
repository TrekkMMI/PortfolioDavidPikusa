// taille du monde
var TAILLE = 40;
var XC = Math.trunc(TAILLE/2);
var YC = Math.trunc(TAILLE/2);


// joueurs, robots et niveaux
var Joueurs = Array();
var Robots = Array();
var Niveaux = Array();

// joueurs
j1 = {
	xd:0,
	yd:0,
	x:0,
	y:0,
	h:"ArrowUp",
	d:"ArrowRight",
	b:"ArrowDown",
	g:"ArrowLeft",
	couleur:"pink",	
}
 j2 = {
    	xd:39,
	yd:39,
	x:0,
	y:0,
	h:"z",
	d:"d",
	b:"s",
	g:"q",
	couleur:"blue",	
 }

Joueurs.push(j1);
Joueurs.push(j2);
// ajouter d'autres joueurs

// couleur des robots
var CouleurR = "red";

// interval pour les robots
var INTERVAL;

