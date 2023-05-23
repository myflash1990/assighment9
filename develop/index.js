const inquirer = require("inquirer");
const generateMarkdown = require("./utils/Markdown.js");

const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter the title of your project"
  },
  {
    type: "input",
    name: "desc",
    message: "Enter description of your project."
  },
  {
    type: "input",
    name: "usage",
    message: "Enter information of your project."
  },
  {
    type: "input",
    name: "installation",
    message: "What are installation instructions for your project."
  },
  {
    type: "input",
    name: "contribution",
    message: "What are the contribution guidelines for your project."
  },
  {
    type: "input",
    name: "test",
    message: "Enter  tests for your project."
  },
  {
    type: "list",
    name: "license",
    message: " What license used for your project.",
    choices: ["MIT", "Apache", "GPL", "BSD", "None"]
  },
  {
    type: "input",
    name: "github",
    message: "Please provide your GitHub username."
  },
  {
    type: "input",
    name: "email",
    message: "Please provide your email address."
  }
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
}

function init() {
  inquirer
    .prompt(questions)
    .then(answers => {
      generateMarkdown(answers);
    })
    .catch(error => {
      console.log("Something else went wrong.", error);
    });
}

init();
