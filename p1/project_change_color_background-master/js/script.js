var colors = ["pink", "green", "yellow", "skyblue", "Red", "purple"];
var i = 0;
var target = document.getElementById("btn");
target.onclick = changeColor;
function changeColor(){
    document.getElementsByTagName("body")[0].style.background = colors[i];
    i++;
    if(i >= colors.length){
        i = 0;
    }
}