const tabs = document.querySelector('.price__tabs');
const prices = document.querySelectorAll('.price__value');
const bigPrices = document.querySelectorAll('.price__big-value');
const oneMonth = [4000, 1200, 2000];
const fiveMonth = [20000, 6000, 10000];
const tenMonth = [40000, 12000, 20000];


const enterNumber = (firstPrices, month) => {
  firstPrices.forEach((element, index) => {
    element.textContent = month[index];
  });
};

const addClassButton = (month) => {
  enterNumber(prices, month);
  enterNumber(bigPrices, month);
};

tabs.addEventListener('click', (evt) => {
  const active = document.querySelector('.price__tab-button--active');
  const chosenButton = Number(evt.target.closest('.price__tab-button').dataset.id);
  active.classList.remove('price__tab-button--active');
  if (chosenButton === 1) {
    addClassButton(fiveMonth);
  } else if (chosenButton === 2) {
    addClassButton(tenMonth);
  } else {
    addClassButton(oneMonth);
  }
  evt.target.classList.add('price__tab-button--active');
});
