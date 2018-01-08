/*
1. bikin index coinnya 
2. bikin tampungan berupa array result
3.scan index coin agar di badningkan dengan uang yang ada, jika uangnya 20.000, bakal tertukar dengan coin
dengan nomimal 10.000 , karena paling depan terscan 
4. kurangi jumlah uang dengan coin[i]
5. reset i 
*/

function convertToCoin(uang){
let coin = [10000,5000,2000,1000,500,200,100,50,20,10,1]
let result = []

    for (let i = 0 ; i < coin.length ; i++ ){
        if(coin[i]<= uang){
            result.push(coin[i])
            uang -= coin[i]
            i = -1
        }
    }
    return result
}

console.log (convertToCoin(25000))