const url = "https://frank-and-oak.onrender.com/Data?Category=Men";
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
let accordion = document.getElementsByClassName('contentBx');
let low = document.getElementById("low");
let Mid = document.getElementById("Mid");
let high = document.getElementById("high");
let cartcount = document.getElementById("cartcount");
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
price.textContent=`$${data.Price}`;
button.textContent="Quick Add";
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
    let cart = [];
    if (localStorage.getItem("cart")!== null) {
        cart = JSON.parse(localStorage.getItem("cart"));
    }
   
    let flag = false;
    cart.forEach(ele => {
        if (ele.id === data.id) {
            ele.quantity++;
            flag = true;
        }
    })
    if (!flag) {
        cart.push({...data, quantity: 1})
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    cartcount.innerText=`${cart.length}`;

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
for(let i=0 ;i<accordion.length;i++){
    accordion[i].addEventListener("click",function(){
       
        this.classList.toggle("active");
    })
};
//sorting on the price range 
low.addEventListener('click',()=>{
    mainContainer.innerHTML="";
    fetchData(`${url}&_page=1$_limit=16`,"&Price_gte=0&Price_lte=100")
});
Mid.addEventListener('click',()=>{
    mainContainer.innerHTML="";
    fetchData(`${url}&_page=1$_limit=16`,"&Price_gte=100&Price_lte=250")
});
high.addEventListener('click',()=>{
    mainContainer.innerHTML="";
    fetchData(`${url}&_page=1$_limit=16`,"&Price_gte=250&Price_lte=500")
});



// recent view 
let recentView = document.getElementById("recent_view");
 async  function addToRecentView(link) {
    try{
        let res = await  fetch(link);
        let data = await res.json();
        console.log(data);
        data.forEach((item)=>{
            recentView.append(cardCreation(item));
        })
    }catch(err){console.log(err)}
}
addToRecentView(`${url}&_page=1&_limit=5`);


document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('user_email').value;
    const password = document.getElementById('user_pwd').value;

    // Add your authentication logic here
    // For example, you can check if the email and password are correct
    if (email === 'admin@gmail.com' && password === 'admin') {
        window.location.href = '../../Frank-and-Oak/admin.html'; // Redirect to the admin page if authentication is successful
    } else {
        alert('Invalid email or password');
    }
});






