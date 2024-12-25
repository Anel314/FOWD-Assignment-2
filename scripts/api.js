// API KEY HAS TO GO HEREEEEEEE
//WOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
//If it doesn't work it's your key probably because 'It wOrkS oN My MaChINe'
const apiKey = "HERE GOES YOUR API KEYYYYYY";

function getWeather() {
  const location = document.getElementById("locationSearch").value;
  const weatherInfoDiv = document.getElementById("weatherInfo");

  weatherInfoDiv.innerHTML = "";

  if (!location) {
    weatherInfoDiv.innerHTML = `<p>Please enter a location.</p>`;
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    location
  )}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Location not found.");
      }
      return response.json();
    })
    .then((data) => {
      const weatherHtml = `
        <p><strong>Location:</strong> ${data.name}, ${data.sys.country}</p>
        <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
        <p><strong>Weather:</strong> ${data.weather[0].description}</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
      `;
      weatherInfoDiv.innerHTML = weatherHtml;
    })
    .catch((error) => {
      weatherInfoDiv.innerHTML = `<p>${error.message}</p>`;
    });
}
