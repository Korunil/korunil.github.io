/* ============================================================
   AK LAB
   Main Controller
============================================================ */

/* ------------------------------------------------------------
   Scroll Reveal
------------------------------------------------------------ */

const revealElements = document.querySelectorAll(
"section, .project-card, .stat-card"
);

const revealObserver = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:0.15

}

);

revealElements.forEach(element=>{

element.classList.add("fade-up");

revealObserver.observe(element);

});

/* ------------------------------------------------------------
   Animated Counters
------------------------------------------------------------ */

function animateCounter(counter){

const target = Number(counter.dataset.target);

const hasPlus = counter.dataset.plus === "true";

let value = 0;

const speed = 60;

const step = Math.ceil(target / speed);

const update = ()=>{

value += step;

if(value >= target){

counter.innerText = hasPlus ? target + "+" : target;

return;

}

counter.innerText = value;

requestAnimationFrame(update);

};

update();

}

const counterObserver = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

animateCounter(entry.target);

counterObserver.unobserve(entry.target);

}

});

},

{

threshold:.6

}

);

counters.forEach(counter=>{

counterObserver.observe(counter);

});

/* ------------------------------------------------------------
   Active Navigation
------------------------------------------------------------ */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current = "";

sections.forEach(section=>{

const top = section.offsetTop - 120;

if(pageYOffset >= top){

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

/* ------------------------------------------------------------
   Navbar Shadow
------------------------------------------------------------ */

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.style.boxShadow="0 12px 40px rgba(0,0,0,.35)";

}

else{

header.style.boxShadow="none";

}

});

/* ------------------------------------------------------------
   Smooth Scroll
------------------------------------------------------------ */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",(e)=>{

e.preventDefault();

const target=document.querySelector(

anchor.getAttribute("href")

);

if(target){

target.scrollIntoView({

behavior:"smooth",

block:"start"

});

}

});

});

/* ------------------------------------------------------------
   Project Card Hover Tilt
------------------------------------------------------------ */

const cards=document.querySelectorAll(".project-card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const centerX=rect.width/2;

const centerY=rect.height/2;

const rotateX=((y-centerY)/18);

const rotateY=((centerX-x)/18);

card.style.transform=

`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="";

});

});

/* ------------------------------------------------------------
   Dynamic Year
------------------------------------------------------------ */

const footer=document.querySelector("footer p");

if(footer){

footer.innerHTML=

footer.innerHTML.replace(

"2026",

new Date().getFullYear()

);

}

/* ------------------------------------------------------------
   Typewriter Effect
------------------------------------------------------------ */

const heroTag=document.querySelector(".hero-tag");

if(heroTag){

const text=heroTag.textContent.trim();

heroTag.textContent="";

let i=0;

function type(){

if(i<text.length){

heroTag.textContent+=text.charAt(i);

i++;

setTimeout(type,35);

}

}

setTimeout(type,500);

}

/* ------------------------------------------------------------
   Scroll Progress Bar
------------------------------------------------------------ */

const progress=document.createElement("div");

progress.id="progressBar";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const scroll=

document.documentElement.scrollTop;

const height=

document.documentElement.scrollHeight-

document.documentElement.clientHeight;

progress.style.width=(scroll/height)*100+"%";

});

/* ------------------------------------------------------------
   Easter Egg
------------------------------------------------------------ */

console.log(

"%cAK LAB",

"font-size:32px;color:#00c2ff;font-weight:bold"

);

console.log(

"Engineering Intelligence meets Artificial Intelligence."

);
