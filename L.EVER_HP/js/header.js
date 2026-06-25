const hamburger =
document.getElementById("hamburger");

const mobileMenu =
document.getElementById("mobileMenu");

const overlay =
document.getElementById("overlay");

hamburger.addEventListener("click", function(){

    mobileMenu.classList.toggle("active");
    overlay.classList.toggle("active");

});


overlay.addEventListener("click", function(){
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");

});