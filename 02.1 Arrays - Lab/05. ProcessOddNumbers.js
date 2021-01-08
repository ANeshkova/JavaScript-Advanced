function processOddNumbers(input) {

    let arr = [];

    for (let i = 1; i < input.length; i += 2) {
        arr.push(input[i]);
    }

    let doubledReversed = arr.reverse().map(a => a * 2);

    console.log(doubledReversed.join(' '));
}

processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);
