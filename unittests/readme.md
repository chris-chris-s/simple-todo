# Simple Todo App

Use this app in browser console!
Create a new TodoApp:

- `var todos = new TodoApp();`

Add a Todo to the list:

- `todos.addTodo('name');`

Show all Todos:

- `todos.todos`

Remove Todo:

- `todos.removeTodo('name');`

Add an _important_ todo

- `todos.addTodo('!some important task');`

Mark Todo as done:

- `todos.markAsDone('name');`

Show all done tasks:

- `todos.showDoneTasks();`

Show all important tasks:

- `todos.showImportantTasks();`

Internal (private) methods:

- `todos._saveTodos();` for saving items to localStorage
- `todos._getTodos();` to get list of all Todos from localStorage
