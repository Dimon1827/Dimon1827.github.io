import Swiper from 'swiper/bundle';
import '/sass/vendor/swiper-bundle.css';

new Swiper('.reviews__container', {
  navigation: {
    nextEl: '.reviews-button--right',
    prevEl: '.reviews-button--left'
  },
  speed: 500,
});
