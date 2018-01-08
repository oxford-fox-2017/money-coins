function convertToCoin(cash){
  let money = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1]
  let cashBack = []
  while(cash > 0) {
  for (var i = 0; i < money.length; i++) {
    if (cash >= money[i]) {
      cash -= money[i]
      cashBack.push(money[i])
      break
      }
    }
  }
  return cashBack
}





console.log(convertToCoin(50000));
console.log(convertToCoin(7000));
console.log(convertToCoin(10000));
console.log(convertToCoin(26500));
