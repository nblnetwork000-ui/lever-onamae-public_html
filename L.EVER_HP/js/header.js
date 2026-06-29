const hamburger =
document.getElementById("hamburger");

const mobileMenu =
document.getElementById("mobileMenu");

const overlay =
document.getElementById("overlay");

hamburger.addEventListener("click", function(){

    hamburger.classList.toggle("active"); 
    mobileMenu.classList.toggle("active");
    overlay.classList.toggle("active");

});


overlay.addEventListener("click", function(){

    hamburger.classList.toggle("active"); 
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");

});


const currentPath = location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".nav a, .mobile-menu a").forEach(function(link) {
    const linkPath = link.getAttribute("href").split("/").pop();

    if (linkPath === currentPath) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
    }
});