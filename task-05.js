let delivery = prompt(`В какую страну вы хотите оформить доставку?`);
let price;
if (delivery === null) {
    console.log('Отменено пользователем');
} else {
    delivery = delivery.toLowerCase();
    switch (delivery) {
        case 'китай':
            price = 100;
            break;
        case 'чили':
            price = 250;
            break;
        case 'австралия':
            price = 170;
            break;
        case 'индия':
            price = 80;
            break;
        case 'ямайка':
            price = 120;
            break;
        default:
            alert('В вашей стране доставка не доступна');
    }
    delivery = delivery[0].toUpperCase() + delivery.substr(1);
    if (price) {
        let amount;
        do {
            amount = prompt('Какое количество товара хотите заказать?', '1');
            if (Number.isNaN(Number(amount))) {
                alert('Введите число');
            } else {
                if (amount) {
                    alert(
                        `Доставка в ${delivery} будет стоить ${price * amount} кредитов`,
                    );
                }
                break;
            }
        } while (amount !== null);
        if (amount === null) {
            alert('Отменено пользователем!');
        }
    }
}