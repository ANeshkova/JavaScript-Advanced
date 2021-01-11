function extractIncreasingSubsequenceFromArray(input) {

    return input.reduce((acc, curr) => {
        let max = Math.max(...acc)

        if (curr >= max) {
            acc.push(curr);
        }

        return acc;
    }, [])
        .join('\n');
}

console.log(extractIncreasingSubsequenceFromArray([
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
