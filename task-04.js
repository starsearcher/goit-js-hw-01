let credits = 23580;
console.log(`Счет ${credits}`);
const pricePerDroid = 16;

let droidQuantity = prompt('Сколько дроидов вы хотите купить?');
console.log(`Дроиды в заказе ${droidQuantity}`);
let totalPrice;
let creditsLeft;

droidQuantity = Number(droidQuantity);
if (droidQuantity > 0) {
    totalPrice = droidQuantity * pricePerDroid;
    console.log(`Сумма заказа ${totalPrice}`);
} else if (droidQuantity <= 0) {
    console.log(`Пользователь ввел неположительное значение`);
    alert(`Введите положительное число!`);
} else if (Number.isNaN(Number(droidQuantity))) {
    console.log(`Пользователь ввел не число`);
    alert(`Неверный ввод! Пожалуйста, переоформите заказ.`);
} else if (droidQuantity === null) {
    console.log(`Отменено пользователем!`);
}

creditsLeft = credits - totalPrice;

if (creditsLeft >= 0) {
    alert(
        `Вы купили ${droidQuantity} дроидов, на счету осталось ${creditsLeft} кредитов`,
    );
    credits = creditsLeft;
} else if (creditsLeft < 0) {
    console.log(`Недостаточно средств на счету!`);
    alert(`Ваших средств недостаточно`);
    credits = credits;
}

console.log(`Баланс по счету ${credits}`);