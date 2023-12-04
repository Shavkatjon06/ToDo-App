// list
const todoList = [];

// add new task from user input
function addTodo() {
    const userInput = document.getElementById('input_box');
    const value = userInput.value;
    todoList.push({name: value});
    userInput.value = '';
    displayTodo();
}

// add button
document.getElementById('js-add-button').addEventListener('click', addTodo);

// enter press
function enter() {
    if (event.key === 'Enter') {
        addTodo();
    }
}
document.getElementById('input_box').addEventListener('keypress', enter);

// display
function displayTodo() {
    let taskList = '';

    // add list and delete button into div
    todoList.forEach(function(newTask) {
    const {name} = newTask;
    const html = `<div class='todo-section'><p>${name}</p><button class="js-delete-button">Delete</button></div>`;
    taskList += html;
    });
    document.querySelector('.js-todo-list').innerHTML = taskList;

    // delete button
    document.querySelectorAll('.js-delete-button').forEach((deleteButton, index) => {
        deleteButton.addEventListener('click',() => {
            todoList.splice(index, 1);
            displayTodo();
        });
    });
}
displayTodo();