/*PSEUDOCODE
1. Buat variabel kosong dengan tipe data array
2. Definisikan kamus untuk uang pecahan koin dari pecahan terbesar ke pecahan terkecil
3. Buat kondisi looping yang melakukan pengurangan antara angka input dengan angka pada kamus coin, yang memiliki hasil terkecil
4. Indeks pada kams coin yang menghasilkan pengurangan dengan hasil terkecil tersebut kemudian dimasukkan ke dalam variabel kosong dengan jenis data array
5. Lakukan pengulangan sampai angka input bernilai 0
*/

function convertToCoin(num) {
    let tampung = [];
    let coin = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 1];

    for (let i = 0; i < coin.length - 1; i++) {
        while (num >= coin[i]) {
            tampung.push(coin[i]);
            num -= coin[i];
        }
    }
    return tampung;
}

console.log(convertToCoin(15000));
console.log(convertToCoin(25500));