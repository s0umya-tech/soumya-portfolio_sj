/* =========================
   TYPEWRITER ANIMATION
========================= */

const titles = [
    "React.js Developer",
    "Node.js Developer",
    "Full Stack Engineer",
    "Payment Integration Specialist",
    "DevOps Enthusiast"
];

let titleIndex = 0;
let charIndex = 0;

const typingElement = document.getElementById("typing-text");

function type() {

    if (!typingElement) return;

    const currentTitle = titles[titleIndex];

    if (charIndex < currentTitle.length) {

        typingElement.textContent += currentTitle.charAt(charIndex);

        charIndex++;

        setTimeout(type, 80);

    } else {

        setTimeout(erase, 1500);

    }

}

function erase() {

    const currentTitle = titles[titleIndex];

    if (charIndex > 0) {

        typingElement.textContent =
            currentTitle.substring(0, charIndex - 1);

        charIndex--;

        setTimeout(erase, 40);

    } else {

        titleIndex++;

        if (titleIndex >= titles.length) {

            titleIndex = 0;

        }

        setTimeout(type, 500);

    }

}

window.addEventListener("load", type);

/* =========================
   SCROLL ANIMATION
========================= */

const cards = document.querySelectorAll(
    ".glass-card,.stat-card"
);

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },

    {

        threshold: 0.1

    }

);

cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(50px)";

    card.style.transition =
        "all .8s ease";

    observer.observe(card);

});

/* =========================
   COUNTER ANIMATION
========================= */

const counters =
    document.querySelectorAll(".stat-card h3");

function animateCounter(counter) {

    const target =
        parseInt(counter.innerText);

    let current = 0;

    const increment =
        target / 50;

    const timer =
        setInterval(() => {

            current += increment;

            if (current >= target) {

                counter.innerText =
                    target + "%";

                clearInterval(timer);

            } else {

                counter.innerText =
                    Math.floor(current) + "%";

            }

        }, 30);

}

const statsSection =
    document.querySelector(".stats");

const statsObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    counters.forEach(counter => {

                        animateCounter(counter);

                    });

                    statsObserver.disconnect();

                }

            });

        }

    );

if (statsSection) {

    statsObserver.observe(statsSection);

}

/* =========================
   NAVBAR BACKGROUND
========================= */

window.addEventListener("scroll", () => {

    const nav =
        document.querySelector("nav");

    if (window.scrollY > 50) {

        nav.style.background =
            "rgba(5,8,22,.95)";

    } else {

        nav.style.background =
            "rgba(5,8,22,.75)";

    }

});

/* =========================
   CURSOR GLOW EFFECT
========================= */

const glow =
    document.createElement("div");

glow.style.width = "300px";

glow.style.height = "300px";

glow.style.position = "fixed";

glow.style.borderRadius = "50%";

glow.style.pointerEvents = "none";

glow.style.background =
    "radial-gradient(circle,rgba(0,229,255,.12),transparent)";

glow.style.transform =
    "translate(-50%,-50%)";

glow.style.zIndex = "-1";

document.body.appendChild(glow);

document.addEventListener("mousemove", e => {

    glow.style.left =
        e.clientX + "px";

    glow.style.top =
        e.clientY + "px";

});
