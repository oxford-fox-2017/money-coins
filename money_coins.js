function money_coins(num) {
  let pecahan = [1, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000];
  let result = [];
  for (var i = pecahan.length - 1; i >= 0; i--) {
    while (num >= pecahan[i]) {
      result.push(pecahan[i]);
      num -= pecahan[i];
    }
  }
  return result;
}

console.log(money_coins(74));
console.log(money_coins(10500));
console.log(money_coins(15300));
