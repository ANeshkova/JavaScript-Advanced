function squareOfStars2(a) {

    if (a === undefined) {
        a = 5;
    }

    console.log(`${"* ".repeat(a) + '\n'}`.repeat(a));
}

squareOfStars2(2);
