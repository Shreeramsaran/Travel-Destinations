console.log("Hello World");
burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.left-menu');
rightNav = document.querySelector('.right-menu');

burger = document.addEventListener('click', ()=>{
   rightNav.classList.toggle('res-1');
   navList.classList.toggle('res-1');
   navbar.classList.toggle('res');
})
