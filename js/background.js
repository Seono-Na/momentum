"use strict";

// const bgvideo = document.querySelector("video");
// const windowWidth = window.innerWidth;
// const windowheight = window.innerHeight;

// function resize() {
//     console.log("bgvideo sidth" + bgvideo.offsetWidth);
//     console.log("windowwidth " + windowWidth);
//     if (bgvideo.offsetWidth < windowWidth) {
//       bgvideo.style.width = String(windowWidth) + "px";
//     } else
//   if (bgvideo.offsetHeight > windowheight) {
//     bgvideo.style.height = String(windowheight) + "px";
//   }
// }

// window.addEventListener("resize", resize);
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
const rdvideo = videos[Math.floor(Math.random() * videos.length)];

const bgVideoSource = document.createElement("source");

bgVideoSource.src = `img/${rdvideo}`;

video.appendChild(bgVideoSource);
