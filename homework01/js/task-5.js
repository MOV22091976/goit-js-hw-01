"use strict";

const userChoice = prompt('Укажите страну доставки:', '');
const price = 100;
const price1 = 250;
const price2 = 170;
const price3 = 80;
const price4 = 120;

if (userChoice === null) {
    alert('Отменено пользователем');
} else {
    switch (userChoice.toLowerCase()) {
        case 'китай':
            console.log(`Доставка в Китай будет стоить ${price} кредитов`);
            break;
        case 'чили':
            console.log(`Доставка в Чили будет стоить ${price1} кредитов`);
            break;
        case 'австралия':
            console.log(`Доставка в Австралию будет стоить ${price2} кредитов`);
            break;
        case 'индия':
            console.log(`Доставка в Индию будет стоить ${price3} кредитов`);
            break;
        case 'ямайка':
            console.log(`Доставка на Ямайку будет стоить ${price4} кредитов`);
            break;
        default:
            alert('В вашей стране доставка не доступна');
    }
};