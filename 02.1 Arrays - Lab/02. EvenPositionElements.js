function evenPositionElements(input) {

    let stringNum = '';

    for (let i = 0; i < input.length; i += 2) {
        stringNum += (input[i] + ' ');
    }

    console.log(stringNum);
}

evenPositionElements(['20', '30', '40']);
