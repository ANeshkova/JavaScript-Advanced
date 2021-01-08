function lastKNumbersSequence(rotation, numBack) {

    let arr = [1];

    for (let i = 1; i < rotation; i++) {

        if (arr.length < numBack) {
            let sum = 0;

            for (const num of arr) {
                sum += num;
            }

            arr.push(sum);

        } else {
            let sum = 0;

            for (let j = arr.length - 1; j >= arr.length - numBack; j--) {
                sum += arr[j];
            }

            arr.push(sum);
        }
    }

    console.log(arr.join(' '));
}

lastKNumbersSequence(6, 3);
