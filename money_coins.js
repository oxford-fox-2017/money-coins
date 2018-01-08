// 1. Bikin function convertToCoin dengan 1 arguement
// 2. Dalam function bikin array pecahan coin
// 3. Bikin array kosong
// 4. Bikin loop untuk melewati array pecahan coin
//   4.1 Dalam loop bikin loop dengan kondisi kalo ketemu pecahan yang lebih
//       kecil atau sama dengan arguement- push pecahan ke array kosong, arguemnt minus pecahan
// 5. End loop
// 6. Return array;



function convertToCoin(num){
var pecahan =[10000,5000,2000,1000,500,200,100,50,20,10,1];
var coin=[];
for(var x=0; x<pecahan.length; x++){
  // console.log(pecahan[x]);
  while(pecahan[x]<=num){
    coin.push(pecahan[x]);
    num -= pecahan[x];
  }
}
return coin; 
}

console.log(convertToCoin(100000));
console.log(convertToCoin(5321));
console.log(convertToCoin(63));
console.log(convertToCoin(11));