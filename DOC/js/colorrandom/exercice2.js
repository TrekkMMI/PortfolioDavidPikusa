window.addEventListener("load",run,false);

function run(){

	function couleurAlea(){
		var couleurs = ["bleu","jaune","mauve","noir","orange","rouge","turquoise","vert"];
		var alea = Math.floor(Math.random()*8);
		return couleurs[alea];
	}

	var freq = {
		bleu : 0,
		jaune : 0,
		mauve : 0,
		noir : 0,
		orange : 0,
		rouge : 0,
		turquoise : 0,
		vert : 0
	};

	var tab = document.createElement("table");
	document.body.appendChild(tab);
	for(i=0;i<50;i++){
		var ligne = document.createElement("tr");
		tab.appendChild(ligne);
		for(j=0;j<50;j++){
			var cellule = document.createElement("td");
			ligne.appendChild(cellule);
			var coul = couleurAlea()
			cellule.setAttribute("class",coul);
			freq[coul]++;
		}
	}

	var para = document.createElement("p");
	document.body.appendChild(para);
	for(coul in freq){
		var texte = document.createTextNode(coul+" : "+freq[coul]);
		para.appendChild(texte);
		var br = document.createElement("br");
		para.appendChild(br);
	}





}
