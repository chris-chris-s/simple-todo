'use strict';
let uiTodo;
let renderImportant = false;
let renderDone = false;

const addTodoSubmit = () => {
  document.querySelector('#form-new-todo').addEventListener('submit', e => {
    e.preventDefault();
    const todoToAdd = document.querySelector('#input-new-todo')?.value;
    if (todoToAdd.includes('!')) {
      uiTodo.addImportantTodo(todoToAdd, true);
    } else {
      uiTodo.addTodo(todoToAdd);
    }
    renderTodos();
  });
};

const renderTodos = () => {
  const ulList = document.querySelector('#ul-todo-list');
  while (ulList.firstChild) {
    ulList.firstChild.remove();
  }
  uiTodo._getTodos()?.forEach(todo => {
    // if function was called with important = true -> don't render unimportant TODOs
    if ((renderImportant && todo.important !== true) || (renderDone && todo.done !== true)) {
      return;
    }

    const liTodo = document.querySelector('#template-todo').content.cloneNode(true);
    liTodo.querySelector('.todo-name').textContent = todo.name;
    if (todo.done) {
      liTodo.querySelector('.todo-name').classList.add('bg-success', 'text-white');
    }
    if (todo.important) {
      liTodo.querySelector('.todo-name').classList.add('todo-important');
    }
    ulList.appendChild(liTodo);
  });
};

const removeItem = todo => {
  uiTodo.removeTodo(todo);
  renderTodos();
};

const markAsDone = todo => {
  uiTodo.markAsDone(todo);
  renderTodos();
};

const bindShowImportantTodosButton = () => {
  document.querySelector('.js-show-important').addEventListener('click', () => {
    renderImportant = true;
    renderDone = false;
    renderTodos();
  });
};

const bindShowAllTodosButton = () => {
  document.querySelector('.js-show-all').addEventListener('click', () => {
    renderImportant = false;
    renderDone = false;
    renderTodos();
  });
};

const bindShowDoneTodosButton = () => {
  document.querySelector('.js-show-done').addEventListener('click', () => {
    renderImportant = false;
    renderDone = true;
    renderTodos();
  });
};

document.addEventListener(
  'DOMContentLoaded',
  () => {
    uiTodo = new TodoApp();
    addTodoSubmit();
    bindShowImportantTodosButton();
    bindShowDoneTodosButton();
    bindShowAllTodosButton();
    renderTodos();
  },
  false
);
