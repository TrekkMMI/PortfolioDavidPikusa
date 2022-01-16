let burger = document.querySelector(".navbar_menuBurger");
let list = document.querySelector(".navbar__lien");
let link = document.querySelectorAll(".navbar__item");

let openMenu = function() {
        burger.classList.toggle('isOpen');
        list.classList.toggle('isOpen');
}

burger.addEventListener("click", openMenu);
link.forEach(e => {
    e.addEventListener("click", openMenu);
});