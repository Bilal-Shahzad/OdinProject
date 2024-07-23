// Create directory and initialize npm
// mkdir webpack-demo      // Create project directory
// cd webpack-demo         // Move into project directory
// npm init -y             // Initialize npm with default settings

// Install webpack and webpack-cli locally
// npm install webpack webpack-cli --save-dev

// Directory structure
// webpack-demo            // Project root
// ├── package.json        // Project metadata and dependencies
// ├── package-lock.json   // Dependency tree
// ├── /src                // Source files
// │   └── index.js        // Main JS file
// └── index.html          // HTML file

// src/index.js (initial version)
function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' '); // Use lodash to join strings
    return element;
  }
  document.body.appendChild(component()); // Append the element to the DOM
  
  // index.html (initial version)
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Getting Started</title>
      <script src="https://unpkg.com/lodash@4.17.20"></script> // Load lodash
    </head>
    <body>
      <script src="./src/index.js"></script> // Load main JS file
    </body>
  </html>
  
  // package.json
  {
    "name": "webpack-demo", // Project name
    "version": "1.0.0",     // Project version
    "private": true,        // Prevent accidental publish
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1" // Test script placeholder
    },
    "devDependencies": {
      "webpack": "^5.38.1", // Webpack dependency
      "webpack-cli": "^4.7.2" // Webpack CLI dependency
    }
  }
  
  // Install lodash locally
  // npm install --save lodash
  
  // src/index.js (updated to use ES module syntax)
  import _ from 'lodash'; // Import lodash
  function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' '); // Use lodash to join strings
    return element;
  }
  document.body.appendChild(component()); // Append the element to the DOM
  
  // Update index.html to use bundled script
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Getting Started</title>
    </head>
    <body>
      <script src="main.js"></script> // Load bundled script
    </body>
  </html>
  
  // Create webpack config file
  // webpack.config.js
  const path = require('path');
  module.exports = {
    entry: './src/index.js', // Entry point for the bundle
    output: {
      filename: 'main.js',   // Output bundle name
      path: path.resolve(__dirname, 'dist') // Output directory
    }
  };
  
  // Update package.json scripts
  {
    "name": "webpack-demo", // Project name
    "version": "1.0.0",     // Project version
    "private": true,        // Prevent accidental publish
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1", // Test script placeholder
      "build": "webpack"    // Build script to run webpack
    },
    "devDependencies": {
      "webpack": "^5.38.1", // Webpack dependency
      "webpack-cli": "^4.7.2" // Webpack CLI dependency
    },
    "dependencies": {
      "lodash": "^4.17.20"  // Lodash dependency
    }
  }
  
  // Run build
  // npm run build // Compile source code into the dist/main.js bundle
  
  // Final project structure
  // webpack-demo            // Project root
  // ├── package.json        // Project metadata and dependencies
  // ├── package-lock.json   // Dependency tree
  // ├── webpack.config.js   // Webpack configuration
  // ├── /dist               // Output files
  // │   ├── main.js         // Bundled JS file
  // │   └── index.html      // HTML file
  // ├── /src                // Source files
  // │   └── index.js        // Main JS file
  // └── /node_modules       // Installed npm packages
  