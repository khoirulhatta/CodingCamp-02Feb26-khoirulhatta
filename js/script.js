let todos = [];

function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoDate = document.getElementById('todo-date');

    if (todoInput.value.trim() === '' || todoDate.value === '') {
        alert('Please enter both todo and date.');
        return;
    } else {
        const newTodo = {
            todo: todoInput.value.trim(),
            date: todoDate.value
        };
        todos.push(newTodo);
        console.log('Todo added:', todos);

        todoInput.value = '';
        todoDate.value = '';

        renderTodos();
    }
}   

function renderTodos() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    todos.forEach((item, _) => {
        todoList.innerHTML +=
            `<li>
                <p class="text-2xl">${item.todo}<span class="text-sm text-gray-500 ml-2">${item.date}</span></p>
                <hr />
            </li>`;
    });
}

function deleteAllTodos() {
    todos = [];
    renderTodos();
} 

function filterTodos() {
    
}