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