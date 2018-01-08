/*
set coins dengan isi nominal pecahan uang
set hasil sebagai array kosong
looping coins dengan variabel i
saat num > coins i maka push nominal coins ke hasil
kurangi num dengan nominal coins
return hasilnya
*/

function money_coins (num) {
  // your implementation code here
  const coins = [10000,5000,2000,1000,500,200,100,50,20,10,1];
  let hasil =[];
  for(let i =0; i<coins.length;i++){
    while(num >= coins[i]){
      hasil.push(coins[i]);
      num-=coins[i];
    }
  }
  return hasil;
}
console.log(money_coins(150));
console.log(money_coins(1500));
console.log(money_coins(19500));
