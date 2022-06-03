

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "0");

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

for (let i = 0; i < 2; i++) {
    let lastFilm = prompt("Один из последних просмотренных фильмов?", "");
    while (lastFilm == null || lastFilm == '' || lastFilm.length > 50) {
        alert("Введено некорректное значение");
        lastFilm = prompt("Один из последних просмотренных фильмов?", "");
    }
    let rating = +prompt("На сколько оцените его от 1 до 10?", "7");
    while (rating == null || isNaN(rating) || rating == '' || rating > 10) {
        alert("Введено некорректное значение");
        rating = +prompt("На сколько оцените его от 1 до 10?", "7");
    }
    personalMovieDB.movies[lastFilm] = rating;
}

if (personalMovieDB.count >= 0 && personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}

console.log(personalMovieDB);
