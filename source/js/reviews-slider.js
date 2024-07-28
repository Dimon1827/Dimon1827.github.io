import { Swiper } from './vendor/swiper';

new Swiper('.reviews__container', {
  navigation: {
    nextEl: '.reviews-button--right',
    prevEl: '.reviews-button--left'
  },
  speed: 500,
});
