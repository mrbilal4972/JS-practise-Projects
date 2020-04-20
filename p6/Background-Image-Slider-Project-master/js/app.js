  var pictures = [
    "contBcg-0",
    "contBcg-1",
    "contBcg-2",
    "contBcg-3",
    "contBcg-4"
  ];
var count = 0;
var img;
var btn = document.getElementsByTagName("a");
var target = document.getElementById("bgImg");
Array.from(btn).forEach(function(b){
  b.addEventListener('click', function(){
  if(b.className.includes('btn-left')){
    count--;
    if(count < 0)
      count = pictures.length - 1;
    img = './img/'+pictures[count]+'.jpeg';
    target.style.backgroundImage = 'url('+ img +')'//`url('./img/${pictures[count]}.jpeg')`;
    }else if(b.className.includes('btn-right')){
    count++;
    if(count > pictures.length-1)
      count = 0;
    img = './img/'+pictures[count]+'.jpeg';
    target.style.backgroundImage = 'url('+ img +')' //`url('./img/${pictures[count]}.jpeg')`;
    }
    
  });
});