"use strict";

const loginSection = document.querySelector("section#login");
const loginContents = document.querySelector("div.login-contents");
const inputUserName = document.querySelector("input.user-name");
const greeting = document.querySelector("section#greeting");
const greetingHello = document.querySelector("h1.greeting-hello");
const mainContents = document.querySelector("section#main-contents");

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
  greetingHello.innerText = `Hello ${username}~ 😊`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  console.log("greeting 히든없애고");
  greeting.classList.remove(VISUALHIDDEN_CLASSNAME);
  console.log("greeting 비주얼히든 없애기");

  fadeout();
}

function fadeout() {
  setTimeout(() => {
    greeting.classList.add(VISUALHIDDEN_CLASSNAME);
    console.log("greeting 비주얼히든 주고");
  }, 3000);
  fadein();
}

function fadein() {
  setTimeout(() => {
    greeting.classList.add(HIDDEN_CLASSNAME);
    console.log("greeting 히든 줘버리기");
  }, 4000);
  mainContents.classList.remove(HIDDEN_CLASSNAME);
  mainContents.classList.remove(VISUALHIDDEN_CLASSNAME);
}

function main() {
  if (savedUsername === null) {
    loginSection.classList.remove(HIDDEN_CLASSNAME);
    loginSection.addEventListener("submit", onLoginSubmit);
  } else {
    paintGreetings(savedUsername);
  }
}
main();
