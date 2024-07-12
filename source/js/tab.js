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

tabs.addEventListener('click', (evt) => {
  const chosenButton = Number(evt.target.closest('.price__tab-button').dataset.id);
  if (chosenButton === 1) {
    enterNumber(prices,sixMonth);
    enterNumber(bigPrices, sixMonth);
    evt.classList.add('price__tab--active');

  } else if (chosenButton === 2) {
    enterNumber(prices, twelveMonth);
    enterNumber(bigPrices, twelveMonth);
  } else {
    enterNumber(prices, oneMonth);
    enterNumber(bigPrices, oneMonth);
  }
});
