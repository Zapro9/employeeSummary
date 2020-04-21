const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

function promptUser() {
    return inquirer.prompt([{
        type: "list-input",
        name: "memberName",
        message: "What role would you like to add?",
        choices: ["Manager", "Engineer", "Intern", "No further members"]
      }]),
      {
        type: "input",
        name: "memberName",
        message: "Please enter the name of the member you would like to add?"
      },
      {
        type: "input",
        name: "memberRole",
        message: "What is the role of this member?"

      },
      {
          type: "input",
          name: "email",
          message: "Enter Employee Email Please."

      },
      {
          type: "input",
          name: "id",
          message: "Enter Employee ID# Please."
      },
      {
        type: "input",
        name: "github",
        message: "What is your Github Name?"
    },
    {
        type: "input",
        name: "School",
        message: "Enter Interns school."
    };
}
