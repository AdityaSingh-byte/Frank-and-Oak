let url="http://localhost:3000/Data?Category=Men";

let container=document.getElementById("container");

// fetch data form api
async function fetchData(){
    try{
        const response=await fetch(url);
        const data=await response.json();
        console.log(data);
        appendData(data);
        return data;
    }
    catch(error){
        console.log(error);
    }
}
fetchData(); 

// create card
function createCard(item){
    let card=document.createElement("div");
    let Image=document.createElement("img");
    let product_badge=document.createElement("p");
    let Title=document.createElement("p");
    let price=document.createElement("p");
    let addtoCart=document.createElement("button");

    card.classList.add('box');
    addtoCart.classList.add('Cart-btn');
    Image.classList.add('card-img');
    // product_badge.innerText=item.product-badge;
    // product_badge.innerText=;
    
    Title.innerText=item.Title;
    price.innerText=item.price;
    Image.src=item.Image;
    addtoCart.innerHTML='ADD to Cart';

    card.append(Image,Title,price,addtoCart);
   return card;
}

//append data
function appendData(data){
    container.innerHTML="";
    data.forEach(item=>{
        let card=createCard(item);
        container.append(card);
    } )

}

