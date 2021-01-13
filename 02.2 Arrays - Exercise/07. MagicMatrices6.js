function magicMatrices6(input) {

    for (let i = 0; i < input.length; i++) {
        for (let k = 0; k < input.length; k++) {

            let rowSum = input[i].reduce((a, b) => a + b);
            let colSum = 0;

            for (let q = 0; q < input.length; q++) {
                colSum += input[q][k];
            }

            if (rowSum !== colSum) {
                return false;
            }
        }
    }

    return true;
}

console.log(magicMatrices6([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]));
