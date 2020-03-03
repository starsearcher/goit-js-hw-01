const ADMIN_PASSWORD = "jqueryismyjam";
let askPassword = prompt("Введите пароль");
let message;
if (askPassword === ADMIN_PASSWORD) {
    message = `Добро пожаловать!`;
} else if (askPassword === null) {
    message = `Отменено пользователем`;
} else {
    message = `Доступ запрещен, неверный пароль!`;
}
alert(`${message}`);