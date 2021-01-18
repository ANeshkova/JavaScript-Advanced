function storeCatalogue(input) {

    let obj = {};

    for (const line of input) {
        let [item, price] = line.split(' : ');

        let letter = item[0];

        if (!obj.hasOwnProperty(letter)) {
            obj[letter] = {};
        }
        obj[letter][item] = Number(price);
    }

    let sorted = Array.from(Object.entries(obj))
        .sort((a, b) => a[0].localeCompare(b[0]));

    let secondSort;

    for (const line of sorted) {
        console.log(line[0]);
        secondSort = Array.from(Object.entries(line[1]))
            .sort((a, b) => a[0].localeCompare(b[0]))
            .forEach(a => console.log(`  ${a[0]}: ${a[1]}`));
    }
}

storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);
