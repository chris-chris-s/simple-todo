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
TodoApp.prototype.addTodo = function (todoName) {
  this.todos.push({
    name: todoName,
    done: false,
  });
  this._saveTodos();
  return this.todos;
};

/**
 * 'private' function to save items to localstorage
 */
TodoApp.prototype._saveTodos = function (key = "todos") {
  window.localStorage.setItem(key, JSON.stringify(this.todos));
};

/**
 * 'private' function to get todos from localstorage
 */
TodoApp.prototype._getTodos = function (key = "todos") {
  return JSON.parse(window.localStorage.getItem(key));
};

/**
 * Removes Todo from List
 *
 * @param {string} todoName
 */
TodoApp.prototype.removeTodo = function (todoName) {
  this.todos = this.todos.filter((todo) => todo.name !== todoName);
  this._saveTodos();
  return this.todos;
};

/**
 * Adds a Important todo to list
 * TODO: Add mark for important todo?
 *
 * @param {string} todoName
 * @returns {*}
 */
TodoApp.prototype.addImportantTodo = function (todoName) {
  if (!todoName.includes("!")) {
    throw new Error("Important Todo needs to include a !");
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
  this.todos.forEach((todo) => {
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
 */
TodoApp.prototype.showDoneTasks = function () {
  return this.todos.filter((todo) => todo.done === true);
};

/**
 * Show's all important tasks.
 *
 */
TodoApp.prototype.showImportantTasks = function () {
  // TODO: TDD
};
