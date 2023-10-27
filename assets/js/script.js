const indices = [1, 3, 4, 6, 7, 8];
const elements = {};

// Sélectionner les éléments <li> et leurs div .case-a et .case-b
indices.forEach(index => {
    const li = document.querySelector(`#effect-a ul li:nth-child(${index})`);
    const caseA = li.querySelector(".case-num");
    const caseB = li.querySelector(".case-title");
    
    elements[index] = { li, caseA, caseB };
    
    // Animation d'apparition
    li.addEventListener("mouseenter", () => {
        gsap.to(caseA, { opacity: 1, x: "0", y: "0", duration: 0.2 });
        gsap.to(caseB, { opacity: 1, x: "0", y: "0", duration: 0.2 });
    });

    // Animation de disparition
    li.addEventListener("mouseleave", () => {
        gsap.to(caseA, { opacity: 0, x: "-100%", y: "100%", duration: 0.2 });
        gsap.to(caseB, { opacity: 0, x: "100%", y: "100%", duration: 0.2 });
    });
});


/*
const spanContainer = document.querySelector("li");
const spans = Array.from(spanContainer.querySelectorAll("span"));
let isHovered = false;

// Animation GSAP pour faire apparaître les spans de manière aléatoire
function animateSpans() {
    isHovered = true;

    gsap.from(spans, {
        opacity: 0,
        duration: 0.5,
        stagger: {
            each: 0.1,
            from: "random",
        },
        onComplete: () => {
            isHovered = false;
        },
    });
}

// Écouteur d'événements pour déclencher l'animation lors du survol
spanContainer.addEventListener("mouseenter", () => {
    if (!isHovered) {
        animateSpans();
    }
});
*/