/*
1. buat variabel 'coin' yang bernilai array pecahan koin
2. buat variabel 'result' yang bernilai array kosong
3. buat perulangan dari panjang array 'coin' sampai dengan 0
4. selama nilai index array 'coin' lebih kecil sama dengan 'num'
  - push index array 'coin'
  - kurangkan num dengan index array 'coin'
5. kembalikan nilai result
*/


function convertTocoin(num){
  var coin=[1, 10, 50, 100, 200, 500, 1000, 2000, 5000, 10000];
  var result=[];
  
  for (var i=coin.length; i>=0; i--){
    while (coin[i]<=num){
      result.push(coin[i])
      num-=coin[i]
    }
  }
  return result;
}

console.log(convertTocoin(125))
console.log(convertTocoin(11000))
console.log(convertTocoin(5673))
console.log(convertTocoin(2890))
