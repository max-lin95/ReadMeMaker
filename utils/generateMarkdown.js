// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";

  if (license != "None") {
    badge = "None";
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;
  switch(license) {
    case "MIT":
      licenseLink = "https://opensource.org/licenses/MIT";
      break;
    case "BSD":
        licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
        break;
    case "GPL":
      licenseLink = "https://opensource.org/licenses/gpl-license";
      break;
    case "Apache":
      licenseLink = "https://www.apache.org/licenses/LICENSE-2.0";
      break;
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";

  if (license != "None") {
    licenseSection += "## License"
    licenseSection += "Refer to " + renderLicenseSection(license) + " for more information.";

  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
    ${answers.description}

  ## Table of Contents
    [Description](#Description)
    [Installation](#Installation)
    [Usage](#Usage)
    [License](#License)
    [Contributing](#Contributing)
    [Tests](#Tests)
    [Questions](#Questions)

  ## Installation
    ${answers.Installation};

  ## Usage
    ${answers.Usage};

  ## License
    ${answers.License}; 
  
  ## Contributing
    ${answers.Contributing};

  ## Tests
    ${answers.Tests};

  ## Questions
    Email ${answers.Questions}; with any questions.
    Visit my GitHub link here: ${ansewrs.ghLink}
    Email me at: ${answers.Email}
   

`;
}

module.exports = generateMarkdown;
