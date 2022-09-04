// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("until");

const generateMarkdown = ("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the project's title?",
    name: "Title"
}, {
    type: "input",
    message: "Enter a description",
    name: "Table of Contents"
}, {
    type: "input",
    message: "What are the installation instructions?",
    name: "Installation"
}, {
    type: "input",
    message: "What is this used for?",
    name: "Usage"
}, {
    type: "input",
    message: "What licenses are being used?",
    name: "License"
}, {
    type: "input",
    message: "What are the contribution guidelines?",
    name: "Contribution"
}, {
    type: "input",
    message: "What tests are being used?",
    name: "Tests"
}, {
    type: "input",
    message: "For any additional questions, contact:",
    name: "Questions"
}, {

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
