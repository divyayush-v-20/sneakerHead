let slideIndex = 0;
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;
let intervalId;

function prevSlide() {
  clearInterval(intervalId);
  slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
  showSlide();
  intervalId = setInterval(nextSlide, 5000);
}

function nextSlide() {
  clearInterval(intervalId);
  slideIndex = (slideIndex + 1) % totalSlides;
  showSlide();
  intervalId = setInterval(nextSlide, 5000);
}

function showSlide() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

// Show initial slide and start automatic slide change
showSlide();
intervalId = setInterval(nextSlide, 5000);

document.querySelector('.prev').addEventListener('click', function() {
  prevSlide();
});

document.querySelector('.next').addEventListener('click', function() {
  nextSlide();
});

// Handle manual change of slides
document.querySelector('.prev').addEventListener('click', function() {
  clearInterval(intervalId); // Stop automatic slide change
  intervalId = setInterval(nextSlide, 5000); // Restart automatic slide change after manual change
});

document.querySelector('.next').addEventListener('click', function() {
  clearInterval(intervalId); // Stop automatic slide change
  intervalId = setInterval(nextSlide, 5000); // Restart automatic slide change after manual change
});
