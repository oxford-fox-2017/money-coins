var coin = [1, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000];

function converToCoin (num) {
  var result = [];
  while(num > 0) {
    var sortir = coin.filter( library => num >= library );
    var target = sortir[sortir.length-1];
    
    result.push(target);
    num = num - target;
  }
  
  return result.join();
}


console.log(converToCoin(21));    // 20,1
console.log(converToCoin(80));    // 50,20,10
console.log(converToCoin(254));   // 200,50,1,1,1,1
console.log(converToCoin(1697));  // 1000,500,100,50,20,20,1,1,1,1,1,1,1
console.log(converToCoin(5348));  // 5000,200,100,20,20,1,1,1,1,1,1,1,1
console.log(converToCoin(18525)); // 10000,5000,2000,1000,500,20,1,1,1,1,1
