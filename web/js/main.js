document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".header__hamburger");
  const navList = document.querySelector(".header__nav-list");

  hamburger.addEventListener("click", () => {
    // Alterna a classe active no ícone do hambúrguer e na lista de navegação
    hamburger.classList.toggle("active");
    navList.classList.toggle("active");

    // ARIA para acessibilidade
    const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", !isExpanded);
  });

  // --- CAROUSEL LOGIC ---
  const carousel = document.querySelector(".partners__carousel");
  const track = document.querySelector(".partners__track");

  if (carousel && track) {
    // 1. Duplicando items do carrossel (efeito de looping)
    const items = Array.from(track.children);
    items.forEach((item) => {
      const clone = item.cloneNode(true);
      track.appendChild(clone);
    });
  }
});
