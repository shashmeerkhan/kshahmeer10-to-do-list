#!/usr/bin/env node
import inquirer from "inquirer";
let intro: string = "THIS IS CLI TODO LIST PROGRAM \n \t BY SHAHMEER KHAN";
console.log(intro);

let todos = [];
let condition = true;

while (condition) {
  let addtask = await inquirer.prompt([
    {
      type: "input",
      name: "todo",
      message: "What you want to add in your todos?",
    },

    {
      type: "confirm",
      name: "addMore",
      message: "Do you want to add another todo?",
      default: false,
    },
  ]);
  todos.push(addtask.todo);
  condition = addtask.addMore;
// Clear the console after user finishes adding todos
console.clear();
console.log(intro);
// Print the formatted todo list
todos.forEach((todo, index) => {
  console.log(`${index + 1}. ${todo}`);
  });
}
