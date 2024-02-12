let scrollcontainer = document.querySelector(".slider-wrapper");
let backbtn = document.getElementById("prev-slide");
let nextbtn = document.getElementById("next-slide");

nextbtn.addEventListener("click", () => {
    scrollcontainer.style.scrollBehavior = "smooth";
    scrollcontainer.scrollLeft += 720;
});
backbtn.addEventListener("click", () => {
     scrollcontainer.style.scrollBehavior = "smooth";
    scrollcontainer.scrollLeft -= 720;
});