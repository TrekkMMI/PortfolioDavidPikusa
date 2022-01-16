/******************
gestion des niveaux
******************/

// niveau 0
Niveaux.push(
	{
		titre:"Au secours",
		labyrinthe:"vide",
		nbe:3,
		type:0.9,
		vitesse:75
	});

// niveau 1
Niveaux.push(
	{
		titre:"Où est a sortie",
		labyrinthe:"lab",
		nbe:4,
		type:0.6,
		vitesse:50
	});

// niveau 3 (test)
Niveaux.push(
	{
		titre:"test",
		labyrinthe:"croix",
		nbe:8,
		type:0.7,
		vitesse:100
	});

// initialisation d'un niveau
function initNiveau(nb) {
	n = Niveaux[nb];
	switch (n.labyrinthe) {
		case "vide":niveauVide();
			break;
		case "lab":niveauLab();
			break;
		case "croix":niveauCroix();
			break;
	}
	createRobot(n.nbe,n.type);
	INTERVAL = setInterval(deplaceRobots,n.vitesse);
}

/*********************
 affichage des niveaux 
*********************/

/* écran vide*/
function niveauVide() {
	for (var i=0;i<TAILLE;i++) {
		for (var j=0;j<TAILLE;j++) {
			plot(i,j,"white");
		} 
	}
	for (var i = 4; i < XC-5; i++) {
		plot(XC,i,"black");
        plot(XC+17,i,"black");
        plot(XC-17,i,"black");
		plot(i,XC,"black");
        plot(XC+17,XC+2+i,"black");
        plot(XC-17,XC+2+i,"black");
		plot(XC,XC+2+i,"black");
		plot(XC+2+i,XC,"black");
        plot(XC+2+i,XC+17,"black");
        plot(XC+2+i,XC-17,"black");
        plot(XC-20+i,XC+17,"black");
        plot(XC-20+i,XC-17,"black");
	}
	// arrivée
	plot(XC,YC,"green");
}

/* labyrinthe */
function createTab(taille,nb0,c1,c2) {
	var tab = new Array(taille);
	tab.fill(c1,0,taille);
	tab.fill(c2,0,nb0);
	return tab.sort(() => Math.random() - 0.5)
}
 
function carre(pos,nb,c1,c2) {
	long = TAILLE-2*pos
	t = createTab(4*(long-1),nb,c1,c2);
	cpt = 0;
	for (var i=pos;i<TAILLE-pos;i++) {
		plot(i,pos,t[cpt]);
		plot(i,TAILLE-pos-1,t[cpt+1]);
		plot(pos,i,t[cpt+2]);
		plot(TAILLE-pos-1,i,t[cpt+3]);
		cpt = cpt + 4
	}
}

 function niveauLab() {
	for (var i=1;i<Math.trunc((TAILLE-1)/2);i++) {
		if (i%2==1) {
			carre(i,6,"black","white");
		} else {
			carre(i,1,"white","black")
		}
	}
	// arrivée
	plot(XC,YC,"green");
}

// croix

function niveauCroix() {
	for (var i=0;i<TAILLE;i++) {
		for (var j=0;j<TAILLE;j++) {
			plot(i,j,"white");
		} 
	}
	for (var i = 3; i < XC-5; i++) {
		plot(XC,i,"black");
		plot(i,XC,"black");
		plot(XC,XC+2+i,"black");
		plot(XC+2+i,XC,"black");
	}
	// arrivée
	plot(XC,YC,"green");
}
