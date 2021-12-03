let pas1 = document.getElementById('pas1')
let pas = document.getElementById('pas')
let i = document.getElementById('i')
let i1 = document.getElementById('i1')
let btn = document.querySelector('.btn')


function slash(event) {

    if (i.classList.contains('fa-eye')) {
        i.classList.remove('fa-eye')
        i.classList.add('fa-eye-slash')
        pas.setAttribute('type', 'text')
    } else {
        i.classList.remove('fa-eye-slash')
        i.classList.add('fa-eye')
        pas.setAttribute('type', 'password')
    }


}

function slash1(event) {
    event.preventDefault()
    if (i1.classList.contains('fa-eye')) {
        i1.classList.remove('fa-eye')
        i1.classList.add('fa-eye-slash')
        pas1.setAttribute('type', 'text')
    } else {
        i1.classList.remove('fa-eye-slash')
        i1.classList.add('fa-eye')
        pas1.setAttribute('type', 'password')
    }

}
function press (event) {
    event.preventDefault()
    if (((pas.value !== '') && (pas1.value !== '')) && (pas.value === pas1.value)) {
        alert('You are welcome')
    }else {
        let warning = document.createElement('p')
        warning.innerHTML = 'Нужно ввести одинаковые значения'
        warning.style.color = 'red'
        pas1.after(warning)
    }
}



i.addEventListener('click', slash)
i1.addEventListener('click', slash1)
btn.addEventListener('click', press)

