console.log('Running app.js');
 
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const chalk = require("chalk");
const figlet = require("figlet");
 
const todos = require('./todo.js');

console.log(
    chalk.yellow(
        figlet.textSync("JS Team-R", {horizontalLayout: "full"})
    )
);
 
const argv = yargs.argv;
var command = argv._[0];


console.log('Running Command: ', command);
 
if (command === 'addTodo') {
    todos.addTodo(argv.title);
} else if (command === 'deleteTodo') {
    var todoDeleted = todos.deleteTodo(argv.title);
    var message = todoDeleted ? 'This item has been deleted!' : 'Item  not found!';
    console.log(message);
} else if (command === 'readTodo') {
    var todo = todos.readTodo(argv.title);
    if (todo) {
        console.log('Todo found!');
        todos.logTodo(todo);
    } else {
        console.log('Todo not found!');
    }
} else if (command === 'listTodos') {
    var allTodos = todos.listTodos(); 
    console.log(`Printing ${allTodos.length} todo(s).`);
    allTodos.forEach((todo) => todos.logTodo(todo));
} else {
    console.log('Invalid command!!!');
}

