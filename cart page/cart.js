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
            img.src = item.Image;
            
            let t_p = document.createElement('div');
            const title = document.createElement('h3');
            title.textContent = item.Title;

            const price = document.createElement('p');
            price.textContent = `Price: $${item.Price}`;
           let quan = document.createElement('div');
            const quantity = document.createElement('p');
            quantity.textContent =` Quantity: ${item.quantity}`;
            let cbtn= document.createElement('div');
            const increaseBtn = document.createElement('button');
            increaseBtn.classList.add("btn")
            increaseBtn.textContent = '+';
            increaseBtn.addEventListener('click', function () {
                location.reload();
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
                    location.reload();
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
            const itemTotal = item.Price * item.quantity;
            itemTotalPrice.textContent = `Total Price: ${itemTotal}$`;
            totalPrice += itemTotal;
            t_p.append(title,price);
            quan.append(increaseBtn,quantity,decreaseBtn);
            cartItem.append(divbtn);
            divbtn.append(img);
          divbtn.append(t_p,quan);
                
          
           
         cbtn.append(removeBtn);
            divbtn.append(cbtn); 
            divbtn.append(itemTotalPrice);

            cartItemsContainer.appendChild(cartItem);
        });

        const totalElement = document.createElement('p');
        totalElement.classList.add('overall-total-price');
        totalElement.textContent =` Total Amount: $${totalPrice}`;
        cartItemsContainer.appendChild(totalElement);
    }

    function updateCart() {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

   

    displayCartItems();
});
window.onload(displayCartItems());