const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function isBudgetEnough(data) {
    let volume = 0;
    for (let value of data.shops) {
        let localVolume = value.width * value.length;
        volume += localVolume;
    }
    volume *= data.height;
    let price = volume * data.moneyPer1m3;
    if (price > data.budget) {
        return "Бюджета недостаточно";
    } else {
        return "Бюджета достаточно";
    }
}


const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Sanya'];

function sortStudentsByGroups(arr) {
    arr.sort();
    let otherStudents = "Оставшиеся студенты: ";
    let studentsByGroups = [];
    let countOtherStudents = arr.length % 3;
    let arrOtherStudents = arr.slice(arr.length - countOtherStudents, arr.length);
    let countGroups = Number.parseInt(arr.length / 3);
    for (let i = 0; i < countGroups; i++) {
        studentsByGroups[i] = [];
        for (let j = 0; j < 3; j++) {
            studentsByGroups[i][j] = arr[(i*3+j)];
        }
    }
    if (countOtherStudents === 0) {
        otherStudents += '-';
    } else {
        otherStudents += arrOtherStudents.join(", ");
    }
    studentsByGroups[countGroups] = otherStudents;
    return studentsByGroups;
    
}

console.log(sortStudentsByGroups(students));
