function townsToJSON2(input) {

    let tableHead = input.splice(0, 1);
    let [town, latitude, longitude] = tableHead[0].split('|').filter(Boolean);
    let cities = [];

    for (const line of input) {
        let [first, second, third] = line.split('|').filter(Boolean);

        let townObj = {
            [town.trim()]: first.trim(),
            [latitude.trim()]: Number(Number(second).toFixed(2)),
            [longitude.trim()]: Number(Number(third).toFixed(2))
        };

        cities.push(townObj);
    }

    console.log(JSON.stringify(cities));
}

townsToJSON2([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]);
