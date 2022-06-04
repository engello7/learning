// Место для первой задачи
function calculateVolumeAndArea(edgeLength) {
    if (edgeLength == '' || isNaN(edgeLength) || edgeLength == null  || 
    edgeLength < 0 || !(Number.isInteger(edgeLength))) {
        return "При вычислении произошла ошибка";
    }
    const volume = edgeLength * edgeLength * edgeLength;
    const square = edgeLength * edgeLength * 6;
    return `Объем куба: ${volume}, площадь всей поверхности: ${square}`;
}

// Место для второй задачи
function getCoupeNumber(place) {
    if (isNaN(place) || !(Number.isInteger(place)) || place < 0) {
        return "Ошибка. Проверьте правильность введенного номера места";
    } else if (place == 0 || place > 36) {
        return "Таких мест в вагоне не существует";
    } else {
        return Math.round((place / 4) + 0.25);
    }
}

// Место для первой задачи
function getTimeFromMinutes(time) {
    if (typeof (time) !== 'number' || !Number.isInteger(time) || time < 0) {
        return "Ошибка, проверьте данные";
    }
    let hours = Number.parseInt(time / 60);
    let minutes = time % 60;
    if (hours == 1) {
        return `Это ${hours} час и ${minutes} минут`;
    } else if (hours == 2 || hours == 3 || hours == 4) {
        return `Это ${hours} часа и ${minutes} минут`;
    } else {
        return `Это ${hours} часов и ${minutes} минут`;
    }
}

// Место для второй задачи
function findMaxNumber(a, b, c, d) {
    if (typeof (a) !== 'number' || typeof (b) !== 'number' || typeof (c) !== 'number' || typeof (d) !== 'number' || 
    a == null || b == null || c == null || d == null) {
        return 0;
    } else {
        let max = a;
        if (max < b) {
            max = b;
        }
        if (max < c) {
            max = c;
        }
        if (max < d) {
            max = d;
        }
        return max;
    }
}