function money_coins (num) {
  // your implementation code here
  let counter = [1, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000];
  let pecahan = [];
  for ( let i = counter.length-1; i >= 0; i--){
    if( num >= counter[i]){
      pecahan.push(counter[i]);
      num-= counter[i];
    }
  }
  return pecahan;
}

console.log(money_coins(6500));
