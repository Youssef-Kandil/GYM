let minu =document.querySelector('.minu ');
let icon =document.querySelector('.minu i');
let main = document.querySelector('.VD main');

minu.addEventListener('click',()=>{
    if(icon.classList[2] == 'to-left'){
        icon.classList.remove('to-left');
        icon.classList.add('to-up');
        main.style.opacity='1'
        main.style.left='1px'
        main.style.top='100px'
    }else{
        icon.classList.remove('to-up');
        icon.classList.add('to-left');
        main.style.top='-1200px'
        main.style.left='1px'
        main.style.opacity='1'
        setTimeout(() => {              
            main.style.top='100px'
            main.style.left='-1000px'
        }, 1500);
        
    };
    main.classList.add('.visible-main');
});

// Video logic
let video = document.querySelector('.videos .view #screen');
let btn = document.querySelector('.videos .view span');
video.src = "videos/production ID_4812848.mp4";
btn.addEventListener('click',()=>{

    video.play()
})
// console.log(video);