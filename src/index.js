'use strict'

const fibonacci = () => {
    let fibo = [0, 1];
    for (let i = fibo.length; i < 14; i++) {
        fibo[i] = fibo[i - 2] + fibo[i - 1];
    }
    return fibo;
}

const isFibonnaci = (num) => {
    const meuArray = fibonacci();
    return meuArray.includes(num);
}



module.exports = {
    fibonacci,
    isFibonnaci
}