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

function startAutoSlide() {
    timer = setInterval(() => moveCarousel('auto'), 5000);
}

function stopAutoSlide() {
    clearInterval(timer);
}

window.onload = startAutoSlide;

// start open dropdown

let dropDown = document.getElementsByClassName("dropDown")[0];
let women = document.getElementById("women");
let men = document.getElementById("men");
let closeTimeout;

function openMenu() {
    dropDown.classList.add("open-menu");
}

function closeMenu() {
    clearTimeout(closeTimeout);
    closeTimeout = setTimeout(function () {
        dropDown.classList.remove("open-menu");
    }, 200);
}

women.addEventListener("mouseover", openMenu);
women.addEventListener("mouseleave", closeMenu);

men.addEventListener("mouseover", openMenu);
men.addEventListener("mouseleave", closeMenu);

let sales = document.getElementById("sales");
let salesDropDown = document.getElementsByClassName("salesDropDown")[0];

let closeTime;

function openMenus() {
    salesDropDown.classList.add("open-menus");
}

function closeMenus() {
    clearTimeout(closeTime);
    closeTime = setTimeout(function () {
        salesDropDown.classList.remove("open-menus");
    }, 200);
}

sales.addEventListener("mouseover", openMenus);
sales.addEventListener("mouseleave", closeMenus);


let ourStory = document.getElementById("ourStory");
let ourStoryDropDown = document.getElementsByClassName("ourStoryDropDown")[0];

let closeTimer;

function openMenubar() {
    ourStoryDropDown.classList.add("open-menubar");
}

function closeMenubar() {
    clearTimeout(closeTimer);
    closeTimer = setTimeout(function () {
        ourStoryDropDown.classList.remove("open-menubar");
    }, 200);
}

ourStory.addEventListener("mouseover", openMenubar);
ourStory.addEventListener("mouseleave", closeMenubar);


// end open dropdown