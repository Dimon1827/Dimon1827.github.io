const img = document.querySelector('.video__image');
const button = document.querySelector('.video__button');
const border = document.querySelector('.video__button-border');

border.addEventListener('click', () => {
  img.classList.add('active');
  button.classList.add('active');
  border.classList.add('active');
  document.querySelector('iframe').src += '?autoplay=1';
});
