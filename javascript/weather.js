const API_KEY = "b08495a8e0ffeb5481c72ee6d52cf4f4";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const Weather = document.querySelector("#weather span:nth-child(2)");
      const temperature = document.querySelector("#weather span:last-child");

      Weather.innerText = data.weather[0].main;
      city.innerText = data.name;
      temperature.innerText = data.main.temp + `${" ℃"}`;
    });
}

function OnGeoError() {
  alert("Can't Find You. No Weather For You...");
}

navigator.geolocation.getCurrentPosition(onGeoOk, OnGeoError);
