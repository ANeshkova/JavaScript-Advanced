function magicMatrices5(input) {

    let sumOfAllRows = rowSum(input);
    let sumOfAllColumns = columnSum(input);

    if (sumOfAllRows && sumOfAllColumns) {
        console.log('true');
    } else {
        console.log('false');
    }

    function rowSum(input) {
        let result = [];

        input.forEach(function (element) {
            let sum = element.reduce((a, b) => a + b, 0);
            result.push(sum);
        });

        return result.every(function (element) {
            return element === result[0];
        });
    }

    function columnSum(input) {
        let result = [];

        for (let i = 0; i < input.length; i++) {
            let sum = 0;

            for (let j = 0; j < input.length; j++) {
                sum += input[j][i];
            }

            result.push(sum);
        }

        return result.every(function (element) {
            return element === result[0];
        });
    }
}

magicMatrices5([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]);
