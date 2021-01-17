class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(p1, p2) {
        //return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
        //
        let a = p1.x - p2.x;
        let b = p1.y - p2.y;

        let c = Math.sqrt(a * a + b * b);
        return c;
        //
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
