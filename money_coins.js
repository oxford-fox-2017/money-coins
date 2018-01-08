let result = []

function money_coins(num){
  let pecahan = [1,10,20,50,100,200,500,1000,2000,5000,10000]

  if(num == 0){
    return result
  }  else {
    for (var i = pecahan.length-1; i >= 0; i--) {
      if(num >= pecahan[i]){
        result.push(pecahan[i])
        return money_coins(num-pecahan[i])
      }
    }
  }
}

console.log(money_coins(99999));
