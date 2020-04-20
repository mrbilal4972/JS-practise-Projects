var target1 = document.querySelector("body");
var target2 = document.querySelector("[id=hex-value]");
var performEventOn = document.querySelector("a");
var hexValue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
performEventOn.addEventListener("click", makeHex);

function makeHex(){
    let hex = "#";
    for(let i = 0; i < 6; i++){
        hex += hexValue[parseInt((Math.random()*hexValue.length))];
    }
    target1.style.background = hex;
    target2.innerHTML = hex;
}