function rotateArray3(array = []) {

    let times = Number(array.pop());
    times >= 10 ? times = times % 10 : 'pass';

    for (let time = 1; time <= times; time++) {
        array.unshift(array.pop());
    }

    console.log(array.join(' '));
}

rotateArray3([
    '1',
    '2',
    '3',
    '4',
    '2'
]);
