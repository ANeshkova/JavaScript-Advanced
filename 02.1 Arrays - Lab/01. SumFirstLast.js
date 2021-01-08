function sumFirstLast(input) {

    let firstNum = Number(input.slice(0, 1));
    let secondNum = Number(input.slice(-1));

    let sum = firstNum + secondNum;

    console.log(sum);
}

sumFirstLast(['20', '30', '40']);
