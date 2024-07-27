// OOP in JavaScript
// - Object creation and organization patterns
// - Importance of using patterns effectively
// - Concepts and principles to guide object creation


// Single Responsibility Principle (SRP)
// - Each class/module/object should have one responsibility
// - Separate DOM manipulation from application logic

// EX:
// Original function with DOM manipulation
function isGameOver() {
    // game over logic goes here!
    if (gameOver) {
      const gameOverDiv = document.createElement('div');
      gameOverDiv.classList.add('game-over');
      gameOverDiv.textContent = `${this.winner} won the game!`;
      document.body.appendChild(gameOverDiv);
    }
  }
  // Refactored function with SRP
  function isGameOver() {
    // game over logic goes here!
    if (gameOver) {
      DOMStuff.gameOver(this.winner);
    }
  }
  // Further refactored to separate responsibilities
  function isGameOver() {
    // Only check if game over condition is met
    return gameOver;
  }
  function handleGameOver() {
    if (isGameOver()) {
      DOMStuff.gameOver(this.winner);
    }
  }
  
  // Loosely Coupled Objects
  // - Ensure objects can function independently as much as possible
  // - Avoid having objects depend heavily on each other
  // EX:
  // Game logic should be independent of the User Interface (UI)
  // Initial game logic with console.log()
  function playGame() {
    console.log('Game started');
    // game logic...
  }
  // Later add DOM functions without changing game logic
  function playGame() {
    startGameUI();
    // game logic...
  }
  
// function isGameOver() { - Define the function isGameOver.
// game over logic goes here! - Placeholder comment for game over logic.
// if (gameOver) { - Check if the game over condition is true.
//     DOMStuff.gameOver(this.winner); - Call the gameOver method from the DOMStuff module, passing the winner.



    // Additional SOLID Principles
// - Open/Closed Principle (OCP): Software entities should be open for extension but closed for modification.
// - Liskov Substitution Principle (LSP): Subtypes must be substitutable for their base types.
// - Interface Segregation Principle (ISP): Many specific interfaces are better than one general-purpose interface.
// - Dependency Inversion Principle (DIP): Depend on abstractions, not on concretions.

// Open/Closed Principle (OCP)
// - EX: Adding new features without modifying existing code
class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
    area() {
      return this.width * this.height;
    }
  }
  // Extend functionality without modifying Rectangle class
  class Circle {
    constructor(radius) {
      this.radius = radius;
    }
    area() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  }
  
  // Liskov Substitution Principle (LSP)
  // - ex: Subtypes must be substitutable for their base types
  class Bird {
    fly() {
      console.log('Flying');
    }
  }
  class Penguin extends Bird {
    fly() {
      throw new Error('Penguins cannot fly');
    }
  }
  // Better approach: Create a separate class for non-flying birds
  class NonFlyingBird {
    walk() {
      console.log('Walking');
    }
  }
  class Penguin extends NonFlyingBird {}
  
  // Interface Segregation Principle (ISP)
  // - EX: Splitting interfaces into smaller ones
  class Machine {
    print() {
      console.log('Printing...');
    }
    scan() {
      console.log('Scanning...');
    }
    fax() {
      console.log('Faxing...');
    }
  }
  // Better approach: Separate interfaces
  class Printer {
    print() {
      console.log('Printing...');
    }
  }
  class Scanner {
    scan() {
      console.log('Scanning...');
    }
  }
  class Fax {
    fax() {
      console.log('Faxing...');
    }
  }
  
  // Dependency Inversion Principle (DIP)
  // - ex: Depend on abstractions, not concretions
  class Backend {
    constructor(database) {
      this.database = database;
    }
    save(data) {
      this.database.save(data);
    }
  }
  // Abstract Database interface
  class Database {
    save(data) {
      throw new Error('Method not implemented');
    }
  }
  // Concrete implementations
  class MySQLDatabase extends Database {
    save(data) {
      console.log('Saving to MySQL Database', data);
    }
  }
  class MongoDBDatabase extends Database {
    save(data) {
      console.log('Saving to MongoDB Database', data);
    }
  }
  // Usage
  const backend = new Backend(new MySQLDatabase());
  backend.save({ id: 1, name: 'Item' });
  
 