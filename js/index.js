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


 // Carousel logic

document.addEventListener("DOMContentLoaded", function() {
    const carousels = document.querySelectorAll(".carousel");

    carousels.forEach(function(carousel) {
        const firstImg = carousel.querySelector("img"),
              arrowIcons = carousel.parentElement.querySelectorAll("i");

        let isDragStart = false,
            isDragging = false,
            prevPageX,
            prevScrollLeft,
            positionDiff;

        const showHideIcons = () => {
            let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
            arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
            arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
        };

        arrowIcons.forEach(icon => {
            icon.addEventListener("click", () => {
                let firstImgWidth = firstImg.clientWidth + 14;
                const isPrev = icon.classList.contains('fa-angle-left');
                carousel.scrollLeft += isPrev ? -firstImgWidth : firstImgWidth;
                setTimeout(() => showHideIcons(), 60);
            });
        });

        const autoSlide = () => {
            if (carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;
            positionDiff = Math.abs(positionDiff);
            let firstImgWidth = firstImg.clientWidth + 14;
            let valDifference = firstImgWidth - positionDiff;
            if (carousel.scrollLeft > prevScrollLeft) {
                return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
            }
            carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
        };

        const dragStart = (e) => {
            isDragStart = true;
            prevPageX = e.pageX || e.touches[0].pageX;
            prevScrollLeft = carousel.scrollLeft;
        };

        const dragging = (e) => {
            if (!isDragStart) return;
            e.preventDefault();
            isDragging = true;
            carousel.classList.add("dragging");
            positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
            carousel.scrollLeft = prevScrollLeft - positionDiff;
            showHideIcons();
        };

        const dragStop = () => {
            isDragStart = false;
            carousel.classList.remove("dragging");
            if (!isDragging) return;
            isDragging = false;
            autoSlide();
        };

        carousel.addEventListener("mousedown", dragStart);
        carousel.addEventListener("touchstart", dragStart);
        document.addEventListener("mousemove", dragging);
        carousel.addEventListener("touchmove", dragging);
        document.addEventListener("mouseup", dragStop);
        carousel.addEventListener("touchend", dragStop);
    });
});





let url = "https://frank-and-oak.onrender.com/Data";
let cardCarousel = document.querySelector(".cardCarousel");

async function fetchCardData() {
    try {
        let res = await fetch(`${url}`);
        let data = await res.json();
        console.log(data);
        appendDataIntoDom(data); // Pass the fetched data to the appendDataIntoDom function
    } catch (err) {
        console.log(err);
    }
}


fetchCardData();

function createCard(data) {
    let card = document.createElement("div");
    let imgDiv = document.createElement("div");
    let button = document.createElement("button");
    let h5 = document.createElement("h5");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let heartIcon = document.createElement("i");

    imgDiv.classList.add("img", "loading");
    p1.classList.add("loading");
    p2.classList.add("loading");

    card.classList.add("card");
  

    imgDiv.style.backgroundImage = `url('${data.Image}')`;
    imgDiv.addEventListener("mouseover", () => {
        imgDiv.style.backgroundImage = `url('${data.Hover_image}')`;
    });
    imgDiv.addEventListener("mouseleave", () => {
        imgDiv.style.backgroundImage = `url('${data.Image}')`;
    });

    button.innerText = "Quick Add";
    h5.innerText = data["product-badge"];
    p2.innerText = data.Price;

    p1.innerText = data.Title;
    heartIcon.classList.add("fa-regular", "fa-heart");
    p1.appendChild(heartIcon);

    setTimeout(() => {
        imgDiv.classList.remove("loading");
        p1.classList.remove("loading");
        p2.classList.remove("loading");
    }, 1000); 
    imgDiv.append(button, h5);
    card.append(imgDiv, p1, p2);

    return card;
}


function appendDataIntoDom(data, numberOfCards) {
    cardCarousel.innerHTML = "";

    let numberOfCardsToAppend = numberOfCards || 16;

    for (let i = 0; i < numberOfCardsToAppend && i < data.length; i++) {
        let card = createCard(data[i]);
        cardCarousel.appendChild(card);
    }

}


const carousel = document.querySelector('.carouseling');
    const cards = document.querySelectorAll('.card');
    let currentIndexs = 0;

    function moveToIndex(index) {
      const cardWidth = cards[index].offsetWidth;
      carousel.style.transform = `translateX(-${index * cardWidth}px)`;
      currentIndexs = index;
    }

    document.querySelector('.next-btn').addEventListener('click', function() {
      if (currentIndexs < cards.length - 1) {
        moveToIndex(currentIndexs + 1);
      }
    });

    document.querySelector('.prev-btn').addEventListener('click', function() {
        console.log("Previous button clicked"); // Add this line for debugging
        if (currentIndex > 0) {
          moveToIndex(currentIndex - 1);
        }
      });
      
