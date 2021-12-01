let fat = document.querySelector('body');
let btn = document.querySelectorAll('.btn')
console.log(btn)
function back (element){
    element.style.backgroundColor = 'black';
}
fat.addEventListener('keyup', e =>{
    btn.forEach(element=>{
        back(element)
        if((element.innerHTML === event.code.slice(3)) || (element.innerHTML === event.code)){
            console.log(event.code)
            element.style.backgroundColor = 'blue'

        }

    })
})