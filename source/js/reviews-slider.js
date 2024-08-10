import { Swiper } from './vendor/swiper';

new Swiper('.reviews__container', {
  navigation: {
    nextEl: '.reviews-button--right',
    prevEl: '.reviews-button--left'
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1366: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },

  speed: 500,
});
