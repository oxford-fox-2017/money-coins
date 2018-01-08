buat kamus coin dengan memasukkan nilai tampungKoin
buat variabel tampung untuk tampungKoin
buat pengulangan untuk pengecekan coin
jika nilai coin kurang dari uang
push nilai koin ke tampungKoin, lalu kurangi nilai uang dengan nilai coin
reset pengulangan pencarian nilai koin di array coin
kembalikan hasil tampungKoin


function convertToCoin(uang){
	var coin = [10000,5000,2000,1000,500,200,100,50,20,10,1];
	var tampungKoin = [];
	for(var i = 0;i<coin.length;i++){
		if(coin[i]<=uang){
		tampungKoin.push(coin[i]);
		uang = uang-coin[i];
		i = -1;
		}
	}
	return tampungKoin;
}

console.log(convertToCoin(25000));
