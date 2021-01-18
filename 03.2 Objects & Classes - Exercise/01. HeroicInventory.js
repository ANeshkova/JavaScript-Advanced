function heroicInventory(input) {

    let arrOfObj = [];

    for (const heroe of input) {
        let tokens = heroe.split(" / ");

        let name = tokens[0];
        let level = Number(tokens[1]);
        let items = [];

        if (tokens.length > 2) {
            items = tokens[2].split(", ");
        }

        arrOfObj.push({ name, level, items });
    }

    console.log(JSON.stringify(arrOfObj));
}

heroicInventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);
