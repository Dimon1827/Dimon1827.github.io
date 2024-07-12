const button = document.querySelector('.video__button');

const playVideo = (wrapper) => {
  const iframe = wrapper.find('.video__frame--js');
  const src = iframe.dataset.id;
  wrapper.classList.add('video__active');
  iframe.setAttribute('src',src);
};

button.addEventListener('click', (el) => {
  el.preventDefault();
  const poster = window.getComputedStyle(this);
  const wrapper = poster.closest('.video');
  playVideo(wrapper);
});
