/**
 * Todo APP
 * @constructor
 */
function TodoApp() {
  this.todos = this._getTodos() ?? []; // start with empty todos
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
 *
 * @returns {[]} List of Todos
 */
TodoApp.prototype._getTodos = function (key = 'todos') {
  return JSON.parse(window.localStorage.getItem(key));
};

/**
 * Removes Todo from List
 *
 * @param {string} todoName
 * @returns {[]} List of Todos
 */
TodoApp.prototype.removeTodo = function (todoName) {
  this.todos = this.todos.filter(todo => todo.name !== todoName);
  this._saveTodos();
  return this.todos;
};

/**
 * Adds a Important todo to list
 *
 * @param {string} todoName
 */
TodoApp.prototype.addImportantTodo = function (todoName) {
  if (!todoName.includes('!')) {
    throw new Error('Important Todo needs to include a !');
  } else {
    this.addTodo(todoName);
  }
};

/**
 * Marks a todo as done
 *
 * @param {todoName} todoName
 */
TodoApp.prototype.markAsDone = function (todoName) {
  console.info(`%c TODO: Mark item ${todoName} as done`, 'font-size: 20px');
  // TODO: TDD
  // NOTE: Don't forget to save at the end.
};

/**
 * Shows Done Tasks
 *
 */
TodoApp.prototype.showDoneTasks = function () {
  return this.todos.filter(todo => todo.done === true);
};

/**
 * Show's all important tasks.
 *
 */
TodoApp.prototype.showImportantTasks = function () {
  console.info(`%c TODO: Show all important tasks`, 'font-size: 20px');
  // TODO: TDD
};
