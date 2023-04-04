"use strict";
const AK = "0dbc920b61c5857163244bc5a0c06222";

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${AK}&lang=kr&units=metric`
  fetch(url).then(response => response.json()).then(data => {
    const weather = document.querySelector("#weather span:first-child")
    const city = document.querySelector("#weather span:last-child")
    console.log(data.name);
    console.log(typeof data.name);
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${Math.round(data.main.temp)}˚`;
  });
}

function onGeoError() {
  // alert("Can't find you. No weather for you.");
  const weather = document.querySelector("#weather span:first-child");
  weather.innerText = "No location found.. :( "
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
