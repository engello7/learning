/* 
 * touchstart - касание объекта
 * touchmove - движение по элементу
 * touchend - окончание касания
 * touchenter - когда палец зашел на пределы этого элемента при тачмув
 * touchleave - когда палец вышел за пределы элемента при тачмув
 * touchcancel - точка соприкосновения не регистрируется на поверхности при тачмув
 * 
 * у event в callback функциях есть свой список свойств, примеры:
 * touches - список всех пальцев, которые находятся на экране
 * targetTouches - список всех пальцев, которые взаимодействуют с объетом
 * changedTouches -список всех пальцев, которые участвуют в текущем событии
 */

document.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('Start');
        console.log(e.targetTouches);
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log('move');
    });

    box.addEventListener('touchend', (e) => {
        e.preventDefault();

        console.log('end');
    });
});