let priceInp = document.querySelector('input');
priceInp.addEventListener('onfocus', function () {
    priceInp.classList.add('active')
})
const prise = document.createElement('span');
let warning = document.createElement('h1')
const but = document.createElement('button')
but.addEventListener('click', function () {
    // prise.innerHTML = ''
    document.body.removeChild(prise)
    priceInp.classList.remove('active', 'done')
})
but.innerHTML ='X'
let createElement = function () {
    prise.innerHTML = `Текущая цена: ${priceInp.value}`
    prise.classList.add('span')
    document.body.prepend(prise)
    prise.insertAdjacentElement('beforeend',but)
    event.stopPropagation()
    priceInp.value = ''
    warning.remove()
    priceInp.classList.remove('undone')

}
priceInp.addEventListener('mouseout', function () {
    priceInp.classList.remove('active')
    if (priceInp.value > 0 ){
        createElement()
        priceInp.classList.add('done')
    }else {
        priceInp.classList.add('undone')
        priceInp.classList.remove('active', 'done')
        warning.innerHTML = 'Please enter correct price';
        document.body.append(warning)
    }
});

// const container = document.querySelector('.span');
// container.addEventListener('click', function (e) {
//     if ((e.offsetX > container.offsetWidth) || (e.offsetY > container.offsetHeight)) {
//         window.location.href = 'http://example.com/';
//     }
// });
// if (span){
//     let del = function () {
//         let but = document.querySelector('.span:after')
//         but.addEventListener('click', function () {
//             let rem = document.querySelector('.span')
//             document.body.removeChild(rem)
//         })
//         return del()
//     }
//
// }
