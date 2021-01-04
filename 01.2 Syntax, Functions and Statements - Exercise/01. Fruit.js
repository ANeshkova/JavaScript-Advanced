function fruit(fruit, wightInGrams, pricePerKg) {

    let wightInKg = wightInGrams / 1000;
    let price = pricePerKg * wightInKg;

    console.log(`I need $${price.toFixed(2)} to buy ${wightInKg.toFixed(2)} kilograms ${fruit}.`);
}

fruit('orange', 2500, 1.80);
