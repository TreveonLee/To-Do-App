// Behavior script for the app
let todos = [];
document.getElementById('todo-list').innerHTML = todos.map(todo => `<li>${todo}</li>`).join('');

function addTodo(todo) {
    todos.push(todo);
}
