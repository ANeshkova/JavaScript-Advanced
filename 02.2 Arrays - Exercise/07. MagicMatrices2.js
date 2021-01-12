function magicMatrices2(input) {

    function sumRow(row) {
        return row.reduce((a, b) => a + b);
    }

    const transposedMatrix = input.map((col, i) => input.map(row => row[i]));

    const firstRowSum = sumRow(input[0]);
    let magickMatrix = true;

    for (let i = 0; i < input.length; i++) {
        if (sumRow(input[i]) !== firstRowSum || sumRow(transposedMatrix[i]) !== firstRowSum) {
            magickMatrix = false;
            break;
        }
    }

    console.log(magickMatrix)
}

magicMatrices2([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]);
