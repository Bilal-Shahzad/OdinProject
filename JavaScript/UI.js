// JavaScript for Dropdown Menu and Image Carousel

// Wait for the DOM content to be fully loaded before executing the code
document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with the class 'dropdown'
    const dropdowns = document.querySelectorAll('.dropdown');
  
    // Iterate over each dropdown element
    dropdowns.forEach(dropdown => {
      // Select the toggle button within the current dropdown
      const button = dropdown.querySelector('.dropdown-toggle');
      // Select the menu within the current dropdown
      const menu = dropdown.querySelector('.dropdown-menu');
  
      // Add a click event listener to the toggle button
      button.addEventListener('click', () => {
        // Toggle the 'visible' class on the dropdown menu to show/hide it
        menu.classList.toggle('visible');
        // Log to the console when the dropdown is toggled
        console.log('Dropdown toggled');
      });
    });
  });
  
  // Create a <style> element for custom CSS
  const style = document.createElement('style');
  // Define CSS for the dropdown menu and visibility
  style.innerHTML = `
    .dropdown-menu {
      display: none;
    }
    .dropdown-menu.visible {
      display: block;
    }
  `;
  // Append the <style> element to the <head> of the document
  document.head.appendChild(style);
  
  // Example HTML for Dropdown Menu, added to the body of the document
  document.body.innerHTML += `
    <div class="dropdown">
      <button class="dropdown-toggle">Menu</button>
      <div class="dropdown-menu">
        <a href="#">Edit</a>
        <a href="#">Copy</a>
        <a href="#">Delete</a>
      </div>
    </div>
  `;
  
  // Wait for the DOM content to be fully loaded before executing the carousel code
  document.addEventListener('DOMContentLoaded', () => {
    // Select the carousel element
    const carousel = document.querySelector('.carousel');
    // Select all images within the carousel
    const images = carousel.querySelectorAll('.carousel-images img');
    // Select the 'previous' button within the carousel
    const prevButton = carousel.querySelector('.carousel-prev');
    // Select the 'next' button within the carousel
    const nextButton = carousel.querySelector('.carousel-next');
    // Select all dot elements within the carousel
    const dots = carousel.querySelectorAll('.carousel-dots span');
  
    // Initialize the current index to the first image
    let currentIndex = 0;
  
    // Function to update the carousel display based on the current index
    const updateCarousel = () => {
      // Iterate over each image
      images.forEach((img, index) => {
        // Display the current image, hide others
        img.style.display = index === currentIndex ? 'block' : 'none';
      });
      // Iterate over each dot
      dots.forEach((dot, index) => {
        // Highlight the current dot, dim others
        dot.classList.toggle('active', index === currentIndex);
      });
      // Log the current slide index to the console
      console.log(`Current slide index: ${currentIndex}`);
    };
  
    // Function to show the next image in the carousel
    const showNextImage = () => {
      // Increment the index, loop back to start if necessary
      currentIndex = (currentIndex + 1) % images.length;
      // Update the carousel display
      updateCarousel();
    };
  
    // Function to show the previous image in the carousel
    const showPrevImage = () => {
      // Decrement the index, loop back to end if necessary
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      // Update the carousel display
      updateCarousel();
    };
  
    // Add a click event listener to the 'next' button
    nextButton.addEventListener('click', showNextImage);
    // Add a click event listener to the 'previous' button
    prevButton.addEventListener('click', showPrevImage);
  
    // Automatically advance the images every 5 seconds
    setInterval(showNextImage, 5000);
  
    // Add click event listeners to each dot for navigation
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        // Set the current index to the clicked dot's index
        currentIndex = index;
        // Update the carousel display
        updateCarousel();
      });
    });
  
    // Initial call to update the carousel display
    updateCarousel();
  });
  
  // Example HTML for Image Carousel, added to the body of the document
  document.body.innerHTML += `
    <div class="carousel">
      <div class="carousel-images">
        <img src="image1.jpg" alt="Image 1">
        <img src="image2.jpg" alt="Image 2">
        <img src="image3.jpg" alt="Image 3">
      </div>
      <button class="carousel-prev">Prev</button>
      <button class="carousel-next">Next</button>
      <div class="carousel-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  `;
  
  // Add additional CSS for the carousel to the existing <style> element
  style.innerHTML += `
    .carousel-images img {
      display: none;
      width: 100%;
    }
    .carousel-dots span {
      display: inline-block;
      width: 10px;
      height: 10px;
      background-color: gray;
      border-radius: 50%;
      margin: 0 5px;
      cursor: pointer;
    }
    .carousel-dots span.active {
      background-color: black;
    }
  `;
  // Append the updated <style> element to the <head> of the document
  document.head.appendChild(style);
  