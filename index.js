const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const { rejects } = require("assert/strict");
const { resolve } = require("path");

const employees = [];

function init() {
    createHTML();
    addEmployee();
};

// use inquirer
function newEmployee() {
    inquirer.prompt([
        {
            type:"input",
            message: "Enter new Employee name.",
            name: "name"
        },
        {
            type:"list",
            message: "Select new Employee role.",
            choices: [
                "Manager",
                "Engineer",
                "Intern"
            ],
            name: "role"
        },
        {
            type:"input",
            message: "Enter new Employee ID number.",
            name: "id"
        },
        {
            type:"input",
            message: "Enter new Employee email address.",
            name: "email"
        }
    ]).then(function({name, role, id, email}) {
        let roleInfo = "";
        if (role === "Manager") {
            roleInfo = "Office Number";
        } else if (role === "Engineer") {
            roleInfo = "Github username";
        } else {
            roleInfo = "School Name";
        }
        inquirer.prompt([{
            message: `Enter team member's ${roleInfo}`,
            name: "roleInfo"
        },
        {
            type: "list",
            message: "Would you like to add more team members?",
            choices: [
                "Yes",
                "No"
            ],
            name: "addEmployees"
        }])
        .then(function({roleInfo, addEmployees}) {
            let newEmployee;
            if (role === "Manager") {
                newEmployee = new Manager(name, id, email, roleInfo);
            } else if (role === "Engineer") {
                newEmployee = new Engineer(name, id, email, roleInfo);
            } else {
                newEmployee = new Intern(name, id, email, roleInfo);
            };
            employees.push(newEmployee);
            addHTMl(newEmployee)
            .then(function() {
                if (addEmployees === "Yes") {
                    addEmployee();
                } else {
                    finishHtml();
                }
            });
        });
    });
};

function createHTML() {
    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Employee Team</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>    
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
    </head>
    <body>
    <div class="container">
            <h1 class="display-1 ">Team Profile</h1>
            <div class="row">
            
    `;
    fs.writeFile("./output/employees.html",html, function(err) {
        if(err) {
            console.log(err);
        
        }
    });
}


function addHTMl(employee) {
    return new Promise(function(res, rej) {
        const name = employee.getName();
        const role = employee.getRole();
        const id = employee.getId();
        const email = employee.getEmail();
        let data = "";
        if (role === "Manager") {
            const officeNumber = employee.getOffice();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Manager</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">GitHub: ${officeNumber}</li>
            </ul>
            </div>
        </div>`;
        } else if (role === "Engineer") {
            const gitHub = employee.getGithub();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Engineer</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">GitHub: ${gitHub}</li>
            </ul>
            </div>
        </div>`;
        } else {
            const schoolName = employee.getSchool();
            data = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Intern</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">GitHub: ${schoolName}</li>
            </ul>
            </div>
        </div>`;
        }
        console.log("Adding new Employee");
        fs.appendFile("./output/employees.html", data, function(err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });
};

function endHTML() {
    const html = `</div>
        </div>
        
    </body>
    </html>`;

        fs.appendFile("./output/employees.html", html, function (err) {
            if (err) {
                console.log(err);
            };
        });
        console.log("end");
}

init();