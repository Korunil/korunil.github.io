/* ==========================================================
   AK LAB Portfolio
   script.js
========================================================== */


/* ==========================================================
   Navbar Shadow on Scroll
========================================================== */

const navbar = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 40){

        navbar.style.boxShadow = "0 8px 30px rgba(15,23,42,.08)";

    }

    else{

        navbar.style.boxShadow = "none";

    }

});


/* ==========================================================
   Reveal Animation
========================================================== */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});


document.querySelectorAll(".section").forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});


/* ==========================================================
   Animated Statistics
========================================================== */

const counters = document.querySelectorAll(".stat-card h2");

let started = false;

window.addEventListener("scroll", ()=>{

    const stats = document.querySelector(".stats");

    if(!stats) return;

    const trigger = stats.getBoundingClientRect().top;

    if(trigger < window.innerHeight && !started){

        started = true;

        counters.forEach(counter=>{

            const value = counter.innerText;

            if(value.includes("+")){

                const number = parseInt(value);

                animateCounter(counter,number,value);

            }

        });

    }

});


function animateCounter(element,target,label){

    let count = 0;

    const speed = target/60;

    const update=()=>{

        count += speed;

        if(count<target){

            element.innerText=Math.floor(count)+"+";

            requestAnimationFrame(update);

        }

        else{

            element.innerText=label;

        }

    }

    update();

}


/* ==========================================================
   Smooth Navigation
========================================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});


/* ==========================================================
   Active Navigation Highlight
========================================================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop-120;

        if(window.pageYOffset>=sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});


/* ==========================================================
   Hero Typing Effect
========================================================== */

const titles = [

"Enterprise AI",

"Generative AI",

"Agentic AI",

"Industrial Intelligence"

];

const heroTitle = document.querySelector(".hero h3");

let titleIndex = 0;

setInterval(()=>{

    titleIndex++;

    if(titleIndex>=titles.length){

        titleIndex=0;

    }

    heroTitle.style.opacity=0;

    setTimeout(()=>{

        heroTitle.innerText=titles[titleIndex];

        heroTitle.style.opacity=1;

    },300);

},3500);


/* ==========================================================
   Floating Hero Animation
========================================================== */

const hero = document.querySelector(".hero-content");

window.addEventListener("mousemove",(e)=>{

    const x = (window.innerWidth/2-e.clientX)/60;

    const y = (window.innerHeight/2-e.clientY)/60;

    hero.style.transform=`translate(${x}px,${y}px)`;

});


/* ==========================================================
   Project Hover Tilt
========================================================== */

document.querySelectorAll(".project-card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect = card.getBoundingClientRect();

const x = e.clientX-rect.left;

const y = e.clientY-rect.top;

const rotateY=(x-rect.width/2)/20;

const rotateX=(rect.height/2-y)/20;

card.style.transform=

`perspective(800px)

rotateX(${rotateX}deg)

rotateY(${rotateY}deg)

translateY(-8px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});


/* ==========================================================
   Footer Year
========================================================== */

const footer = document.querySelector("footer");

const year = new Date().getFullYear();

footer.innerHTML +=

`<br><br><small>© ${year} AK LAB</small>`;
