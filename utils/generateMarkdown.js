// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'Apache License 2.0') {
  return `
  [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
    `
  } else if (license == 'GNU GPLv3') {
  return `
  [![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)
      `
  } else if (license == 'MIT License') {
  return `
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
    `
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license) {
    return '';
  } else if (license == 'Apache License 2.0') {
    return `
  ### ${license}
  A permissive license whose main conditions require preservation of copyright and license notices. 
  Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works 
  may be distributed under different terms and without source code.
    `
  } else if (license == 'GNU GPLv3') {
  return `
  ### ${license}
  Permissions of this strong copyleft license are conditioned on making available complete source code of 
  licensed works and modifications, which include larger works using a licensed work, under the same license. 
  Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.
  `
  } else if (license == 'MIT License') {
  return `
  ### ${license}
  A short and simple permissive license with conditions only requiring preservation of copyright and license notices. 
  Licensed works, modifications, and larger works may be distributed under different terms and without source code.
  `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
   return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions?
  GitHub: [https://github.com/${data.username}](https://github.com/${data.username}) & Email Address: <${data.emailAddress}>

  ## License 
  ${renderLicenseSection(data.license)}

  Copyright (c) [${data.username}](https://github.com/${data.username}). All rights reserved.
  
  Licensed under the ${data.license} license.
`;
}

module.exports = generateMarkdown;