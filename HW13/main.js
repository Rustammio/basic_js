const themeSwitcher = document.getElementById("theme-switch");

themeSwitcher.checked = false;
function clickHandler() {
    if (this.checked) {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
    } else {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light");
    }
}
themeSwitcher.addEventListener("click", clickHandler);

window.onload = checkTheme();

function checkTheme() {
    const localStorageTheme = localStorage.getItem("theme");

    if (localStorageTheme !== null && localStorageTheme === "dark") {
        // set the theme of body
        document.body.className = localStorageTheme;

        // adjust the slider position
        const themeSwitch = document.getElementById("theme-switch");
        themeSwitch.checked = true;
    }
}
























































//
// let menu = document.querySelector('.ramba-menu')
// let rBtn = document.querySelectorAll('.r-btn')
// let ra = document.querySelector('#Ra')
// let side = document.querySelectorAll('.sidebar-item')
// let link = document.querySelectorAll('.sidebar-item-link')
// const btn = document.createElement('button')
// btn.innerHTML = 'theme'
// btn.classList.add('r-btn')
// btn.style.marginLeft='100px'
// menu.append(btn)
// btn.addEventListener('click', function () {
//     ra.setAttribute('style', 'color:DarkBlue')
//     menu.style.backgroundColor = 'Blue'
//     rBtn.forEach(function (element) {
//         element.style.backgroundColor = 'DarkBlue'
//     })
//     document.body.style.backgroundColor= 'SlateGrey'
//     document.body.style.color= 'white'
//     side.forEach(function (element) {
//         element.style.backgroundColor = 'SlateGrey'
//     })
//     link.forEach(function (element) {
//         element.style.color ='white'
//     })
//     const theme ={
//
//     }
//
//
// })
