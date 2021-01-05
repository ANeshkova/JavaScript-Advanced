function greatestCommonDivisorGCD3(num1, num2) {

    let currentNum;

    while (num2 !== 0) {
        currentNum = num1 % num2;
        num1 = num2;
        num2 = currentNum;
    }

    console.log(num1);
}

greatestCommonDivisorGCD3(15, 5);
