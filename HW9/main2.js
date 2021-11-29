let tabs = document.querySelector('.tabs-title')
let tabCont = document.querySelector('.tabs-content')
let tit = document.querySelectorAll('.tabs-title')
let cont = document.querySelector('.cont')
document.addEventListener('click', event => {
    let targ = event.target.dataset.name

    if (targ === tit.innerHTML){
        console.log('done')
    }
})
console.log(tit)