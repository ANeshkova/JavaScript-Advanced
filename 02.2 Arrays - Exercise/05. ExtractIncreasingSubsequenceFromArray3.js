function extractIncreasingSubsequenceFromArray3(input) {

    let extracted = [input.shift()]

    input.filter(number => {
        let biggest = Math.max(...extracted);
        number >= biggest ? extracted.push(number) : 'pass';
    })

    console.log(extracted.join('\n'));
}

extractIncreasingSubsequenceFromArray3([
    1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24
]);
