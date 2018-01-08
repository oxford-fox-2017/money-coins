/*

Bikin array dengan nominal coin
Bikin array kosong
For berulang untuk mencari nominal coin yg kurang dari nominal kertas
Push coin ke array baru
i = -1 agar dapat berulang lagi dari awal untuk mencari nominal coin
return array baru

*/

function money_coins (num) {
  // your implementation code here

  var coin = [
    [10000],
    [5000],
    [2000],
    [1000],
    [500],
    [200],
    [100],
    [50],
    [20],
    [10],
    [1],
  ];

  var arr = [];

  for(let i=0; i<coin.length; i++){
    if(coin[i]<=num){
      arr.push(coin[i]);
      num=num-coin[i];
      i=-1;
    }
  }
  return arr;
}

console.log(money_coins(476));