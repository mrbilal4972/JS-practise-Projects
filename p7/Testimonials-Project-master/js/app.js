let target1 = document.getElementById("customer-img");
let target2 = document.getElementById("customer-name");
let target3 = document.querySelector("#customer-text");

let slide = document.querySelectorAll(".btn");
console.log(slide);
let customer = [];
let count = 0;

function customerData(img, name, quote){
    this.img = img;
    this.name = name;
    this.quote = quote;
}

function createCustomer(img, name, quote){
    console.log(img);
    let imgLink = `img/customer-${img}.jpg`;
    let cust = new customerData(imgLink, name, quote);
    
    customer.push(cust);

}

createCustomer(0, "Bilal", "Lorem ipsum dolor  consectetur adipisicing elit. Ipsam praesentium voluptatibus repellendus repudiandae officia placeat odio, eum porro vitae quo.");
createCustomer(1, "Danish", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam praesentium voluptatibus repellendus repudiandae officia placeat odio, eum porro vitae quo.");
createCustomer(2, "Noman", "Lorem ictetur adipisicing elit. Ipsam praesentium voluptatibus repellendus repudiandae officia placeat odio, eum porro vitae quo.");
createCustomer(3, "Waqar", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam praesentium voluptatiae officia placeat odio, eum porro vitae quo.");
createCustomer(4, "Tariq", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam praesentium voluptatibus repellendus repudiandae  quo.");

console.log(customer);

let slideArr = Array.from(slide);
console.log(slideArr)
slideArr.forEach(function(val){
    val.addEventListener('click', function(){
        if(val.className.includes('prevBtn')){
            if(count < 0)
                count = customer.length-1;
            
            target1.src = customer[count].img;
            console.log(customer[count].img);
            target2.innerHTML = customer[count].name;
            target3.innerHTML = customer[count].quote;
            count--;
        }else if(val.className.includes('nextBtn')){
            if(count > customer.length-1)
                count = 0;
            
            target1.src = customer[count].img;
            target2.innerHTML = customer[count].name;
            target3.innerHTML = customer[count].quote;
            count++;
        }
    })
})