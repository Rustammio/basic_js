const wrapper = document.querySelector('.images-wrapper')
const img = document.querySelectorAll('.image-to-show')
console.log(img, wrapper)
const btnPause = document.createElement('button')
btnPause.innerHTML = 'Прекратить'
btnPause.classList.add('btn')
const btnReturn = document.createElement('button')
btnReturn.classList.add('btn')
btnReturn.innerHTML = 'Возобновить показ'

document.body.append(btnPause, btnReturn)

function show() {
    img.forEach(function (element) {
        element.style.display = 'none'
    })
    for (let i = 0; i < img.length; i++) {
        if (i<=3) {
            setInterval(function () {
                img[i].style.display = 'block'
            }, 1000 * i)
        }else {
            show()
        }
    }

}

show();

