/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

const personalMovieDB = {
    count : 0,
    movies : {},
    actors : {},
    genres : [],
    privat : false,

    start : function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "0");

        while (personalMovieDB.count == '' || personalMovieDB.count == null || 
               !Number.isInteger(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "0");
        }
    },

    rememberMyFilms : function() {
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
            personalMovieDB.movies[lastFilm.trim()] = rating;
        }
    },

    writeYourGenres : function() {
        for (let i = 1; i <= 3; i++) {
            let newGenre = prompt(`Ваш любимый жанр под номером ${i}`);
            while (newGenre == null || newGenre == '' || newGenre.length > 20) {
                alert("Введено некорректное значение");
                newGenre = prompt(`Ваш любимый жанр под номером ${i}`);
            }
            personalMovieDB.genres[i-1] = newGenre.trim();
        }
        personalMovieDB.genres.forEach((item, index) => {
            alert(`Любимый жанр #${index + 1} - это ${item}`);
        });
    },

    detectPersonalLevel : function() {
        if (personalMovieDB.count >= 0 && personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    },

    showMyDB : function(hidden) {
        if (hidden == false) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB : function() {
        personalMovieDB.privat = !personalMovieDB.privat;
    }
};


personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.privat);