let num = null;
do {
    num = +prompt('enter number')

} while (!num || Number.isNaN(num));

loop1: for (let i = 0; i < num; i++) {
    if (i % 5 === 0) {
        console.log(i)
    } else if (num < 5){
        alert('Sorry, no numbers')
        break loop1;
    }
}
let m = null;
let n = null;
do {
    m = +prompt('small number');
    n = +prompt('biggest number');
    if (m > n || Number.isNaN()){
        alert('enter the right number')
    }
} while ((m > n) && !Number.isNaN(m, n))
for ( let i = m; i <= n; i++ ) {
    console.log(i)
}