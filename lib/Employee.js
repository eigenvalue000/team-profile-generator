const inq = require('inquirer');

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        inq.prompt([
            {
                name: 'username',
                type: 'input',
                message: 'What is your user name?',
            }

            
        ]).then((res) => console.log(res))
    }

    getId() {

    }

    getEmail() {

    }

    getRole() {

    }

}