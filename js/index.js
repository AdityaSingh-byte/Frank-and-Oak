// Header Carousel logic

const carouselItems = document.getElementById('carousel-items');
const itemWidth = carouselItems.offsetWidth;
let currentIndex = 0;
let timer;

function moveCarousel(direction) {
    if (direction === 'next' && currentIndex < carouselItems.children.length - 1) {
        currentIndex++;
    } else if (direction === 'prev' && currentIndex > 0) {
        currentIndex--;
    } else if (direction === 'auto') {
        currentIndex = (currentIndex + 1) % carouselItems.children.length;
    }

    carouselItems.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
}

// Start automatic sliding
function startAutoSlide() {
    timer = setInterval(() => moveCarousel('auto'), 3000); // Change slide every 3 seconds
}

// Stop automatic sliding
function stopAutoSlide() {
    clearInterval(timer);
}

// Start automatic sliding when page loads
window.onload = startAutoSlide;