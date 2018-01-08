'use strict'

let pecahan    = [1, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000]
let arrPecahan = []

function money_coins (num) {
  if (num == 0) {
    return arrPecahan
  } else {
    for (let i = pecahan.length - 1; i >= 0; i--) {
      if (num >= pecahan[i]) {
        arrPecahan.push(pecahan[i])
        return money_coins(num - pecahan[i])
      }
    }
  }
}

console.log(money_coins(120023));
