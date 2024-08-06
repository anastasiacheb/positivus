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
        if (this.firstElementChild.src.endsWith("icons/-.svg")) {
            this.firstElementChild.src = "icons/+.svg";
          } else {
            this.firstElementChild.src = "icons/-.svg";
          }
        let accText = this.parentElement.nextElementSibling
        if (accText.style.maxHeight) {
            accText.style.maxHeight = null;
        } else {
            accText.style.maxHeight = accText.scrollHeight + "px";
        }
    });
}

/*carousel*/

let arrowRight = document.querySelector(".icon-arrow_right");
let arrowLeft = document.querySelector(".icon-arrow_left");
let dots = document.querySelectorAll(".icon-dot");
let testiCard = document.querySelectorAll(".card-testi");
let dotNumber = 0;
let cardTranslateX = 0;
let cardWrap = document.querySelector(".section-testi__cards-wrap");


arrowRight.addEventListener("click", () => {
    if (dotNumber < 4) {
        dots[dotNumber].classList.remove("icon-dot_active");
        dots[dotNumber+1].classList.add("icon-dot_active");
        dotNumber += 1;
        cardTranslateX += testiCard[1].scrollWidth + 30;
        cardWrap.style.transform = `translate(-${cardTranslateX}px)`;
    }
    arrowLeft.classList.remove("icon-arrow_inactive");
    if (dotNumber == 4) {
        arrowRight.classList.add("icon-arrow_inactive")
    }
})

arrowLeft.addEventListener("click", () => {
    if (dotNumber > 0) {
        dots[dotNumber].classList.remove("icon-dot_active");
        dots[dotNumber-1].classList.add("icon-dot_active");
        dotNumber -= 1;
        cardTranslateX -= testiCard[1].scrollWidth + 30;
        cardWrap.style.transform = `translate(-${cardTranslateX}px)`;
    }
    arrowRight.classList.remove("icon-arrow_inactive");
    if (dotNumber == 0) {
        arrowLeft.classList.add("icon-arrow_inactive")
    }
})