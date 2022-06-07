const btn = document.querySelector("button"),
      overlay = document.querySelector(".overlay");

// btn.onclick = function() {
//     alert("Click");
// }
let i = 0;
const logTarget = (event) => {
    console.log(event.target);
    console.log(event.currentTarget);
    console.log(event.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', logTarget);
    // }
};

/* неважно в каком порядке будут идти обработчики событий, 
 * если их вызывает один и тот же объект, 
 * то сначала выводится для вложенного, а потом для родителя
 */
overlay.addEventListener('click', logTarget);
btn.addEventListener('click', logTarget);

//btn.removeEventListener('click', logTarget);
// btn.addEventListener('click', () => {
//     alert("Second click");
// });

// btn.addEventListener('mouseenter', (event) => {
//     console.log(event);
//     // event.target.remove();
// });



const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();

    console.log(event.target);
});