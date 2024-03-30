let url="https://frank-and-oak.onrender.com/Data?Category=Men";

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
    let heartIcon=document.createElement('i');
    let addtoCart=document.createElement("button");
    Image.addEventListener("mousemove",()=>{
        Image.src=item.Hover_image;
    })
    Image.addEventListener("mouseout", () => {
        Image.src=item.Image;
    });

    card.classList.add('box');
    addtoCart.classList.add('Cart-btn');
    Image.classList.add('card-img');
    heartIcon.classList.add('fa', 'fa-regular', 'fa-heart');
    heartIcon.style.fontSize='24px';
    Title.style.fontSize='12px';
    price.style.fontSize='14px';
    heartIcon.addEventListener('click',function(){
        heartIcon.classList.toggle('filled');
    })

    addtoCart.addEventListener('click',()=>{
        let favdata=JSON.parse(localStorage.setItem('favorite'))||[];
        let flag=false;
        favorite.forEach(ele=>{
            if(ele.id===item.id){
                ele.quantity++;
                flag=true;
            }
        })
        if(!flag){
           favdata.push({...item,quantity:1})
        }
        localStorage.setItem("favorite",JSON.stringify(favdata));
    })
   
    
    Title.innerText=item.Title;
    price.innerText=item.price;
    Image.src=item.Image;
    addtoCart.innerHTML='ADD TO CART';

    card.append(Image,Title,price,heartIcon,addtoCart);
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

function calculateTotol(){
    let favdata = JSON.parse(localStorage.getItem("favorite")) || [];
    let TotalPrice = favdata.reduce((acc,item)=>{
      return acc+(item.quantity*item.price);
    },0)
    console.log(TotalPrice)
  }
  
  calculateTotol();





