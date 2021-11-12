let result;
function createNewUser() {
    let name = prompt('name');
    let lastName = prompt('last name');
    const newUser = {
        name: name,
        lastName: lastName,
        getLogin() {
           return (name.slice(0, 1) + this.lastName.toLowerCase())
        }
    }
    result = newUser.getLogin()
    return result;
}

createNewUser()
console.log(result);