"use strict";

const videos = [
  "01.mp4",
  "02.mp4",
  "03.mp4",
  "04.mp4",
  "05.mp4",
  "06.mp4",
  "07.mp4",
  "08.mp4",
  "09.mp4",
  "10.mp4",
];
const video = document.querySelector("video");
let rdvideo = videos[Math.floor(Math.random() * videos.length)];
const bgChange = document.querySelector(".bgchange");

const bgVideoSource = document.createElement("source");

bgVideoSource.src = `img/${rdvideo}`;

video.appendChild(bgVideoSource);



function changeBg() {
  rdvideo = videos[Math.floor(Math.random() * videos.length)];
  video.removeChild(bgVideoSource);
  bgVideoSource.src = `img/${rdvideo}`;

  video.appendChild(bgVideoSource);
  video.load()
  video.play()
}

bgChange.addEventListener("click", changeBg);



