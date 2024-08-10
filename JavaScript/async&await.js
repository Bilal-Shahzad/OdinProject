// Simulate a server with people data
const server = {
    people: [
      { name: "Odin", age: 20 },
      { name: "Thor", age: 35 },
      { name: "Freyja", age: 29 },
    ],
    
    // Function to simulate a delayed network call
    getPeople() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(this.people);
        }, 2000);
      });
    },
  };
  
  // Example 1: Using Promises to get a person's info by name
  function getPersonsInfo(name) {
    // Fetch people data from the server
    return server.getPeople().then(people => {
      // Find the person with the matching name
      return people.find(person => { return person.name === name });
    });
  }
  
  // Example 2: Using async/await to get a person's info by name
  async function getPersonsInfo(name) {
    // Await the server's response and get the people data
    const people = await server.getPeople();
    
    // Find the person with the matching name
    const person = people.find(person => { return person.name === name });
    
    // Return the found person
    return person;
  }
  
  // Example of using async keyword
  const yourAsyncFunction = async () => {
    // Perform asynchronous tasks and return a result
    return result;
  }
  
  // Example of using async with Array.forEach
  anArray.forEach(async item => {
    // Perform asynchronous tasks for each item in the array
  });
  
  // Example of using async with server.getPeople()
  server.getPeople().then(async people => {
    // Perform asynchronous tasks for each person
    people.forEach(person => {
      // Perform some task with person
    });
  });
  
  // Example of error handling in async function
  async function getPersonsInfo(name) {
    try {
      // Attempt to fetch and process the data
      const people = await server.getPeople();
      const person = people.find(person => { return person.name === name });
      return person;
    } catch (error) {
      // Handle any errors that occur
      console.error("An error occurred:", error);
    }
  }
  
  // Refactored Giphy API fetch with async/await
  const img = document.querySelector('img');
  
  // Async function to fetch cat GIF
  async function getCats() {
    // Fetch data from Giphy API
    const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=YOUR_KEY_HERE&s=cats', {mode: 'cors'});
    
    // Await the JSON parsing of the response
    const catData = await response.json();
    
    // Set the image source to the GIF URL
    img.src = catData.data.images.original.url;
  }
  
  // Call the async function to fetch and display the cat GIF
  getCats();
  

// Simulating a Server:
// The server object contains an array of people and a getPeople function that simulates a network call by returning a promise that resolves after a delay.

// Using Promises for Asynchronous Code:
// The first version of getPersonsInfo uses .then() to handle the server's response and find a person by name.
 
// Using async/await for Cleaner Asynchronous Code:
// The second version of getPersonsInfo is rewritten using async/await to make the code look more like synchronous code while still handling asynchronous tasks.

// Examples of Using async with Different Function Types:
// Demonstrates how async can be used with different function types, including arrow functions, .forEach(), and server requests.

// Error Handling in Async Functions:
// Shows how to use try/catch blocks to handle errors inside an async function, making it easier to manage errors without chaining .catch().

// Refactoring Giphy API Fetch Using async/await:
// The code for fetching a cat GIF from the Giphy API is refactored using async/await to make it cleaner and more readable.
