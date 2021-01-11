function rotateArray2(input) {

    let countOfRotation = Number(input.pop());

    for (let i = 0; i < countOfRotation % 100; i++) {
        input.unshift(input.pop());
    }

    console.log(input.join(' '));
}

rotateArray2([
    '1',
    '2',
    '3',
    '4',
    '2'
]);
