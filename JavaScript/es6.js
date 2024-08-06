// Introduction to ES6 and Babel

// Example of let and const in ES6
let variable1 = 'Hello'; // 'let' allows block-scoped variable declaration
const variable2 = 'World'; // 'const' is used for constants, block-scoped

console.log(variable1); // Output: Hello
console.log(variable2); // Output: World

// Example of Arrow Functions in ES6
const add = (a, b) => a + b; // Arrow functions provide a shorter syntax for functions
console.log(add(2, 3)); // Output: 5

// Example of Template Literals in ES6
let greeting = `${variable1} ${variable2}!`; // Template literals use backticks for string interpolation
console.log(greeting); // Output: Hello World!

// Example of Default Parameters in ES6
const greet = (name = 'Guest') => `Hello, ${name}!`; // Default parameter values in functions
console.log(greet()); // Output: Hello, Guest!
console.log(greet('Alice')); // Output: Hello, Alice!

// Example of Destructuring Assignment in ES6
const person = { name: 'John', age: 25 };
const { name, age } = person; // Destructuring extracts values from objects/arrays
console.log(name); // Output: John
console.log(age); // Output: 25

// Example of Rest and Spread Operators in ES6
const sum = (...numbers) => numbers.reduce((acc, curr) => acc + curr, 0); // Rest operator gathers multiple arguments into an array
console.log(sum(1, 2, 3, 4)); // Output: 10

const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5, 6]; // Spread operator expands elements of an array
console.log(array2); // Output: [1, 2, 3, 4, 5, 6]

// Babel for ES6 Compatibility

// Babel can transpile modern JavaScript to ES5 for compatibility with older browsers
// Example of how Babel transpiles let to var for compatibility
var variable1Transpiled = 'Hello'; // Transpiled 'let' to 'var'
var variable2Transpiled = 'World'; // Transpiled 'const' to 'var'

console.log(variable1Transpiled); // Output: Hello
console.log(variable2Transpiled); // Output: World

// Real-world use case: Transpiling with Babel

// To use Babel, you would typically add it to your project's build process
// Example Babel configuration for Webpack in a webpack.config.js file:
// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env']
//           }
//         }
//       }
//     ]
//   }
// };

// Note: The above Babel configuration is an example of how to set up Babel with Webpack
// This allows modern JavaScript features to be used safely in production environments

// Console logs to show how Babel might log transpiled code
console.log('Babel transpiling example:');
console.log(variable1Transpiled); // Output: Hello (transpiled)
console.log(variable2Transpiled); // Output: World (transpiled)
