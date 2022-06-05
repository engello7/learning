function createCounter() {
    let counter = 0;
    let something = 22;

    const myFunction = function() {
        counter = counter + 1;
        return counter;
    };

    return myFunction;
}

const increment = createCounter();
const c1 = increment();debugger
const c2 = increment();debugger
const c3 = increment();debugger
console.log(c1, c2, c3);