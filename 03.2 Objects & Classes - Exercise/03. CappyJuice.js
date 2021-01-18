function cappyJuice(input) {

    let objBottle = {};
    let objQuantity = {};

    for (const line of input) {
        let [item, quantity] = line.split(' => ');
        quantity = Number(quantity);

        if (objQuantity.hasOwnProperty(item)) {
            objQuantity[item] += quantity;
            let newQuantity = objQuantity[item];
            checkQuantity(newQuantity, item);
        } else {
            objQuantity[item] = quantity;
            checkQuantity(quantity, item);
        }
    }

    for (const key in objBottle) {
        console.log(`${key} => ${objBottle[key]}`);
    }

    function checkQuantity(quantity, item) {
        if (quantity >= 1000) {
            let bottle = parseInt(quantity / 1000);
            objQuantity[item] -= bottle * 1000;
            if (objBottle.hasOwnProperty(item)) {
                objBottle[item] += bottle;
            }
            else {
                objBottle[item] = bottle;
            }
        }
    }
}

cappyJuice([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
]);
