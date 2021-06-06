// 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15. Дополнительное задание. Сделайте решение вторым способом, используя рекурсию.

//var a(parseInt(Math.random() * 16));

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

a = getRandom(0, 15);

if (a == 15) {
    alert("Рандомное число равно 15, поэтому выводим только одно число");
    alert("15");
} else {
    alert("Рандомное число равно: " + a + ". \n Поэтому выводим все значения от " + a + " до 15");
    switch (a) {
        case 0:
            document.write(a++ + " \n");
        case 1:
            document.write(a++ + " \n");
        case 2:
            document.write(a++ + " \n");
        case 3:
            document.write(a++ + " \n");
        case 4:
            document.write(a++ + " n");
        case 5:
            document.write(a++ + " \n");
        case 6:
            document.write(a++ + " \n");
        case 7:
            document.write(a++ + " \n");
        case 8:
            document.write(a++ + " \n");
        case 9:
            document.write(a++ + " \n");
        case 10:
            document.write(a++ + " \n");
        case 11:
            document.write(a++ + " \n");
        case 12:
            document.write(a++ + " \n");
        case 13:
            document.write(a++ + " \n");
        case 14:
            document.write(a++ + " \n");
        case 15:
            document.write(a + " \n");
            break;
    }
}

// не сообразил, как без циклов сделать код компактным красивым и аккуратным.