/*

Pseudocode

1. buat variabel hasil dengan nama 'temp'
2. buat kamus dalam bentuk array dengan nama 'coin'
3. buat perulangan untuk komputasi num dengan 'coin'
4. dan push num dengan 'coin' ke dalam hasil 'temp'

*/

function money_coins(num) {

  let temp = [];
  let coin = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1];

  for(let i = 0; i < coin.length; i++) {
    while (num >= coin[i]) {
      temp.push(coin[i]);
      num -= coin[i];
    }
  }
  return temp
}

console.log(money_coins(1900));
console.log(money_coins(700));