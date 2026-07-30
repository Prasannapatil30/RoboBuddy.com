/*==================================================
        TEAM TECHNO HERITAGE
        RAMESH WEBSITE
        SCRIPT.JS
==================================================*/

"use strict";

/*==================================================
                LOADER
==================================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (!loader) return;

    loader.style.transition = "opacity 0.8s ease";

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

    }, 800);

});

/*==================================================
            STICKY HEADER
==================================================*/

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 50) {

        header.style.background = "rgba(11,45,92,0.96)";
        header.style.backdropFilter = "blur(12px)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.15)";

    }

    else {

        header.style.background = "rgba(255,255,255,.96)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";

    }

});

/*==================================================
            MOBILE MENU
==================================================*/

const menuButton = document.querySelector(".menu-btn");
const navigation = document.querySelector(".nav-links");

if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("show");

    });

}

/*==================================================
            SMOOTH SCROLL
==================================================*/

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

        if (navigation) {

            navigation.classList.remove("show");

        }

    });

});

/*==================================================
            ACTIVE NAVIGATION
==================================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/*==================================================
            SCROLL REVEAL ANIMATION
==================================================*/

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach((element) => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 120) {

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/*==================================================
            ANIMATED COUNTERS
==================================================*/

const counters = document.querySelectorAll("[data-target]");

let counterStarted = false;

function startCounters() {

    if (counterStarted) return;

    counters.forEach(counter => {

        const target = Number(counter.dataset.target);

        let count = 0;

        const speed = Math.max(15, Math.floor(2000 / target));

        function updateCounter() {

            if (count < target) {

                count++;

                counter.innerText = count;

                setTimeout(updateCounter, speed);

            }

            else {

                counter.innerText = target;

            }

        }

        updateCounter();

    });

    counterStarted = true;

}

const heroStats = document.querySelector(".hero-stats");

if (heroStats) {

    const counterObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                startCounters();

            }

        });

    });

    counterObserver.observe(heroStats);

}

/*==================================================
            ROBOT FLOAT EFFECT
==================================================*/

const robotImage = document.querySelector(".hero-right img");

if (robotImage) {

    document.addEventListener("mousemove", (event) => {

        const moveX = (window.innerWidth / 2 - event.clientX) / 45;

        const moveY = (window.innerHeight / 2 - event.clientY) / 45;

        robotImage.style.transform =
        `translate(${moveX}px, ${moveY}px)`;

    });

}

/*==================================================
            GALLERY IMAGE EFFECT
==================================================*/

const galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach((image) => {

    image.addEventListener("mouseenter", () => {

        image.style.transform = "scale(1.06)";

    });

    image.addEventListener("mouseleave", () => {

        image.style.transform = "scale(1)";

    });

});

/*==================================================
            SCROLL TO TOP BUTTON
==================================================*/

const scrollButton = document.createElement("div");

scrollButton.className = "scroll-top";

scrollButton.innerHTML = '<i class="fas fa-arrow-up"></i>';

document.body.appendChild(scrollButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollButton.style.display = "flex";

    }

    else {

        scrollButton.style.display = "none";

    }

});

scrollButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/*==================================================
            HEADER SHADOW EFFECT
==================================================*/

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 80) {

        header.style.boxShadow = "0 12px 30px rgba(0,0,0,.15)";

    }

    else {

        header.style.boxShadow = "0 5px 15px rgba(0,0,0,.08)";

    }

});

/*==================================================
            BUTTON RIPPLE EFFECT
==================================================*/

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const diameter = Math.max(this.clientWidth, this.clientHeight);

        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;

        circle.style.left = `${e.clientX - this.offsetLeft - radius}px`;

        circle.style.top = `${e.clientY - this.offsetTop - radius}px`;

        circle.classList.add("ripple");

        const ripple = this.querySelector(".ripple");

        if (ripple) {

            ripple.remove();

        }

        this.appendChild(circle);

    });

});

/*==================================================
            IMAGE LOADING EFFECT
==================================================*/

const images = document.querySelectorAll("img");

images.forEach(image => {

    image.addEventListener("load", () => {

        image.style.opacity = "1";

        image.style.transform = "scale(1)";

    });

});

/*==================================================
            PERFORMANCE
==================================================*/

window.addEventListener("resize", () => {

    revealOnScroll();

});

/*==================================================
            DISABLE RIGHT CLICK
            (Prototype Only)
==================================================*/

// document.addEventListener("contextmenu", (e) => {
//     e.preventDefault();
// });

/*==================================================
            CONSOLE BRANDING
==================================================*/

console.clear();

console.log(
"%cTEAM TECHNO HERITAGE",
"color:#D4AF37;font-size:26px;font-weight:bold;"
);

console.log(
"%cRAMESH - THE HISTORICAL GUIDE",
"color:#0B2D5C;font-size:20px;font-weight:bold;"
);

console.log(
"%cWorld Robot Olympiad 2026",
"color:green;font-size:16px;"
);

console.log(
"%cRobot Meets Culture",
"color:#1F6FEB;font-size:15px;"
);

console.log(
"%cWebsite Designed by Team Techno Heritage",
"color:#444;font-size:14px;"
);

/*==================================================
            INITIALIZE WEBSITE
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    revealOnScroll();

});

/*==================================================
                END OF SCRIPT
==================================================*/