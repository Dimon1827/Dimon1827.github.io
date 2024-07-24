const tabs = document.querySelector('.faq__tabs-wrapper');
const accordion = document.querySelector('.accordion');
const inputs = accordion.querySelectorAll('input');
const labels = accordion.querySelectorAll('label');
const content = accordion.querySelectorAll('p');

const hub = {
  title: [
    'Как стать членом фитнес-центра?',
    'Где можно посмотреть расписание?',
    'Есть кулеры в центре? Предоставляются полотенца?',
    'Сколько тренеров работает в клубе и какова их квалификация?'
  ],
  text: 'При первом посещении и покупке абонемента, необходимо заполнить анкету и подписать договор. При покупке абонемента онлайн, анкета также заполняется онлайн и договор придет вам на почту.'
};

const subscription = {
  title: [
    'Занятия с тренером входят в абонемент?',
    'Можно ли заморозить абонемент?',
    'Есть ли лимит по посещениям тренажерного зала и групповых занятий?',
    'Что такое семейный доступ и доступ для друзей'
  ],
  text: 'При посещении тренажерного зала вам необходимо оплатить занятия с тренером отдельно. В зале всегда присутствует дежурный тренер, которому можно задать вопрос,  получить небольшую консультацию по тренажеру или технике выполнения упражнения.'
};

const services = {
  title: [
    'Предлагает ли клуб услуги по консультированию по вопросам питания?',
    'Проводятся ли в клубе какие-либо мероприятия или соревнования?',
    'Можно ли приобрести в центре спортивное питание?',
    'Есть ли в центре детская комната?'
  ],
  text: 'Да. Вы можете обратиться как к своему тренеру, так и к нашему нутрициологу. Специалист уточнит ваши данные, цели и предложит программу питания.'
};

const rules = {
  title: [
    'Есть в фитнес-центре дресс-код?',
    'Можно ли приводить с собой детей на тренировки?',
    'Какие дополнительные правила посещения центра?',
    'Нужна ли медицинская справка для посещения залов и бассейна?'
  ],
  text: 'Для тренировок необходимо иметь предназначенную для этого закрытую спортивную обувь и одежду. Верхняя и нижняя части тела должны быть закрыты (используйте футболки, майки, спортивные брюки, шорты, кроссовки). В целях безопасности, запрещается тренироваться босиком, в пляжных или домашних тапочках и т. п., исключения составляют специальные классы (например, йога, пилатес).'
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
      changeContent(hub);
      break;
    case 1:
      changeContent(subscription);
      break;
    case 2:
      changeContent(services);
      break;
    case 3:
      changeContent(rules);
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


