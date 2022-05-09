let btnNext = document.querySelector('.next_slide');
let btnPrev = document.querySelector('.prev_slide');
let slider = [];
let item = document.querySelectorAll('.header_content_text');
const itemLength = item.length;
for (let i = 0; i < itemLength; i++) {
  slider[i] = item[i];
  item[i].remove();
}
let step = 0; 
let offset = 0;

function draw() {
    let div = document.createElement('div');
    div = slider[slider.length-1];
    div.classList.add('header_content_text');
    div.style.left = -1400 + 'px';
    document.querySelector('.slider').appendChild(div);    
    
    div = slider[step];
    div.classList.add('header_content_text');
    div.style.left = offset * 1400 + 'px';
    document.querySelector('.slider').appendChild(div); 

    div = slider[step+1];
    div.classList.add('header_content_text');
    div.style.left = offset * 1400 + 1400 + 'px';
    document.querySelector('.slider').appendChild(div); 
    offset = 1;    
}

function left() {
    btnNext.onclick = null;
    let slides2 = document.querySelectorAll('.header_content_text');
    let offset2 = -1;
    for (let i = 0; i < slides2.length; i++) {
        slides2[i].style.left = offset2 * 1400 - 1400 + 'px';
        offset2++;
    }    
    setTimeout(function() {
        slides2[0].remove();
        drawL();
        btnNext = slides2[2].querySelector('.next_slide');
        btnPrev = slides2[2].querySelector('.prev_slide');
        btnPrev.addEventListener("click", right);
        btnNext.addEventListener("click", left);
    }, 1000);
}

function drawL() {
    if (step == slider.length - 1) {
        step = 1;
    } else {
        if (step == slider.length - 2) {
            step = 0;
        } else step += 2;
    }
    let div = document.createElement('div');
    div = slider[step];
    div.classList.add('header_content_text');
    div.style.left = offset * 1400 + 'px';
    document.querySelector('.slider').appendChild(div);  
    if (step == 0) {
        step = slider.length - 1;
      } else {
        step--;
      }
      offset = 1;
}
function drawR() {
    if (step == 0) {
        step = slider.length - 2;
      } else {
        if (step == 1) {
          step = slider.length - 1;
        } else {
          step -= 2;
        }
      }
      let offset = -1;
      let div = document.createElement('div');
      div = slider[step];
      div.classList.add('header_content_text');
      div.style.left = offset * 1400 + 'px';
      let items = document.querySelector('.slider');
      items.insertBefore(div, items.firstElementChild); 
      if (step == slider.length - 1) {
          step = 0;
       } else {
         step++;
       }
      offset = 1;
}
function right() {
    btnPrev.onclick = null;
    
    let slider2 = document.querySelectorAll('.header_content_text');
    let offset2 = slider2.length - 1;
   
    for (let i = slider2.length - 1; i >= 0; i--) {
      slider2[i].style.left = offset2 * 1400 + 'px';
      offset2--;
    }
    setTimeout(function() {
      slider2[slider2.length - 1].remove();
      drawR();
      btnNext = slider2[0].querySelector('.next_slide');
      btnPrev = slider2[0].querySelector('.prev_slide');
      btnNext.addEventListener("click", left);
      btnPrev.addEventListener("click", right);
    }, 1000);
}
draw();
step = 0;
btnNext.addEventListener("click", left);
btnPrev.addEventListener("click", right);