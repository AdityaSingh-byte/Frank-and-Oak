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
let sales = document.getElementById("sales");
let salesDropDown = document.getElementsByClassName("salesDropDown")[0];
let ourStory = document.getElementById("ourStory");
let ourStoryDropDown = document.getElementsByClassName("ourStoryDropDown")[0];

let closeTimeout;

function toggleMenu(element, menuClass) {
    return function () {
        clearTimeout(closeTimeout);
        if (!element.classList.contains(menuClass)) {
            closeAllMenus();
            element.classList.add(menuClass);
        } else {
            element.classList.remove(menuClass);
        }
    };
}

function closeAllMenus() {
    dropDown.classList.remove("open-menu");
    salesDropDown.classList.remove("open-menus");
    ourStoryDropDown.classList.remove("open-menubar");
}

women.addEventListener("mouseover", toggleMenu(dropDown, "open-menu"));
men.addEventListener("mouseover", toggleMenu(dropDown, "open-menu"));
sales.addEventListener("mouseover", toggleMenu(salesDropDown, "open-menus"));
ourStory.addEventListener("mouseover", toggleMenu(ourStoryDropDown, "open-menubar"));

document.addEventListener("mouseover", function (event) {
    if (!event.target.matches('.dropDown, #women, #men, #sales, #ourStory')) {
        closeAllMenus();
    }
});


// end open dropdown


const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_element = document.querySelector("nav"); // Selecting <nav> element directly

const toggleNavbar = () => {
    nav_element.classList.toggle("active");
}

mobile_nav.addEventListener("click", () => {
    toggleNavbar();
});

setTimeout(()=>{
    fetchData();
},2000);

function fetchData(){
    let h2 = document.querySelector(".h2");
    let li1 = document.querySelector(".li1");
    let li2 = document.querySelector(".li2");

    h2.innerHTML = `${"Spring must-haves, now at 25% off*."}`;
    li1.innerHTML = `${"Women's"}`;
    li2.innerHTML = `${"Men's"}`;

    h2.classList.remove("loading");
    li1.classList.remove("loading");
    li2.classList.remove("loading")
}


