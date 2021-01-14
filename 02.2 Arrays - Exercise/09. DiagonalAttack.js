function diagonalAttack(input) {

    let matrix = [];

    for (const line of input) {
        let partOfMatrix = [];
        let tokens = line.split(" ");

        for (let i = 0; i < tokens.length; i++) {
            partOfMatrix.push(Number(tokens[i]));
        }

        matrix.push(partOfMatrix);
    }

    let firstDiagonalNumbers = [];
    let secondDiagonalNumbers = [];

    let sumFirst = 0;
    let sumSecond = 0;
    let secondDiagonalRowCounter = matrix.length - 1;

    for (let col = 0; col < matrix[0].length; col++) {
        sumFirst += matrix[col][col];
        firstDiagonalNumbers.push(matrix[col][col]);

        sumSecond += matrix[secondDiagonalRowCounter][col];
        secondDiagonalNumbers.push(matrix[secondDiagonalRowCounter][col]);
        secondDiagonalRowCounter--;
    }

    if (sumSecond == sumFirst) {
        let replaceAll = [];

        for (const line of matrix) {
            let replaced = line.map(a => a = sumFirst);
            replaceAll.push(replaced);
        }

        secondDiagonalRowCounter = replaceAll.length - 1;

        for (let col = 0; col < replaceAll[0].length; col++) {
            replaceAll[col][col] = firstDiagonalNumbers[col];

            replaceAll[secondDiagonalRowCounter][col] = secondDiagonalNumbers[col];
            secondDiagonalRowCounter--;
        }

        for (const line of replaceAll) {
            console.log(line.join(' '));
        }
    } else {
        for (const line of matrix) {
            console.log(line.join(' '));
        }
    }
}

diagonalAttack([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'
]);

diagonalAttack([
    '1 1 1',
    '1 1 1',
    '1 1 0'
]);
