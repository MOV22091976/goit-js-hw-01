"use strict";


const userChoice = prompt('Укажите страну доставки:', '');
let price;
let message;

if (userChoice === null) {
    alert('Отменено пользователем');
} else {
    switch (userChoice.toLowerCase()) {
        case 'китай':
            price = 100;
            message = `Доставка в Китай будет стоить ${price} кредитов`;
            break;
        case 'чили':
            price = 250;
            message = `Доставка в Чили будет стоить ${price} кредитов`;
            break;
        case 'австралия':
            price = 170;
            message = `Доставка в Австралию будет стоить ${price} кредитов`;
            break;
        case 'индия':
            price = 80;
            message = `Доставка в Индию будет стоить ${price} кредитов`;
            break;
        case 'ямайка':
            price = 120;
            message = `Доставка на Ямайку будет стоить ${price} кредитов`;
            break;
        default:
            alert('В вашей стране доставка не доступна');
    }
}
console.log(message);