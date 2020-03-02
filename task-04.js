const credits = 23580;
console.log(`Счет ${credits}`);
const pricePerDroid = 16;

let droidQuantity = prompt("Сколько дроидов вы хотите купить?");
console.log(`Дроиды в заказе ${droidQuantity}`);

let totalPrice = droidQuantity * pricePerDroid;
if (droidQuantity > 0) {
    console.log(`Сумма заказа ${totalPrice}`);
} else if (droidQuantity === null) {
    console.log(`Отменено пользователем!`);
} else { console.log(`Число невалидно`); }

let creditsLeft = credits - totalPrice;
console.log(`Баланс по счету ${creditsLeft}`);
if (creditsLeft < 0) {
    console.log(`Недостаточно средств на счету!`);
} else { alert(`Вы купили ${droidQuantity} дроидов, на счету осталось ${creditsLeft} кредитов`); }