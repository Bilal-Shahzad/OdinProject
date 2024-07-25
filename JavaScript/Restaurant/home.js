// src/home.js
export default function loadHome() {
    const content = document.getElementById('content');
    const homeDiv = document.createElement('div');
    homeDiv.innerHTML = `
      <h1>Welcome to Our Restaurant</h1>
      <p>Enjoy our delicious food!</p>
      <img src="path_to_image" alt="Restaurant Image">
    `;
    content.appendChild(homeDiv);
  }
  console.log('Webpack setup complete');
