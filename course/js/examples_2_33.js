const arr = [2, 8, 26, 13, 10];
arr.sort(compareNum);

function compareNum(a, b) {
    return a - b;
}

console.log(arr);