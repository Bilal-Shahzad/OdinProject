// APIs serve data for websites and apps via URLs

// Example: Visual Crossing Weather API
// Get weather data for a city with an API key
const weatherAPIWithKey = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london?key=YOUR_API_KEY";

// API Keys are unique identifiers to access APIs
// Used to track usage, prevent abuse, and may require payment for more requests

// Fetching Data with Fetch API
// Modern and simpler alternative to XMLHttpRequest

// Example: Get a random GIF from Giphy API
const giphyAPI = "https://api.giphy.com/v1/gifs/translate?api_key=YOUR_API_KEY&s=cats";

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <title>Document</title>
// </head>
// <body>
//   <img src="#" alt="Random GIF">
//   <script>
//     // Select the image element
//     const img = document.querySelector('img');

//     // Fetch a GIF from Giphy API
//     fetch(giphyAPI, { mode: 'cors' })
//       .then(response => response.json())  // Convert response to JSON
//       .then(response => {
//         img.src = response.data.images.original.url;  // Set image source to GIF URL
//       })
//       .catch(err => console.error('Error:', err));  // Handle errors
//   </script>
// </body>
// </html>

// CORS: Security measure that restricts HTTP requests to external sources
// Add { mode: 'cors' } to handle CORS issues in fetch

// Public API keys can be exposed in frontend code
// Avoid exposing sensitive keys; handle them server-side instead


// Select the first <img> element on the page and store it in the variable 'img'
const img = document.querySelector('img');
console.log("Selected the image element:", img); // Logs the selected image element to the console

// Use the fetch function to make a GET request to the Giphy API
fetch('https://api.giphy.com/v1/gifs/translate?api_key=YOUR_KEY_HERE&s=cats', {mode: 'cors'})
  .then(function(response) { 
    // Handle the response from the API
    console.log("Received response from API:", response); // Logs the raw response object to the console
    return response.json(); // Convert the response to JSON format
  })
  .then(function(response) {
    // Handle the JSON data
    console.log("Parsed JSON response:", response); // Logs the parsed JSON object to the console
    console.log("Image URL from API:", response.data.images.original.url); // Logs the URL of the GIF to the console

    // Set the 'src' attribute of the <img> element to the GIF's URL
    img.src = response.data.images.original.url;
    console.log("Updated image source:", img.src); // Logs the new source URL of the image element
  })
  .catch(function(err) { 
    // Handle any errors that occur during the fetch process
    console.log("Error occurred:", err); // Logs any errors that occur during the fetch process
  });

//   Selecting the Image Element:
const img = document.querySelector('img');
console.log("Selected the image element:", img);
// Selects the first <img> element in the HTML document and stores it in img. Logs the selected element.

// Fetching Data from the Giphy API:
fetch('https://api.giphy.com/v1/gifs/translate?api_key=YOUR_KEY_HERE&s=cats', {mode: 'cors'})
  .then(function(response) {
    console.log("Received response from API:", response);
    return response.json();
  })
// Sends a GET request to the Giphy API for a "cats" GIF. Handles the response, converting it to JSON. Logs the raw response and JSON data.

// Handling the JSON Data:
.then(function(response) {
    console.log("Parsed JSON response:", response);
    console.log("Image URL from API:", response.data.images.original.url);
  
    img.src = response.data.images.original.url;
    console.log("Updated image source:", img.src);
  })
// Extracts the GIF's URL and sets it as the src of the img element. Logs the JSON response and updated image source.

// Handling Errors:
.catch(function(err) {
    console.log("Error occurred:", err);
  });
//   Logs any errors that occur during the fetch process.

