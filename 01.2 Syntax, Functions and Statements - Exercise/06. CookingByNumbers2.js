function cookingByNumbers2(input) {

    let num = +input[0];

    let data = {
      chop: num => num / 2,
      dice: num => Math.sqrt(num, 2),
      spice: num => num + 1,
      bake: num => num * 3,
      fillet: num => num * 0.80
    }

    for (let i = 1; i < input.length; i++) {
      num = data[input[i]](num);
      console.log(num);
    }
}

cookingByNumbers2(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);
