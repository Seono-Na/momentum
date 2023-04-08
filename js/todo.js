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
  todoItem.classList.toggle("todoDone"); // toggle todoDone
  const li = event.target.parentElement;
  const localToDo = JSON.parse(localStorage.getItem("todos")); //localStorage에서 todos 가지고 와서 새로운 변수에 담아주기
  // localStorage에서 id가 일치하는 부분 찾기 위한 for문
  for (let i = 0; i < localToDo.length; i++) {
    // 만약 li의 id와 일치한다면
    if (localToDo[i].id === parseInt(li.id)) {
      // done 키의 값을 변경 (0과 1)
      if (localToDo[i].done === 0) {
        localToDo[i].done = 1;
      } else {
        localToDo[i].done = 0;
      }
      toDos = localToDo; //toDos에 바뀐 값(done) 넣어주기
      saveToDos(); //localStorage에 toDos저장하는 함수
    }
  }
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
  if (newTodo.done === 1) {
    span.classList.add("todoDone");
  }
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
    done: 0,
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
