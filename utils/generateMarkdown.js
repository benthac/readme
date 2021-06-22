//Generate a md file
function generateMarkdown(answers) {
  return `
  # ${answers.title}  

  ## Badges

  ![Badspelling](https://img.shields.io/badge/LICENSE-${answers.license}-orange)

  ## Description

  ${answers.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Test](#test)
  * [License](#license)
  * [Contributing](#contributing)
  * [Questions](#questions)
  
  ## Installation

  ${answers.instal}

  ## Usage

  ${answers.usage}

  ## Test

  ${answers.test}

  ## License

  ${answers.license}

  ## Contributing

  ${answers.contributions}

  ## Questions

  If you have any questions:

  Github: [Github](https://www.github.com/${answers.github})

  Email: <${answers.email}>
   
  `;
}

module.exports = {generateMarkdown};
