let service = [
  {
    title: 'Great 20%',
    value: 1
  },
  {
    title: 'Good 10%',
    value: 2
  },
  {
    title: 'Bad 2%',
    value: 3
  }
];

// adding Services option
service.forEach((ser) => {
  let opt = document.createElement('option')
  // console.log(opt);
  opt.innerText = ser.title;
  opt.value = ser.value;
  let sel = document.querySelector('#input-service');
  sel.appendChild(opt);
  // console.log(sel.innerHTML);
})

  // Validation
  let cal = document.querySelector('#tip-form');
  let err = document.querySelector('.feedback');
  let res = document.querySelector('.results');
  let tipAmount = document.querySelector('#tip-amount');
  let totalAmount = document.querySelector('#total-amount');
  let sharedAmount = document.querySelector('#person-amount');
  let loader = document.querySelector('.loader');
  

// console.log(selectedService);
cal.addEventListener('submit', () => {

  let billAmount = Number(document.querySelector('#input-bill').value);
  let sharedPerson = Number(document.querySelector('#input-users').value);
  let selectedService = Number(document.querySelector('#input-service').value);
  console.log(billAmount);
  console.log(sharedPerson);
  console.log(selectedService);
  
  let isFilled = true;

  if(billAmount === 0){
    err.innerHTML = `<p class="font-weight-bold">Bill amount cannot be blank</p>`;
    console.log(billAmount);
    isFilled = false;
  }
  if(sharedPerson === 0){
    err.innerHTML += `<p class="font-weight-bold">There should be one or more person to pay amount</p>`;
    console.log(sharedPerson);
    isFilled = false;
  }
  if(selectedService === 0){
    err.innerHTML += `<p class="font-weight-bold">You have to rate over services</p>`;
    console.log(selectedService)
    isFilled = false;
  }

  if(!isFilled){
    err.classList.remove('feedback');
    err.classList.add('showItem');

    setTimeout(() => {
      err.classList.remove('showItem');
      err.classList.add('feedback');
      err.innerHTML = "";
    }, 3000);

  }else{
    let share;
    let tip;
    let total;

    switch(selectedService){
      case 1:
        tip = billAmount*0.2;
        console.log(tip);
        break;
      case 2:
        tip = billAmount*0.1;
        console.log(tip);
        break;
      case 3:
        tip = billAmount*0.02;
        console.log(tip);
    }
    total = billAmount+tip;
    share = total/sharedPerson;

    loader.classList.add('showItem');

    setTimeout(() => {
      loader.classList.remove('showItem');
      res.classList.add('showItem');
      tipAmount.innerText = tip.toFixed(2);
      totalAmount.innerText = total.toFixed(2);
      sharedAmount.innerText = share.toFixed(2); 
      
      setTimeout(() => {
        res.classList.remove('showItem');
      }, 5000);
    }, 500)
    
    
    // console.log(share);
    // console.log(tip);
  //   console.log(billAmount, (typeof billAmount));
  //   console.log(sharedPerson, (typeof sharedPerson));
  //   console.log(selectedService, (typeof selectedService));
  }
})