function townsToJSON3(input) {

    let [town, latitude, longitude] = input[0].split(' ').join('').split('|').filter(Boolean);

    let towns = [];
    for (let i = 1; i < input.length; i++) {
        let current = input[i].split('|').filter(Boolean);

        let townName = current[0].trim();
        let townLatitude = Number(Number(current[1]).toFixed(2));
        let townLongitude = Number(Number(current[2]).toFixed(2));

        towns.push({
            [town]: townName,
            [latitude]: townLatitude,
            [longitude]: townLongitude
        });
    }

    console.log(JSON.stringify(towns));
}

townsToJSON3([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]);
