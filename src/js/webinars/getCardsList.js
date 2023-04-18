import vebinar1 from '../../images/vebinar-1.jpg';
import vebinar2 from '../../images/vebinar-2.jpg';
import vebinar3 from '../../images/vebinar-3.jpg';
import vebinarMiniImg1 from '../../images/vebinar-mini-img1.png';
import vebinarMiniImg2 from '../../images/vebinar-mini-img2.png';
import vebinarMiniImg3 from '../../images/vebinar-mini-img3.png';

const articles = [
  {
    tag: ['всі статті'],
    speaker: 'Ольга Петрова',
    authorsImage: vebinarMiniImg1,
    likes: 2.5,
    views: 9,
    date: 'July 18, 2023',
    title: 'Як позбутися панічних атак вагітним жінкам?',
    description:
      'Наше тіло – наш найцінніший актив. Без нього ми можемо насолоджуватися смачною їжею, вчитися новим навичкам...',
    mainImage: vebinar1,
  },
  {
    tag: ['всі статті'],
    speaker: 'Ольга Петрова',
    authorsImage: vebinarMiniImg1,
    likes: 1.8,
    views: 7.5,
    date: 'May 05, 2023',
    title: 'Як позбутися панічних атак вагітним жінкам?',
    description:
      'Наше тіло – наш найцінніший актив. Без нього ми можемо насолоджуватися смачною їжею, вчитися новим навичкам...',
    mainImage: vebinar2,
  },
  {
    tag: ['всі статті'],
    speaker: 'Ірина Кузнєцова',
    authorsImage: vebinarMiniImg2,
    likes: 2.7,
    views: 9.2,
    date: 'April 30, 2023',
    title: 'Як позбутися панічних атак вагітним жінкам?',
    description:
      'Наше тіло – наш найцінніший актив. Без нього ми можемо насолоджуватися смачною їжею, вчитися новим навичкам...',
    mainImage: vebinar3,
  },
  {
    tag: ['всі статті'],
    speaker: 'Ірина Кузнєцова',
    authorsImage: vebinarMiniImg2,
    likes: 2.4,
    views: 8.3,
    date: 'April 20, 2023',
    title: 'Як розвинути наполегливість',
    description:
      'Як не боятися приймати рішення, навіть якщо вони здаються складними або ризикованими, і добиватися своїх цілей?',
    mainImage: vebinar1,
  },
  {
    tag: ['всі статті'],
    speaker: 'Ольга Петрова',
    authorsImage: vebinarMiniImg1,
    likes: 3.4,
    views: 10.5,
    date: 'May 15, 2023',
    title: 'Як розвинути мотивацію',
    description:
      'Як зберігати ентузіазм і наполегливість при досягненні цілей, навіть якщо на шляху виникають труднощі та перешкоди?',
    mainImage: vebinar2,
  },
  {
    tag: ['всі статті'],
    speaker: 'Джейн Сміт',
    authorsImage: vebinarMiniImg3,
    likes: 2.3,
    views: 1.5,
    date: 'June 15, 2023',
    title: 'Як спілкуватися з токсичними людьми',
    description:
      'Токсичні люди можуть серйозно негативно впливати на ваше життя, тому важливо вміти ефективно спілкуватися з ними...',
    mainImage: vebinar3,
  },
  {
    tag: ['всі статті'],
    speaker: 'Джейн Сміт',
    authorsImage: vebinarMiniImg3,
    likes: 4.1,
    views: 5.5,
    date: 'April 2, 2023',
    title: 'Як спілкуватися з людьми',
    description:
      'Токсичні люди можуть серйозно негативно впливати на ваше життя, тому важливо вміти ефективно спілкуватися з ними...',
    mainImage: vebinar1,
  },
  {
    tag: ['всі статті'],
    speaker: 'Ірина Кузнєцова',
    authorsImage: vebinarMiniImg2,
    likes: 2.8,
    views: 3.5,
    date: 'June 01, 2023',
    title: 'Як позбутися страхів та фобій',
    description:
      'Страхи та фобії можуть обмежувати наше життя і не давати нам повноцінно жити. На вебінарі ми розповімо, як упоратися зі своїми страхами та почати жити повним життям...',
    mainImage: vebinar2,
  },
  {
    tag: ['всі статті'],
    speaker: 'Джейн Сміт',
    authorsImage: vebinarMiniImg3,
    likes: 2.5,
    views: 3.5,
    date: 'July 10, 2023',
    title: 'Як навчитися контролювати свої емоції',
    description:
      'Контроль над емоціями - це необхідна навичка, яка допоможе вам справлятися зі стресом та ефективніше вирішувати проблеми. На вебінарі ми розповімо, як навчитися контролювати свої емоції...',
    mainImage: vebinar3,
  },
  {
    tag: ['всі статті'],
    speaker: 'Ольга Петрова',
    authorsImage: vebinarMiniImg1,
    likes: 3.5,
    views: 4.5,
    date: 'July 15, 2023',
    title: 'Як перестати турбуватися про майбутнє',
    description:
      'Багато людей постійно переймаються майбутнім, що заважає їм насолоджуватися теперішнім моментом. На вебінарі ми розповімо, як перестати турбуватися про майбутнє і почати жити в теперішньому...',
    mainImage: vebinar1,
  },
  {
    tag: ['всі статті'],
    speaker: 'Ірина Кузнєцова',
    authorsImage: vebinarMiniImg2,
    likes: 1.1,
    views: 3.5,
    date: 'April 15, 2023',
    title: 'Як перестати турбуватися про минуле',
    description:
      'Багато людей постійно переймаються майбутнім, що заважає їм насолоджуватися теперішнім моментом. На вебінарі ми розповімо, як перестати турбуватися про майбутнє і почати жити в теперішньому...',
    mainImage: vebinar2,
  },
];

export default async function fetchCard(
  description = '',
  totalCards = 3,
  sortingEnabledByLikes = false,
  sortingEnabledByDate = false
) {
  const response = await articles;

  if (!response) {
    throw new Error(response.status);
  } else {
    const normalizedFilter = description.toLowerCase();

    const filterCards = response.filter(item => {
      return (
        item.title.toLowerCase().includes(normalizedFilter) ||
        item.speaker.toLowerCase().includes(normalizedFilter) ||
        item.tag.join(' ').toLowerCase().includes(normalizedFilter)
      );
    });

    if (sortingEnabledByLikes) {
      filterCards.sort((a, b) => {
        return b.likes - a.likes;
      });
    }

    if (sortingEnabledByDate) {
      filterCards.sort((a, b) => {
        const dateA = new Date(b.date);
        const dateB = new Date(a.date);
        return dateA - dateB; //сортировка по убывающей дате
      });
    }

    const cards = filterCards.slice(0, totalCards);

    return { data: cards, hits: filterCards.length };
  }
}
