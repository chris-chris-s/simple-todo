"use strict";
let uiTodo;

const addTodoSubmit = () => {
  document.querySelector("#form-new-todo").addEventListener("submit", (e) => {
    e.preventDefault();
    const todoToAdd = document.querySelector("#input-new-todo")?.value;
    uiTodo.addTodo(todoToAdd);
    renderTodos();
  });
};

const renderTodos = () => {
  const ulList = document.querySelector("#ul-todo-list");
  while (ulList.firstChild) {
    ulList.firstChild.remove();
  }

  uiTodo._getTodos().forEach((todo) => {
    const liTodo = document
      .querySelector("#template-todo")
      .content.cloneNode(true);
    liTodo.querySelector(".todo-name").textContent = todo.name;
    if (todo.done) {
      liTodo
        .querySelector(".todo-name")
        .classList.add("bg-success", "text-white");
    }
    ulList.appendChild(liTodo);
  });
};

const removeItem = (todo) => {
  uiTodo.removeTodo(todo);
  renderTodos();
};

const markAsDone = (todo) => {
  uiTodo.markAsDone(todo);
  renderTodos();
};

document.addEventListener(
  "DOMContentLoaded",
  () => {
    uiTodo = new TodoApp();
    addTodoSubmit();
    renderTodos();
  },
  false
);
