const articles = [
  {
    speaker: 'Ольга Петрова',
    likes: 2500,
    views: 9000,
    date: 'July 18, 2023',
    title: 'Как избавиться от страхов',
    description:
      'Как победить страх общения с людьми и научиться находить общий язык с окружающими?',
    image: './images/vebinar-3.jpg',
  },
  {
    speaker: 'Андрей Иванов',
    likes: 1800,
    views: 7500,
    date: 'May 05, 2023',
    title: 'Как избавиться от тревог',
    description:
      'Как правильно управлять своими эмоциями, чтобы достигать успеха в личной и профессиональной жизни?',
    image: './images/vebinar-4.jpg',
  },
  {
    speaker: 'Ирина Кузнецова',
    likes: 2700,
    views: 9200,
    date: 'April 30, 2023',
    title: 'Как научиться принимать решения',
    description:
      'Как не бояться принимать решения, даже если они кажутся сложными или рискованными, и добиваться своих целей?',
    image: './images/vebinar-6.jpg',
  },
  {
    speaker: 'Ирина Кузнецова',
    likes: 2700,
    views: 9200,
    date: 'April 20, 2023',
    title: 'Как развить настойчивость',
    description:
      'Как не бояться принимать решения, даже если они кажутся сложными или рискованными, и добиваться своих целей?',
    image: './images/vebinar-6.jpg',
  },
  {
    speaker: 'Дмитрий Сидоров',
    likes: 3400,
    views: 10500,
    date: 'May 15, 2023',
    title: 'Как развить мотивацию',
    description:
      'Как сохранять энтузиазм и настойчивость при достижении целей, даже если на пути возникают трудности и препятствия?',
    image: './images/vebinar-7.jpg',
  },
  {
    speaker: 'Джейн Смит',
    likes: 4500,
    views: 15000,
    date: 'June 15, 2023',
    title: 'Как общаться с токсичными людьми',
    description:
      'Токсичные люди могут оказывать серьезное негативное влияние на вашу жизнь, поэтому важно уметь эффективно общаться с ними...',
    image: './images/vebinar-3.jpg',
  },
  {
    speaker: 'Джейн Смит',
    likes: 4500,
    views: 15000,
    date: 'April 2, 2023',
    title: 'Как общаться с людьми',
    description:
      'Токсичные люди могут оказывать серьезное негативное влияние на вашу жизнь, поэтому важно уметь эффективно общаться с ними...',
    image: './images/vebinar-3.jpg',
  },
  {
    speaker: 'Иван Иванов',
    likes: 3200,
    views: 10000,
    date: 'June 01, 2023',
    title: 'Как избавиться от страхов и фобий',
    description:
      'Страхи и фобии могут ограничивать нашу жизнь и не давать нам полноценно жить. На вебинаре мы расскажем, как справиться со своими страхами и начать жить полной жизнью...',
    image: './images/vebinar-4.jpg',
  },
  {
    speaker: 'Александра Сергеева',
    likes: 5500,
    views: 20000,
    date: 'July 10, 2023',
    title: 'Как научиться контролировать свои эмоции',
    description:
      'Контроль над эмоциями - это необходимый навык, который поможет вам справляться со стрессом и эффективнее решать проблемы. На вебинаре мы расскажем, как научиться контролировать свои эмоции...',
    image: './images/vebinar-5.jpg',
  },
  {
    speaker: 'Петр Петров',
    likes: 3800,
    views: 12000,
    date: 'July 15, 2023',
    title: 'Как перестать беспокоиться о будущем',
    description:
      'Многие люди постоянно беспокоятся о будущем, что мешает им наслаждаться настоящим моментом. На вебинаре мы расскажем, как перестать беспокоиться о будущем и начать жить в настоящем...',
    image: './images/vebinar-6.jpg',
  },
  {
    speaker: 'Петр Петров',
    likes: 3800,
    views: 12000,
    date: 'April 15, 2023',
    title: 'Как перестать беспокоиться о прошлом',
    description:
      'Многие люди постоянно беспокоятся о будущем, что мешает им наслаждаться настоящим моментом. На вебинаре мы расскажем, как перестать беспокоиться о будущем и начать жить в настоящем...',
    image: './images/vebinar-6.jpg',
  },
];

/////

const textInput = document.querySelector('#textInput');
const countryList = document.querySelector('.art-list');
const itemsFilter = document.querySelectorAll('.item-filter');
const sortLikes = document.querySelector('.sort-likes');
const sortDate = document.querySelector('.sort-date');

let description = '';
let visibleFilter = [];
let reverseLikes = 'asc';
let reverseDate = 'asc';

//фильтр через инпут
textInput.addEventListener('input', event => {
  description = event.currentTarget.value;
  visibleFilter = getFilterChange();
  console.log(visibleFilter);
});

//фильтр через список меню
itemsFilter.forEach(item => {
  item.addEventListener('click', event => {
    description = event.currentTarget.innerHTML;
    textInput.value = description;
    visibleFilter = getFilterChange();
    console.log(visibleFilter);
  });
});

//функция фильтер
const getFilterChange = () => {
  const normalizedFilter = description.toLowerCase();

  return articles.filter(
    item =>
      item.title.toLowerCase().includes(normalizedFilter) ||
      item.speaker.toLowerCase().includes(normalizedFilter)
  );
};

visibleFilter = getFilterChange();
console.log(visibleFilter);

/////

//функции сортировка

//сортировка по лайкам
sortLikes.addEventListener('click', () => {
  if (reverseLikes === 'asc') {
    visibleFilter.sort((a, b) => a.likes - b.likes);
  }

  if (reverseLikes === 'desc') {
    visibleFilter.sort((a, b) => b.likes - a.likes);
  }

  reverseLikes = reverseLikes === 'desc' ? 'asc' : 'desc';

  return console.log(visibleFilter);
});

//сортировка по по дате
sortDate.addEventListener('click', () => {
  if (reverseDate === 'asc') {
    visibleFilter.sort((a, b) => {
      var dateA = new Date(a.date),
        dateB = new Date(b.date);
      return dateA - dateB; //сортировка по возрастающей дате
    });
  }

  if (reverseDate === 'desc') {
    visibleFilter.sort((a, b) => {
      var dateA = new Date(b.date),
        dateB = new Date(a.date);
      return dateA - dateB; //сортировка по возрастающей дате
    });
  }

  reverseDate = reverseDate === 'desc' ? 'asc' : 'desc';

  return console.log(visibleFilter);
});
