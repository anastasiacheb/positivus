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