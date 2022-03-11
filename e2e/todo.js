/**
 * Todo APP
 * @constructor
 */
function TodoApp() {
  // start with empty todos or list of saved todos
  this.todos = this._getTodos() ?? [];
}

/**
 * Adds Todo to list
 *
 * @param {string} todoName
 * @returns {[]} List of Todos
 */
TodoApp.prototype.addTodo = function (todoName, important = false) {
  this.todos.push({
    name: todoName,
    done: false,
    important: important,
  });
  this._saveTodos();
  return this.todos;
};

/**
 * 'private' function to save items to localstorage
 */
TodoApp.prototype._saveTodos = function (key = 'todos') {
  window.localStorage.setItem(key, JSON.stringify(this.todos));
};

/**
 * 'private' function to get todos from localstorage
 */
TodoApp.prototype._getTodos = function (key = 'todos') {
  return JSON.parse(window.localStorage.getItem(key));
};

/**
 * Removes Todo from List
 *
 * @param {string} todoName
 */
TodoApp.prototype.removeTodo = function (todoName) {
  this.todos = this.todos.filter(todo => todo.name !== todoName);
  this._saveTodos();
  return this.todos;
};

/**
 * Adds an Important todo to list
 *
 * @param {string} todoName
 */
TodoApp.prototype.addImportantTodo = function (todoName) {
  if (!todoName.includes('!')) {
    throw new Error('Important Todo needs to include a !');
  } else {
    this.addTodo(todoName, true);
  }
};

/**
 * Marks a todo as done
 *
 * @param {todoName} todoName
 */
TodoApp.prototype.markAsDone = function (todoName) {
  this.todos.forEach(todo => {
    if (todo.name === todoName) {
      todo.done = true;
    }
  });
  this._saveTodos();
  return this.todos;
};

/**
 * Shows Done Tasks
 *
 * @returns {[]} List of Todos
 */
TodoApp.prototype.showDoneTasks = function () {
  return this.todos.filter(todo => todo.done === true);
};

/**
 * Shows all important tasks.
 *
 * @returns {[]} List of Todos
 */
TodoApp.prototype.showImportantTasks = function () {
  return this.todos.filter(todo => todo.important === true);
};
