const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");

if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", function(){
        const isOpen = hamburger.classList.toggle("active");
        mobileMenu.classList.toggle("active", isOpen);
        if (overlay) overlay.classList.toggle("active", isOpen);
        hamburger.setAttribute("aria-expanded", String(isOpen));
    });
}

if (overlay) {
    overlay.addEventListener("click", function(){
        hamburger.classList.remove("active");
        mobileMenu.classList.remove("active");
        overlay.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
    });
}

const currentPath = location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".nav a, .mobile-menu a").forEach(function(link) {
    const linkPath = link.getAttribute("href").split("/").pop();

    if (linkPath === currentPath) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
    }
});
