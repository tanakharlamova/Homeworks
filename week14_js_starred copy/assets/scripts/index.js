// У вас есть массив с информацией о популярных режиссёрах. Отобразите информацию о каждом режиссёре на странице.
// Сохраните в переменную массив.
// Вызовите метод forEach у массива.
// В функцию обработчик добавьте код, который относится к работе с DOM
// В найденные элементы на странице добавьте информацию из каждого элемента массива.
// Создайте новый массив topFilmsList, в нём должны быть лучшие фильмы режиссёров (они хранятся в полях top_rated_film).

const directors = [
    {
      name: 'Стивен Спилберг',
      career: 'Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр',
      films: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0',
      top_rated_film: 'Список Шиндлера'
    },
    {
      name: 'Кристофер Нолан',
      career: 'Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор',
      films: 'https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu',
      top_rated_film: 'Начало'
    },
    {
      name: 'Мартин МакДона',
      career: 'Сценарист, Режиссёр, Продюсер',
      films: 'https://www.film.ru/person/martin-makdonah',
      top_rated_film: 'Три билборда на границе Эббинга, Миссури'
    },
    {
      name: 'Алексей Балабанов',
      career: 'Режиссёр, Сценарист, Актёр, Продюсер',
      films: 'https://www.film.ru/person/aleksey-balabanov',
      top_rated_film: 'Брат'
    },
    {
      name: 'Питер Фаррелли',
      career: 'Продюсер, Режиссёр, Сценарист, Актёр',
      films: 'https://www.film.ru/person/piter-farrelli',
      top_rated_film: 'Зелёная книга'
    },
    {
      name: 'Юрий Быков',
      career: 'Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер',
      films: 'https://www.film.ru/person/yuriy-bykov',
      top_rated_film: 'Дурак'
    },
    {
      name: 'Жан-Марк Валле',
      career: 'Режиссер, Продюсер, Монтажёр, Актёр, Сценарист',
      films: 'https://www.film.ru/person/zhan-mark-valle',
      top_rated_film: 'Далласский клуб покупателей'
    },
  ];

  const directorName = document.getElementById("director");
  const occupation = document.getElementById("occupation");
  const filmography = document.getElementById("linkFilms");
  const careerFilms = document.querySelector(".career_films") 
  const bestMovies = document.getElementById("bestMovies");
  

    directors.forEach((director)=> {
    const listName = document.createElement('h3');
    listName.textContent = director.name;
    listName.classList.add("directorStyle");
    directorName.append(listName);

    const listcareerFilms = document.createElement('div');
    listcareerFilms.classList.add("career_films");
    directorName.append(listcareerFilms);

    const listOccupation = document.createElement('p');
    listOccupation.textContent = director.career;
    listcareerFilms.append(listOccupation);
    listOccupation.classList.add("carrerStyle");

    const listFilms = document.createElement('a');
    listFilms.textContent = 'Фильмография';
    listFilms.href = director.films;
    listFilms.target = "_blank";
    listcareerFilms.append(listFilms);
    listFilms.classList.add("filmsStyle"); 
})

const topFilmsList = directors.map((director)=> {
    return director.top_rated_film;
})
bestMovies.textContent = topFilmsList.join(', ');
bestMovies.classList.add("bestFilmsStyle")