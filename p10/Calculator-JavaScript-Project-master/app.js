let num = Array.from(document.querySelectorAll('.btn'));
let sign = Array.from(document.querySelectorAll('.btn-yellow'));
let equal = document.querySelector('.btn-equal');
let clear = document.querySelector('.btn-clear');

let display = document.querySelector('#screen');

num.forEach((numBtn) => {
  numBtn.addEventListener('click', (e) => {
      display.value = display.value + e.target.innerText;
      console.log(display.value);
  })
})

equal.addEventListener('click', function(){
  if(display.value === "")
    display.value = "Please Enter a valid Value";
  else{
    let res = eval(display.value);
    display.value = res;
  }
  })

clear.addEventListener('click', () => {
  display.value = "";
})

