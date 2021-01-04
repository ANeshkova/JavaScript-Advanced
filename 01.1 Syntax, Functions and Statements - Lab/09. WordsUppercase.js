function wordsUppercase(string) {

    let regex = /[\w]+/g;
    let matched = string.match(regex);
    let upperCase = [];

    for (const str of matched) {

        upperCase.push(str.toUpperCase());
    }

    console.log(upperCase.join(', '));
}

wordsUppercase('Hi, how are you?');
