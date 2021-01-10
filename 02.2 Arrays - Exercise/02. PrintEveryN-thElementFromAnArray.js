function printEveryNthElementFromAnArray(input) {

    let step = Number(input.pop());
    let numberArray = [];

    for (let i = 0; i < input.length; i += step) {
        numberArray.push(input[i]);
    }

    console.log(numberArray.join('\n'));
}

printEveryNthElementFromAnArray([
    '5',
    '20',
    '31',
    '4',
    '20',
    '2'
]);
