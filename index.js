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
                message: 'Manager\'s name : '
            },
            {
                type: 'input',
                name: 'id',
                message: 'Manager\'s ID : ',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Manager\'s email : ',
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'Manager\'s office number : ',
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
                type: 'recursive',
                message: 'Would you like to add employees to your team?',
                name: 'employeeTeam',
                prompts: [
                    {
                        type: 'list',
                        name: 'employeeType',
                        message: 'Add an employee to the team : ',
                        choices: ['Engineer', 'Intern'],
                    },
                    {
                        name: 'name',
                        message: 'Engineer\'s name : ',
                        when: ({ employeeType }) => employeeType === 'Engineer'
                    },
                    {
                        name: 'id',
                        message: 'Engineer\'s ID : ',
                        when: ( {employeeType} ) => employeeType === 'Engineer'
                    },
                    {
                        name: 'email',
                        message: 'Engineer\'s email : ',
                        when: ( {employeeType} ) => employeeType === 'Engineer'
                    },
                    {
                        name: 'github',
                        message: 'Engineer\'s Github : ',
                        when: ( {employeeType} ) => employeeType === 'Engineer'
                    },
                    {
                        name: 'name',
                        message: 'Intern\'s name : ',
                        when: ({ employeeType }) => employeeType === 'Intern'
                    }
                ]

            }
        ]).then(ans => {
           console.log(ans.employeeTeam.length)
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