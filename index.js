// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const {generateMarkdown} = require('./utils/generateMarkdown'); 
// TODO: Create an array of questions for user input
const questions = [   
    {
        type: 'input',
        name: 'title',
        message: 'What is your title?'
    },  
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your README.'
    },  
    {
        type: 'input',
        name: 'instal',
        message: 'What are your installation instructions?'
    },  
    {
        type: 'input',
        name: 'usage',
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
        type: 'list',
        name: 'license',
        message: 'What license will you use?',
        choices: ['BSD', 'Boost', 'Apache']
    },  
    {
        type: 'input',
        name: 'github',
        message: 'Enter your github user name.'
    },  
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },  
];

// TODO: Create a function to write README file
function writeToFile(answers) {
    fs.writeFile('readMe.md', generateMarkdown(answers), function(err) {
        if (err) {
          return console.log(err);
        } 
})}
//const readMe = 'readMe.md'
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
    return writeToFile(answers);
    }) 
}


// Function call to initialize app
init();
