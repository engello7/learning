const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs : function(plan) {
        let result = `Мне ${plan.age} и я владею языками: `;
        for (let value of plan.skills.languages) {
            result += `${value} `.toUpperCase();
        }
        return result;
    }
};

function showExperience(plan) {
    let {exp: experience} = plan.skills;
    return experience;
}

console.log(showExperience(personalPlanPeter));

function showProgrammingLangs(plan) {
    let result = "";
    for (let value in plan.skills.programmingLangs) {
        result += `Язык ${value} изучен на ${plan.skills.programmingLangs[value]}\n`;
    }
    return result;
}

console.log(showProgrammingLangs(personalPlanPeter));
console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    if (arr.length === 0) {
        return "Семья пуста";
    }
    let result = "Семья состоит из: ";
    result += arr.join(' ');
    result += ' ';
    return result;
}

console.log(showFamily(family));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    let result = [];
    for (let value of arr) {
        result.push(value.toLowerCase());
        console.log(value.toLowerCase());
    }
    return result;
}

console.log(standardizeStrings(favoriteCities));

const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) !== 'string') {
        return "Ошибка!";
    }
    let arr = str.split('');
    let newStr = '';
    for (let i = arr.length - 1; i >= 0; i--) {
        newStr += arr[i];
    }
    return newStr;
}

function reverse2(str) {
    if (typeof(str) !== 'string') {
        return "Ошибка!";
    }
    let arr = str.split('').reverse();
    let newStr = arr.join('');
    return newStr;
}

console.log(reverse(someString));
console.log(reverse2(someString));

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    if (arr.length === 0) {
        return "Нет доступных валют";
    }
    let result = "Доступные валюты:\n";
    for (let value of arr) {
        if (value !== missingCurr) {
            result += `${value}\n`;
        }
    }
    return result;
}

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));
