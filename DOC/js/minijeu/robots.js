/*****************
Gestion des robots
*****************/

/* ajout et positionnement d'un robot dans le tableau de tous les robots */
function createRobot(nb,t){
	for (var i=0;i<nb;i++) {
		// définition d'un robot
		r = {
			x:XC-1,
			y:YC-1,
			couleur:CouleurR,
			dir:0,
			// la valeur de "type" détermine le coté "foufou" du robot
			// plus la valeur est proche de 1 moins son déplacement sera aléatoire
			type:t
		};
		// ajout du robot 
		Robots.push(r);
		// affichage initial
		plot(r.x,r.y,r.couleur);
	}
}

/* déplacement de tous les robot par parcours du tableau */
function deplaceRobots() {
	for (var i=0;i<Robots.length;i++) {
		depRobot(i);
	}
}

/* déplacement du robot n°i */
function depRobot(i) {
	r = Robots[i];
	xen = r.x;
	yen = r.y;
	switch(r.dir) {
		case 0: yen--;
			break;
		case 1: xen++
			break;
		case 2: yen++;
			break;
		case 3: xen--;
			break
	}
	if (xen<TAILLE && xen>=0 && yen<TAILLE && yen>=0) {
		// gestion de la "foufou" attitude du robot
		rnd = Math.random();
	 	if(rnd<r.type && getCouleur(xen,yen)=="white") {
			plot(r.x,r.y,"white");
			r.x = xen;
			r.y = yen;
			plot(r.x,r.y,r.couleur);
		} else { // gestion des collisions avec un joueur, si un robot rencontre un joueur celui-ci est télépirté à son point de départ
			for (var k=0;k<Joueurs.length;k++) {
				j = Joueurs[k];
				if (getCouleur(xen,yen) == j.couleur) {
					plot(xen,yen,"white");
					initJoueur(k);
				}	
			}
			r.dir = Math.trunc(Math.random()*4);
		}
	} else {
		r.dir = Math.trunc(Math.random()*4);
	}
}


