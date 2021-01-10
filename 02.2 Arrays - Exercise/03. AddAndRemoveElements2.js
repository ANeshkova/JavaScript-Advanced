function addAndRemoveElements2(input) {

    let array = [];
    let number = 1;

    input.forEach((command, index) => {
        command === 'add' ? array.push(number) : array.pop();
        number++;
    })

    array.length > 0 ? console.log(array.join('\n')) : console.log('Empty');
}

addAndRemoveElements2([
    'add',
    'add',
    'remove',
    'add',
    'add'
]);
