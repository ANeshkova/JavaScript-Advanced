function tickets3(data, criteria) {
    let arr = data.map(el => {
        el = el.split('|');
        const obj = {                  //const obj = {}
            destination: el[0],        //obj.destination = el[0];
            price: Number(el[1]),      //obj.price = Number(el[1]);
            status: el[2]              //obj.status = el[2];
        }
        return obj;
    });

    return criteria == 'price'
        ? arr.sort((a, b) => a[criteria] - b[criteria])
        : arr.sort((a, b) => a[criteria].localeCompare(b[criteria]));
}

console.log(tickets3(
    ['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'status'
));
