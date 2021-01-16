function populationInTowns(input) {

    let townObj = {};

    for (const towns of input) {
        let [townName, population] = towns.split(' <-> ');

        if (townObj.hasOwnProperty(townName)) {
            townObj[townName] += Number(population);
        } else {
            townObj[townName] = Number(population);
        }
    }

    for (const key in townObj) {
        console.log(key + ' : ' + townObj[key]);
    }
}

populationInTowns([
    'Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
]);
