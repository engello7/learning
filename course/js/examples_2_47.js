function factorial(n) {
    if (n == null || !Number.isInteger(n)) {
        return "Введено некорректное значение";
    } else if (n <= 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial());
console.log(factorial(''));
console.log(factorial(2.58));
console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(-1));
console.log(factorial('dasd'));