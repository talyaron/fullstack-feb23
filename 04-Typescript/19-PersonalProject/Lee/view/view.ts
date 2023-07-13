const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav__links");
const links = document.querySelector(".nav__links li");

hamburger?.addEventListener('click', ()=>{
    navLinks?.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
        


hamburger.classList.toggle("toggle");

});

