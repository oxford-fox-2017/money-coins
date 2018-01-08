function convertToCoin(num) {
  // your implementation code here
  var result = 0;
  var arr = [];
  var money = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1];
  
  for(var i = 0; i < money.length; i++) {
    while(num%money[i] < num) {
      arr.push(money[i]);
      num -= money[i];
    }
  }
  return arr;
}

convertToCoin(25524);
