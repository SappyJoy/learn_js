/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту

5) Добавить нумерацию выведенных фильмов */

/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" -
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение:
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const movieDB = {
    movies: [
      'Угарные каникулы',
      'Акула убийца',
      'Лига справедливости',
      'Ла-ла лэнд',
      'Одержимость',
      'Скотт Пилигрим не против...',
    ],
  };

  const ads = document.getElementsByClassName('promo__adv')[0];
  const adsPics = ads.querySelectorAll('img');
  adsPics.forEach(e => {
    e.remove();
  });

  document.querySelector('.promo__genre').textContent = 'Драма';

  document.querySelector('.promo__bg').style.cssText =
    'background: url(./img/bg.jpg) center center/cover no-repeat;';

  const movieItem = document.querySelector('.promo__interactive-item');
  console.log(movieItem);

  const movieList = document.querySelector('.promo__interactive-list');
  movieList.innerHTML = '';

  let i = 0;
  for (let movie of movieDB.movies.sort()) {
    addFilmItem(movie);
  }

  const filmInput = document.querySelector('.adding__input');
  const favouriteBox = document.querySelector('.yes').previousElementSibling;
  const acceptBtn = document.querySelector('.yes').nextElementSibling;

  acceptBtn.addEventListener('click', event => {
    event.preventDefault();
    let movie = filmInput.value;
    if (movie != '') {
      if (favouriteBox.checked) console.log('Добавляем любимый фильм');
      filmInput.value = '';
      if (movie.length > 21) movie = movie.substr(0, 21) + '...';
      addFilmItem(movie);
    }
  });

  function addFilmItem(title) {
    i++;
    const movieHTML = movieItem.cloneNode();
    movieHTML.innerText = `${i}. ${title}`;
    const deleteDiv = document.createElement('div');
    deleteDiv.classList.add('delete');
    movieHTML.appendChild(deleteDiv);
    movieList.append(movieHTML);
    deleteDiv.addEventListener('click', event => {
      movieHTML.remove();
    });
  }
});
