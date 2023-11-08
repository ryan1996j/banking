document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-links li a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {

            navLinks.forEach(function (link) {
                link.classList.remove("active");
            });


            link.classList.add("active");


            event.preventDefault();

        });
    });
});

const navLink = document.querySelector(".nav-links");
const hanburger = document.querySelector(".hamburger");
const closeBar = document.querySelector(".close");
const openBar = document.querySelector(".open");
console.log(navLink, hanburger, closeBar);
hanburger.addEventListener("click", (e) => {
    e.preventDefault();
    navLink.classList.toggle("active");
    closeBar.classList.toggle("active");
    openBar.classList.toggle("active")

})

