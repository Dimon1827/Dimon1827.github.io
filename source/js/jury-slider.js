new Swiper('.juri__container', {
  navigation: {
    nextEl: '.juri-button--right',
    prevEl: '.juri-button--left'
  },

  // autoplay: {
  //   delay: 2000
  // },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },

  loop: true,
  speed: 500
});
