const url = "http://localhost:3000/Data?Category=Women";
let mainContainer = document.getElementById('mainContainer');
let XL = document.getElementById("huey");
let L = document.getElementById('L');
let M = document.getElementById('louie');
let XS = document.getElementById('dewey');
let lowPrice = document.getElementById('low');
let highPrice = document.getElementById('high');
let midPrice = document.getElementById('Mid');
let sortFilter = document.getElementById('Sprice');
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
button.addEventListener("click",()=>{
    
}

//appending the data in div

cards.append(image,title,price,button);
return cards;
}
//fetching function 
async function fetchData(link,query){
try{
    let res = await fetch(`${link}${query}`);
    let dat =await res.json();
    console.log(dat.data);
    //creating elements from array and appending to main container
   
    dat.data.forEach((item)=>{
        mainContainer.append(cardCreation(item));
      
    })
}catch(err){console.log(err)}
}
fetchData(url,"&_page=1&_per_page=40");

//sorting functions 
XL.addEventListener('click',()=>{
    mainContainer.innerHTML="";
    fetchData(`${url}&_page=1&_per_page=40`,"&Size=XL")
})
L.addEventListener('click',()=>{
    mainContainer.innerHTML="";
    fetchData(`${url}&_page=1&_per_page=40`,"&Size=L")
})
M.addEventListener('click',()=>{
    mainContainer.innerHTML="";
    fetchData(`${url}&_page=1&_per_page=40`,"&Size=M")
})
XS.addEventListener('click',()=>{
    mainContainer.innerHTML="";
    fetchData(`${url}&_page=1&_per_page=40`,"&Size=XS")
})
sortFilter.addEventListener('change',()=>{
    if(sortFilter.value=="lowTohigh"){
        mainContainer.innerHTML="";
        fetchData(`${url}&_page=1&_per_page=40`,"&_sort=Price")
    }else {
        mainContainer.innerHTML="";
        fetchData(`${url}&_page=1&_per_page=40`,"&_sort=-Price")
    }
})
//localstorage adding 
