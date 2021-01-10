function addAndRemoveElements(input) {

    let count = 0;
    let arr = [];

    for (const command of input) {
        if (command == 'add') {
            count++;
            arr.push(count);
        } else {
            arr.pop();
            count++;
        }
    }

    if (arr.length == 0) {
        console.log('Empty');
    } else {
        console.log(arr.join('\n'));
    }
}

addAndRemoveElements([
    'add',
    'add',
    'remove',
    'add',
    'add'
]);
