"use strict";

const credits = 23580;
const pricePerDroid = 3000;
const isBuyOrder = prompt('Сколько дроидов хотите купить?', '');

if (isBuyOrder === null) {
    alert('Отменено пользователем!');
} else {
    const totalPrice = isBuyOrder * pricePerDroid
    if (totalPrice <= credits) {
        alert(`Вы купили ${isBuyOrder} дроидов, на счету осталось ${credits - totalPrice} кредитов.`);
    } else {
        alert('Недостаточно средств на счету!')
    }
}