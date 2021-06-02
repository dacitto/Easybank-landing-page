let hamburger = document.getElementById('hamburger');
let mobileMenu = document.getElementById('menu-mobile');
let isClosed = true ;
hamburger.addEventListener('click',(e)=>{
    if (isClosed){
        mobileMenu.classList.toggle('fade-out');
        hamburger.setAttribute("src", "images/icon-close.svg");
        isClosed = !isClosed;
    }else{
        mobileMenu.classList.toggle('fade-out');
        hamburger.setAttribute("src", "images/icon-hamburger.svg");
        isClosed = !isClosed;
    }

});