let input;
let total = 0;
do {
    input = prompt(`Введите число:`);
    console.log(Number(input));
    total += Number(input);
    console.log(total);
} while (input !== null);
alert(`Общая сумма чисел равна ${total}`);