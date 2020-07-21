"use strict";

const total = 100;
const ordered = 20;

if (ordered >= total) {
    alert('На складе недостаточно товаров!');
} else {
    alert('Заказ оформлен, с вами свяжется менеджер');
};

// === вариант с alert и ordered = 80 ===============================
// const total = 100; 
// const ordered = 80; 

// if (ordered >= total) {
//     alert('На складе недостаточно товаров!');
// } else {
//     alert('Заказ оформлен, с вами свяжется менеджер');
// };

// === вариант с alert и ordered = 130 ===============================
// const total = 100;
// const ordered = 130;

// if (ordered >= total) {
//     alert('На складе недостаточно товаров!');
// } else {
//     alert('Заказ оформлен, с вами свяжется менеджер');
// };