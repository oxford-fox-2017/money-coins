// 1. Membuat function convertToCoin dengan 1 arguement
// 2. Di dalam function, membuat array pecahan coin
// 3. Membuat array kosong
// 4. Membuat loop untuk melewati array pecahan coin
// 5. Dalam loop bikin loop dengan kondisi kalo ketemu pecahan yang lebih
//    kecil atau sama dengan arguement- push pecahan ke array kosong, arguemnt       minus pecahan
// 6. End loop
// 7. Return array;



function convertToCoin(num){
var pecahan = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1];
var coin = [];
for(var i=0; i<pecahan.length; i++){
  // console.log(pecahan[i]);
  while(pecahan[i]<=num){
    coin.push(pecahan[i]);
    num -= pecahan[i];
  }
}
return coin; 
}

console.log(convertToCoin(100000));
console.log(convertToCoin(5321));
console.log(convertToCoin(63));
console.log(convertToCoin(11));