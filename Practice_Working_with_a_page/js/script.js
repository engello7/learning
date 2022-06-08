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
            "Скотт Пилигрим против...",
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость"        
        ]
    };
    
    const adBannersImg = document.querySelectorAll(".promo__adv img"),
          promoBg = document.querySelector(".promo__bg"),
          promoGenre = promoBg.querySelector(".promo__genre"),
          promoInteractive = document.querySelector(".promo__interactive"),
          promoInteractiveList = promoInteractive.querySelector(".promo__interactive-list"),
          promoInteractiveItem = promoInteractive.querySelectorAll(".promo__interactive-item"),
          addForm = document.querySelector("form.add"),
          addInput = addForm.querySelector(".adding__input"),
          addCheckBox = addForm.querySelector('[type="checkbox"]');
    
    const deleteAdv = (arr) => {
        arr.forEach(item => item.remove());
    };

    const makeChanges = () => {
        promoBg.style.backgroundImage = "url('img/bg.jpg')";
        promoGenre.textContent = "ДРАМА";
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArr(movieDB.movies);

        films.forEach((item, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i+1}. ${item}
                <div class="delete"></div>
            </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(films, parent);
                console.log(movieDB);
            });
        });
    }

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorit = addCheckBox.checked;

        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = newFilm.slice(0, 22) + "...";
            }

            if (favorit) {
                console.log("Favorite film");
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, promoInteractiveList);
        }

        event.target.reset();
    });

    deleteAdv(adBannersImg);
    makeChanges();
    createMovieList(movieDB.movies, promoInteractiveList);
});


