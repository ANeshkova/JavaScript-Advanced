function extractIncreasingSubsequenceFromArray2(input) {

    let bigger = input[0];
    let result = [];

    input.map(x => {
        if (x >= bigger) {
            result.push(x);
            bigger = x;
        }
    });

    return result.join('\n');
}

console.log(extractIncreasingSubsequenceFromArray2([
    1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24
]));
