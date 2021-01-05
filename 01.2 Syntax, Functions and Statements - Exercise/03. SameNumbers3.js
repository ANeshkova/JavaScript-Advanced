function sameNumbers3(num) {

    let str = '' + num;

    if (str === str[0].repeat(str.length)) {
        console.log(true);
    } else {
        console.log(false);
    }

    console.log(str.split('').reduce((a, b) => a + Number(b), 0));
}

sameNumbers3(2222222);
