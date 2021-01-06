function timeToWalk(steps, footprintInMeters, speedInKmH) {

    let distanceInMeters = steps * footprintInMeters;
    let time = Math.round(distanceInMeters / speedInKmH * 3.6);
    time += Math.floor(distanceInMeters / 500) * 60;

    const seconds = time % 60;
    time -= seconds;
    time /= 60;

    const minutes = time % 60;
    time -= minutes;
    time /= 60;

    const hours = time;

    console.log(`${pad(hours)}:${pad(minutes)}:${pad(seconds)}`);

    function pad(num) {
        return ('0' + num).slice(-2);
    }
}

timeToWalk(4000, 0.60, 5);
