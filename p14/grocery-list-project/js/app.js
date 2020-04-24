let submitBtn = document.querySelector('.submitBtn');
let ipValue = document.querySelector('#input-value');
let itemList = document.querySelector('.list-items');
let clearBtn = document.querySelector('.clearBtn');
let item;
let deleteBtn;
let addValue = "";

submitBtn.addEventListener('click', addItem);
clearBtn.addEventListener('click', cleanList);

function cleanList(){
    itemList.innerHTML = "";
}

function addItem(e){
    e.preventDefault();
    addValue = ipValue.value;
    insertList();
    console.log(addValue);
    console.log('submit Button');   
}

function insertList(){
    let item = itemList.insertAdjacentHTML("afterbegin", `<div class="item my-3 d-flex justify-content-between p-2">
    <h5 class="item-title text-capitalize">${addValue}</h5>
    <span class="remove-icon text-danger"><i class="fas fa-trash"></i></span>
   </div>`);
   localStorage.setItem("a", item);
   var b = localStorage.getItem("a");
   console.log(b);
   deleteItem();
}

function deleteItem(){
    deleteBtn = document.querySelector('.remove-icon');
    deleteBtn.addEventListener('click', (e) => {
        item = document.querySelector('.item');
        item.remove();
    });
}