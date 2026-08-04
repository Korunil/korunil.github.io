/* ==========================================================
   AK LAB
   Particle Engine
========================================================== */

const canvas = document.createElement("canvas");

canvas.id = "particles";

document.body.prepend(canvas);

const ctx = canvas.getContext("2d");

let particles = [];

function resizeCanvas() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

window.addEventListener("resize", resizeCanvas);

resizeCanvas();

/* ==========================================================
   Particle
========================================================== */

class Particle {

    constructor() {

        this.reset();

    }

    reset() {

        this.x = Math.random() * canvas.width;

        this.y = Math.random() * canvas.height;

        this.radius = Math.random() * 3 + 1;

        this.speedX = (Math.random() - 0.5) * 0.35;

        this.speedY = (Math.random() - 0.5) * 0.35;

        this.opacity = Math.random() * 0.35 + 0.15;

    }

    update() {

        this.x += this.speedX;
        this.y += this.speedY;

        if (
            this.x < 0 ||
            this.x > canvas.width ||
            this.y < 0 ||
            this.y > canvas.height
        ) {

            this.reset();

        }

    }

    draw() {

        ctx.beginPath();

        ctx.arc(

            this.x,
            this.y,
            this.radius,
            0,
            Math.PI * 2

        );

        ctx.fillStyle = `rgba(0,194,255,${this.opacity})`;

        ctx.fill();

    }

}

/* ==========================================================
   Generate
========================================================== */

const particleCount = 125;

for (let i = 0; i < particleCount; i++) {

    particles.push(new Particle());

}

/* ==========================================================
   Connections
========================================================== */

function connectParticles() {

    for (let a = 0; a < particles.length; a++) {

        for (let b = a + 1; b < particles.length; b++) {

            const dx = particles[a].x - particles[b].x;

            const dy = particles[a].y - particles[b].y;

            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 130) {

                ctx.beginPath();

                ctx.strokeStyle =

                    `rgba(0,194,255,${
                        (130 - distance) / 130 * 0.08
                    })`;

                ctx.lineWidth = 1.25;

                ctx.moveTo(

                    particles[a].x,
                    particles[a].y

                );

                ctx.lineTo(

                    particles[b].x,
                    particles[b].y

                );

                ctx.stroke();

            }

        }

    }

}

/* ==========================================================
   Mouse Interaction
========================================================== */

let mouse = {

    x: null,
    y: null

};

window.addEventListener("mousemove", e => {

    mouse.x = e.clientX;
    mouse.y = e.clientY;

});

/* ==========================================================
   Animation
========================================================== */

function animate() {

    ctx.clearRect(

        0,
        0,
        canvas.width,
        canvas.height

    );

    particles.forEach(p => {

        p.update();
        p.draw();

        if (mouse.x) {

            const dx = p.x - mouse.x;

            const dy = p.y - mouse.y;

            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 150) {

                ctx.beginPath();

                ctx.strokeStyle =

                    "rgba(255,255,255,0.10)";

                ctx.moveTo(

                    p.x,
                    p.y

                );

                ctx.lineTo(

                    mouse.x,
                    mouse.y

                );

                ctx.stroke();

            }

        }

    });

    connectParticles();

    requestAnimationFrame(animate);

}

animate();
