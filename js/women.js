const url = "http://localhost:3000/Data";
let mainContainer = document.getElementById('mainContainer');
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
image.src=data.Image;
title.textContent=`Title: ${data.Title}`;
price.textContent=`Price: $${data.Price}`;
//appending the data in div
cards.append(image,title,price);
return cards;
}
//fetching function 
async function fetchData(){
try{
    let res = await fetch(url);
    let dat =await res.json();
    console.log(dat);
    //creating elements from array and appending to main container
    var i = 0;
    dat.forEach((item)=>{
        mainContainer.append(cardCreation(item));
        i++;
    })
}catch(err){console.log(err)}
}
fetchData();