const nameForm = document.getElementById('name');
const telephone = document.getElementById('telephone');
const REGEX__NAME = /^[a-zа-яё\s]+$/i;
const REGEX__TELEPHONE = /^[0-9+]{1,13}$/i;

function validation() {
  let result = true;

  function removeError(input) {
    if (input.classList.contains('form__error')) {
      input.classList.remove('form__error');
      document.querySelector('.form__label').remove();
    }
  }

  function createError(input, text) {
    const errorLabel = document.createElement('label');
    const parent = input.parentNode;

    input.classList.add('form__error');
    errorLabel.classList.add('form__label');
    errorLabel.textContent = text;
    parent.append(errorLabel);
  }

  removeError(nameForm);
  removeError(telephone);

  if (!REGEX__NAME.test(nameForm.value)) {
    createError(nameForm, 'Ошибка в имени. Используйте только буквы и пробелы');
    result = false;
  }

  if (!REGEX__TELEPHONE.test(telephone.value)) {
    createError(telephone, 'Ошибка в номере. Используйте только цифры');
    result = false;
  }

  return result;
}

document.getElementById('main-form').addEventListener('submit', (evt) => {
  if (validation() === false) {
    evt.preventDefault();
  }
});
