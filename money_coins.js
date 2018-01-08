function money_coins (num) {
  // your implementation code here
  var result = [];
  var coinMoney = [10000,5000,2000,1000,500,200,100,50,20,10,1];

  for(var i = 0; i <= coinMoney.length; i++){
    while (num >= coinMoney[i]) {
      result.push(coinMoney[i]);
      num -= coinMoney[i];
    }
  }
  return result;
}

console.log(money_coins(14213));
console.log(money_coins(32131));
console.log(money_coins(23131));
console.log(money_coins(43131));
console.log(money_coins(413));
