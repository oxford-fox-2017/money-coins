function money_coins (num) {
  // your implementation code here
  let coins = [1, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000]
  let tampung = [];

  for(let i = coins.length-1; i >= 0; i--){
    while(num >= coins[i]){
      tampung.push(coins[i])
      num -= coins[i] 
    }
  }
  return tampung
}

console.log(money_coins(5002))