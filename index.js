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
        ]).then((ans) => {
            const manager = new Manager(ans.name, 1, 'gm', 1);
            team.push(manager);
            resolve(team)
        })
    })
}

async function asyncCall() {
    console.log('calling');
    const result = await managerPrompt();
    console.log(result);
}

asyncCall();