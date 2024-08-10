const tabs = document.querySelector('.faq__tabs-wrapper');
const accordion = document.querySelector('.accordion');
const inputs = accordion.querySelectorAll('input');
const labels = accordion.querySelectorAll('label');
const content = accordion.querySelectorAll('p');

const club = {
  title: [
    'Какие направления фитнеса представлены в вашем клубе?',
    'Есть ли у вас бассейн, сауна, солярий?',
    'Какое расписание групповых тренировок?',
    'Есть ли у вас персональные тренеры?'
  ],
  text: 'В нашем клубе представлены разнообразные направления фитнеса, чтобы удовлетворить потребности каждого: силовой тренинг, кардио-тренировки, функциональный тренинг, групповые занятия (йога, пилатес, zumba, танцы), бокс, кроссфит.'
};

const trainings = {
  title: [
    'Сколько стоит персональная тренировка?',
    'Какие специалисты работают в вашем клубе? (квалификация, опыт)?',
    'Есть ли у вас пробные тренировки с персональным тренером?',
    'Как подобрать персонального тренера, подходящего именно мне'
  ],
  text: 'Цена индивидуальной тренировки зависит от квалификации тренера и длительности занятия. Вы можете ознакомиться с ценами на нашем сайте или получить подробную информацию у администратора.'
};

const services = {
  title: [
    'Как описываете атмосферу в вашем клубе? (дружелюбная, мотивирующая, профессиональная)',
    'Есть ли у вас зоны отдыха?',
    'Есть ли у вас фитнес-бар с питательной пищей и напитками?',
    'Есть ли у вас парковка?'
  ],
  text: 'В нашем клубе царит атмосфера мотивации, позитива и дружелюбия. Мы создали комфортную обстановку, где каждый может сосредоточиться на своих тренировках и достижении целей.'
};

const staff = {
  title: [
    'Есть ли у вас программа лояльности для постоянных клиентов?',
    'Что вы делаете для того, чтобы гарантировать безопасность и комфорт своих клиентов?',
    'Есть ли у вас отзывы от клиентов?',
    'Могу ли я пройти бесплатную пробную тренировку?'
  ],
  text: 'Да, конечно. Вы можете ознакомиться с отзывами наших клиентов на нашем сайте, в группах в социальных сетях, или попросить администратора показать вам отзывы в печатном виде.'
};

const changeContent = (array) => {
  labels.forEach((element, index) => {
    element.textContent = array.title[index];
  });
  content.forEach((element) => {
    element.textContent = array.text;
  });
};

tabs.addEventListener('click', (evt) => {
  const active = document.querySelector('.faq__tab--active');
  const chosenButton = Number(evt.target.closest('.faq__tab').dataset.id);
  active.classList.remove('faq__tab--active');
  switch (chosenButton) {
    case 0:
      changeContent(club);
      break;
    case 1:
      changeContent(trainings);
      break;
    case 2:
      changeContent(services);
      break;
    case 3:
      changeContent(staff);
      break;
  }

  evt.target.classList.add('faq__tab--active');
});

for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('keydown', (evt) => {
    if (evt.keyCode === 13) {
      inputs[i].setAttribute('checked', '');
    }
  });
}
