document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".header__hamburger");
  const navList = document.querySelector(".header__nav-list");

  hamburger.addEventListener("click", () => {
    // Alterna a classe 'active' no ícone do hambúrguer e na lista de navegação
    hamburger.classList.toggle("active");
    navList.classList.toggle("active");

    // ARIA para acessibilidade
    const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", !isExpanded);
  });

  // --- CAROUSEL LOGIC ---
  const carousel = document.querySelector('.partners__carousel');
  const track = document.querySelector('.partners__track');

  if (carousel && track) {
    // 1. Duplicate items for a seamless loop
    const items = Array.from(track.children);
    items.forEach(item => {
      const clone = item.cloneNode(true);
      track.appendChild(clone);
    });

    // 2. Pause animation on container click, unless a link is clicked
    carousel.addEventListener('click', (e) => {
      // Check if the clicked element is one of the partner items (the <a> tag) or a child of it
      if (e.target.closest('.partners__item')) {
        // If it's a link, let the default navigation happen and don't pause
        return;
      }
      
      // If the click was on the container itself (not a link), toggle pause
      track.classList.toggle('paused');
    });
  }
});
