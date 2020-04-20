let imgs = Array.from(document.querySelectorAll('.store-img'));
let lightBox = document.querySelector('div.lightbox-item');
let lightBoxContainer = document.querySelector('div.lightbox-container');
let closeBtn = document.querySelector('span.lightbox-close');
let lightBoxArrows = Array.from(document.querySelectorAll('.lightbox-control'));
let imageCounter = 0;


imgs.forEach((img, index) => {
    img.addEventListener('click', (e) => {
        console.log(e.target.classList);
        let image = e.target.src;
        lightBox.style.backgroundImage = `url(${image})`;
        console.log(lightBox)
        lightBoxContainer.classList.add('show');
        imageCounter = index;
        console.log(imageCounter);
    })
})

closeBtn.addEventListener('click', (e) => {
  console.log(e.target.classList);
  lightBoxContainer.classList.remove('show');
})

lightBoxArrows.forEach(function(btn){
  btn.addEventListener('click', () => {
       if(btn.className.includes('btnLeft')){
        imageCounter--;
        if(imageCounter < 0){
          imageCounter = imgs.length - 1;
          lightBox.style.backgroundImage = `url(${imgs[imageCounter].src})`;
        }else{
          lightBox.style.backgroundImage = `url(${imgs[imageCounter].src})`;
        }
      }else if(btn.className.includes('btnRight')){
        imageCounter++;
        if(imageCounter > imgs.length - 1){
          imageCounter = 0;
          lightBox.style.backgroundImage = `url(${imgs[imageCounter].src})`;
        }else{
          lightBox.style.backgroundImage = `url(${imgs[imageCounter].src})`;
        }
      }
  })
})
