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

const savedUsername = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event) {
  event.preventDefault();
  loginSection.classList.add(VISUALHIDDEN_CLASSNAME);
  const username = inputUserName.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginSection.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(username);
}

function paintGreetings(username) {
  setTimeout(() => {
    greeting.classList.remove(VISUALHIDDEN_CLASSNAME);
    setTimeout(() => {}, 1000);
    greetingHello.innerText = `Hello ${username}~ 😊`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
  }, 2000);

  fadeout();
}

function fadeout() {
  setTimeout(() => {
    greeting.classList.add(VISUALHIDDEN_CLASSNAME);
  }, 3000);
  fadein();
}

function fadein() {
  setTimeout(() => {
    setTimeout(() => {
      greeting.classList.add(HIDDEN_CLASSNAME);
    }, 1000);
    userPage.innerText = `${savedUsername}'s page :D`;
    mainContents.classList.remove(HIDDEN_CLASSNAME);
    mainContents.classList.remove(VISUALHIDDEN_CLASSNAME);
  }, 5000);
}

function main() {
  setTimeout(() => {
    if (savedUsername === null) {
      loginSection.classList.remove(HIDDEN_CLASSNAME);
      loginSection.addEventListener("submit", onLoginSubmit);
    } else {
      paintGreetings(savedUsername);
    }
  }, 1000);
}
main();

function refresh() {
  mainContents.classList.add(VISUALHIDDEN_CLASSNAME);
  setTimeout(() => {
    setTimeout(() => {
      inputUserName.value = "";
      loginSection.classList.remove(HIDDEN_CLASSNAME);
      loginSection.classList.remove(VISUALHIDDEN_CLASSNAME);
    }, 1000);
    mainContents.classList.add(HIDDEN_CLASSNAME);

    main();
  }, 2000);
}

function logout() {
  localStorage.clear();
  refresh();
}

logoutBtn.addEventListener("click", logout);
