function magicMatrices4(input) {

    let result = [];

    for (let row = 0; row < input.length; row++) {
        result.push(input[row].map(Number).reduce((a, b) => a + b, 0));
    }

    let resultTwo = input.reduce(function (r, a) {
        a.forEach(function (b, i) {
            r[i] = (r[i] || 0) + b;
        });
        return r;
    }, []);

    console.log(new Set(result.concat(resultTwo)).size === 1);
}

magicMatrices4([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]);
