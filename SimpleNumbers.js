function primeNum(qty) {
    const num_arr = [];
    for (let x = 2; num_arr.length < qty; x++) {
        let pok = false;
        for (let y = 0; y < x; y++) {
            if (x % num_arr[y] === 0) {
                pok = true;
                break;
            }
        }
        if (pok === false) {
            num_arr.push(x)
        };
    }
    return num_arr;
}

console.log(primeNum(process.argv[2]));
// console.log(primeNum(20))