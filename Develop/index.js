// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const inquire = require('inquirer');
const { type } = require('os');
// TODO: Create an array of questions for user input
const questions = [   
    {
        type: 'input',
        name: 'title',
        message: 'What is your title?'
    },  
    {
        type: 'input',
        name: 'descriptionn',
        message: 'Please describe your README.'
    },  
    {
        type: 'input',
        name: 'instal instructions',
        message: 'What are your installation instructions?'
    },  
    {
        type: 'input',
        name: 'usage info',
        message: 'How should you use this README?'
    },  
    {
        type: 'input',
        name: 'contributions',
        message: 'What are the contributing guidelines?'
    },  
    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions?'
    },  
    {
        type: 'checkbox',
        name: 'licence',
        message: 'What license will you use?',
        choices: ['BSD', 'Boost', 'Apache']
    },  
    {
        type: 'input',
        name: 'user name',
        message: 'Enter your github user name.'
    },  
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },  
];
inquirer.prompt(questions)

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
