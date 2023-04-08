"use strict";
const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function doneToDo(event) {
  const todoItem = event.target.previousElementSibling;
  todoItem.classList.toggle("todoDone");
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

const clearBtn = document.querySelector("#todo-remove>h3");
function deleteToDoAll() {
  toDos.length = 0;
  localStorage.setItem("todos", JSON.stringify(toDos));
  toDoList.innerHTML = "";
}
clearBtn.addEventListener("click", deleteToDoAll);

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const btnDone = document.createElement("button");
  btnDone.innerText = "✔️";
  btnDone.addEventListener("click", doneToDo);
  const btnDelete = document.createElement("button");
  btnDelete.innerText = "❌";
  btnDelete.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(btnDone);
  li.appendChild(btnDelete);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
