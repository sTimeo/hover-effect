const animations = {
    1: {
        caseLeaveA: { x: "-100%", y: "100%" },
        caseLeaveB: { x: "100%", y: "100%" }
    },
    3: {
        caseLeaveA: { x: "-100%", y: "-100%" },
        caseLeaveB: { x: "100%", y: "100%" }
    },
    4: {
        caseLeaveA: { x: "100%", y: "-100%" },
        caseLeaveB: { x: "-100%", y: "100%" }
    },
    6: {
        caseLeaveA: { x: "100%", y: "-100%" },
        caseLeaveB: { x: "-100%", y: "100%" }
    },
    7: {
        caseLeaveA: { x: "100%", y: "-100%" },
        caseLeaveB: { x: "100%", y: "100%" }
    },
    8: {
        caseLeaveA: { x: "-100%", y: "100%" },
        caseLeaveB: { x: "100%", y: "100%" }
    },
};

for (const index in animations) {
    const li = document.querySelector(`#effect-a ul li:nth-child(${index})`);
    const caseA = li.querySelector(".case-num");
    const caseB = li.querySelector(".case-title");

    li.addEventListener("mouseenter", () => {
   gsap.to(caseA, { opacity: 1, x: "0", y: "0", duration: 0.2 });
    gsap.to(caseB, { opacity: 1, x: "0", y: "0", duration: 0.2 });
    });

    li.addEventListener("mouseleave", () => {
        gsap.to(caseA, { ...animations[index].caseLeaveA, opacity: 0, duration: 0.2 });
        gsap.to(caseB, { ...animations[index].caseLeaveB, opacity: 0, duration: 0.2 });
    });
}




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