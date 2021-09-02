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
            resolve(team);
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
                        when: (ans) => ans.employeeType === 'Engineer'
                    },
                    {
                        name: 'id',
                        message: 'Engineer\'s ID : ',
                        when: (ans) => ans.employeeType === 'Engineer'
                    },
                    {
                        name: 'email',
                        message: 'Engineer\'s email : ',
                        when: (ans) => ans.employeeType === 'Engineer'
                    },
                    {
                        name: 'github',
                        message: 'Engineer\'s Github : ',
                        when: (ans) => ans.employeeType === 'Engineer'
                    },
                    {
                        name: 'name',
                        message: 'Intern\'s name : ',
                        when: (ans) => ans.employeeType === 'Intern'
                    },
                    {
                        name: 'id',
                        message: 'Intern\'s ID : ',
                        when: (ans) => ans.employeeType === 'Intern'
                    },
                    {
                        name: 'email',
                        message: 'Intern\'s email : ',
                        when: (ans) => ans.employeeType === 'Intern'
                    },
                    {
                        name: 'school',
                        message: 'Intern\'s school : ',
                        when: (ans) => ans.employeeType === 'Intern'
                    }
                ]

            }
        ]).then(ans => {
            for (let i = 0; i < ans.employeeTeam.length; i++) {
                if (ans.employeeTeam[i].employeeType === 'Engineer') {
                    const engineer = new Engineer(ans.employeeTeam[i].name, ans.employeeTeam[i].id, ans.employeeTeam[i].email, ans.employeeTeam[i].github);
                    team.push(engineer);
                    resolve(team);
                } else if (ans.employeeTeam[i].employeeType === 'Intern') {
                    const intern = new Intern(ans.employeeTeam[i].name, ans.employeeTeam[i].id, ans.employeeTeam[i].email, ans.employeeTeam[i].school);
                    team.push(intern);
                    resolve(team);
                } 
            }
            console.log(team);
        })
    })
}

async function init() {
    console.log('calling');
    const managerResult = await managerPrompt();
    const employeeResult = await employeePrompt();
}

init();
