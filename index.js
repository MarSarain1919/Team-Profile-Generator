const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const employees = [];

function init() {
    createHTML();
    addEmployee();
};

// use inquirer
function addEmployee() {
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

};

function addHTMl() {

};

function endHTML() {

}

init();