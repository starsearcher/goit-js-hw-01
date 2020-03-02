const total = 100;
console.log(`На складе ${total}" единиц товара`);
let ordered = prompt("Введите количество единиц товара в заказе:");
console.log(ordered);
if ((ordered <= total) && (ordered > 0)) {
    alert(`Заказ оформлен, с вами свяжется менеджер`);
} else if ((ordered > total) && (ordered > 0)) { alert(`Недостаточно товаров на складе`); } else { alert(`Введено неверное значение`) }