const fs = require("fs");

function SelectLicense(license) {
  if ("MIT" === license) {
    return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  } else if ("Apache" === license) {
    return "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
  } else if ("GPL" === license) {
    return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
  } else if ("BSD" === license) {
    return "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)";
  } else {
    return "";
  }
}

function LicenseLink(license) {
  if ("MIT" === license) {
    return "https://opensource.org/licenses/MIT";
  } else if ("Apache" === license) {
    return "https://opensource.org/licenses/Apache-2.0";
  } else if ("GPL" === license) {
    return "https://www.gnu.org/licenses/gpl-3.0";
  } else if ("BSD" === license) {
    return "https://opensource.org/licenses/BSD-3-Clause";
  } else {
    return "";
  }
}

function LS(license) {
  if (license !== "None") {
    return `## License\n\nThis application is covered under the [${license}](${LicenseLink(
      license
    )}) license.\n\n`;
  } else {
    return "";
  }
}

function Markdown(data) {
  let rdme = `# ${data.title}\n\n`;
  rdme += `${SelectLicense(data.license)}\n\n`;
  rdme += `## Description\n\n${data.desc}\n\n`;
  rdme += `## Table of Contents\n\n`;
  rdme += `* [Installation](#installation)\n`;
  rdme += `* [Usage](#usage)\n`;
  rdme += data.license !== "None" ? `* [License](#license)\n` : "";
  rdme += `* [Contributing](#contributing)\n`;
  rdme += `* [Tests](#tests)\n`;
  rdme += `* [Questions](#questions)\n\n`;
  rdme += `## Installation\n\n${data.installation}\n\n`;
  rdme += `## Usage\n\n`;
  rdme += "```bash\n";
  rdme += `${data.usage}\n`;
  rdme += "```\n";
  rdme += LS(data.license);
  rdme += `## Contributing\n\n${data.contribution}\n\n`;
  rdme += `## Tests\n\n${data.test}\n\n`;
  rdme += `## Questions\n\n`;
  rdme += `My GitHub: [${data.github}](https://github.com/${data.github})\n\n`;
  rdme += `You can get in touch with me at [${data.email}](mailto:${data.email})\n\n`;

  fs.writeFile("README.md", rdme, err =>
    err ? console.log(err) : console.log("Success!")
  );
}

module.exports = Markdown;
