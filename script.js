// SCROLL FUNCTION
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// FADE-IN ON SCROLL
const faders = document.querySelectorAll('.fade');

window.addEventListener('scroll', () => {
    faders.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('show');
        }
    });
});

// TYPING EFFECT
const text = ["Web Developer", "AI Enthusiast", "Creative Thinker"];
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
    current = text[i];
    
    if (!isDeleting) {
        document.querySelector(".typing").textContent = current.substring(0, j++);
        if (j > current.length) {
            isDeleting = true;
            setTimeout(type, 1000);
            return;
        }
    } else {
        document.querySelector(".typing").textContent = current.substring(0, j--);
        if (j < 0) {
            isDeleting = false;
            i = (i + 1) % text.length;
        }
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

type();