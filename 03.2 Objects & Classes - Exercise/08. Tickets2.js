function tickets2(arrTickets, sortingCriterion) {

    class Ticket {
        constructor(descriptor) {
            let [destinationName, price, status] = descriptor.split('|');
            this.destination = destinationName;
            this.price = Number(price);
            this.status = status;
        }
    }

    function comparator(a, b) {
        try {
            return a[sortingCriterion].localeCompare(b[sortingCriterion]);
        } catch {
            return a[sortingCriterion] - b[sortingCriterion];
        }
    };

    return arrTickets.map(t => new Ticket(t)).sort(comparator);
}

console.log(tickets2(
    ['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
));