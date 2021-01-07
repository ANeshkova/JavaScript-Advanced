function calorieObject(input) {

    let object = {};

    for (let i = 0; i < input.length; i += 2) {
        const propName = input[i];
        const value = Number(input[i + 1]);

        object[propName] = value;
    }

    console.log(object);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
