let ar =  ["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"];
// let div = document.createElement("div")
let nova = function (ar) {
    for (let i = 0; i < ar.length; i++) {
        let func = function (ar, i) {
        return ar[i]}
        const ddd = document.createElement("div").innerHTML = func(ar) ;
        document.body.prepend(ddd)
        }
}

nova(ar)

