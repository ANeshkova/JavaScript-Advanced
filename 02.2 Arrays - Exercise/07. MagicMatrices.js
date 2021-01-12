function magicMatrices(input) {

    let firstRow = input.slice(0, 1);

    let checkSum = 0;

    for (const firstArr of firstRow) {
        for (const num of firstArr) {
            checkSum += num;
        }
    }

    let isMagic = true;

    for (let row = 0; row < input.length; row++) {
        let sum = 0;

        for (let col = 0; col < input[row].length; col++) {
            sum += input[row][col];
        }

        if (checkSum != sum) {
            isMagic = false;
            break;
        }
    }

    for (let col = 0; col < input[0].length; col++) {
        let sum = 0;

        for (let row = 0; row < input.length; row++) {
            sum += input[row][col];
        }

        if (checkSum != sum) {
            isMagic = false;
            break;
        }
    }

    console.log(isMagic);
}

magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]);
