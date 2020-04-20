var clck = document.getElementById("message-form");
var target1 = document.querySelector("#message");
var target2 = document.querySelector("h4.message-content");
console.log(target2);
clck.addEventListener('submit', function(e){
    e.preventDefault();
    target2.innerHTML = target1.value;
    target1.value = "";
    
    console.log(target2.innerHTML)
});
console.log(target2.value);




