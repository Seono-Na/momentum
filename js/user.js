"use strict";

const loginSection = document.querySelector("section#login");
const loginContents = document.querySelector("div.login-contents");
const inputUserName = document.querySelector("input.user-name");
const greeting = document.querySelector("section#greeting");
const greetingHello = document.querySelector("h1.greeting-hello");
const mainContents = document.querySelector("section#main-contents");
const userPage = document.querySelector("span.user-page");
const logoutBtn = document.querySelector(".logout-btn");

const HIDDEN_CLASSNAME = "hidden";
const VISUALHIDDEN_CLASSNAME = "visuallyhidden";
const USERNAME_KEY = "username";

let savedUsername = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event) {
  event.preventDefault();
  loginSection.classList.add(VISUALHIDDEN_CLASSNAME);
  const username = inputUserName.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginSection.classList.add(VISUALHIDDEN_CLASSNAME);
  setTimeout(() => {
    loginSection.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(username);
  }, 1000);
}

function paintGreetings(username) {
  greetingHello.innerText = `Hello ${username}~ 😊`;
  userPage.innerText = `${username}'s page ✋ `;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  setTimeout(() => {
    greeting.classList.remove(VISUALHIDDEN_CLASSNAME);
  }, 1000);
  setTimeout(() => {
    fadeout();
  }, 3000);
}

function fadeout() {
  greeting.classList.add(VISUALHIDDEN_CLASSNAME);
  setTimeout(() => {
    fadein();
  }, 1000);
}

function fadein() {
  greeting.classList.add(HIDDEN_CLASSNAME);
  mainContents.classList.remove(HIDDEN_CLASSNAME);
  setTimeout(() => {
    mainContents.classList.remove(VISUALHIDDEN_CLASSNAME);
    toDoInput.focus();
  }, 1000);
}

function main() {
  let savedUsername = localStorage.getItem(USERNAME_KEY);
  if (savedUsername === null) {
    loginSection.classList.remove(HIDDEN_CLASSNAME);
    setTimeout(() => {
      loginSection.classList.remove(VISUALHIDDEN_CLASSNAME);
    }, 1000);
    inputUserName.focus();
    loginSection.addEventListener("submit", onLoginSubmit);
  } else {
    paintGreetings(savedUsername);
  }
}

main();

function refresh() {
  mainContents.classList.add(VISUALHIDDEN_CLASSNAME);
  inputUserName.value = "";
  setTimeout(() => {
    mainContents.classList.add(HIDDEN_CLASSNAME);
    main();
  }, 1000);
}

function logout() {
  localStorage.clear();
  refresh();
}

logoutBtn.addEventListener("click", logout);
