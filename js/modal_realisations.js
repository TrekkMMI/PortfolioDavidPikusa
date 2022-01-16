let btn = document.querySelectorAll(".realisation_info");
let modalOpen = document.querySelectorAll(".realisation_modal");
let cross = document.querySelectorAll(".realisation_modalClose");
        
let check = function(ev) {
    if (ev.target.dataset.check == "1") {
        ev.target.dataset.check = 0;
    }
    else {
        ev.target.dataset.check = 1;
    }

    console.log(ev.target);

    show();
}

let show = function() {
    for (i=0 ; i<btn.length ; i++){
        if (btn[i].dataset.check == "1"){
            btn[i].dataset.check = "0";
            modalOpen[i].classList.toggle('isOpen');
            body.classList.toggle('isOpen');
        }
        else if (btn[i].dataset.check == "0" && cross[i].dataset.check == "1"){
            cross[i].dataset.check = "0";
            modalOpen[i].classList.toggle('isOpen');
            body.classList.toggle('isOpen');
        }
    }

    modalOpen.forEach(e => {
        if (e.dataset.check == "1"){
            e.dataset.check = "0";
            e.classList.toggle('isOpen');
            body.classList.toggle('isOpen');
        }
    });
}

for (i=0 ;i<btn.length ; i++){
    btn[i].addEventListener("click", check);
    cross[i].addEventListener("click", check);
}

/* <div class="realisation_modal">
<img class="realisation_modalClose" src="./img/Popup/Cross.svg" alt="">
<img class="realisation_modalImg" src="./img/Animals/Recherches/cerf_Recherches.png" alt="recherches création cerf">
<div class="realisation_modalText">
    <h2 class="realisation_modalTextTitle">Titre</h2>
    <p class="realisation_modalTextDesc">Description</p>
    <div class="realisation_modalTextCredits">
        <span class="realisation_modalTextCreditsTitle">Réalisation :</span>
        <a class="realisation_modalTextCreditsAuthor" href="">Auteur</a>
    </div>
</div>
</div> */