'use strict';

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: () => {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count) ||
      personalMovieDB.count == ''
    ) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },
  rememberMyFilms: () => {
    let i = 0;
    while (i < 2) {
      let movie = prompt('Один из последних просмотренных фильмов?', '');
      if (movie === undefined || movie === '' || movie.length > 50) {
        continue;
      } else {
        i++;
      }
      let star = +prompt('На сколько оцените его?', '');
      personalMovieDB.movies[movie] = star;
    }
  },
  detectPersonalLevel: () => {
    if (personalMovieDB.count >= 0 && personalMovieDB.count < 10) {
      alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      alert('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
      alert('Вы киноман');
    } else {
      alert('Произошла ошибка');
    }
  },
  showMyDB: (hidden) => {
    if (!hidden) console.log(personalMovieDB);
  },
  writeYourGenres: () => {
    for (let i = 0; i < 3; i++) {
      personalMovieDB.genres[i] = prompt(
        `Ваш любимый жанр под номером ${i + 1}`,
        ''
      );
      if (personalMovieDB.genres[i] == null) {
        i--;
      }
    }
    personalMovieDB.genres.forEach((item, num) =>
      alert(`Любимый жанр ${num + 1} - это ${item}`)
    );
  },
  toggleVisibleMyDB: () => (personalMovieDB.privat = !personalMovieDB.privat),
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.writeYourGenres();
