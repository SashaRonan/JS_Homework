// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.

function getSum(a, b) {
    return a + b;
}

function getDiff(a, b) {
    return Math.abs(a - b);
}

function getDiv(a, b) {
    if (a >= b) {
        c = a / b;
        c = c.toFixed(2);
    } else {
        c = b / a;
        c = c.toFixed(2);
    }
    return c;
}

function getMulti(a, b) {
    return a * b;
}

a = +prompt("Введите значение a: ");
b = +prompt("Введите значение b: ");

alert("Вы ввели числа: " + a + " и " + b + "\n" + "Сумма введеных чисел равна: " + getSum(a, b) + "\nРазность введеных чисел равна: " + getDiff(a, b) + "\nЧастное введеных чисел равно: " + getDiv(a, b) + "\nПроизведение введеных чисел равно: " + getMulti(a, b));