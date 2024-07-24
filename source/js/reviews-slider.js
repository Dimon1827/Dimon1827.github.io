import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

new Swiper('.reviews__container', {
  navigation: {
    nextEl: '.reviews-button--right',
    prevEl: '.reviews-button--left'
  },
  speed: 500,
});
