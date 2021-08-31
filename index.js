const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inq = require('inquirer');
const fs = require('fs');

inq.prompt([
    {
        type: 'input',
        name: 'managerName',
        message: 'Enter the team manager\'s name : '
    },
    {
        type: 'input',
        name: 'managerId',
        message: 'Enter the team manager\'s ID number : '
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'Enter the team manager\'s email address : '
    },
    {
        type: 'input',
        name: 'managerOfficeNumber',
        message: 'Enter the team manager\'s office number : '
    },
    {
        type: 'list',
        name: 'optionsList',
        message: 'Pick an option to continue : ',
        choices: ['Add an engineer.', 'Add an intern.', 'Finish building team.']
    },
]).then((ans) => {
    console.log(ans)
}).catch((err) => {
    if (err.isTtyError) {
        console.log('An error occured.');
    } else {
        console.log('A different kind of error occured.');
    }
});
