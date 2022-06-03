// Место для первой задачи
function sayHello(name) {
    return `Привет, ${name}!`;
}

// Место для второй задачи
function returnNeighboringNumbers(num) {
    let res = [];
    res[0] = num - 1;
    res[1] = num;
    res[2] = num + 1;
    return res;
}

// Место для третьей задачи
function getMathResult(num, count) {
    let result = num;
    if (typeof(count) != 'number') {
        return result;
    }
    for (let i = 2; i <= count; i++) {
        result += '---' + (num * i);
    }
    return result;
}

console.log(sayHello("Sergei"));
console.log(returnNeighboringNumbers(6));
console.log(getMathResult(6, 4));
console.log(getMathResult(6, 'H'));
