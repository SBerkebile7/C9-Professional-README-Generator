// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if(titleInput) {
                return true;
            } else {
                console.log("Please enter the title of your project");
                return false;
            }
        }
    },
    {
        type:'input',
        name: 'description',
        message: 'Please provide a description of the project (Required)',
        validate: descriptionInput => {
            if(descriptionInput) {
                return true;
            } else {
                console.log("Please enter a description for your project.");
                return false;
            }
        }
    },
    {
        type:'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. (Required)',
        validate: installInput => {
            if(installInput) {
                return true;
            } else {
                console.log("Please enter the steps to install your project.");
                return false;
            }
        }
    },
    {
        type:'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. (Required)',
        validate: usageInput => {
            if(usageInput) {
                return true;
            } else {
                console.log("Please enter some instructions or examples for how to use your project.");
                return false;
            }
        }
    },
    {
        type:'input',
        name: 'contributing',
        message: 'List your collaborators, if any, with links to their GitHub profiles. (Required)',
        validate: contributionInput => {
            if(contributionInput) {
                return true;
            } else {
                console.log("Please enter who collaborated with you on this project, if none please state this.");
                return false;
            }
        }
    },
    {
        type:'input',
        name: 'tests',
        message: 'How do you test the project? (Required)',
        validate: testInput => {
            if(testInput) {
                return true;
            } else {
                console.log("Please enter how you test the project.");
                return false;
            }
        }
    },
    {
        type:'checkbox',
        name: 'license',
        message: 'What is your name? (Required)',
        choices: ['Apache License 2.0', 'GNU GPLv3', 'MIT License', 'None'],
        validate: checkboxInput => {
            if(checkboxInput) {
                return true;
            } else {
                console.log("Please choose your licenses, if you don't have a license select 'None'.");
                return false;
            }
        }
    },
    {
        type:'input',
        name: 'username',
        message: 'What is your GitHub name? (Required)',
        validate: usernameInput => {
            if(usernameInput) {
                return true;
            } else {
                console.log("Please enter your GitHub username");
                return false;
            }
        }
    },
    {
        type:'input',
        name: 'emailAddress',
        message: 'What is your email Address? (Required)',
        validate: emailInput => {
            if(emailInput) {
                return true;
            } else {
                console.log("Please enter your email address");
                return false;
            }
        }
    }
]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err) {
            console.log(err);
        }
        else {
            console.log('File created!');
        };
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data => {
        writeToFile("README.md", generateMarkdown(data))
    })
};

// Function call to initialize app
init();