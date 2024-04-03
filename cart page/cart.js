

// document.addEventListener('DOMContentLoaded', function () {
//     const cartItemsContainer = document.getElementById('cart-items');
//     let cart = JSON.parse(localStorage.getItem("cart")) || [];

//     // Function to display cart items
//     function displayCartItems() {
//         let totalPrice = 0; // Initialize total price counter

//         cart.forEach(item => {
//             const cartItem = document.createElement('div');
//             cartItem.classList.add('cart-item');

            
//             const divbtn = document.createElement('div');
//             divbtn.classList.add('divbtn');

//             const img = document.createElement('img');
//             img.src = item.image;
//             img.alt = item.title;

//             const title = document.createElement('h3');
//             title.textContent = item.title;

//             const price = document.createElement('p');
//             price.textContent = `Price per item: ${item.price}$`;

//             const quantity = document.createElement('p');
//             quantity.textContent = `Quantity: ${item.quantity}`;

//             const increaseBtn = document.createElement('button');
//             increaseBtn.classList.add("btn")
//             increaseBtn.textContent = '+';
//             increaseBtn.addEventListener('click', function () {
//                 item.quantity++;
//                 quantity.textContent = `Quantity: ${item.quantity}`;
//                 updateCart();
//                 updateTotalPrice(); // Update total price
//             });

//             const decreaseBtn = document.createElement('button');
//             decreaseBtn.classList.add("btn")
//             decreaseBtn.textContent = '-';
//             decreaseBtn.addEventListener('click', function () {
//                 if (item.quantity > 1) {
//                     item.quantity--;
//                     quantity.textContent = `Quantity: ${item.quantity}`;
//                     updateCart();
//                     updateTotalPrice(); 
//                 }
//             });

//             const removeBtn = document.createElement('button'); // Create remove button
//             removeBtn.setAttribute("class","remove-btn")
//             removeBtn.textContent = 'Remove';
//             removeBtn.addEventListener('click', function () { // Add event listener for removal
//                 const itemIndex = cart.indexOf(item);
//                 cart.splice(itemIndex, 1); // Remove item from cart array
//                 cartItem.remove(); // Remove item from display
//                 updateCart();
//                 updateTotalPrice(); // Update total price
//             });

//             const itemTotalPrice = document.createElement('p');
//             const itemTotal = item.price * item.quantity;
//             itemTotalPrice.textContent = `Total Price: ${itemTotal}$`;
//             totalPrice += itemTotal; // Update total price counter
            
//             cartItem.appendChild(divbtn);
//             divbtn.appendChild(img);
//             divbtn.appendChild(title);
//             divbtn.appendChild(price);          
//             divbtn.appendChild(increaseBtn);
//             divbtn.appendChild(quantity);
//             divbtn.appendChild(decreaseBtn);
//             divbtn.appendChild(removeBtn); 
//             divbtn.appendChild(itemTotalPrice);

//             cartItemsContainer.appendChild(cartItem);
//         });

//         // Display overall total price
//         const totalElement = document.createElement('p');
//         totalElement.classList.add('overall-total-price'); // Add class for easy targeting
//         totalElement.textContent = `Overall Total Price: ${totalPrice}$`;
//         cartItemsContainer.appendChild(totalElement);
//     }

//     // Update the cart in local storage whenever quantity changes
//     function updateCart() {
//         localStorage.setItem("cart", JSON.stringify(cart));
//     }

//     // Function to update the total price displayed
//     function updateTotalPrice() {
//         const cartItems = document.querySelectorAll('.cart-item');
//         let totalPrice = 0;

//         cartItems.forEach(cartItem => {
//             const itemTotalPriceElement = cartItem.querySelector('p:last-child');
//             const itemQuantity = parseInt(cartItem.querySelector('p:nth-child(4)').textContent.split(': ')[1]);
//             const itemPrice = parseFloat(cartItem.querySelector('p:nth-child(3)').textContent.split(': ')[1].slice(0, -1));
//             const itemTotal = itemQuantity * itemPrice;
//             itemTotalPriceElement.textContent = `Total Price: ${itemTotal}$`;
//             totalPrice += itemTotal;
//         });

