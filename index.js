const popup = document.getElementById('popup');
const menupopup=document.querySelector('.menu-popup');
const clickSound = document.getElementById('clickSound');
const cross=document.querySelector('#cut');
const flsr=document.querySelector('#full');
const min=document.querySelector('#minimise');
const mintop=document.querySelector('.minimise-top')
const iconname=document.querySelector('.icon-name-wrapper')
const cro=document.querySelector('.crosses')


let offsetX = 0;
let offsetY = 0;
let setX = 0;
let setY = 0;
let isDragging = false;
let Dragging = false;



document.body.addEventListener('click', () => {
  clickSound.currentTime = 0; 
  clickSound.play(); 
});

popup.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - popup.offsetLeft;
    offsetY = e.clientY - popup.offsetTop;
    
  });
  
  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      popup.style.left = `${e.clientX - offsetX}px`;
      popup.style.top = `${e.clientY - offsetY}px`;
    }
  });
  
  document.addEventListener('mouseup', () => {
    isDragging = false;
    
  });
  menupopup.addEventListener('mousedown', (e) => {
    Dragging = true;
    setX = e.clientX -  menupopup.offsetLeft;
    setY = e.clientY -  menupopup.offsetTop;
    
  });
  
  document.addEventListener('mousemove', (e) => {
    if (Dragging) {
        menupopup.style.left = `${e.clientX - setX}px`;
        menupopup.style.top = `${e.clientY - setY}px`;
    }
  });
  
  document.addEventListener('mouseup', () => {
    Dragging = false;
    
  });
  popup.addEventListener('click',function(e){
    menupopup.style.display = "block";
    menupopup.style.transform = "scale(1)";
    menupopup.style.opacity = "1"; 
    mintop.style.display="flex"
  })
  cross.addEventListener('click',function(e){
    menupopup.style.transform = "scale(0.9)";
    menupopup.style.opacity = "0"; 
    menupopup.style.display = "none";
    mintop.style.display="none"

    
  })
  min.addEventListener('click',function(e){
    menupopup.style.transform = "scale(0.9)";
    menupopup.style.opacity = "0"; 
    menupopup.style.display = "none";
    mintop.style.display="flex"
  })
  iconname.addEventListener('click' ,function(e){
    menupopup.style.display = "block";
    menupopup.style.transform = "scale(1)";
    menupopup.style.opacity = "1"; 
    mintop.style.display="flex"
  })
  cro.addEventListener('click' , function(e){
    menupopup.style.transform = "scale(0.9)";
    menupopup.style.opacity = "0"; 
    menupopup.style.display = "none";
    mintop.style.display="none"
  })
  flsr.addEventListener('click',function(e){
    if (menupopup.style.height === "50%" && menupopup.style.width === "50%") {
        menupopup.style.height = "100vh"; 
        menupopup.style.width = "100vw"; 
     
      } else {
        menupopup.style.height = "50%"; 
        menupopup.style.width = "50%"; 
       
      }
      


  })
