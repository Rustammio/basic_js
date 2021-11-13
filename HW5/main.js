let result;
let ege;
let pass;

function createNewUser() {
    let name = prompt('name');
    let lastName = prompt('last name');
    let birth = prompt('enter date');
    birth = birth.slice(6);
    const newUser = {
        name: name,
        lastName: lastName,
        birthday: birth,
        getLogin() {
            return (this.name.slice(0, 1).toUpperCase() + this.lastName.toLowerCase())
        },
        getAge(date) {
            return ((new Date().getTime() - new Date(date)) / (24 * 3600 * 365.25 * 1000)) | 0;
        },
        getPassword() {
                return (this.name.slice(0, 1).toUpperCase() + this.lastName.toLowerCase() + this.birthday)
        }
    }
    result = newUser.getLogin()
    ege = newUser.getAge(birth)
    pass = newUser.getPassword()

}

createNewUser()
console.log(result);
console.log(ege)
console.log(pass)