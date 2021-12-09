const img = document.querySelectorAll('.image-to-show')
const btnPause = document.createElement('button')
btnPause.innerHTML = 'Прекратить'
btnPause.classList.add('btn')
const btnReturn = document.createElement('button')
btnReturn.classList.add('btn')
btnReturn.innerHTML = 'Возобновить показ'
document.body.append(btnPause, btnReturn)
img.forEach(function (element) {
    element.style.display = 'none'
})
img[0].style.display ='block'
let c = 0

function change() {

    img[c].style.display = 'none'
    c += 1

    if (c === img.length) {
        c = 0
    }
    img[c].style.display = 'block'

}

let ti = setInterval(change, 3000)
btnPause.addEventListener('click', function () {
    clearInterval(ti)

})
btnReturn.addEventListener('click', function () {
    clearInterval(ti)
    ti = setInterval(change, 3000)

})
// function Timer(fn, t) {
//     var timerObj = setInterval(fn, t);
//
//     this.stop = function() {
//         if (timerObj) {
//             clearInterval(timerObj);
//             timerObj = null;
//         }
//         return this;
//     }
//
//     // start timer using current settings (if it's not already running)
//     this.start = function() {
//         if (!timerObj) {
//             this.stop();
//             timerObj = setInterval(fn, t);
//         }
//         return this;
//     }
//
//     // start with new or original interval, stop current interval
//     this.reset = function(newT = t) {
//         t = newT;
//         return this.stop().start();
//     }
// }
// var timer = new Timer(function() {
//     // your function here
// }, 5000);
//
//
// // switch interval to 10 seconds
// timer.reset(10000);
//
// // stop the timer
// timer.stop();
//
// // start the timer
// timer.start();
// // btnPause.addEventListener('click', function () {
// //   timer.stop();
// //     btnReturn.removeAttribute('disabled')
// // })
// // btnReturn.addEventListener('click', function () {
// //     timer.start();
// //     btnReturn.setAttribute('disabled', '')
// // })
//
//









// let timerId = setInterval(function () {
//     img[i].style.display = 'none'
//     i++
//     if (i === img.length) {
//         i = 0
//     }
//     img[i].style.display = 'block'
// }, 3000)
// let a = 3
// back()
// function back() {
//     document.getElementById('back').innerHTML = a;
//     a--;
//     if (a <0 ){
//         clearTimeout(timer)
//     }
//    timer = setTimeout(back, 1000)
// }


/*let time =*/
// change()

//
// zero()
//
// function count() {
//     for (let i = 0; i < img.length; i++) {
//         if (i <= 3) {
//             setInterval(function () {
//                 img[i].style.display = 'block'
//             }, 1000 * i)
//
//         }
//
//     }
// }
//
// window.addEventListener('load', count, zero)
//
// function zero() {
//     img.forEach(function (element) {
//         element.style.display = 'none'
//     })
// }

// function show() {

// console.log(img)

// for (let i = 0; i < 3;){
//     i++;
//     setInterval(function () {
//         img[i].style.display = 'block'
//     }, 1000)
// }
// for (let i = 0; i < img.length; i++) {
//     setInterval(function () {
//         if (i < img.length) {
//             img[i].style.display = 'block'
//             console.log(img[i].style.display + i)
//         } else {
//             show()
//         }
//     }, 1000 * i)
// }
// }
// show()
// let i = 0
// while (i < img.length) {
//     i++
//
//
// }
