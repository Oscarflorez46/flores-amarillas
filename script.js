const surpriseBtn = document.getElementById("surpriseBtn");
const surpriseMessage = document.getElementById("surpriseMessage");

surpriseBtn.addEventListener("click", () => {
  const isHidden = surpriseMessage.classList.contains("hidden");

  if (isHidden) {
    surpriseMessage.classList.remove("hidden");
    surpriseBtn.textContent = "Cerrar mi sorpresa ♡";

    surpriseMessage.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

    dropYellowTulips();
  } else {
    surpriseMessage.classList.add("hidden");
    surpriseBtn.textContent = "Abrir mi sorpresa ♡";
  }
});

// Lluvia dinámica de Tulipanes Amarillos en SVG
function dropYellowTulips() {
  const tulipSvg = `<svg viewBox="0 0 64 64" width="100%" height="100%"><path fill="#FFD700" d="M32 6C24 6 18 16 18 28c0 10 6 18 14 20v10c0 2 2 4 4 4s4-2 4-4V48c8-2 14-10 14-20C50 16 44 6 32 6z"/><path fill="#FFC107" d="M32 6c-4 0-8 10-8 22s4 18 8 20 8-8 8-20S36 6 32 6z"/><path fill="#4CAF50" d="M30 48c-6 4-12 2-16 0 2 6 8 10 16 8v-8z"/></svg>`;

  for (let i = 0; i < 30; i++) {
    const flower = document.createElement("div");
    flower.innerHTML = tulipSvg;

    flower.style.position = "fixed";
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.top = "-60px";
    flower.style.width = (25 + Math.random() * 20) + "px";
    flower.style.height = flower.style.width;
    flower.style.zIndex = "9999";
    flower.style.pointerEvents = "none";

    document.body.appendChild(flower);

    const duration = 2500 + Math.random() * 3000;
    const drift = (Math.random() - 0.5) * 200;
    const rotation = Math.random() * 360;

    const animation = flower.animate(
      [
        { transform: "translateY(0) rotate(0deg)", opacity: 1 },
        { transform: `translate(${drift}px, 110vh) rotate(${rotation}deg)`, opacity: 0 }
      ],
      {
        duration: duration,
        easing: "ease-in",
        fill: "forwards"
      }
    );

    animation.onfinish = () => flower.remove();
  }
}