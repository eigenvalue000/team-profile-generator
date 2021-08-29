const Employee = require('./lib/Employee');
const inq = require('inquirer');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        this.officeNumber = officeNumber;
        super(name, id, email);
    }
}