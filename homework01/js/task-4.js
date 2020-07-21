"use strict";

const credits = 23580;
const pricePerDroid = 3000;
const isBuyOrder = prompt('Сколько дроидов хотите купить?', '');
let totalPrice = 0;

if (isBuyOrder === null || isBuyOrder === '') {
    alert('Отменено пользователем!');
} else if (isBuyOrder * pricePerDroid <= credits) {
    totalPrice = isBuyOrder * pricePerDroid;
    console.log(totalPrice);
    alert(`Вы купили ${isBuyOrder} дроидов, на счету осталось ${credits - totalPrice} кредитов.`);
} else {
    alert('Недостаточно средств на счету!');
};