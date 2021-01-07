function cookingByNumbers3(input) {

    let number = Number(input[0]);

    for (let i = 1; i < input.length; i++) {

        let command = input[i];

        let numObj = {
            'chop': (num) => num / 2,
            'dice': (num) => Math.sqrt(num),
            'spice': (num) => num + 1,
            'bake': (num) => num * 3,
            'fillet': (num) => num * 0.8
        }

        if (numObj.hasOwnProperty(command)) {
            print(numObj[command](number));
            number = numObj[command](number);
        }
    }

    function print(number) {
        console.log(number);
    }
}

cookingByNumbers3(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);
