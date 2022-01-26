
const btnMenu = document.querySelector(".navbar__burger");
const menu = document.querySelector(".navbar__list");
const head = document.querySelector('.header:before')

btnMenu.addEventListener("click", () => {
    btnMenu.classList.toggle("active");
    menu.classList.toggle("active");
    head.style.top = '-100%';
});
