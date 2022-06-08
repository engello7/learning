'use strict';

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
      promoInteractiveItem = promoInteractive.querySelectorAll(".promo__interactive-item");

adBannersImg.forEach(item => item.remove());
promoBg.style.backgroundImage = "url('img/bg.jpg')";
promoGenre.textContent = "ДРАМА";

// promoInteractiveItem.forEach((item, i) => {
//     item.textContent = movieDB.movies.sort()[i];
//     item.insertAdjacentHTML("afterbegin", i + ". ");
// });

promoInteractiveList.innerHTML = "";
movieDB.movies.sort();
movieDB.movies.forEach((item, i) => {
    promoInteractiveList.innerHTML += `
    <li class="promo__interactive-item">${i+1}. ${item}
        <div class="delete"></div>
    </li>
    `;
});


