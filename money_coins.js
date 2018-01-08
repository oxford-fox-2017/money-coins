//PSEUDOCODE
/*
Buat fungsi convertToCoin dengan num sebagai parameter
	INITIALIZE var array kosong
	INITIALIZE var money, yang berisi kelipatan uang yang telah ditetapkan

	FOR var i=0 hingga money.length, i++
		WHILE num%money[i] < num
			PUSH money[i] ke arr
			SUBSTRACT num dengan money[i]
		END WHILE
	END FOR
END OF FUNCTION
*/

function convertToCoin(num) {
  // your implementation code here
  var arr = [];
  var money = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1];
  
  for(var i = 0; i < money.length; i++) {
    while(num%money[i] < num) {
      arr.push(money[i]);
      num -= money[i];
    }
  }
  return arr;
}

convertToCoin(25524);
