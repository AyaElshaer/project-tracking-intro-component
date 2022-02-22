const hamburger = document.getElementById('hamburger');
const closebtn = document.getElementById('close');
const ul = document.getElementsByTagName('ul')[0];
const bar = document.getElementById('bar');



bar.addEventListener('click' , function(){
    ul.classList.toggle("show");
    closebtn.classList.toggle("show");
    hamburger.classList.toggle("hidden");
})
