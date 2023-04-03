"use strict";

const clock = document.querySelector("p.clock");
const miniClock = document.querySelector("p.clock.mini");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  let ampmHours = hours;
  let ampm = "";
  if (hours > 12) {
    ampmHours = String(parseInt(ampmHours) - 12);
    ampm = "PM";
  } else {
    ampm = "AM";
  }

  clock.innerText = `${hours}:${minutes}:${seconds}`;
  miniClock.innerText = `${ampm} ${ampmHours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

const todays = document.querySelector("p.today");
const week = ["SUN", "MON", "TUR", "WED", "THU", "FRI", "SAT"];

function getTodaty() {
  const today = new Date();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const date = String(today.getDate()).padStart(2, "0");
  const day = today.getDay(); // number

  todays.innerText = `${month}.${date} ${week[day]}`;
}

getTodaty();
setInterval(getTodaty, 1000);
