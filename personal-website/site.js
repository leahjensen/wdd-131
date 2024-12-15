  let currentIndex = 0;
  const slides = document.querySelectorAll('.slide');

  function showSlide(index) {
    // Loop back if out of range
    if (index < 0) {
      currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }

    // Hide all slides and show the current one
    slides.forEach((slide, i) => {
      slide.style.display = i === currentIndex ? 'block' : 'none';
    });
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  // Initialize the slideshow
  showSlide(currentIndex);

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Click Me Button functionality
    let button = document.getElementById('clickButton');
    let count = 0;

    // Add the click event listener to the button
    button.addEventListener('click', function() {
        count++;
        if (count === 1) {
            button.innerText = 'You clicked me once!';
        } else {
            button.innerText = `You clicked me ${count} times!`;
        }
    });
});
