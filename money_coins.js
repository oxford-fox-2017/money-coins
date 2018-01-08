function convertToCoin(amount){
    var changes = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1]
    var result = []

    for(var i=0; i<changes.length; i++){
        if(amount<=0){
            return result;
        }else if(amount>=changes[i]){
            while(amount>=changes[i]){
                result.push(changes[i])
                amount -= changes[i];
            }
        }
    }
}

console.log(convertToCoin(22570));