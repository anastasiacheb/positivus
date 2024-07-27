/*navigation menu*/

let burgerButton = document.querySelector(".burger");
let navMenu = document.querySelector(".menu");
let navMenuLinks = document.querySelectorAll(".menu__link");

burgerButton.addEventListener("click", () => {
    navMenu.classList.toggle("menu_invisible");
    burgerButton.classList.toggle("burger_active");
    document.body.classList.toggle("body_disable-scroll");
})

for (let i = 1; i < navMenuLinks.length; i++) {
    navMenuLinks[i].addEventListener("click", () => {
        navMenu.classList.add("menu_invisible");
    })
}

/*accordion*/

let accButtons = document.querySelectorAll(".card-quest__button");

for (let g = 0; g < accButtons.length; g++){
    accButtons[g].addEventListener("click", function() {
        this.parentElement.parentElement.classList.toggle("card-quest_open");
        let accText = this.parentElement.nextElementSibling
        /*accText.classList.toggle("card-quest__text_invisible");*/
        if (accText.style.maxHeight) {
            accText.style.maxHeight = null;
        } else {
            accText.style.maxHeight = accText.scrollHeight + "px";
        }
    });
}