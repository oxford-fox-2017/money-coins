function money_coins (num) {
  let coin  = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1]
  let res   = []

  for (let i = 0; i < coin.length; i++) {
    while (num % coin[i] < num) {
      // console.log(num % coin[i] + ' < ' + num)
      res.push(coin[i])
      num = num - coin[i]
    }
  }

  return res
}


console.log(money_coins(3500)); // [ 2000, 1000, 500 ]
console.log(money_coins(56832)); // [ 10000, 10000, 10000, 10000, 10000, 5000, 1000, 500, 200, 100, 20, 10, 1, 1 ]
