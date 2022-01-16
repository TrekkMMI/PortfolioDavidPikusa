// objet qui va contenir toutes les fonctions
var lstFun = {};

lstFun.exemple = function(){
	effaceEcran();
    nouveau("toto");
    pose(0,0,"toto");
    oriente(45,"toto");
    avance(TAILLE*1.414,"toto");
    pose(TAILLE,0,"toto");
    oriente(135,"toto");
    avance(TAILLE*1.414,"toto");
};


lstFun.figure1 = function(){
	effaceEcran();
    nouveau("robot1");
    pose(0,400,"robot1");
    avance(800,"robot1");
    pose(400,0,"robot1");
    oriente(90,"robot1");
    avance(800,"robot1");
};


lstFun.figure2 = function(){
	effaceEcran();
    nouveau("robot2");
    pose(200,200,"robot2");
    for (var i=0;i<4;i++){
    avance(400,"robot2");
    tourne(90,"robot2");    
    }
};


lstFun.figure3 = function(){
	effaceEcran();
    nouveau("robot3");
    pose(200,200,"robot3");
    for (var i=0;i<3;i++){
    avance(400,"robot3");
    tourne(120,"robot3");    
    }
};

lstFun.figure4 = function(){
	effaceEcran();
    nouveau("robot4");
    pose(200,200,"robot4");
    for (var i=0;i<5;i++){
    avance(400,"robot4");
    tourne(144,"robot4");    
    }
};

lstFun.figure5 = function(){
	effaceEcran();
    nouveau("robot5");
    for (var i=0;i<20;i++){
    pose(i*40,0,"robot5");
    oriente(90,"robot5");
    avance(i*40,"robot5");
    oriente(180,"robot5");
    avance(i*40,"robot5");
    }
};

lstFun.figure6 = function(){
	effaceEcran();
    nouveau("robot6");
    pose(0,0,"robot6");
    for (var i=0;i<20;i++){
        avance(800-i*40,"robot6");
        tourne(90,"robot6");
        avance(800-i*40,"robot6");
        tourne(90,"robot6");
    }
};

lstFun.figure7 = function(){
	effaceEcran();
    nouveau("robot7");
    pose(400,10,"robot7");
    for (var i=0;i<360;i++){
        avance(3,"robot7");
        tourne(1,"robot7");

    }
};


lstFun.figure8 = function(){
	effaceEcran();
    nouveau("robot8");
    pose(400,400,"robot8");
    for (var i=0;i<150;i++){
        avance(i,"robot8");
        tourne(30,"robot8");
    }
};


lstFun.figure9 = function(){
	effaceEcran();
    nouveau("robot9");
    pose(0,800,"robot9");
    for (var i=0;i<30;i++){
        oriente(272,"robot9");
        avance(800,"robot9");
        oriente(90,"robot9");
        avance(800,"robot9");
    }
};


lstFun.figure10 = function(){
	effaceEcran();
    nouveau("robot10");
    pose(600,600,"robot10");
    for (var i=0;i<2;i++){
        pose(i*200,0,"robot10");
        boite("robot10");
        pose(i*200,200,"robot10");
        boite("robot10")
    }
};

lstFun.figure11 = function(){
	effaceEcran();
    nouveau("robot11");
    pose(400,400,"robot11");
    for (var i=0;i<5;i++){
        boite("robot11");
        tourne(72,"robot11");
    }
};

lstFun.figure12 = function(){
	effaceEcran();
    nouveau("robot12");
    pose(400,400,"robot12");
    for (var i=0;i<36;i++){
        boite("robot12");
        tourne(10,"robot12");
    }
};

lstFun.figure13 = function(){
	effaceEcran();
    nouveau("robot13");
    pose(600,400,"robot13");
    oriente(90,"robot13"); 
    for (var i=0;i<180;i++){
    avance(3,"robot13"); 
    tourne(1,"robot13");
}
    for (var i=0;i<120;i++){
    avance(1.75,"robot13"); 
    tourne(.5,"robot13");
}
    tourne(60,"robot13");
        for (var i=0;i<65;i++){
    avance(1.75,"robot13"); 
    tourne(.5,"robot13");
}
        tourne(240,"robot13");
        for (var i=0;i<65;i++){
    avance(1.75,"robot13"); 
    tourne(.525,"robot13");
}
    tourne(60,"robot13");
        for (var i=0;i<120;i++){
    avance(1.75,"robot13"); 
    tourne(.5,"robot13");
}
    oriente(0,"robot13"); 
    pose(500,390,"robot13");
    avance(50,"robot13");
    pose(300,390,"robot13");
    avance(50,"robot13");
    pose(420,450,"robot13");
    for (var i=0;i<3;i++){
    avance(20,"robot13");
    tourne(120,"robot13");    
    }
    pose(430,480,"robot13");
    oriente(90,"robot13"); 
    for (var i=0;i<180;i++){
    avance(0.5,"robot13"); 
    tourne(1,"robot13");
    }
    pose(488,480,"robot13");
    oriente(90,"robot13"); 
    for (var i=0;i<180;i++){
    avance(0.5,"robot13"); 
    tourne(1,"robot13");
    }
    pose(525,480,"robot13");
    oriente(335,"robot13");
    avance(100,"robot13");
    pose(525,480,"robot13");
    oriente(360,"robot13");
    avance(100,"robot13");
    pose(525,480,"robot13");
    oriente(25,"robot13");
    avance(100,"robot13");
        pose(325,480,"robot13");
    oriente(155,"robot13");
    avance(100,"robot13");
    pose(325,480,"robot13");
    oriente(180,"robot13");
    avance(100,"robot13");
    pose(325,480,"robot13");
    oriente(205,"robot13");
    avance(100,"robot13");
};