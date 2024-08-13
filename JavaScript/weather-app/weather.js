// script.js

const apiKey = //apikey
const weatherApiUrl = //api url when get it

// Function to fetch weather data
async function fetchWeatherData(location) {
    const response = await fetch(`${weatherApiUrl}?q=${location}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    console.log(data); // For now, just log the data
    return data;
}

// Process the weather data to get only the necessary details
function processWeatherData(data) {
    const processedData = {
        location: data.name,
        temperature: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
    };
    return processedData;
}

document.getElementById('locationForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const location = document.getElementById('locationInput').value;
    document.getElementById('loading').style.display = 'block'; // Show loading

    const weatherData = await fetchWeatherData(location);
    const processedData = processWeatherData(weatherData);

    document.getElementById('loading').style.display = 'none'; // Hide loading
    displayWeatherInfo(processedData);
});

// Function to display the weather info on the webpage
function displayWeatherInfo(data) {
    const weatherInfoDiv = document.getElementById('weatherInfo');
    weatherInfoDiv.innerHTML = `
        <h2>${data.location}</h2>
        <p>Temperature: ${data.temperature} °C</p>
        <p>Description: ${data.description}</p>
        <p>Humidity: ${data.humidity}%</p>
    `;
    weatherInfoDiv.style.display = 'block'; // Show the weather info
}
