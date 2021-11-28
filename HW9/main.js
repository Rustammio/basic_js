// const tabs = document.querySelector('.tabs');
// const cont = document.querySelector('.cont')
// const button = document.querySelectorAll('.tabs-title')
// const tabContent = document.querySelector('.tabs-content')
const tabs = document.getElementsByClassName('tabs');
// const cont = document.getElementsByClassName('cont')
const button = document.getElementsByClassName('tabs-title')
const tabContent = document.getElementsByClassName('cont')
button[0].classList.add('active');
tabContent[0].style.display = 'block';
// button.forEach((element) => {
//     element.addEventListener('click', function (event) {
//         element.classList.add('active')
//         console.log(event.target)
//     })
// })
// button.forEach((element) => {
//     element.addEventListener('mouseout', function () {
//         element.classList.remove('active')
//
//     })
// })
function tab(event,name) {
        for (let i = 0; i < button.length; i++) {
            tabContent[i].style.display = 'none';
            button[i].classList.remove('active');
        }
        document.getElementById(name).style.display = 'block';
        event.currentTarget.classList.add('active');
}

// tit.forEach((element) => {
//     element.addEventListener('click', function (event) {
//         function show(event) {
//             event.target.classList.add('on')
//         }
//     })
// button