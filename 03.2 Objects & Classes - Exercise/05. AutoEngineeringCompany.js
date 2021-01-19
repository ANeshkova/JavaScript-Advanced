function autoEngineeringCompany(input) {

    let cars = {};

    for (const line of input) {
        let [carBrand, carModel, producedCars] = line.split(' | ');
        producedCars = Number(producedCars);

        if (!cars.hasOwnProperty(carBrand)) {
            cars[carBrand] = {};
        }

        if (cars.hasOwnProperty(carBrand)) {
            if (cars[carBrand].hasOwnProperty(carModel)) {
                cars[carBrand][carModel] += producedCars;
            } else {
                cars[carBrand][carModel] = producedCars;
            }
        }
    }

    for (const key in cars) {
        console.log(key)
        for (const model in cars[key]) {
            console.log(`###${model} -> ${cars[key][model]}`)
        }
    }
}

autoEngineeringCompany([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);
