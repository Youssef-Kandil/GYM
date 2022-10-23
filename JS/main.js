// Catch Elements
let slider_text = document.querySelector('.slid .text h3');
let slider_img = document.querySelector('.slid img');
let hover = document.querySelector('.hover');
// SLIDER -
let current_i = 0; 
let img_array = ["images/slider1.png","images/slider2c.png","images/slider3c.png"];
let text_array = ["coach ","md.care","diet"]

let slider_chang = setInterval(() => {
    current_i++;
    if(current_i == img_array.length){
        current_i = 0
    }
    slider_img.src = img_array[current_i];
    slider_text.innerHTML=text_array[current_i]
}, 10000);