function cookingByNumbers([number, ...comand]) {

    number = Number(number);

    const functions = {
        chop: x => x / 2,
        dice: x => Math.sqrt(x),
        spice: x => x + 1,
        bake: x => x * 3,
        fillet: x => x * 0.8
    };

    comand.forEach(function (element) {
        let result = functions[element](number);
        console.log(result);
        number = result;
    });
}

cookingByNumbers(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
