// Asynchronous Code in JavaScript
// - Handling asynchronous code with callbacks and promises
// - Callbacks: Functions passed as arguments to other functions
// - Promises: Objects representing future values

// Callbacks
// - Example: addEventListener with a callback
myDiv.addEventListener("click", function() {
    // do something!
  });
  // Callback Hell: Chaining multiple callbacks can be problematic
  
  // Promises
  // - Mechanism to handle asynchronous operations
  // - Example: Fetching data using a promise
  const getData = function() {
    // Fetch data from some API
    // Clean it up and return as an object
    return data;
  };
  
  // Problem: Fetching data takes time, causing undefined issues
  const myData = getData();
  const pieceOfData = myData['whatever']; // Error: myData is undefined
  
  // Solution: Using Promises
  const getDataPromise = function() {
    return new Promise((resolve, reject) => {
      // Fetch data from some API
      // On success: resolve(data)
      // On failure: reject(error)
    });
  };
  
  getDataPromise().then(function(data) {
    const pieceOfData = data['whatever']; // Handle data after promise is resolved
  }).catch(function(error) {
    console.error('Error fetching data:', error); // Handle error
  });
  