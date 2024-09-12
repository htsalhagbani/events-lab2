let btn1=document.getElementById("one");
let btn2=document.getElementById("two");
let btn3=document.getElementById("three");
let btn4=document.getElementById("four");
let btn5=document.getElementById("five");
let btn6=document.getElementById("six");
let btn7=document.getElementById("seven");
let btn8=document.getElementById("eight");
let btn9=document.getElementById("nine");




let imgc =document.getElementById('screen');
let img1 = imgc.querySelector('img');


btn1.addEventListener('click',()=>{
    img1.src="https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/blue-planet.jpg";
    imgc.appendChild(img1);
})

btn2.addEventListener('click',()=>{
    img1.src="https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/deadpool.jpg";
    imgc.appendChild(img1);
})

btn3.addEventListener('click',()=>{
    img1.src="https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/gravity.jpg";
    imgc.appendChild(img1);
})

btn4.addEventListener('click',()=>{
    img1.src="https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/good-will-hunting.jpg";
    imgc.appendChild(img1);
})

btn5.addEventListener('click',()=>{
    img1.src="https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/cnn.jpg";
    imgc.appendChild(img1);
})

btn6.addEventListener('click',()=>{
    img1.src="https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/koyaanisqatsi.jpg";
    imgc.appendChild(img1);
})

btn7.addEventListener('click',()=>{
    img1.src="https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/parts-unknown.jpg";
    imgc.appendChild(img1);
})

btn8.addEventListener('click',()=>{
    img1.src="https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/star-wars-solo.jpeg";
    imgc.appendChild(img1);
})

btn9.addEventListener('click',()=>{
    img1.src="https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/stranger-things.jpg";
    imgc.appendChild(img1);
})