function Display(){
this.customer = document.getElementById('name');
this.course = document.getElementById('course');
this.author = document.getElementById('author');
this.submitBtn = document.querySelector('#submitBtn');
this.formSubmit = document.querySelector('#customer-form');
this.loader = document.querySelector('.loading');
}

Display.prototype.feildCheck = function(){
    this.customer.addEventListener('input', this.validateFeild);
    this.course.addEventListener('input', this.validateFeild);
    this.author.addEventListener('input', this.validateFeild);
}

Display.prototype.validateFeild = function(e){
    if(e.target.value === ""){
        e.target.classList.add('fail');
        e.target.classList.remove('complete');
    }else{
        e.target.classList.remove('fail');
        e.target.classList.add('complete');
    }
    dis.fillFeildChk();
}

Display.prototype.fillFeildChk = function(){
    // console.log('check')
    if(this.customer.value === "" || this.course.value === "" || this.author.value === ""){
        this.submitBtn.disabled = true;
    }else{
        this.submitBtn.disabled = false;
    }
    if(!this.submitBtn.disabled){
        // this.formSubmit.addEventListener('submit', this.getData);
        this.formSubmit.addEventListener('submit', this.getData);
    }
}
Display.prototype.getData = function(e){
    e.preventDefault();
    // console.log(this)
    let course = new Courses(dis.customer.value, dis.course.value, dis.author.value);
    console.log(course)
    dis.customer.value = "";
    dis.course.value = "";
    dis.author.value = "";
    dis.showCourse(course);
}

Display.prototype.showCourse = function(coures){
    this.loader.classList.remove('hideItem');
    this.loader.classList.add('showItem');
    setTimeout(() => {
        this.loader.classList.remove('showItem');
        this.loader.classList.add('hideItem');
        let rand = Math.floor((Math.random()*5)+1);
        let str = "";
        str = `<div class="card mx-2" style="width: 18rem;">
        <img src="./img/cust-${rand}.jpg" class="card-img-top" alt="...">
        <div class="card-body">
        <ul class="list-group list-group-flush">
        <li class="list-group-item"> <span class="badge badge-success">Name :</span><span class="customer-name mx-2"><strong>${coures.customer}</strong></li>
        <li class="list-group-item"><span class="badge badge-warning">Course :</span><span class="customer-name mx-2"><strong>${coures.course}</strong></li>
        <li class="list-group-item"><span class="badge badge-danger">Author :</span><span class="customer-name mx-2"><strong>${coures.author}</strong></li>
        </ul>         
        </div>
        </div>`
        let node = document.createElement("div");
        
        node.innerHTML = str;
        let list = document.querySelector('.customer-list');
        
        console.log(list);
        list.appendChild(node);
    }, 2000);
    }

let dis = new Display();
dis.feildCheck();
// dis.fillFeildChk();



function Courses(newCustomer, newCourse, newAuthor){
    this.customer = newCustomer;
    this.course = newCourse;
    this.author = newAuthor;
}
