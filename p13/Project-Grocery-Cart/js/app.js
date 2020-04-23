let cartBtn = document.querySelectorAll('.store-item-icon');
let clearCartBtn = document.getElementById('clear-cart');
let cartInfoBtn = document.getElementById('cart-info');
let cart = document.querySelector('#cart');
let itemCount = document.getElementById('item-count');
let itemsTotal = itemCount.nextElementSibling;

// console.log(itemCount.innerText);
let deleteItemBtn;
let cartItemImg;
let itemName;
let itemPrize;
let totalAmt;
let cartItem;
let total;
// console.log(cartItem);

clearCartBtn.addEventListener('click', () => {
    cartItem = document.querySelectorAll('.cart-item');
    cartItem.forEach((e) => {
        e.remove();
    });

    itemsTotal.innerText = (0).toFixed(2);
    itemCount.innerText = 0;
    cart.lastElementChild.previousElementSibling.lastElementChild.firstElementChild.innerHTML = (0).toFixed(2);
    
});

cartBtn.forEach((b) => {
    b.addEventListener('click', (e) => {
        cartItemImg = b.previousElementSibling.src.split('/');
        // console.log(cartItemImg[cartItemImg.length-1])
        itemName = b.parentElement.nextElementSibling.firstElementChild.firstElementChild.innerText;
        itemPrize = b.parentElement.nextElementSibling.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.textContent;
        total = cart.lastElementChild.previousElementSibling.lastElementChild.firstElementChild;
        totalAmt = Number(total.innerHTML) + (Number(itemPrize));
        // console.log(Number(itemPrize))
        itemCount.innerText = ++(itemCount.innerText);
        // console.log(itemCount.innerText);
        itemsTotal.innerText = totalAmt.toFixed(2);
        addItem();
        total.innerHTML = totalAmt.toFixed(2);
        // deleteItem(callback);
        // console.log(a);
    });
});

    cartInfoBtn.addEventListener('click', () => {
        cart.classList.toggle('show-cart');
    });

       function addItem() {
        cart.insertAdjacentHTML('afterbegin', `<div class="cart-item d-flex justify-content-between text-capitalize my-3">
            <img src="img-cart/${cartItemImg[cartItemImg.length-1]}" class="img-fluid rounded-circle" id="item-img" alt="">
            <div class="item-text">

            <p id="cart-item-title" class="font-weight-bold mb-0">${itemName}</p>
            <span>$</span>
            <span id="cart-item-price" class="cart-item-price" class="mb-0">${itemPrize}</span>
            </div>
            <a href="#!" class="cart-item-remove">
            <i class="fas fa-trash"></i>
            </a>
            </div>`);
            alert('Your Item is added to Cart');
            deleteItem();
    }

    function deleteItem(){
        // console.log('delete')
        deleteItemBtn = document.querySelector('.cart-item-remove');
        deleteItemBtn.addEventListener('click', (i) => {
            let itemPrize = Number(i.target.parentElement.parentElement.querySelector('#cart-item-price').innerText);
            itemsTotal.innerText = (Number(itemsTotal.innerText) - itemPrize).toFixed(2);
            total.innerText = itemsTotal.innerText;
            itemCount.innerText = Number(itemCount.innerText) - 1;

            // console.log(i.target.parentElement.parentElement.remove());
            // console.log(itemPrize);
            // console.log(itemsTotal.innerText);
            // console.log(itemCount.innerText);
            // console.log(total.innerText);
            i.target.parentElement.parentElement.remove();

        });
        // addedItem.forEach((e, i) => {
        //     e.addEventListener('click', () => {
        //         a = addedItem[addedItem.length-1];
                
        //     })
    }
    // function deleteItem(){
    //     console.log(a);
        // addedItem.forEach((i) => {
        //     let deleteBtn = i.lastElementChild;
        //     console.log(deleteBtn);
        //     deleteBtn.addEventListener('click', () => {
        //         let itemPrize = i.lastElementChild.previousElementSibling.lastElementChild;
        //         let total = cart.lastElementChild.previousElementSibling.lastElementChild.firstElementChild;
        //         let itemCount = document.getElementById('item-count');
        //         let itemsTotal = itemCount.nextElementSibling;
        //         console.log(Number(total.innerText));
        //         console.log(Number(itemPrize.innerText));
        //         console.log(Number(itemCount.innerText));

            //     console.log(i.lastElementChild.previousElementSibling.lastElementChild);
                

                // total.innerText = Number(total.innerText) - Number(itemPrize.innerText);
                // itemsTotal.innerText = Number(total.innerText) - Number(itemPrize.innerText);
                // itemCount = --(itemCount.innerText);
                // console.log(itemCount)
                // i.remove();
            // console.log(total);
            // totalAmt -= (Number(itemPrize));
                // console.log(i);
            // })
            // console.log(deleteBtn);
            // console.log(i.parentElement);
        // });
        // console.log(addedItem);
        
    // }
    
// totalAmt = Number(cart.lastElementChild.previousElementSibling.lastElementChild.firstElementChild.innerHTML);
// console.log(totalAmt);



// cart.insertAdjacentHTML('afterbegin', `<div class="cart-item d-flex justify-content-between text-capitalize my-3">
// <img src="img-cart/cake-2.jpeg" class="img-fluid rounded-circle" id="item-img" alt="">
// <div class="item-text">

//   <p id="cart-item-title" class="font-weight-bold mb-0">cart item</p>
//   <span>$</span>
//   <span id="cart-item-price" class="cart-item-price" class="mb-0">10.99</span>
// </div>
// <a href="#" id='cart-item-remove' class="cart-item-remove">
//   <i class="fas fa-trash"></i>
// </a>
// </div>`);
