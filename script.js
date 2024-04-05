function getWeather() {
  const locationInput = document.getElementById("location").value;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=YOUR_API_KEY&units=metric`)
    .then(response => response.json())
    .then(data => {
      const weatherData = `
        <p>Location: ${data.name}, ${data.sys.country}</p>
        <p>Weather: ${data.weather[0].main}</p>
        <p>Description: ${data.weather[0].description}</p>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
      `;
      document.getElementById("weather-data").innerHTML = weatherData;
    })
    .catch(error => {
      console.error("Error fetching weather data:", error);
      document.getElementById("weather-data").innerHTML = "Unable to fetch weather data. Please try again.";
    });
}
