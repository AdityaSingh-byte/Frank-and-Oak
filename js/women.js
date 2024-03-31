const url = "https://frank-and-oak.onrender.com/Data?Category=Women";
let mainContainer = document.getElementById('mainContainer');
let XL = document.getElementById("huey");
let L = document.getElementById('L');
let M = document.getElementById('louie');
let XS = document.getElementById('dewey');
let lowPrice = document.getElementById('low');
let highPrice = document.getElementById('high');
let midPrice = document.getElementById('Mid');
let sortFilter = document.getElementById('Sprice');
let corosol = document.getElementsByClassName("carousel-inner");
let pagebtn = document.getElementById("btnLoadMore");
//card creation function 
function cardCreation(data){
let cards = document.createElement("div");
let image = document.createElement('img');
let button = document.createElement("button");
let title = document.createElement('p');
let price = document.createElement('p');
// classes
cards.classList.add("card_list");
image.classList.add("p_img");
title.classList.add("p_title");
price.classList.add("p_price");

button.classList.add("add_to_cart");

//setting the data 
image.src=data.Image;
title.textContent=`${data.Title}`;
price.textContent=`${data.Price}`;
button.textContent="Add to Cart";
//hover functionality 
image.addEventListener("mousemove",()=>{
    image.src=data.Hover_image;
})
image.addEventListener("mouseout", () => {
    image.src=data.Image;
});
//addTocart button event
button.addEventListener("click", () => {
    let cart = [];
    if (localStorage.getItem("cart")!== null) {
        cart = JSON.parse(localStorage.getItem("cart"));
    }
    let item = {
        title: data.Title,
        image: data.Image,
        price: data.Price
    };
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
})

//appending the data in div

cards.append(image,title,price,button);
return cards;
}
//fetching function 
async function fetchData(link,query){
try{
    let res = await fetch(`${link}${query}`);
    let dat =await res.json();
    console.log(dat);
    //for pagination 
    let TotalData = res.headers.get('X-Total-Count');
    let limit = 40;
    let totalPages = Math.ceil(TotalData/limit);
    //to create button
    pagebtn.innerHTML="";
    for(let i=1;i<=totalPages;i++){
        let btn = document.createElement("button");
        btn.innerText=i;
        
        btn.addEventListener("click",()=>{
           
            fetchData(`${url}&_page=${i}&_limit=40`,query);
        })
        pagebtn.append(btn);

    }
    console.log(res.headers.get("X-Total-Count"))
    //creating elements from array and appending to main container
   
    dat.forEach((item)=>{
        mainContainer.append(cardCreation(item));
      
    })
}catch(err){console.log(err)}
}
fetchData(url,"&_page=1&_limit=20");

// fetchData(url,"&_page=1&_per_page=40");

//sorting functions 
XL.addEventListener('click',()=>{
    mainContainer.innerHTML="";
    fetchData(`${url}&_page=1&_limit=20`,"&Size=XL")
})
L.addEventListener('click',()=>{
    mainContainer.innerHTML="";
    fetchData(`${url}&_page=1&_limit=20`,"&Size=L")
})
M.addEventListener('click',()=>{
    mainContainer.innerHTML="";
    fetchData(`${url}&_page=1&_limit=20`,"&Size=M")
})
XS.addEventListener('click',()=>{
    mainContainer.innerHTML="";
    fetchData(`${url}&_page=1&_limit=20`,"&Size=XS")
})
sortFilter.addEventListener('change',()=>{
    if(sortFilter.value=="lowTohigh"){
        mainContainer.innerHTML="";
        fetchData(`${url}&_page=1&_limit=20`,"&_sort=Price&_order=asc")
    }else {
        mainContainer.innerHTML="";
        fetchData(`${url}&_page=1&_limit=20`,"&_sort=Price&_order=desc")
    }
})



// document.getElementById("prev").addEventListener("click", function () {
//     let currentScroll = mainContainer.scrollLeft;
//     let prevItem = mainContainer.querySelector(".carousel-item[data-index='" + (currentScroll / (window.innerWidth / 2)) + "']");
//     if (prevItem) {
//         mainContainer.scrollTo({
//             left: prevItem.offsetLeft,
//             behavior: "smooth"
//         });
//     }
// });

// document.getElementById("next").addEventListener("click", function () {
//     let currentScroll = mainContainer.scrollLeft;
//     let nextItem = mainContainer.querySelector(".carousel-item[data-index='" + ((currentScroll / (window.innerWidth / 2)) + 1) + "']");
//     if (nextItem) {
//         mainContainer.scrollTo({
//             left: nextItem.offsetLeft,
//             behavior: "smooth"
//         });
//     }
// });