'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

console.log(personalMovieDB.movies);

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

console.log('*** personalMovieDB fields ***');
for (let key in personalMovieDB.movies) {
  console.log(`${key}: ${personalMovieDB.movies[key]}`);
}

if (numberOfFilms >= 0 && numberOfFilms < 10) {
  alert('Просмотрено довольно мало фильмов');
} else if (numberOfFilms >= 10 && numberOfFilms <= 30) {
  alert('Вы классический зритель');
} else if (numberOfFilms > 30) {
  alert('Вы киноман');
} else {
  alert('Произошла ошибка');
}
