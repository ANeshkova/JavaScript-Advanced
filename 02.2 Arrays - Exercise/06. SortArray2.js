function sortArray2(input) {

    function sort(a, b) {
        let res = a.length - b.length;
        return res === 0 ? a.localeCompare(b) : res;
    }

    return input.sort(sort).join("\n");
}

console.log(sortArray2([
    'test',
    'Deny',
    'omen',
    'Default'
]));
