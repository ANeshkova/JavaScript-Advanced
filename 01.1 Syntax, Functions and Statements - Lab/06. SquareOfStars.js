function squareOfStars(a) {

    if (a === undefined) {
        a = 5;
    }

    let result = '';

    for (let i = 1; i <= a; i++) {

        for (let j = 1; j <= a; j++) {
            result += '* ';
        }

        console.log(result);
        result = '';
    }
}

squareOfStars(1);