//         // Update overall total price
//         const totalElement = document.querySelector('.overall-total-price');
//         totalElement.textContent = `Overall Total Price: ${totalPrice}$`;
//     }

//     // Display cart items when the page loads
//     displayCartItems();
// });
// cart.js

document.addEventListener('DOMContentLoaded', function () {
    const cartItemsContainer = document.getElementById('cart-items');
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function displayCartItems() {
        let totalPrice = 0;

        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');

            const divbtn = document.createElement('div');
            divbtn.classList.add('divbtn');

            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.title;

            const title = document.createElement('h3');
            title.textContent = item.title;

            const price = document.createElement('p');
            price.textContent = `Price per item: ${item.price}$`;

            const quantity = document.createElement('p');
            quantity.textContent = `Quantity: ${item.quantity}`;

            const increaseBtn = document.createElement('button');
            increaseBtn.classList.add("btn")
            increaseBtn.textContent = '+';
            increaseBtn.addEventListener('click', function () {
                item.quantity++;
                quantity.textContent = `Quantity: ${item.quantity}`;
                updateCart();
                updateTotalPrice();
            });

            const decreaseBtn = document.createElement('button');
            decreaseBtn.classList.add("btn")
            decreaseBtn.textContent = '-';
            decreaseBtn.addEventListener('click', function () {
                if (item.quantity > 1) {
                    item.quantity--;
                    quantity.textContent = `Quantity: ${item.quantity}`;
                    updateCart();
                    updateTotalPrice(); 
                }
            });

            const removeBtn = document.createElement('button');
            removeBtn.setAttribute("class","remove-btn")
            removeBtn.textContent = 'Remove';
            removeBtn.addEventListener('click', function () {
                const itemIndex = cart.indexOf(item);
                cart.splice(itemIndex, 1);
                cartItem.remove();
                updateCart();
                updateTotalPrice();
            });

            const itemTotalPrice = document.createElement('p');
            const itemTotal = item.price * item.quantity;
            itemTotalPrice.textContent = `Total Price: ${itemTotal}$`;
            totalPrice += itemTotal;

            cartItem.appendChild(divbtn);
            divbtn.appendChild(img);
            divbtn.appendChild(title);
            divbtn.appendChild(price);          
            divbtn.appendChild(increaseBtn);
            divbtn.appendChild(quantity);
            divbtn.appendChild(decreaseBtn);
            divbtn.appendChild(removeBtn); 
            divbtn.appendChild(itemTotalPrice);

            cartItemsContainer.appendChild(cartItem);
        });

        const totalElement = document.createElement('p');
        totalElement.classList.add('overall-total-price');
        totalElement.textContent = `Overall Total Price: ${totalPrice}$`;
        cartItemsContainer.appendChild(totalElement);
    }

    function updateCart() {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    function updateTotalPrice() {
        const cartItems = document.querySelectorAll('.cart-item');
        let totalPrice = 0;

        cartItems.forEach(cartItem => {
            const itemTotalPriceElement = cartItem.querySelector('p:last-child');
            const itemQuantity = parseInt(cartItem.querySelector('p:nth-child(4)').textContent.split(': ')[1]);
            const itemPrice = parseFloat(cartItem.querySelector('p:nth-child(3)').textContent.split(': ')[1].slice(0, -1));
            const itemTotal = itemQuantity * itemPrice;
            itemTotalPriceElement.textContent = `Total Price: ${itemTotal}$`;
            totalPrice += itemTotal;
        });

        const totalElement = document.querySelector('.overall-total-price');
        totalElement.textContent = `Overall Total Price: ${totalPrice}$`;
    }

    displayCartItems();
});
