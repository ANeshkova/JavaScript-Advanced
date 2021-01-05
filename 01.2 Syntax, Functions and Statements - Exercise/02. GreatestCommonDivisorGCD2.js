function greatestCommonDivisorGCD2(num1, num2) {

    let smallerNum = Math.min(Number(num1), Number(num2));
    let biggerNum = Math.max(Number(num1), Number(num2));
    
    let gcd = 1;

    for (let i = smallerNum; i >= 1; i--) {
        if (biggerNum % i === 0 && smallerNum % i === 0 && i > gcd) {
            gcd = i;
        }
    }

    console.log(gcd);
}

greatestCommonDivisorGCD2(15, 5);
