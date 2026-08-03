/* ===========================================================
   AK Portfolio v1.0
   Author: Anil Kumar Korupoju
   =========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       Fade-in Sections
    ========================================== */

    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        },

        {
            threshold: 0.15
        }

    );

    sections.forEach(section => {

        section.classList.add("hidden");

        observer.observe(section);

    });


    /* ==========================================
       Navbar Active Section
    ========================================== */

    const navLinks = document.querySelectorAll(".navbar a");

    const pageSections = document.querySelectorAll("section[id]");

    function activateMenu() {

        let current = "";

        pageSections.forEach(section => {

            const top = window.scrollY;
            const offset = section.offsetTop - 120;
            const height = section.offsetHeight;

            if (top >= offset && top < offset + height) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll", activateMenu);

    activateMenu();


    /* ==========================================
       Typing Animation
    ========================================== */

    const subtitle = document.querySelector(".hero h2");

    if (subtitle) {

        const originalText = subtitle.textContent;

        subtitle.textContent = "";

        let index = 0;

        function typeWriter() {

            if (index < originalText.length) {

                subtitle.textContent += originalText.charAt(index);

                index++;

                setTimeout(typeWriter, 45);

            }

        }

        typeWriter();

    }


    /* ==========================================
       Project Card Hover Lift
    ========================================== */

    const cards = document.querySelectorAll(".project-card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-10px)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });


    /* ==========================================
       Smooth Scroll Offset
    ========================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            window.scrollTo({

                top: target.offsetTop - 70,

                behavior: "smooth"

            });

        });

    });


    /* ==========================================
       Footer Year
    ========================================== */

    const footer = document.querySelector(".footer-text");

    if (footer) {

        footer.innerHTML +=
            "<br><br>© " +
            new Date().getFullYear() +
            " Anil Kumar Korupoju";

    }

});