window.addEventListener("load",run,false);

function run() {
    createTable(TAILLE);
    initNiveau(0);
    initJoueurs();
    document.addEventListener("keydown",bougeJoueurs,false);
    
}
