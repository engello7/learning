// Место для первой задачи
function calculateVolumeAndArea(edgeLength) {
    if (edgeLength == '' || isNaN(edgeLength) || edgeLength == null || edgeLength  < 0 || !(Number.isInteger(edgeLength))) {
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
        return Math.round((place/4) + 0.25);
    }
}