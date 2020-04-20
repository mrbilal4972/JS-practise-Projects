let buttons = document.querySelectorAll(".filterBtn");
let target = document.querySelectorAll(".store-item");
let targetArr = Array.from(target);
// console.log(targetArr);

let count = 0;

Array.from(buttons).forEach(function(btn){
    btn.addEventListener('click', function(){
    
        targetArr.forEach(function(item){
            item.style.display = 'none';

            if(btn.id.includes('cupcakes')){
                Array.from(document.querySelectorAll('.cupcakes')).forEach(function(specificItem){
                    specificItem.style.display = 'block';
                });
            }else if(btn.id.includes('sweets')){
                Array.from(document.querySelectorAll('.sweets')).forEach(function(specificItem){
                    specificItem.style.display = 'block';
                });
            }else if(btn.id.includes('cakes')){
                Array.from(document.querySelectorAll('.cakes')).forEach(function(specificItem){
                    specificItem.style.display = 'block';
                });
            }else if(btn.id.includes('doughnuts')){
                Array.from(document.querySelectorAll('.doughnuts')).forEach(function(specificItem){
                    specificItem.style.display = 'block';
                });
            }else if(btn.id.includes('all')){
                item.style.display = 'block';
            }
        })
                
    })
})

let filterValue;
let searchBar = document.getElementById("search-item");
console.log(searchBar);
searchBar.addEventListener('input', () => {
    filterValue = searchBar.value.toLowerCase();
    targetArr.forEach((val) => {
        if(val.textContent.includes(filterValue))
            val.style.display = 'block';
        else
            val.style.display = 'none';
    })
    
})