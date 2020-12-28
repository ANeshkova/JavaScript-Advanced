function stringLength(firstWord, secondWord, thirdWord) {

    let wordsLength = (firstWord + secondWord + thirdWord).length;

    console.log(wordsLength);
    console.log(Math.floor(wordsLength / 3));
}

stringLength('chocolate', 'ice cream', 'cake');
