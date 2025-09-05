document.addEventListener("DOMContentLoaded", () => {
  // Inicializa a biblioteca de animação AOS
  AOS.init({
    duration: 800, // Duração da animação em ms
    once: true, // Animação acontece apenas uma vez
    offset: 50, // Inicia a animação um pouco antes do elemento aparecer
  });
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

    // 2. Lógica da Animação
    let speed = 0.5; // Velocidade de rolagem normal
    const slowSpeed = 0.25; // Velocidade de rolagem ao passar o mouse
    let position = 0;

    // A largura da track é calculada após a duplicação dos itens
    const trackWidth = track.scrollWidth / 2;

    function scrollAnimation() {
      position -= speed;
      // Quando a primeira metade da track sair da tela, reseta a posição
      if (position < -trackWidth) {
        position = 0;
      }
      track.style.transform = `translateX(${position}px)`;

      // Continua a animação no próximo frame
      requestAnimationFrame(scrollAnimation);
    }

    // Inicia a animação
    scrollAnimation();

    // 3. Altera a velocidade no hover
    carousel.addEventListener("mouseenter", () => {
      speed = slowSpeed;
    });

    carousel.addEventListener("mouseleave", () => {
      speed = 0.5; // Retorna à velocidade normal
    });
  }
});
