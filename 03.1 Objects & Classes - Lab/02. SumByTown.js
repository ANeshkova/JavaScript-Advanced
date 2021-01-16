function sumByTown(input) {

    let townObj = {};

    for (let i = 0; i < input.length; i += 2) {
        
        if (townObj.hasOwnProperty([input[i]])) {
            townObj[input[i]] = townObj[input[i]] + Number(input[i + 1]);
        } else {
            townObj[input[i]] = Number(input[i + 1]);
        }
    }

    console.log(JSON.stringify(townObj));
}

sumByTown(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4']);
sumByTown(['Sofia', '20', 'Varna', '3', 'sofia', '5', 'varna', '4']);
