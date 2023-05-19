// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string



function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }
  switch (license) {
   case 'MIT':
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
   case 'Apache 2.0':
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
   case 'Eclipse':
    return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
    
    default:
      return "";
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license) {
    return '';
  }

  switch (license) { 
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'Apache 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'Eclipse':
      return 'https://opensource.org/licenses/EPL-1.0';
          default:
            return "";  
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license) {
    return "";
  } 
  return `## License
   ${license} 
   ${renderLicenseLink(license)}`
}

// TODO: Create a function to generate markdown for README


function generateMarkdown({ title, description, installation, usage, contribution, test, github, email, license }) {
  return `# ${title}

## Description

* ${description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Badge](#badge)
* [Test](#test)
* [Questions](#questions)

## Installation

* ${installation}

## Usage

* ${usage}

${renderLicenseSection(license)}

## Credits

* ${contribution}

## Badges

* ${renderLicenseBadge(license)}

## Test

* ${test}

## Questions

For any questions, please contact me at either of the following:
* https://www.github.com/${github}
* ${email}

`;
}




module.exports = generateMarkdown, renderLicenseBadge, renderLicenseLink, renderLicenseSection;
