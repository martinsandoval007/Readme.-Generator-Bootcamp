// TODO: Include packages needed for this application
const inquirer = require(`inquirer`);
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter your name',
            validate : Input => {
                if(Input){
                    return true;
                }else{
                    console.log('Please enter name!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'project-name',
            message: 'Please enter your project-name',
            validate : Input => {
                if(Input){
                    return true;
                }else{
                    console.log('Please enter project-name!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Please enter description of your project',
            validate : Input => {
                if(Input){
                    return true;
                }else{
                    console.log('Please enter description of your project!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'Please enter how to install project',
            validate : Input => {
                if(Input){
                    return true;
                }else{
                    console.log('Please enter how to install project.')
                    return false;
                }
            }
        },
        

    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=>{
        if (err){
            console.error(err);
            return;
        }
        console.log('README file created sucessfully')
    });
}

// TODO: Create a function to initialize app
function init() {
    questions()
  .then((answers) => {
    // Process the user's answers here
    const readmeData = generateMarkdown(answers)
    writeToFile('README.md', readmeData);
  })
  .catch((error) => {
    console.error(error);
  });
}

// Function call to initialize app
init();
