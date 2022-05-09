if (sessionStorage.getItem('slider_clnt') == null) {
    sessionStorage.setItem('slider_clnt', 0);
}


// slide 1
let slide1_div = document.createElement('div');
slide1_div.classList.add('slider_clints');

const clint1_img = document.createElement('img');
clint1_img.src = 'images/clints/user.gif';
clint1_img.classList.add('clints_user_img');

const p1 = document.createElement('p')
 p1.classList.add('clints_user_text');

 p1.textContent = 'arm srour 1'; 


//  slide 2
let slide2_div = document.createElement('div');
slide2_div.classList.add('slider_clints');

 const clint2_img = document.createElement('img');
clint2_img.src = 'images/clints/user.gif';
clint2_img.classList.add('clints_user_img');

const p2 = document.createElement('p')
 p2.classList.add('clints_user_text');

 p2.textContent = 'arm srour 2'; 


//  slide 3
let slide3_div = document.createElement('div');
slide3_div.classList.add('slider_clints');

 const clint3_img = document.createElement('img');
 clint3_img.src = 'images/clints/user.gif';
 clint3_img.classList.add('clints_user_img'); 

 const p3 = document.createElement('p')
  p3.classList.add('clints_user_text');
 
  p3.textContent = 'arm srour 3'; 

const main_container = document.querySelector('.clints_user');

main_container.appendChild(slide1_div);
slide1_div.appendChild(clint1_img);
slide1_div.appendChild(p1);


main_container.appendChild(slide2_div);
slide2_div.appendChild(clint2_img);
slide2_div.appendChild(p2);



main_container.appendChild(slide3_div);
slide3_div.appendChild(clint3_img);
slide3_div.appendChild(p3);



// scroll bar

let scroll_bar_div = document.createElement('div');
scroll_bar_div.classList.add('scrollbar_clints');

const i1 = document.createElement('i');
i1.classList.add('icon1');
i1.classList.add('fa-solid');
i1.classList.add('fa-square-full');

const i2 = document.createElement('i');
i2.classList.add('icon2');
i2.classList.add('fa-solid');
i2.classList.add('fa-square-full');

const i3 = document.createElement('i');
i3.classList.add('icon1');
i3.classList.add('fa-solid');
i3.classList.add('fa-square-full');


document.querySelector('.happy_clints').appendChild(i1);
document.querySelector('.happy_clints').appendChild(i2);
document.querySelector('.happy_clints').appendChild(i3);



let sliders = [];

let piece = document.querySelectorAll('.slider_clints');
const pieceLength = piece.length;
for (let i = 0; i < pieceLength; i++) {
  sliders[i] = piece[i];
  piece[i].remove();
}


let slider_step = Number(sessionStorage.getItem('slider_clnt')); 
let slider_offset = 0;


if (slider_step == 0) {
    i1.style.color =  "rgb(255, 0, 54)";
    i2.style.color =" rgb(255, 255, 255)";
    i3.style.color = "rgb(255, 255, 255)";
}
else if (slider_step == 1) {
    i2.style.color =  "rgb(255, 0, 54)";
    i1.style.color =" rgb(255, 255, 255)";
    i3.style.color = "rgb(255, 255, 255)";
}
else if (slider_step == 2)
{
    i3.style.color =  "rgb(255, 0, 54)";
    i2.style.color =" rgb(255, 255, 255)";
    i1.style.color = "rgb(255, 255, 255)";
}


function display() {
    let slide_div = document.createElement('div'); 

    slide_div = sliders[slider_step];
    slide_div.classList.add('slider_clints');
    slide_div.style.left = slider_offset * 150 + 'px';
    document.querySelector('.clints_user').appendChild(slide_div); 

    if (slider_step == pieceLength-1){
        slide_div = sliders[0];
        slide_div.classList.add('slider_clints');
        slide_div.style.left = slider_offset * 150 + 150 + 'px';
        document.querySelector('.clints_user').appendChild(slide_div);
    }
    else { 
    slide_div1 = sliders[slider_step+1];
    slide_div1.classList.add('slider_clints');
    slide_div1.style.left = slider_offset * 150 + 150 + 'px';
    document.querySelector('.clints_user').appendChild(slide_div1);
    } 
    slider_offset = 1;
    


}

display();


function draw_left_slide() {
    if (slider_step == sliders.length - 1) {
        slider_step = 1;
        i1.style.color =  "rgb(255, 0, 54)";
        i2.style.color = "rgb(255, 255, 255)";
        i3.style.color = "rgb(255, 255, 255)";
    } else {
        if (slider_step == sliders.length - 2) {
            slider_step = 0;
            i3.style.color =  "rgb(255, 0, 54)";
            i1.style.color = "rgb(255, 255, 255)";
            i2.style.color = "rgb(255, 255, 255)";
        } else {slider_step += 2;
            i2.style.color =  "rgb(255, 0, 54)";
            i3.style.color = "rgb(255, 255, 255)";
            i1.style.color = "rgb(255, 255, 255)";}
    }
    let slide_div = document.createElement('div');
    slide_div = sliders[slider_step];
    slide_div.classList.add('slider_clints');
    slide_div.style.left = slider_offset * 150 + 'px';
    document.querySelector('.clints_user').appendChild(slide_div);  
    if (slider_step == 0) {
        slider_step = sliders.length - 1;
      } else {
        slider_step--;
      }
      slider_offset = 1;
      sessionStorage.setItem('slider_clnt', slider_step);

}


let slider_timer = setTimeout(function left_slide() {
    
    let slide2 = document.querySelectorAll('.slider_clints');
    let slide_offset2 = -1;
    for (let k = 0; k < slide2.length; k++) {
        slide2[k].style.left = slide_offset2 * 150  + 'px';
        
        slide_offset2++;
    }    
    setTimeout(function() {
        slide2[0].remove();
        draw_left_slide();
    }, 1000);
    slider_timer = setTimeout(left_slide, 7000); 
  }, 7000);

  