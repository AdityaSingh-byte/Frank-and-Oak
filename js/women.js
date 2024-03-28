//card creation function 
function cardCreation(data){
let cards = document.createElement("div");
let image = document.createElement('img');

let title = document.createElement('p');
let price = document.createElement('p');
// classes
cards.classList.add("card_list");
image.classList.add("p_img");
title.classList.add("p_title");
price.classList.add("p_price");
//setting the data 
image.src=data.img;
title.textContent=`Title: ${data.title}`;
price.textContent=`Price: $${data.price}`;
//appending the data in div
cards.append(image,title,price);
return cards;
}
//fetching function 
async function fetchData(){
try{
    let res = await fetch("../json/women.json");
    let dat =await res.json();
    console.log(dat.data);
}catch(err){console.log(err)}
}
fetchData();