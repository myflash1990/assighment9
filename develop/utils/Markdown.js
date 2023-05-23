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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
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
  let readme = `# ${data.title}\n\n`;
  readme += `${SelectLicense(data.license)}\n\n`;
  readme += `## Description\n\n${data.desc}\n\n`;
  readme += `## Table of Contents\n\n`;
  readme += `* [Installation](#installation)\n`;
  readme += `* [Usage](#usage)\n`;
  readme += data.license !== "None" ? `* [License](#license)\n` : "";
  readme += `* [Contributing](#contributing)\n`;
  readme += `* [Tests](#tests)\n`;
  readme += `* [Questions](#questions)\n\n`;
  readme += `## Installation\n\n${data.installation}\n\n`;
  readme += `## Usage\n\n`;
  readme += "```bash\n";
  readme += `${data.usage}\n`;
  readme += "```\n";
  readme += LS(data.license);
  readme += `## Contributing\n\n${data.contribution}\n\n`;
  readme += `## Tests\n\n${data.test}\n\n`;
  readme += `## Questions\n\n`;
  readme += `My GitHub: [${data.github}](https://github.com/${data.github})\n\n`;
  readme += `You can get in touch with me at [${data.email}](mailto:${data.email})\n\n`;

  fs.writeFile("README.md", readme, err =>
    err ? console.log(err) : console.log("Success!")
  );
}

module.exports = Markdown;
