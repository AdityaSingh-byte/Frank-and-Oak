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
let Div_carousel = document.getElementsByClassName("carousel-inner");

let pagebtn = document.getElementById("btnLoadMore");
//card creation function 
function cardCreation(data){
let cards = document.createElement("div");
let image = document.createElement('img');
let button = document.createElement("button");
let title = document.createElement('p');
let price = document.createElement('p');
// classes
cards.classList.add("card_list","container");
image.classList.add("p_img","container");
title.classList.add("p_title","container");
price.classList.add("p_price","container");

button.classList.add("add_to_cart");

//setting the data 
image.src=data.Image;
title.textContent=`${data.Title}`;
price.textContent=`$ ${data.Price}`;
button.textContent="Add to Cart";
button.style.display = "none";
//hover functionality 
image.addEventListener("mousemove",()=>{
    image.src=data.Hover_image;
    
})
image.addEventListener("mouseout", () => {
    image.src=data.Image;
   
});
cards.addEventListener("mouseover", function () {
    button.style.display = "block";
});

cards.addEventListener("mouseout", function () {
    button.style.display = "none";
});
//addTocart button event
button.addEventListener('click', () => {
    let CartData = [];
    if (localStorage.getItem("CartData")!== null) {
        CartData = JSON.parse(localStorage.getItem("CartData"));
    }
    let flag = false;
    CartData.forEach(ele => {
        if (ele.ID === data.ID) {
            ele.quantity++;
            flag = true;
        }
    })
    if (!flag) {
        CartData.push({...data, quantity: 1})
    }
    localStorage.setItem("CartData", JSON.stringify(CartData));
});

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
        btn.classList.add("pagebtn");
        btn.innerText=i;
        mainContainer.innerHTML="";
        btn.addEventListener("click",()=>{
           
            fetchData(`${url}&_page=${i}&_limit=16`,query);
            window.scrollTo(0,0);
        })
        pagebtn.append(btn);

    }
   
    //creating elements from array and appending to main container
   
    dat.forEach((item)=>{
        mainContainer.append(cardCreation(item));
      
    })
}catch(err){console.log(err)}
}
fetchData(url,"&_page=1&_limit=16");

// fetchData(url,"&_page=1&_per_page=40");

//sorting functions 
XL.addEventListener('click',()=>{
    mainContainer.innerHTML="";
    fetchData(`${url}&_page=1&_limit=16`,"&Size=XL")
})
L.addEventListener('click',()=>{
    mainContainer.innerHTML="";
    fetchData(`${url}&_page=1&_limit=16`,"&Size=L")
})
M.addEventListener('click',()=>{
    mainContainer.innerHTML="";
    fetchData(`${url}&_page=1&_limit=16`,"&Size=M")
})
XS.addEventListener('click',()=>{
    mainContainer.innerHTML="";
    fetchData(`${url}&_page=1&_limit=16`,"&Size=XS")
})
sortFilter.addEventListener('change',()=>{
    if(sortFilter.value=="lowTohigh"){
        mainContainer.innerHTML="";
        fetchData(`${url}&_page=1&_limit=16`,"&_sort=Price&_order=asc");
    }else {
        mainContainer.innerHTML="";
        fetchData(`${url}&_page=1&_limit=16`,"&_sort=Price&_order=desc")
    }
})






