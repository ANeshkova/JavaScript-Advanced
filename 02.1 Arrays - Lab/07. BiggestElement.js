function biggestElement(input) {

    let arr = [];

    for (const line of input) {
        arr = arr.concat(line);
    }

    arr.sort((a, b) => a - b);
    console.log(arr.pop());
}

biggestElement([
    [20, 50, 10],
    [8, 33, 145]
]);
