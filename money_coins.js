const PECAHAN = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1];

function convertToCoin (num) {
  var result = [];

  for(var index=0; index<PECAHAN.length; ){

    if(num >= PECAHAN[index]){
      num -= PECAHAN[index];
      result.push(PECAHAN[index]);
      continue;
    }

    index++;

  }

  return result;
}

console.log(convertToCoin(5000)); // expected : [5000]
console.log(convertToCoin(40000)); // expected : [10000, 10000, 10000, 10000]
console.log(convertToCoin(20102)); // expected : [20000, 100, 1, 1]