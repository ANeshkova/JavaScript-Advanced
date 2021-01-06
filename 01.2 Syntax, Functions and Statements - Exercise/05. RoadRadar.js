function roadRadar([speed, area]) {

    let limit = 0;

    switch (area) {
        case 'motorway':
            limit = 130;
            break;
        case 'interstate':
            limit = 90;
            break;
        case 'city':
            limit = 50;
            break;
        case 'residential':
            limit = 20;
            break;
    }

    let overLimit = speed - limit;

    if (overLimit > 40) {
        console.log('reckless driving');

    } else if (overLimit > 20) {
        console.log('excessive speeding');

    } else if (overLimit > 0) {
        console.log('speeding');
    }
}

roadRadar([21, 'residential']);
