/* =====================================================
   CUSTOM CURSOR
===================================================== */

const cursor = document.querySelector(".cursor");
const ring = document.querySelector(".cursor-ring");

document.addEventListener("mousemove", function(e){

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    ring.style.left = e.clientX + "px";
    ring.style.top = e.clientY + "px";

});


document.querySelectorAll("a, button, .project, .skill")
.forEach(element => {

    element.addEventListener("mouseenter", () => {
        cursor.classList.add("active");
        ring.classList.add("active");
    });

    element.addEventListener("mouseleave", () => {
        cursor.classList.remove("active");
        ring.classList.remove("active");
    });

});


/* =====================================================
   SCROLL REVEAL
===================================================== */

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold:.12
    }

);


document.querySelectorAll(".reveal")
.forEach(element => {

    observer.observe(element);

});


/* =====================================================
   PROJECT PARALLAX
===================================================== */

document.querySelectorAll(".project")
.forEach(project => {

    project.addEventListener("mousemove", function(e){

        const rect = project.getBoundingClientRect();

        const x =
            (e.clientX - rect.left) / rect.width - .5;

        const y =
            (e.clientY - rect.top) / rect.height - .5;

        project.style.transform =
            `translate(${x * 5}px,${y * 5}px)`;

    });

    project.addEventListener("mouseleave", function(){

        project.style.transform = "translate(0,0)";

    });

});


/* =====================================================
   THEME BUTTON
===================================================== */

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function(){

    document.body.classList.toggle("light");

    const icon = themeBtn.querySelector("i");

    if(document.body.classList.contains("light")){

        icon.className = "fa-solid fa-sun";

    }else{

        icon.className = "fa-solid fa-moon";

    }

});