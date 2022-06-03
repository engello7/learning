
let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "0");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "0");
    }
    personalMovieDB.count = numberOfFilms;
}

const personalMovieDB = {
    count : 0,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let lastFilm = prompt("Один из последних просмотренных фильмов?", "");
        while (lastFilm == null || lastFilm == '' || lastFilm.length > 50) {
            alert("Введено некорректное значение");
            lastFilm = prompt("Один из последних просмотренных фильмов?", "");
        }
        let rating = +prompt("На сколько оцените его от 1 до 10?", "7");
        while (rating == null || isNaN(rating) || rating == '' || rating > 10 || rating < 1) {
            alert("Введено некорректное значение");
            rating = +prompt("На сколько оцените его от 1 до 10?", "7");
        }
        personalMovieDB.movies[lastFilm] = rating;
    }
}

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        let newGenre = prompt(`Ваш любимый жанр под номером ${i}`);
        while (newGenre == null || newGenre == '' || newGenre.length > 20) {
            alert("Введено некорректное значение");
            newGenre = prompt(`Ваш любимый жанр под номером ${i}`);
        }
        personalMovieDB.genres[i-1] = newGenre;
    }
}

function detectPersonalLevel() {
    if (personalMovieDB.count >= 0 && personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
}

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}


start();
rememberMyFilms();
writeYourGenres();
detectPersonalLevel();
showMyDB();
