// Slider Logic
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    let currentSlide = 0;
    const slideInterval = 5000; // 5 seconds

    function showSlide(n) {
        slides.forEach(slide => slide.classList.add('opacity-0'));
        slides[n].classList.remove('opacity-0');
        dots.forEach(dot => dot.classList.remove('bg-opacity-100'));
        dots[n].classList.add('bg-opacity-100');
        currentSlide = n;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Auto-advance slides
    let slideIntervalId = setInterval(nextSlide, slideInterval);

    // Pause on hover
    const carousel = document.querySelector('.carousel');
    carousel.addEventListener('mouseenter', () => clearInterval(slideIntervalId));
    carousel.addEventListener('mouseleave', () => slideIntervalId = setInterval(nextSlide, slideInterval));

    // Navigation buttons
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Dots navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });

    // Initialize
    showSlide(0);
});
