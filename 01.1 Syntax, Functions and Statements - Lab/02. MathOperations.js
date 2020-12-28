function mathOperations(num1, num2, operator) {

    let operation = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
        '%': (a, b) => a % b,
        '**': (a, b) => a ** b
    };

    console.log(operation[operator](num1, num2));
}

mathOperations(5, 6, '+');
