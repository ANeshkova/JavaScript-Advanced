function greatestCommonDivisorGCD(num1, num2) {

    let greatestDivisor = 0;

    if (num1 > num2) {
        for (let i = 1; i <= num2; i++) {

            if (num1 % i == 0 && num2 % i == 0) {
                greatestDivisor = i;
            }
        }
    } else {
        for (let i = 1; i <= num2; i++) {

            if (num1 % i == 0 && num2 % i == 0) {
                greatestDivisor = i;
            }
        }
    }

    console.log(greatestDivisor);
}

greatestCommonDivisorGCD(15, 5);
