// Importer GSAP

// Sélectionner le <li>
const li = document.querySelector("li");

// Sélectionner les div .case-a et .case-b
const caseA = li.querySelector(".case-num");
const caseB = li.querySelector(".case-title");

// Masquer les div .case-a et .case-b initialement
gsap.set([caseA, caseB], { opacity: 1 });

// Créer une animation pour faire apparaître les div .case-a et .case-b
li.addEventListener("mouseenter", () => {
    gsap.to(caseA, { opacity: 1, x: "0", y: "0", duration: 0.2 });
});

// Créer une animation pour faire disparaître les div .case-a et .case-b lorsque la souris quitte le <li>
li.addEventListener("mouseleave", () => {
    gsap.to(caseA, { opacity: 0, x: "-100%", y: "140px", duration: 0.2 });
});





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
