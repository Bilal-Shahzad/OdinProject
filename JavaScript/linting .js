// Function to add two numbers
function add(a, b) {
    return a + b;
  }
  
  // Function to subtract two numbers
  function subtract(a, b) {
    return a - b;
  }
  
  // Logging the results of the functions
  console.log(add(5, 3)); // Expected output: 8
  console.log(subtract(5, 3)); // Expected output: 2

  
// ESLint
module.exports = {
    // Define the environment: browser and Node.js
    env: {
      browser: true,
      es2021: true,
    },
    // Extend recommended ESLint rules and Airbnb style guide
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'airbnb',
    ],
    // Define the parser options
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
    },
    // Define plugins to use
    plugins: [
      'react',
    ],
    // Custom rules
    rules: {
      // Example: enforce single quotes
      quotes: ['error', 'single'],
    },
  };
  
// prettierrc
{
    // Use single quotes
    "singleQuote": true,
    // Add semicolon at the end of statements
    "semi": true
  }
  
//   What is linting?
//   Linting is the process of analyzing code to find and fix potential errors and enforce coding styles.

//   Which problems can linting prevent? 
//   Linting can prevent syntax errors, improve code quality, ensure code consistency, and catch potential bugs.

//   Why should you use Prettier?  
//   Prettier formats code automatically, making it consistent and easier to read, and saving time on formatting manually.


//   What is a template repository?  
//   A template repository is a predefined project setup that can be used to create new projects with the same structure and configurations.