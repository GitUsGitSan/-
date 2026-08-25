/* =====================================================
   NAVBAR
===================================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", () => {

    navMenu.classList.toggle("open");

});


/* Close mobile menu after clicking */

const links = document.querySelectorAll("nav a");

links.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

    });

});


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });


    links.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* =====================================================
   COUNTERS
===================================================== */

const counters =
    document.querySelectorAll(".counter");

let countersStarted = false;


function startCounters() {

    if (countersStarted) return;

    countersStarted = true;


    counters.forEach(counter => {

        const target =
            Number(
                counter.getAttribute("data-target")
            );

        let current = 0;

        const duration = 1600;

        const stepTime =
            Math.max(
                10,
                duration / target
            );


        const timer = setInterval(() => {

            current += Math.ceil(
                target / 60
            );

            if (current >= target) {

                current = target;

                clearInterval(timer);

            }

            counter.textContent =
                current.toLocaleString("en-US") + "+";

        }, stepTime);

    });

}


/* =====================================================
   COUNTER OBSERVER
===================================================== */

const statsSection =
    document.querySelector(".stats");

const statsObserver =
    new IntersectionObserver(
        entries => {

            if (entries[0].isIntersecting) {

                startCounters();

                statsObserver.disconnect();

            }

        },
        {
            threshold: .3
        }
    );

statsObserver.observe(statsSection);


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".section-heading, .about-card, .project-card, .timeline-item, .cta"
    );


revealElements.forEach(element => {

    element.classList.add("reveal");

});


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: .12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =====================================================
   HERO LOGO FLOATING
===================================================== */

const logoCards =
    document.querySelectorAll(".logo-card");


logoCards.forEach((card, index) => {

    card.animate(
        [
            {
                transform:
                    index === 0
                        ? "translateY(0) rotate(-5deg)"
                        : "translateY(0) rotate(5deg)"
            },
            {
                transform:
                    index === 0
                        ? "translateY(-12px) rotate(-5deg)"
                        : "translateY(-12px) rotate(5deg)"
            },
            {
                transform:
                    index === 0
                        ? "translateY(0) rotate(-5deg)"
                        : "translateY(0) rotate(5deg)"
            }
        ],
        {
            duration:
                3500 + index * 500,

            iterations: Infinity,

            easing: "ease-in-out"
        }
    );

});


/* =====================================================
   BUTTON RIPPLE
===================================================== */

const buttons =
    document.querySelectorAll(".primary-button");


buttons.forEach(button => {

    button.addEventListener("click", function (event) {

        const ripple =
            document.createElement("span");

        const rect =
            this.getBoundingClientRect();

        const size =
            Math.max(
                rect.width,
                rect.height
            );

        ripple.style.position = "absolute";

        ripple.style.width = size + "px";

        ripple.style.height = size + "px";

        ripple.style.left =
            event.clientX -
            rect.left -
            size / 2 +
            "px";

        ripple.style.top =
            event.clientY -
            rect.top -
            size / 2 +
            "px";

        ripple.style.borderRadius = "50%";

        ripple.style.background =
            "rgba(255,255,255,.35)";

        ripple.style.transform =
            "scale(0)";

        ripple.style.pointerEvents =
            "none";

        ripple.style.animation =
            "ripple .6s linear";

        this.style.position = "relative";

        this.style.overflow = "hidden";

        this.appendChild(ripple);


        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});


/* =====================================================
   RIPPLE CSS
===================================================== */

const rippleStyle =
    document.createElement("style");

rippleStyle.textContent = `

@keyframes ripple {

    to {

        transform: scale(2);

        opacity: 0;

    }

}

`;

document.head.appendChild(rippleStyle);


/* =====================================================
   CONSOLE
===================================================== */

console.log(
    "ԳիտՈւս | ԳիտՍան — website loaded successfully."
);