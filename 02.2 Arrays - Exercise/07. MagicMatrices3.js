function magicMatrices3(input) {

    let sum = input[0].reduce((a, b) => a + b);

    let cols = input.reduce((acc, cur, i, matrix) => {
        if (!acc[i]) {
            acc[i] = matrix.map((x) => x[i]);
        }
        return acc;
    }, []);

    let row = [...input];

    return row.every(r => r.reduce((a, b) => a + b) === sum) &&
        cols.every(c => c.reduce((a, b) => a + b) === sum);
}

console.log(magicMatrices3([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]));
