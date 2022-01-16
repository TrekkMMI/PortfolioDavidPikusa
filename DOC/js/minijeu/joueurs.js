/***********************************************
Gestion des joueurs, initialisation, déplacement
************************************************/

/* initialisation de tous les joueurs par parcours de l'objet Joueurs */
function initJoueurs() {
	for(var i=0;i<Joueurs.length;i++) {
		initJoueur(i);
	}
}

/* initialisation du joueur n°i */
function initJoueur(i) {
	j = Joueurs[i];
	j.x = j.xd;
	j.y = j.yd;
	// placement du joueur en début de partie
	plot(j.x,j.y,j.couleur);
}


/* gestion du déplacement d'un joueur par parcours de l'objet Joueurs */ 
function bougeJoueurs(evt) {
	for(var i=0;i<Joueurs.length;i++) {
		bouge(i,evt);
	}
}
 
/* gestion du déplacement du joueur n° i */
function bouge(i,evt){
	var j = Joueurs[i];
	var precx = j.x;
	var precy = j.y;
	// test des touches définies pour le joueur n°i
	switch(evt.key){
			case j.h :
				j.y = j.y-1;
				if (j.y<0) j.y = 0;
				break;
			case j.d :
				j.x = j.x+1;
				if (j.x>TAILLE-1) j.x = TAILLE-1;
				break;
			case j.b :
				j.y = j.y+1;
				if (j.y>TAILLE-1) j.y = TAILLE-1;
				break;
			case j.g :
				j.x = j.x-1;
				if (j.x<0) j.x = 0;
				break;
	}
	// gestion des "murs"
	if (getCouleur(j.x,j.y) == "black") {
		j.x = precx;
		j.y = precy;
	} else if (getCouleur(j.x,j.y) == "green") { // quand le joueur termine le jeu
		gagne("Joueur "+i+" gagne");
	} 
	// effacement de la position précédente
	plot(precx,precy,"white");
	// affichage de la nouvelle position
	plot(j.x,j.y,j.couleur);
}

