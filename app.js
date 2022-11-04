const menuBtn = document.querySelector('.dropdown');
const topNav = document.querySelector('.jsnav');


menuBtn.addEventListener('click',()=>{
topNav.classList.add('left');
topNav.classList.toggle('display');
});