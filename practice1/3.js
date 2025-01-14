const myFunc = (n) => {
    if (n % 12 === 0) {
        return n / 12;
    } else {
        return Math.floor(n / 12) + 1;
    }
};

console.log(myFunc(25));