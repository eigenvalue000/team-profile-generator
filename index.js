const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inq = require('inquirer');
inq.registerPrompt('recursive', require('inquirer-recursive'));
const fs = require('fs');

const team = [];

function managerPrompt() {
    return new Promise(resolve => {
        inq.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Manager name : '
            },
            {
                type: 'input',
                name: 'id',
                message: 'Manager ID : ',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Manager email : ',
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'Manager office number : ',
            }
        ]).then((ans) => {
            const manager = new Manager(ans.name, ans.id, ans.email, ans.officeNumber);
            team.push(manager);
            resolve(team)
        })
    })
}

function employeePrompt() {
    return new Promise(resolve => {
        inq.prompt([
            {
                type: 'list',
                name: 'employeeType',
                message: 'Add an employee to the team : ',
                choices: ['Engineer', 'Intern',
                    {
                        name: 'Finish building team.',
                        value: false
                    }
                ]
            }
        ]).then(ans => {
            if (ans.employeeType) {
                console.log('Selected an employee')
            } else {
                console.log('Building team.')
            }
        })
    })
}

async function init() {
    console.log('calling');
    const managerResult = await managerPrompt();
    const employeeResult = await employeePrompt();
    console.log(managerResult);
    console.log(employeeResult)
    
}

init();