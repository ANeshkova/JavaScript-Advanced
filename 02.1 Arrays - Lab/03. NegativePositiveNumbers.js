function negativePositiveNumbers(input) {

    let arr = [];

    for (const element of input) {
        if (element < 0) {
            arr.unshift(element);
        } else {
            arr.push(element);
        }
    }

    for (const number of arr) {
        console.log(number);
    }
}

negativePositiveNumbers([3, -2, 0, -1]);
