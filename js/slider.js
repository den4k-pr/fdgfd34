const s6Swiper = new Swiper('.s6-swiper', {
  slidesPerView: 'auto',
  spaceBetween: 12,
  loop: true,
  
  // Прив'язка навігації
  navigation: {
    nextEl: '.s6 .swiper-button-next',
    prevEl: '.s6 .swiper-button-prev',
  },

  // Прив'язка пагінації
  pagination: {
    el: '.s6 .swiper-pagination',
    clickable: true,
  },
});