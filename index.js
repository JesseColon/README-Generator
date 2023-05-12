// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const genMarkdown = require('./utils/generateMarkdown');
const generateMarkdown = require('./utils/generateMarkdown');
const { writeFile } = require('fs').promises;
// TODO: Create an array of questions f.or user input
const userPrompt = () =>{
    inquirer.prompt([
      {
          type: 'input',
          name: 'title',
          message: 'What is the title of your project?',
        },
        {
          type: 'input',
          name: 'description',
          message: 'write a detailed descripton of your project' ,
        },
        {
          type: 'input',
          name: 'installation',
          message: 'write installation instructions here',
        },
        {
          type: 'input',
          name: 'usage',
          message: 'write usage information here',
        },
        {
          type: 'input',
          name: 'contribution',
          message: 'write contribution guidlines here',
        },
        {
            type: 'input',
            name: 'test instructions',
            message: 'write test instructions here',
          },
    ])
};

// TODO: Create a function to initialize app
const init = () => {
    userPrompt()
    .then((answers) => writeFile('README.md', generateMarkdown(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};
// Function call to initialize app
init();
