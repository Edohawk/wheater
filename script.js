// script.js

require('dotenv').config(); // cargar las variables de entorno

function getWeather() {
  const api_key = process.env.API_KEY; // Usa process.env para obtener la clave de API desde las variables de entorno
  const cityInput = document.getElementById('city-input').value.trim();
  
  if (cityInput !== '') {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${api_key}&units=metric&lang=es`;

      fetch(url)
          .then(response => response.json())
          .then(data => {
              const weatherDescription = document.getElementById('weather-description');
              const temperature = document.getElementById('temperature');

              weatherDescription.textContent = data.weather[0].description;
              temperature.textContent = data.main.temp;
          })
          .catch(error => {
              console.error('Error al obtener los datos:', error);
          });
  } else {
      alert('Por favor, ingresa el nombre de una ciudad.');
  }
}