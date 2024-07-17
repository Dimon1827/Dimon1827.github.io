const tabs = document.querySelector('.price__tabs');
const prices = document.querySelectorAll('.price__value');
const bigPrices = document.querySelectorAll('.price__big-value');
const oneMonth = [5000, 1700, 2700];
const sixMonth = [30000, 10200, 16200];
const twelveMonth = [60000, 20400, 32400];


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
    addClassButton(sixMonth);
  } else if (chosenButton === 2) {
    addClassButton(twelveMonth);
  } else {
    addClassButton(oneMonth);
  }
  evt.target.classList.add('price__tab-button--active');
});
