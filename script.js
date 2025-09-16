// Ativa o Carrossel de Depoimentos
const swiper = new Swiper('.testimonial-swiper', {
  slidesPerView: 1,
  spaceBetween: 30,

  // Ativa a paginação (as bolinhas)
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Torna o carrossel um loop infinito
  loop: true,

  // === ADICIONE ESTE BLOCO ABAIXO ===
  autoplay: {
    delay: 5000, // Tempo em milissegundos (3000ms = 3 segundos)
    disableOnInteraction: false, // Continua girando mesmo depois que o usuário interage
  },
  // ===================================

  // Configurações para diferentes tamanhos de tela (responsividade)
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});