var clk = document.getElementsByClassName("counterBtn");
var target = document.getElementById("counter");
console.log(Number(target.innerText) + 2);

Array.from(clk).forEach(function(btn){
    btn.addEventListener('click', function(){
      if(btn.className.includes('prevBtn')){
        var prevNum = Number(target.innerText) - 1;
        target.innerHTML = prevNum;
        console.log(target.innerText);
      }else if(btn.className.includes('nextBtn')){
        var nextNum = Number(target.innerText) + 1;
        target.innerHTML = nextNum;
        console.log(target.innerText);
        
      }
      if (target.innerHTML < 0 ){
        counter.style.color = 'red'
      } else if (target.innerHTML > 0){
        counter.style.color = 'green'
      } else {
        counter.style.color = '#333333'
      }
    })
})

