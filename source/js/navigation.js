const navigation = document.querySelector('.navigation');
const button = document.querySelector('.navigation__toggle');

button.addEventListener('click',() => {
  navigation.classList.toggle('navigation--opened');
});
