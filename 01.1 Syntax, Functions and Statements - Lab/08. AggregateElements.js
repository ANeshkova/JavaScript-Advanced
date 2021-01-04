function aggregateElements(input) {

    let sum = 0;
    let sumInverseValues = 0;
    let concat = '';

    for (let i = 0; i < input.length; i++) {
        sum += input[i];
        sumInverseValues += 1 / input[i];
        concat += input[i];
    }

    console.log(sum);
    console.log(sumInverseValues);
    console.log(concat);
}

aggregateElements([2, 4, 8, 16]);
