function money_coins (num,arr) {
  // your implementation code here
  let acuan=[10000,5000,2000,1000,500,200,100,50,20,10,1]
  // if(num<=0){
  //   return ""
  // }else{
  //   for(let [index,value] of acuan.entries()){
  //     if(num>=value){
  //       return value +','+ money_coins(num-value)
  //     }
  //   }
  // }
  if(!arr){
    arr=[]
  }
  for(let value of acuan){
    if(num>=value){
      arr.push(value)
      return money_coins(num-value,arr)
    }
  }
  return arr
}
console.log(money_coins(20050))
