// function getSum(a, b) {
//     return a + b;
// }

// function getDiff(a, b) {
//     return Math.abs(a - b);
// }

// function getDiv(a, b) {
//     if (a >= b) {
//         c = a / b;
//         c = c.toFixed(2);
//     } else {
//         c = b / a;
//         c = c.toFixed(2);
//     }
//     return c;
// }

// function getMulti(a, b) {
//     return a * b;
// }


function getMath(a, b, operation) {
    switch (operation) {
        case 1:
            return a + b;

        case 2:
            return Math.abs(a - b);

        case 3:
            if (a >= b) {
                c = a / b;
                c = c.toFixed(2);
            } else {
                c = b / a;
                c = c.toFixed(2);
            }
            return c;

        case 4:
            return a * b;

        default:
            alert("Вы ввели неправильное число. Выберите из предложенных.");
    }
}

a = +prompt("Введите значение a: ");
b = +prompt("Введите значение b: ");
operation = +prompt("Выберите, какую операцию хотите выполнить: \n" + "1. Сумма \n" + "2. Разность \n" + "3. Деление \n" + "4. Умножение \n" + "\n(Введите номер операции, который хотите выполнить")

alert ("Результат операции равен: " + getMath(a, b, operation) );