'use strict';

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == null || isNaN(numberOfFilms) || numberOfFilms == '') {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

// console.log(personalMovieDB.movies);

function rememberMyFilms() {
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
}

rememberMyFilms();

console.log('*** personalMovieDB fields ***');

for (let key in personalMovieDB.movies) {
  console.log(`${key}: ${personalMovieDB.movies[key]}`);
}

function detectPersonalLevel() {
  if (numberOfFilms >= 0 && numberOfFilms < 10) {
    alert('Просмотрено довольно мало фильмов');
  } else if (numberOfFilms >= 10 && numberOfFilms <= 30) {
    alert('Вы классический зритель');
  } else if (numberOfFilms > 30) {
    alert('Вы киноман');
  } else {
    alert('Произошла ошибка');
  }
}

detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) console.log(personalMovieDB);
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 0; i < 3; i++) {
    personalMovieDB.genres[i] = prompt(
      `Ваш любимый жанр под номером ${i + 1}`,
      ''
    );
  }
}

writeYourGenres();
