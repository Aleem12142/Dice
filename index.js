#! /usr/bin/env node
import inquirer from "inquirer";
let rnadomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "Select number of dices",
        choices: ["Single Dice", "Double Dice", "Triple Dice"]
    },
]);
if (answer.select === "Single Dice") {
    console.log(rnadomNumber);
}
else if (answer.select === "Double Dice") {
    console.log(rnadomNumber);
    console.log(rnadomNumber);
}
else if (answer.select === "Triple Dice") {
    console.log(rnadomNumber);
    console.log(rnadomNumber);
    console.log(rnadomNumber);
}
else {
    console.log("Please select one of given option");
}
