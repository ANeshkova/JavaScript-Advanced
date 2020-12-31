function circleArea(argument) {

    if (typeof argument !== typeof 3) {

        let type = typeof argument;
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);

    } else {
        let area = Math.PI * argument * argument;
        console.log(area.toFixed(2));
    }
}

circleArea(5);
//circleArea('name');
