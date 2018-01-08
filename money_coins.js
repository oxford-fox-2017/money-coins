function money_coins(num) {
  let arrCoin = [1, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000, 20000, 50000, 100000]
  let arrReceh = []
  let count = 1
  for (let i = arrCoin.length - 1; i >= 0; i--) {
    if (count == 1) {
      while (num > arrCoin[i]) {
        arrReceh.push(arrCoin[i])
        num -= arrCoin[i]
        count++
        i++
      }
    } else {
      while (num >= arrCoin[i]) {
        arrReceh.push(arrCoin[i])
        num -= arrCoin[i]

      }
    }

  }
  console.log(arrReceh)
}

money_coins(5000)
