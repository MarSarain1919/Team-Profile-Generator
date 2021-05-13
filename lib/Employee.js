const inquirer = require('inquirer');

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }


    getName() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "What is the name of the Employee?",
                },
            ])
            .then((response) =>
            console.log(response));
    }




    getName()}
