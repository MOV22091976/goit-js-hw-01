"use strict";

// const userChoice = prompt('Укажите страну доставки:', '');
// const isChina = 'Китай';
// const isChili = 'Чили';
// const isAustralia = 'Австралия';
// const isIndia = 'Индия';
// const isJamaika = 'Ямайка';
// let price;

// switch (userChoice.toUpperCase()) {
//     case isChina.toUpperCase():
//         price = 100;
//         alert(`Доставка в ${isChina} будет стоить ${price} кредитов`);
//         break;
//     case isChili.toUpperCase():
//         price = 250;
//         alert(`Доставка в ${isChili} будет стоить ${price} кредитов`);
//         break;
//     case isAustralia.toUpperCase():
//         price = 170;
//         alert(`Доставка в ${isAustralia} будет стоить ${price} кредитов`);
//         break;
//     case isIndia.toUpperCase():
//         price = 80;
//         alert(`Доставка в ${isIndia} будет стоить ${price} кредитов`);
//         break;
//     case isJamaika.toUpperCase():
//         price = 120;
//         alert(`Доставка в ${isJamaika} будет стоить ${price} кредитов`);
//         break;
//     default:
//         alert('В вашей стране доставка не доступна');
// };
// console.log(price);

// === вариант просто так = игрался = баловался =================================
// const isUserChoiceLand = prompt('Введите страну доставки товара:');
// const isChina = 'Китай';
// const isChile = 'Чили';
// const isAustralia = 'Австралия';
// const isIndia = 'Индия';
// const isJamaica = 'Ямайка';

// if (!isUserChoiceLand) {
//     alert('Отменено пользователем')
// } else if (isUserChoiceLand.toLowerCase() === isChina.toLowerCase()) {
//     alert(`Доставка в ${isChina} будет стоить 100 кредитов`);
// } else if (isUserChoiceLand.toLowerCase() === isChile.toLowerCase()) {
//     alert(`Доставка в ${isChile} будет стоить 250 кредитов`);
// } else if (isUserChoiceLand.toLowerCase() === isAustralia.toLowerCase()) {
//     alert(`Доставка в ${isAustralia} будет стоить 170 кредитов`);
// } else if (isUserChoiceLand.toLowerCase() === isIndia.toLowerCase()) {
//     alert(`Доставка в ${isIndia} будет стоить 80 кредитов`);
// } else if (isUserChoiceLand.toLowerCase() === isJamaica.toLowerCase()) {
//     alert(`Доставка в ${isJamaica} будет стоить 120 кредитов`);
// };

// switch (isUserChoiceLand.toLowerCase()) {
//     case isChina.toLowerCase():
//         alert(`Доставка в ${isChina} будет стоить 100 кредитов`);
//         break;
//     case isChile.toLowerCase():
//         alert(`Доставка в ${isChile} будет стоить 250 кредитов`);
//         break;
//     case isAustralia.toLowerCase():
//         alert(`Доставка в ${isAustralia} будет стоить 170 кредитов`);
//         break;
//     case isIndia.toLowerCase():
//         alert(`Доставка в ${isIndia} будет стоить 80 кредитов`);
//         break;
//     case isJamaica.toLowerCase():
//         alert(`Доставка в ${isJamaica} будет стоить 120 кредитов`);
//         break;
//     default:
//         alert('Отменено пользователем')
// };