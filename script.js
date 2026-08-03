/* ==========================================
   AK Lab Portfolio
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* -------------------------------
       Fade In Sections
    -------------------------------- */

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{
        threshold:0.15
    });

    document.querySelectorAll("section").forEach(section=>{

        section.classList.add("fade");

        observer.observe(section);

    });

    /* -------------------------------
       Active Navigation Highlight
    -------------------------------- */

    const navLinks=document.querySelectorAll("nav a");

    const sections=document.querySelectorAll("section");

    window.addEventListener("scroll",()=>{

        let current="";

        sections.forEach(section=>{

            const top=section.offsetTop-120;

            if(pageYOffset>=top){

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

    /* -------------------------------
       Hero Image Tilt
    -------------------------------- */

    const profile=document.querySelector(".hero-right img");

    if(profile){

        profile.addEventListener("mousemove",(e)=>{

            const rect=profile.getBoundingClientRect();

            const x=e.clientX-rect.left;

            const y=e.clientY-rect.top;

            const rotateY=(x-rect.width/2)/18;

            const rotateX=(rect.height/2-y)/18;

            profile.style.transform=

            `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;

        });

        profile.addEventListener("mouseleave",()=>{

            profile.style.transform="rotateX(0deg) rotateY(0deg)";

        });

    }

    /* -------------------------------
       Project Card Hover Glow
    -------------------------------- */

    const cards=document.querySelectorAll(".project-card");

    cards.forEach(card=>{

        card.addEventListener("mousemove",(e)=>{

            const rect=card.getBoundingClientRect();

            const x=e.clientX-rect.left;

            const y=e.clientY-rect.top;

            card.style.background=

            `radial-gradient(circle at ${x}px ${y}px,
            rgba(0,194,255,.22),
            #12253d 55%)`;

        });

        card.addEventListener("mouseleave",()=>{

            card.style.background="#12253d";

        });

    });

});
