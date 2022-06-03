

console.log( 5 === 5 && 3 < 1 || 5);

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!');
}

console.log(3 && 2);

let stars = '';
for (let i = 0; i < 6; i++) {
    for (let j = 0; j <= i; j++) {
        stars += '*';
    }
    stars += '\n';
}
console.log(stars);

console.log(typeof('dsadasd'));

const lines = 5;
let result = '';
// Проверяется именно переменная result, формируйте строку в ней
for (let i = 1; i <= 6; i++) {
    let j = 0;
    let k = 0;
    while (j < lines + 1 - i) {
        result += ' ';
        j++;
    }
    do  {
        result += '*';
        k++;
    } while (k < (i * 2 - 1)); 
    result += '\n';
}

console.log(result);

