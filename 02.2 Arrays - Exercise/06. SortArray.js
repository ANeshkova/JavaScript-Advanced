function sortArray(input) {

    let sort = input.sort((a, b) => a.length - b.length || a.localeCompare(b));

    console.log(sort.join('\n'));
}

sortArray([
    'test',
    'Deny',
    'omen',
    'Default'
]);
