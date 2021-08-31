const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inq = require('inquirer');
const fs = require('fs');

inq.prompt([
    {
        type: 'input',
        name: 'somename',
        message: 'hey hey hey'
    }
]).then((ans) => {
    console.log(ans)
}).catch((err) => {
    if (err.isTtyError) {
        console.log('An error occured.');
    } else {
        console.log('A different kind of error occured.');
    }
});
