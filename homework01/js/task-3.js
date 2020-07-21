"use strict";

const ADMIN_PASSWORD = 'qwe'
const isUserPassword = prompt('Введите пароль');
let message;

if (isUserPassword === null || isUserPassword === '') {
    message = 'Отменено пользователем';
} else if (isUserPassword === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
} else {
    message = 'Доступ запрещен, неверный пароль!';
};

alert(message);