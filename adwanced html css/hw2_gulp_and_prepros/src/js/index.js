
const btnMenu = document.querySelector(".navbar__burger");
const menu = document.querySelector(".navbar__list");
const head = document.querySelector('.header:before')
const bod = document.querySelector('html');




btnMenu.addEventListener("click", () => {
    btnMenu.classList.toggle("active");
    menu.classList.toggle("active");


});

bod.addEventListener("click", () => {
    const actives = document.getElementsByClassName('active');
    const currentActive = actives[0];
    if (currentActive)
        currentActive.classList.remove("active");
});
