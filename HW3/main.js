let num1 = null;
let num2 = null;
let op = null;
do {
    num1 = +prompt('enter number');
    num2 = +prompt('enter number');
    op = prompt('enter operation')
}while ( !num1 && !num2)
let result ;
if (op === '+'){
    result = num1 + num2;
}else if (op === '-'){
    result = num1 - num2;
}else if (op === '*'){
    result = num1 * num2;
}else if (op === '/'){
    result = num1 / num2;
}
console.log(result);