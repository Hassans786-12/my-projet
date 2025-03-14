/*--- photo slid ----*/

let slideIndex = 0;

function showSlide(index) {
    let slides = document.querySelectorAll('.carousel-slide'); // Use the correct class or tag name
    if (index >= slides.length) {
        slideIndex = 0;
    }
    if (index < 0) {
        slideIndex = slides.length - 1;
    }

    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${slideIndex * 100}%)`; // Correct percentage
}

function moveSlide(step) {
    slideIndex += step;
    showSlide(slideIndex);
}

// Start showing the first slide
showSlide(slideIndex);

// Automatically change the slide every 3 seconds
setInterval(() => {
    slideIndex++;
    showSlide(slideIndex);
}, 3000);


 