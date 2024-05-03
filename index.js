#! /usr/bin/env node
// Import the "inquirer" module, which is a command line interface for Node.js
import inquirer from "inquirer";
// Declear a constant "answer" and assign it to the result of inquirer.prompt function
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the word",
    },
]);
const word = answer.sentence.trim().split(" ");
// Print the array of words to the console
console.log(word);
// print the word count to the console
console.log(`Your sentece word count is ${word.length}`);
