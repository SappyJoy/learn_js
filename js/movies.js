'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

console.log(personalMovieDB.movies);

for (let i = 0; i < 2; i++) {
	let movie = prompt('Один из последних просмотренных фильмов?', '');
	let star = +prompt('На сколько оцените его?', '');
	personalMovieDB.movies[movie] = star;
}

console.log('*** personalMovieDB fields ***');
for (let key in personalMovieDB.movies) {
	console.log(`${key}: ${personalMovieDB.movies[key]}`);
}
