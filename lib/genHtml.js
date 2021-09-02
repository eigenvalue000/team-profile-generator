const fs = require('fs');

function genHtml(fileName, data) {
    var team = [];
    for (let i = 0; i < data.length; i++) {
        team.push(data[i]);
    }
    
    var cardArray = [];
    for (let i = 0; i < team.length; i++) {
        if (team[i].constructor.name === 'Manager') {
            cardArray.push(`<div id="card"><div id="card-title">${team[i].constructor.name}</div><div id="employee-name">${team[i].name}</div><div id="employee-id">ID: ${team[i].id}</div><div id="employee-email">Email: <a href="mailto:${team[i].email}">${team[i].email}</a></div><div id="employee-misc">Office Number: ${team[i].officeNumber}</div></div>`);
        } else if (team[i].constructor.name === 'Engineer') {
            cardArray.push(`<div id="card"><div id="card-title">${team[i].constructor.name}</div><div id="employee-name">${team[i].name}</div><div id="employee-id">ID: ${team[i].id}</div><div id="employee-email">Email: <a href="mailto:${team[i].email}">${team[i].email}</a></div><div id="employee-misc">Github: <a target="_blank" rel="noopener noreferrer" href="https://github.com/${team[i].github}/">${team[i].github}</a></div></div>`);
        } else if (team[i].constructor.name === 'Intern') {
            cardArray.push(`<div id="card"><div id="card-title">${team[i].constructor.name}</div><div id="employee-name">${team[i].name}</div><div id="employee-id">ID: ${team[i].id}</div><div id="employee-email">Email: <a href="mailto:${team[i].email}">${team[i].email}</a></div><div id="employee-misc">School: ${team[i].school}</div></div>`);
        } 
    }
    
    const htmlToWrite = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./dist/style.css" />
        <title>Team Profile Generator</title>
    </head>
    <body>
    <header>My Team</header>
    <div id="card-container">
        ${cardArray}
        </div>
    </body>
    </html>`
    fs.writeFile(fileName, htmlToWrite, () => {})
}

module.exports = {genHtml};