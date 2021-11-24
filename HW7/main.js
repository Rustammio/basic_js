let ar =  ["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"];

let ool = document.createElement("ul")
document.body.prepend(ool)

let list = ar.map(function (a){
    a = `<li>${a}</li>`
    console.log(a)
    return a
})
console.log(list)
ool.insertAdjacentHTML("beforebegin", list.join('  '))
