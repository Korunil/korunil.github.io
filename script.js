/* ==========================================================
   ANIL KUMAR KORUPOJU
   Portfolio Website
   script.js
========================================================== */


/* ===========================================
   Smooth Fade-in Animations
=========================================== */

const observer = new IntersectionObserver(

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

document.querySelectorAll("section,.card,.metric").forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});


/* ===========================================
   Typing Effect
=========================================== */

const title=document.querySelector(".hero h2");

if(title){

const text=title.innerText;

title.innerText="";

let i=0;

function type(){

if(i<text.length){

title.innerHTML+=text.charAt(i);

i++;

setTimeout(type,40);

}

}

type();

}


/* ===========================================
   Navbar Active Section
=========================================== */

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

if(scrollY>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


/* ===========================================
   Card Tilt Effect
=========================================== */

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateX=(y-rect.height/2)/20;

const rotateY=(rect.width/2-x)/20;

card.style.transform=

`rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="";

});

});


/* ===========================================
   Counter Animation
=========================================== */

document.querySelectorAll(".metric h3").forEach(counter=>{

const observerCounter=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const element=entry.target;

const target=element.innerText;

const number=parseInt(target.replace(/[^\d]/g,""));

if(isNaN(number)) return;

const suffix=target.replace(number,"");

let count=0;

const step=Math.ceil(number/60);

const interval=setInterval(()=>{

count+=step;

if(count>=number){

count=number;

clearInterval(interval);

}

element.innerText=count+suffix;

},25);

observerCounter.unobserve(element);

}

});

});

observerCounter.observe(counter);

});


/* ===========================================
   Image Hover Zoom
=========================================== */

document.querySelectorAll(".card img").forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transition=".4s";

img.style.transform="scale(1.05)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});


/* ===========================================
   Scroll To Top Button
=========================================== */

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topButton";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>600){

topBtn.style.opacity="1";

topBtn.style.visibility="visible";

}else{

topBtn.style.opacity="0";

topBtn.style.visibility="hidden";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


/* ===========================================
   Footer Year
=========================================== */

const year=document.getElementById("year");

if(year){

year.innerText=new Date().getFullYear();

}


/* ===========================================
   Console Easter Egg
=========================================== */

console.log("%cWelcome to AK Portfolio",

"color:#60a5fa;font-size:20px;font-weight:bold");

console.log("Built with ❤️ by Anil Kumar Korupoju");
