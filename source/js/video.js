const img = document.querySelector('.video__image');
const button = document.querySelector('.video__button');
const border = document.querySelector('.video__button-border');

button.addEventListener('click', () => {
  img.classList.add('active');
  button.classList.add('active');
  border.classList.add('active');
  border.style.display = 'none';
  document.querySelector('iframe').src += '?autoplay=1';
});
