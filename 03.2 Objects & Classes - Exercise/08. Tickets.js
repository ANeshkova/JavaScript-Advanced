function tickets(arrTickets, sortingCriterion) {

    class Ticket {
        constructor(descriptor) {
            let [destinationName, price, status] = descriptor.split('|');
            this.destination = destinationName;
            this.price = Number(price);
            this.status = status;
        }
    }

    const comparator = {
        destination: (a, b) => a.destination.localeCompare(b.destination),
        price: (a, b) => a - b,
        status: (a, b) => a.status.localeCompare(b.status)
    };

    return arrTickets.map(t => new Ticket(t)).sort(comparator[sortingCriterion]);
}

console.log(tickets(
    ['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
));
