function smallestTwoNumbers(input) {

    let smalToBig = input.sort((a, b) => a - b);
    let twoSmallestNumbers = smalToBig.slice(0, 2)
    console.log(twoSmallestNumbers.join(' '));
}

smallestTwoNumbers([30, 15, 50, 5]);
