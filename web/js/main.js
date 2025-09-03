document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.header__hamburger');
  const navList = document.querySelector('.header__nav-list');

  hamburger.addEventListener('click', () => {
    // Alterna a classe 'active' no ícone do hambúrguer e na lista de navegação
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');

    // Atualiza os atributos ARIA para acessibilidade
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !isExpanded);
  });
});
