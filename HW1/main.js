const name = prompt('name ');
const age = +prompt('age');
if ((age <= 18) || (age <= 22) ) {
    if (age < 18){
        alert(`${name} You are not allowed to visit this website`)
    }else if(confirm(`${name} Are you sure you want to continue? `)){
       alert(`${name} welcome`)
    }else alert(`${name}You are not allowed to visit this website`)
}else if(age > 22){
    alert(`${name} welcome`)
}