const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const errorInfo = document.querySelector("#error-info");
const weatherLocation = document.querySelector("#weather-location");
const weatherInfo = document.querySelector("#weather-info");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  errorInfo.textContent = "Loading...";

  const location = search.value;

  fetch("/weather?address=" + location).then((response) =>
    response.json().then((data) => {
      if (data.error) {
        errorInfo.textContent = data.error;
        weatherLocation.textContent = "";
        weatherInfo.textContent = "";
      } else {
        errorInfo.textContent = "";
        weatherLocation.textContent = data.location;
        weatherInfo.textContent = data.forecast;
      }
    })
  );
});
