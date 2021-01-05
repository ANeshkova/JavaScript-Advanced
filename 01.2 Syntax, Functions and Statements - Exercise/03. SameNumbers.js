function sameNumbers(number) {

    let numAsString = number.toString();
    let sum = 0;
    let areSame = true;

    for (let i = 0; i < numAsString.length; i++) {

        if (i < numAsString.length - 1) {
            if (numAsString[i] !== numAsString[i + 1]) {
                areSame = false;
            }
        } else {
            if (numAsString[i] !== numAsString[i]) {
                areSame = false;
            }
        }

        sum += Number(numAsString[i]);
    }

    console.log(areSame);
    console.log(sum);
}

sameNumbers(2222222);
