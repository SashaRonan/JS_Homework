var goods = [{
        title: "Товар 1",
        price: 100,
        quantity: 2
    },
    {
        title: "Товар 2",
        price: 350,
        quantity: 1
    },
    {
        title: "Товар 3",
        price: 200,
        quantity: 3
    }
]

for (var i of goods) {
    console.log(i.title + " стоит: " + i.price);
}

function countBasketPrice() {
    var sumBasket = 0;
    for (var item of goods) {
        sumBasket = sumBasket + (item.quantity * item.price);
    }
    return sumBasket;
}

console.log(countBasketPrice());