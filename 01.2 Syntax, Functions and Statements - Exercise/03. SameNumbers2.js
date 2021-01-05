function sameNumbers2(input) {

    numberArr = input.toString().split("");
    let sum = numberArr.reduce((a, b) => Number(a) + Number(b));

    console.log(sum == Number(numberArr[0]) * numberArr.length);
    console.log(sum);
}

sameNumbers2(2222222);
