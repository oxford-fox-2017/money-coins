function money_coins (num) {
  // your implementation code here
  const coins = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1]
  let answer = [];
  for (let i = 0; i < coins.length; i++) {
    const element = coins[i];
    if (num >= element) {
      answer.push(element);
      num -= element;
      i = -1;
    }
  }
  return answer;
}

//sweet sweet tests <3 
console.log(money_coins(95000));
console.log(money_coins(10000));
console.log(money_coins(8000));
console.log(money_coins(800));