// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (input = "") {
    return null
  }
  const badge = {
   name: 'MIT',
   badge: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown({title, description, installation, usage, contribution, test  }) {
  return  `# ${title}
    ## Description
    ${description}
    ## Instalation
    ${installation}
    ## Usage
    ${usage}
    ## Credits
    ${contribution}
    ## license
    ${renderLicenseLink()}
    ${renderLicenseSection()}
    ## Badges
    ${renderLicenseBadge()}
    ## Test
    ${test}

`;
}

module.exports = generateMarkdown;
